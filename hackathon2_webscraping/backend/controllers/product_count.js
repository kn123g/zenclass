const Product = require("../models/product");

exports.getCount = (req,res)=>{
    Product.find({category:req.params.category}).count()
    .then(count=>{
        res.status(200).json({
          message : "Count fetched Successfully",
          count : count
        })
    })
    .catch(err=>{
        res.status(501).json({
            message : "Couldn't fetch count",
            error:err
          })
    });
}