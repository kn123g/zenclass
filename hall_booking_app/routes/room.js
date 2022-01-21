const express = require("express");
const router = express.Router();
const roomController = require("../controllers/room");

router.post("/createroom",roomController.createRoom);
router.post("/bookroom",roomController.bookRoom);
router.get("/rooms",roomController.listRooms);
router.get("/customers",roomController.listCustomers);
// router.get("/",roomController.createRoom);

module.exports = router;