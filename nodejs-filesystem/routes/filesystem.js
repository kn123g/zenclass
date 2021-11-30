const express = require('express');
const router = express.Router();
const filesytem_controller = require('../controllers/filesystem');

router.get('/fetch',filesytem_controller.fetchFiles)

router.post('/create',filesytem_controller.createFile)

module.exports = router;