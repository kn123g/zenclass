const express = require("express");
const router = express.Router();
const mentorController = require("../controllers/mentor");

router.post("/create",mentorController.createMentor);
router.post("/assign-users",mentorController.assignMentor);
router.get("/",mentorController.getMentors);

module.exports = router;