const express = require('express');
const router = express.Router();
const filesytem_controller = require('../controllers/filesystem');

router.get('/fetch',filesytem_controller.fetchFiles)

router.post('/create',filesytem_controller.createFile)

// router.get('/',(req,res)=>{
//     res.status(200).json({"api_docs":process.env.POSTMAN_DOC});
// })

module.exports = router;