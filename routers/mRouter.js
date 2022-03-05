const express = require("express");
const mController = require("../controllers/mController");

const router = express.Router();

router.get("/intro", mController.introController);

module.exports = router;
