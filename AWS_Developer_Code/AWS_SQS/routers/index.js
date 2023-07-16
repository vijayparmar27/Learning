const express = require("express");
const { recieveMessage, sendMessage, sendMessageQueue } = require("../controllers");

const router = express.Router();


router.get("/receiveMessage", recieveMessage);
router.get("/sendMessageQueue", sendMessageQueue);
router.post("/sendMessage", sendMessage);