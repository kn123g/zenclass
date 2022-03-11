const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser  = require("body-parser");
const userRouter = require("./routes/user"); 
const mentorRouter = require("./routes/mentor"); 
const mongodb = require('./db_connection');



mongodb
  .connect()
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch(() => {
    console.log("Database Connection failed");
  });



app.listen(process.env.PORT || 8000,()=>{
    console.log(`server started  ${process.env.PORT || 8000}`);
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user",userRouter);
app.use("/mentor",mentorRouter);


app.get("/",(req,res)=>{
  res.status(200).json({"api_docs":"https://www.postman.com/kn123g/workspace/zenclass/collection/17142206-62eb5bba-5df5-48ef-bfca-c935776960e4?action=share&creator=17142206"})
});
