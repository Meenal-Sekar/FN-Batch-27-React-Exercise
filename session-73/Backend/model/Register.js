const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  username: String,
  password: String,
  location: String
});

module.exports = mongoose.model("Register", registerSchema);


//collection name:Register