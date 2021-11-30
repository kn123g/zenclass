const express = require('express');
const app = express();
const filesystemrouter = require('./routes/filesystem');

app.listen(process.env.PORT || 3000,()=>{
    console.log('server running on port',process.env.PORT || 3000)
})
app.use('/',filesystemrouter);