const express = require("express");
const router = express.Router();
const productCountController = require("../controllers/product_count");

router.get("/:category",productController.getCount);

module.exports=router;