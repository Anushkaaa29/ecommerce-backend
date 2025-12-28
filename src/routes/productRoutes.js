const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");


const {
  createProduct,
  getProducts,
  getProductById,
} = require("../controllers/productController");

// PUBLIC ROUTES
router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", protect, admin, createProduct);


// ADMIN ROUTE (for now public, admin banayenge next step)
router.post("/", createProduct);

module.exports = router;
