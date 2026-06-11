const router = require("express").Router();

// middlewares
const protect = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

// controller
const {
  getMyProfile,
  getAllUsers,
  getDashboard,
} = require("../controllers/userController");


// ===============================
// 👤 USER PROFILE (ANY LOGGED USER)
// ===============================
router.get("/me", protect, getMyProfile);


// ===============================
// 📊 DASHBOARD (ADMIN ONLY)
// ===============================
router.get(
  "/dashboard",
  protect,
  authorizeRoles("admin"),
  getDashboard
);


// ===============================
// 👥 ALL USERS (ADMIN ONLY)
// ===============================
router.get(
  "/all",
  protect,
  authorizeRoles("admin"),
  getAllUsers
);

module.exports = router;