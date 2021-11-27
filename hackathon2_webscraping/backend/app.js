const express = require('express');
const app = express();
const categoriesRouter = require("./routes/categories"); 
const productsRouter = require("./routes/product"); 
const productsCountRouter = require("./routes/product_count"); 
const mongodb = require('./db_connection');
var cors = require('cors')
// const load_products = require('./module/load_store')
const {fork} = require("child_process");



function load_products() {
  const child = fork("./module/load_store.js", ["from_loadstore"]);

  child.on("message", (msg) => {
    console.log(msg.msg);
    // child.send({parent_processid:process.pid})
  });

  child.on("close", () => {
    console.log("closing child");
  });
  child.on('error', (err) => {
    console.log(err);
  });
  child.on('out', (err) => {
    console.log(err);
  });
}


mongodb
  .connect()
  .then(() => {
    console.log("Database Connected Successfully");
    //commanded because heruko free dyno space is not enough to run product load
    // load_products();
    setInterval(() => {
      //commanded because heruko free dyno space is not enough to run product load
      // load_products();
    }, 4320000);
  })
  .catch(() => {
    console.log("Database Connection failed");
  });


app.listen(process.env.PORT || 3000,()=>{
    console.log(`server created on port ${process.env.PORT}`)
});

// any one can access
app.use(cors());
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader('Access-Control-Allow-Headers',"Origin,X-Requested-with,Content-Type,Accept,Authorization");
  res.setHeader('Access-Control-Allow-Methods',"GET,POST,PATCH,DELETE,PUT,OPTIONS");
//  res.append('Access-Control-Allow-Credentials', 'true');
  next();
});
app.use(express.json());

app.use('/categories',categoriesRouter);
app.use('/products',productsRouter);
app.use('/countproducts',productsCountRouter);
app.use('/',(req,res,next)=>{
  res.status(200).json({"developer":"karthikeyan"});
  // next();
});