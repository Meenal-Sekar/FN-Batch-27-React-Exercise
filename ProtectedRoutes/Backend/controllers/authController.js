  const bcrypt = require("bcryptjs");
  const User = require("../models/User");  //database connection
const generateToken = require("../utils/generateToken");

// REGISTER
exports.register = async (req, res) => {
  const { username, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    password: hashedPassword,
    role,
  });

  res.json({ message: "User registered successfully" });
};

// LOGIN
exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res.status(400).json({ message: "Invalid credentials" });
    console.log('Invalid credentials')

  const token = generateToken(user);

  res.json({ token, role: user.role });
};