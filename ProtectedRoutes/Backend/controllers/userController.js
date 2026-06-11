const User = require("../models/User");


// =========================
// LOGGED-IN USER PROFILE
// =========================
exports.getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};


// =========================
// ADMIN DASHBOARD
// =========================
exports.getDashboard = async (req, res) => {
  try {
    res.json({
      message: "Welcome Admin Dashboard 🚀",
      adminId: req.user.id,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};


// =========================
// GET ALL USERS (ADMIN)
// =========================
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};