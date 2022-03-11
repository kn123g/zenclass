const mongoose = require("mongoose");
exports.connect = () => {
  try {
    // mongoose.set('useNewUrlParser', true);
   return mongoose
      .connect(
        `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_CLUSTER}/${process.env.MONGO_ATLAS_DATABASE}?retryWrites=true&w=majority`
      )
  } catch (error) {
    console.error(error);
    process.exit();
  } finally {
    
  }
};
