const express = require("express");
const router = express.Router();

//controller ke product.js se module import kiya hai.

const {getAllProducts, getAllProductsTesting}=require("../controllers/products");
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports=router;