const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  username: String,
  
});

module.exports = mongoose.model("Login", loginSchema);