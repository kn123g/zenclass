const mongoose = require("mongoose");

const product_schema = mongoose.Schema(
  {
    image:{
      type:String,
      required:true
    },
    title:{
      type:String,
      required:true
    },
    rating:{
      type:Number,
      required:true,
      min:[0,"min 0 rating"],max:[5,"max 5 rating allowed"]},
    price:{
      type:String,
      required:true
    },
    final_price_with_offer:{
      type:String,
      required:true
    },
    category:{
      type:String,
      required:true,
      lowercase: true},
    site:{
      type:String,
      required:true,
      lowercase:true}
  });

module.exports = mongoose.model('Product',product_schema,'product');