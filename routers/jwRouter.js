const express = require("express");
const jwController = require("../controllers/jwController");

const router = express.Router();

router.get("/intro", jwController.introController);

module.exports = router;
