const mongoose = require("mongoose");

exports.connect = () => {
  try {
    // mongoose.set('useNewUrlParser', true);
   return mongoose
      .connect(
        "mongodb+srv://webscraping:" +
          "webscraping" +
          //process.env.MONGO_ATLAS_PASSWORD+
          "@cluster0.mziya.mongodb.net/webscraping?retryWrites=true&w=majority"
      )
  } catch (error) {
    console.error(error);
    process.exit();
  } finally {
    
  }
};
