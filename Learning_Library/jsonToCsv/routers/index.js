const express = require("express");
const { generateFakeData, generateCsvFile } = require("../controllers");

const router = express.Router();

router.get("/addFackData", generateFakeData);

router.get("/createCsvFile", generateCsvFile);

module.exports = router;
