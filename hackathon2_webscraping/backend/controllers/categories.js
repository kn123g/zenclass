const Categories = require("../models/categories");

exports.categories = (req,res)=>{
    const wildcard = req.params.wildcard || '';
    Categories.find({"name":{$regex: new RegExp(`^${wildcard}`),$options: 'i'}},{name:1,_id:0}).then(documents=>{
        console.log(documents);
        res.status(200).json({
          message : "Categories fetched Successfully",
          categories : documents
        });
    });
}