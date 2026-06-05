const express=require('express')
const app=express()

const mongoose = require("mongoose");
const cors = require("cors");   //to integrate front and backend (supporting)
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
dotenv.config();
app.use(cors());
app.use(express.json());    //middleware 

//get the collection from model folder
const Register = require("./model/Register");
const Login = require("./model/Login");



// Database conneciton

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

//RegisterAPI

app.post("/register", async (req, res) => {

  const { username, password, location } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new Register({
    username,
    password: hashedPassword,
    location
  });

  await newUser.save();

  res.json({ message: "Register Success" });
});


//LoginAPI      localhost:5000/sk/login   (frontend: token)
app.post("/login", async (req, res) => {

  const { username, password } = req.body;

  const user = await Register.findOne({ username });

  if (!user) {
    return res.json({ message: "User Not Registered" });
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.json({ message: "Wrong Password" });
  }

  // JWT TOKEN

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  // Save Login Data

  const loginData = new Login({
    username
  });

  await loginData.save();

  res.json({
    message: "Login Success",
    token
  });

});


app.listen(process.env.PORT,()=>
{
    console.log('server is running')
})