const express = require('express');
const app = express();
const mongoose = require("mongoose");

// mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb+srv://webscraping:" + "webscraping"+
//process.env.MONGO_ATLAS_PASSWORD+ 
"@cluster0.mziya.mongodb.net/Cluster0?retryWrites=true&w=majority")
  .then(()=>{
    console.log("Databse Connected Successfully");
  })
  .catch(()=>{
    console.log("Databse Connection failed");
  });


app.listen(8000,()=>{
    console.log('server created')
});

app.use(express.json());
app.use('/categories',(req,res,next)=>{
    res.status(200).json(['mobiles','tv','tshirts']);
})