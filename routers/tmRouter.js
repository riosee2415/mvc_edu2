const express = require("express");
const tmController = require("../controllers/tmController");

const router = express.Router();

router.get("/intro", tmController.introController);

module.exports = router;
