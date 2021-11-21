const mongoose = require("mongoose");


exports.connect =()=>{
    try{
    // mongoose.set('useNewUrlParser', true);
    mongoose.connect("mongodb+srv://webscraping:" + "webscraping"+
    //process.env.MONGO_ATLAS_PASSWORD+ 
    "@cluster0.mziya.mongodb.net/webscraping?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Database Connected Successfully");
    })
    .catch(()=>{
        console.log("Database Connection failed");
    });

    }catch(error){
        console.error(error)
        process.exit()
    }
}