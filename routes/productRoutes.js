const express = require('express')
const { addProduct, getAllproducts,deleteProduct } = require("../controllers/productcontroller")

router = express.Router()

router.route("/addproduct").post(addProduct)
router.route("/allproducts").get(getAllproducts);
router.route("/:id").delete(deleteProduct);

module.exports = router