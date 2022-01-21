const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser  = require("body-parser");
const roomRouter = require("./routes/room"); 

app.listen(process.env.PORT || 8000,()=>{
    console.log(`server started  ${process.env.PORT || 8000}`);
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/",roomRouter);