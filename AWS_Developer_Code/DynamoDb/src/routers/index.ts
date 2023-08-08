import express from "express";
import {
    addMultipleDataInDynamoDb,
    filterDataFromDynamoDb,
    getBatchDataWithPartition,
    getDataFromDynamoDb,
    getTableDataFromDynamoDb,
    newFuna,
    removeRecordFromDynamoDb,
    sendDataInDynamoDb,
    updateDataFromDynamoDB,
    updateManyItemsWithPrimaryKey,
    updatePartitionKey,
} from "../controllers";

const router = express.Router();

router.post("/sendData", sendDataInDynamoDb)
router.post("/getData", getDataFromDynamoDb)
router.post("/updateData", updateDataFromDynamoDB)
router.post("/deleteeData", removeRecordFromDynamoDb)

router.post("/updatePartitionKey", updatePartitionKey);
router.post("/fetchTableData", getTableDataFromDynamoDb);
router.post("/filterData", filterDataFromDynamoDb);

router.post("/multiData", addMultipleDataInDynamoDb);

router.post("/updateManyItemsWithPrimaryKey", updateManyItemsWithPrimaryKey);
router.post("/updateManyItemsWithPrimaryKey", getBatchDataWithPartition);

router.post("/test", newFuna);


export default router;