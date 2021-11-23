const Product = require("../models/product");

exports.getProducts = (req,res)=>{
    Product.find()
    .then(documents=>{
        console.log(documents);
        res.status(200).json({
          message : "Products fetched Successfully",
          products : documents
        })
    })
    .catch(err=>{
        res.status(501).json({
            message : "Couldn't fetch products",
            error:err
          })
    });
}