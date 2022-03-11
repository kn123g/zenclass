const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/create",userController.createUser);
router.get("/without-mentor",userController.getUsersWithoutMentor);
router.get("/",userController.getUsers);
router.get("/:mentor",userController.getUsersForMentor);
router.post("/assign-mentor",userController.assignMentor);

module.exports = router;