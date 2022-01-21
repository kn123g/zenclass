const express = require("express");
const router = express.Router();
const roomController = require("../controllers/room");

router.post("/createroom",roomController.createRoom);
router.post("/bookroom",roomController.bookRoom);
router.get("/rooms",roomController.listRooms);
router.get("/customers",roomController.listCustomers);

router.get("/",(req,res)=>{
    res.status(200).json({"api_docs":process.env.postman_doc})
});
// router.get("/",roomController.createRoom);

module.exports = router;