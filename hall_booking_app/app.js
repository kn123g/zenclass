const express = require('express')
const app = express();
const cors = require('cors')

app.listen(process.env.PORT || 8000,()=>{
    console.log(`server started  ${process.env.PORT || 8000}`);
})

app.use(cors())