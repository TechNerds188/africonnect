const Product = require("../models/productshema.js")



exports.addProduct = async (req, res) => {
    const newproduct = await Product.create({
        image: req.body.image,
        location: req.body.location,
        contact: req.body.contact,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
    });
    res.status(200).json({
        message: 'Product added successfully',
        data:newproduct
    })
}

exports.getAllproducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

exports.deleteProduct = async (req, res) => {
    const deleteProduct = await Product.findByIdAndRemove(req.params.id);
    res.status(200).json({
        message: 'Product deleted successfully'
    });
}