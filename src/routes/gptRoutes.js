const express = require("express");
const gptGPTResponse = require("../controllers/gptController");

const router = express.Router();

router.post("/chat", gptGPTResponse);

module.exports = router;
