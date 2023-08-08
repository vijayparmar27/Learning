import express from "express";
import { getDataFromDynamoDb, sendDataInDynamoDb, updateDataFromDynamoDB } from "../controllers";

const router = express.Router();

router.post("/sendData",sendDataInDynamoDb)
router.post("/getData",getDataFromDynamoDb)
router.post("/updateData",updateDataFromDynamoDB)

export default router;