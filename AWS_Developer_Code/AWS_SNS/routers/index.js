const express = require("express");
const { publishMessageEmail, subscribeToTopicEmail, publishMessageSMS, subscribeToTopicSMS, listTopics, createTopic } = require("../controllers");

const router = express.Router();

router.post("/pubEmail", publishMessageEmail)
router.post("/subEmail", subscribeToTopicEmail)

router.post("/pubSMS", publishMessageSMS)
router.post("/subSMS", subscribeToTopicSMS)

router.get("/listTopics", listTopics)

router.get("/createTopic", createTopic)

module.exports = router;

