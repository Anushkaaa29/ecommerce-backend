const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

// PUBLIC ROUTES
router.post("/register", registerUser);
router.post("/login", loginUser);

// PROTECTED ROUTE
router.get("/profile", protect, (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
