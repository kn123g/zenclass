const Product = require("../models/product");

exports.getProducts = (req,res)=>{
  console.log('pageno  ',req.params.pageno )
    Product.find({category:req.params.category})
    .skip(((+req.params.pageno) -1) * 12)
    .limit(12).sort( { title: 1 } )
    .then(documents=>{
        console.log(documents);
        res.status(200).json({
          message : "Products fetched Successfully",
          products : documents
        })
    })
    .catch(err=>{
        res.status(501).json({
            message : "Couldn't fetch products for page",
            error:err
          })
    });
}