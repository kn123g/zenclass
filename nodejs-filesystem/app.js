const express = require('express');
const app = express();
const bodyParser  = require("body-parser");
const filesystemrouter = require('./routes/filesystem');

app.listen(process.env.PORT || 3000,()=>{
    console.log('server running on port',process.env.PORT || 3000)
})
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',filesystemrouter);