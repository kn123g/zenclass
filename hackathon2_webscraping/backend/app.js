const express = require('express');
const app = express();
const categoriesRouter = require("./routes/categories"); 
const mongodb = require('./db_connection')
const load_products = require('./module/load_store')

mongodb.connect();

load_products();
setInterval(()=>{
  load_products();
},4320000);

app.listen(8000,()=>{
    console.log('server created')
});

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader('Access-Control-Allow-Headers',"Origin,X-Requested-with,Content-Type,Accept,Authorization");
  res.setHeader('Access-Control-Allow-Methods',"GET,POST,PATCH,DELETE,PUT,OPTIONS");
//  res.append('Access-Control-Allow-Credentials', 'true');
  next();
});
app.use(express.json());

app.use('/categories',categoriesRouter);
app.use('/',(req,res,next)=>{
  res.status(200).json({"developer":"karthikeyan"});
  // next();
});