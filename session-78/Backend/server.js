const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const User = require("./models/User");


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// DATABASE CONNECTION

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/students", require("./routes/studentRoutes"));  //short cut


// REGISTER

app.post("/register", async (req, res) => {
  try {
    const { username, password, role } = req.body;

    const userExist = await User.findOne({ username });

    if (userExist) {
      return res.json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.json({
      message: "Registration Successful",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});


// LOGIN

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.json({
        message: "User Not Found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({
      message: "Login Successful",
      token,
      role: user.role,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});



// AUTH MIDDLEWARE checking

const verifyToken = (req, res, next) =>
   {
  const token = req.headers.authorization;

  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({
      message: "No Token",
    });
  }
const logintoken = token.split(" ")[1];
console.log(logintoken);
  try {
    const decoded = jwt.verify( logintoken,process.env.JWT_SECRET
    );

    req.user = decoded;

    
    // console.log(decoded);
  } 
  catch (error) 
  {
    res.status(401).json({
      message: "Invalid Token",
    });
    console.log(error)
  }
  next();
};


// ADMIN ONLY

app.get(
  "/dashboard",
   verifyToken,
  (req, res) => {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Strictly Admin Only",
      });
    }

    else{
      return res.json({
      message: "Welcome Admin Dashboard",
    });
    }
  }
);
// **************************//
app.get(
  "/records",
  verifyToken,
  (req, res) => {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Admin Only",
      });
    }
    else{
        return res.json({
      message: "Welcome Records Page",
    });
   
    }
    console.log(req.user.role)
  
  }
);


// USER + ADMIN  (common)

app.get(
  "/services",
  verifyToken,
  (req, res) => {
    res.json({
      message: "Services Page Access Granted",
    });
  }
);



app.listen(process.env.PORT, () => {
  console.log("Server Running");
});