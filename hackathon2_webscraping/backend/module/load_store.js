const Product = require("../models/product");
const cheerio = require("cheerio");
const axios = require("axios");
const Categories = require("../models/categories");
const mongoose = require("mongoose");
const mongodb = require("../db_connection");

async function load() {
  try {
    const categories = await Categories.find();
    await mongoose.connection.db.dropCollection(
      "product",
      function (err, result) {
        console.log("drop product result   ", result);
      }
    );
    await categories.forEach(async (category) => {
      try {
      // commanded below codes for avaiding R15 memory error in Heroku 
      //   Promise.all([
      //       getFromFlipkart(category.name),
      //       getFromSnapdeal(category.name),
      //       getFromAmazon(category.name)])
      //   .then(()=>{
      //   })
            await getFromFlipkart(category.name);
            await getFromSnapdeal(category.name);
            await getFromAmazon(category.name);
      } catch (err) {
        console.error(err);
      } finally {
        process.send({ msg: "completed products load" });
      }
    });
  } catch (err) {
    process.send({ msg: "failer to load products" });
  }
  finally {
      
    // process.exit();
  }
}

async function getFromFlipkart(category) {
  try {
    let response = await axios.get(
      `https://www.flipkart.com/search?q=${category}`
    );
    let $ = await cheerio.load(response.data);
    await $("._2kHMtA").each(function (i, element) {
      try {
        let product_title = $(this).find("._4rR01T").text();
        let product_image = $(this).find("._396cs4").attr("src");
        let product_rating = $(this).find("._3LWZlK").text();
        let product_offer_price = $(this).find("._30jeq3").text();
        let product_original_price = $(this).find("._3I9_wc").text();
        let product = new Product({
          image: product_image,
          title: product_title,
          rating: +product_rating,
          price: product_original_price,
          final_price_with_offer: product_offer_price,
          category: category,
          site: "flipkart",
        });
        product
          .save()
          .then((Product) => {
            // console.log("product loaded into db ",Product)
          })
          .catch((err) => {
            console.log("flipkart product failed to load ");
          })
          .finally(() => {
            // product = null;
          });
      } catch (error) {
        console.log(
          "In flipkart category ",
          category,
          "  product no  ",
          i,
          "  failed to load"
        );
      }
    });

    await $("._4ddWXP").each(function (i, element) {
      try {
        let product_title = $(this).find(".s1Q9rs").text();
        let product_image = $(this).find("._396cs4").attr("src");
        let product_rating = $(this).find("._3LWZlK").text();
        let product_offer_price = $(this).find("._30jeq3").text();
        let product_original_price = $(this).find("._3I9_wc").text();
        let product = new Product({
          image: product_image,
          title: product_title,
          rating: +product_rating,
          price: product_original_price,
          final_price_with_offer: product_offer_price,
          category: category,
          site: "flipkart",
        });
        product
          .save()
          .then((Product) => {
            // console.log("product loaded into db ",Product)
            // console.log("saved for ",category)
          })
          .catch((err) => {
            console.log("flipkart product failed to load ");
          })
          .finally(() => {
            // product = null;
          });
      } catch (error) {
        console.log(
          "In flipkart category ",
          category,
          "  product no  ",
          i,
          "  failed to load"
        );
      }
    });
    
    $ = null;
    response =null;
  } catch (errors) {
    console.error(errors);
  }
}

async function getFromAmazon(category) {
  try {
    let response = await axios.get(`https://www.amazon.in/s?k=${category}`);
    let $ = cheerio.load(response.data);
    await $(".s-result-item").each(function (i, element) {
      try {
        let product_title = $(this).find("h2 span").text();
        let product_image = $(this).find(".s-image").attr("src");
        let product_rating = $(this).find(".a-icon-alt").text().substring(0, 3);
        let product_offer_price;
        let product_original_price;
        product_offer_price = $(this).find("span.a-offscreen").first().text();
        product_original_price = $(this).find("span.a-offscreen").last().text();
        let product = new Product({
          image: product_image,
          title: product_title,
          rating: +product_rating,
          price: product_original_price,
          final_price_with_offer: product_offer_price,
          category: category,
          site: "amazon",
        });
        product
          .save()
          .then((Product) => {
            // console.log("product loaded into db ",Product)
          })
          .catch((err) => {
            console.log("amazon product failed to load ");
          })
          .finally(() => {
            // product = null;
          });
      } catch (error) {
        console.log(
          "In amazon category ",
          category,
          "  product no  ",
          i,
          "  failed to load"
        );
      }
    });
    $ = null;
    response =null;

  } catch (error) {
    console.error(error);
  }
}

async function getFromSnapdeal(category) {
  try {
    let response = await axios.get(
      `https://www.snapdeal.com/search?keyword=${category}`
    );
    console.log(
      "snapdeal category " + category + "  response status" + response.status
    );
    let $ = cheerio.load(response.data);
    await $(".product-tuple-listing").each(function (i, element) {
      try {
        let product_title = $(this).find(".product-title").text();
        let product_image = $(this).find("source.product-image").attr("srcset");
        let temp = $(this).find(".filled-stars").attr("style");
        let product_rating = +(temp ? temp.substring(6, 8) / 20 : 0);
        let product_offer_price;
        let product_original_price;
        product_offer_price = $(this)
          .find(".lfloat.product-desc-price.strike")
          .first()
          .text();
        product_original_price = $(this)
          .find(".lfloat.product-price")
          .last()
          .text();
        let product = new Product({
          image: product_image,
          title: product_title,
          rating: +product_rating,
          price: product_original_price,
          final_price_with_offer: product_offer_price,
          category: category,
          site: "snapdeal",
        });
        product
          .save()
          .then((Product) => {
            // console.log("product loaded into db ",Product)
          })
          .catch((err) => {
            console.log("snapdeal product failed to load ");
          })
          .finally(() => {
            // product = null;
          });
      } catch (error) {
        console.log(
          "In snapdeal category ",
          category,
          "  product no  ",
          i,
          "  failed to load"
        );
      }
    });
    
    $ = null;
    response =null;
    } catch (error) {
    console.error(error);
  }
}

mongodb
  .connect()
  .then(() => {
    load();
  })
  .catch(() => {

  });
