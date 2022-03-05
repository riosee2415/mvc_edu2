const express = require("express");
const empController = require("../controllers/empController");

const router = express.Router();

router.get("/list", empController.getList);

module.exports = router;
