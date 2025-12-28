const Product = require("../models/product");
const mongoose = require("mongoose");


// ADD PRODUCT
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category, countInStock } = req.body;

    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      countInStock,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const id = req.params.id.trim(); // 🔥 trim hidden space/newline

    console.log("FETCHING PRODUCT ID:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error("GET PRODUCT ERROR:", error);
    return res.status(500).json({ error: error.message });
  }
};
