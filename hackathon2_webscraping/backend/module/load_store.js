const Product = require("../models/product");
const cheerio = require('cheerio');
const axios = require('axios');
const Categories = require("../models/categories");
const mongoose = require("mongoose");

module.exports = async function (){
    const categories = await Categories.find();
    await mongoose.connection.db.dropCollection('product', function(err, result) {
        console.log("drop product result   ",result);
    });
    categories.forEach(async (category)=>{
            getFromFlipkart(category.name)
            getFromAmazon(category.name)
            // getFromSnapdeal(category.name)
    });
    
}

async function getFromFlipkart(category){
    try{
        const response = await axios.get(`https://www.flipkart.com/search?q=${category}`);
        // await console.log("flipkart category "+ category + "  response status" + response.status)
        const $ =await cheerio.load(response.data); 
        $('._2kHMtA').each(function (i,element){
            let product_title = $(this).find('._4rR01T').text();
            let product_image = $(this).find('._396cs4').attr('src');
            let product_rating = $(this).find('._3LWZlK').text();
            let product_offer_price = $(this).find('._30jeq3').text();
            let product_original_price = $(this).find('._3I9_wc').text();
            const product =new Product({
                image:product_image,
                title:product_title,
                rating:+product_rating,
                price:product_original_price,
                final_price_with_offer:product_offer_price,
                category:category,
                site:'flipkart'
            });
            product.save().then((Product)=>{
                // console.log("product loaded into db ",Product)
            console.log("saved for ",category)
            })
            .catch((err)=>{
                console.log("flipkart  ",err)
            });
        })

        $('._4ddWXP').each(function (i,element){
            let product_title = $(this).find('.s1Q9rs').text();
            let product_image = $(this).find('._396cs4').attr('src');
            let product_rating = $(this).find('._3LWZlK').text();
            let product_offer_price = $(this).find('._30jeq3').text();
            let product_original_price = $(this).find('._3I9_wc').text();
            const product =new Product({
                image:product_image,
                title:product_title,
                rating:+product_rating,
                price:product_original_price,
                final_price_with_offer:product_offer_price,
                category:category,
                site:'flipkart'
            });
            product.save().then((Product)=>{
                // console.log("product loaded into db ",Product)
            console.log("saved for ",category)
            })
            .catch((err)=>{
                console.log("flipkart  ",err)
            });
        })
        
        
        // await console.log("loading products for category  "+ category)
    }
    catch(errors){
        console.error(errors)
    }
    
}

async function getFromAmazon(category){
    try{
        const response = await axios.get(`https://www.amazon.in/s?k=${category}`);
        console.log("amazon category "+ category + "  response status" + response.status)
        const $ =  cheerio.load(response.data); 
        $('.s-result-item').each(function (i,element){
            let product_title = $(this).find('h2 span').text();
            let product_image = $(this).find('.s-image').attr('src');
            let product_rating = $(this).find('.a-icon-alt').text().substring(0,3);
            let product_offer_price ;
            let product_original_price;
            product_offer_price = $(this).find('span.a-offscreen').first().text();
            product_original_price = $(this).find('span.a-offscreen').last().text();
            // console.log("product_title  " +product_title)
            // console.log("product_image  " +product_image)
            // console.log("product_rating  " +product_rating)
            // console.log("product_offer_price  " +product_offer_price)
            // console.log("product_original_price  " +product_original_price)
            const product =new Product({
                image:product_image,
                title:product_title,
                rating:+product_rating,
                price:product_original_price,
                final_price_with_offer:product_offer_price,
                category:category,
                site:'amazon'
            });
            product.save()
            .then((Product)=>{
                // console.log("product loaded into db ",Product)
            })
            .catch((err)=>{
                console.log("amazon  ",err)
            });
        })
    }
    catch(error){
        console.error(error)
    }
}
async function getFromSnapdeal(category){
    try{
        const response = await axios.get(`https://www.snapdeal.com/search?keyword=${category}`);
        console.log("amazon category "+ category + "  response status" + response.status)
        const $ = await cheerio.load(response.data); 
        $('._2kHMtA').each(function (i,element){
            let product_title = $(this).find('._4rR01T').text();
            let product_image = $(this).find('._396cs4').attr('src');
            let product_rating = $(this).find('._3LWZlK').text();
            let product_offer_price = $(this).find('._30jeq3').text();
            let product_original_price = $(this).find('._3I9_wc').text();
            const product =new Product({
                image:product_image,
                title:product_title,
                rating:+product_rating,
                price:product_original_price,
                final_price_with_offer:product_offer_price,
                category:category,
                site:'flipkart'
            });
            product.save().then((Product)=>{
                console.log("product loaded into db ",Product)
            });
        })
    }
    catch(error){
        console.error(error)
    }

}