const { Router } = require("express");
const axios = require("axios");
const {
  getProducts,
  getCategories,
  getProductById,
} = require("../services/products.services");

const router = Router();

router.get("/api/items", async (req, res, next) => {
  try {
    let query = req.query.q;
    const allProducts = await getProducts(query);
    res.json(allProducts);
  } catch (error) {
    next(error);
  }
});
router.get("/api/items/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    const product = await getProductById(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.get("/api/categories/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const categories = await getCategories(id);
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
