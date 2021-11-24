const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");
const searchProductController = require("../controllers/search_product");

router.get("/:category/:pageno",searchProductController.getProducts);
router.get("/",productController.getProducts);

module.exports=router;