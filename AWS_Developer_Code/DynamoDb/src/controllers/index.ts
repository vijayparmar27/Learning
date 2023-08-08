import { Request, Response } from "express";
import {
  sendDataReqIf,
  updateDataFromDynamoDBReqIf,
  updatePartitionKeyIf,
} from "../interfaces/requestIF";
import {
  fetchAllTableDataFromDynamodb,
  filterTableDataFomDynamoDb,
  getBatchDataWithPartitionFromDynamoDb,
  getDataFromDynamoDB,
  insertMultipleItemsInDynamoDb,
  newFunction,
  removeSingleRecordFromDynamoDb,
  sendDataToDynamoDB,
  updateInDynamoDb,
  updateMannyItemsWithPartitionKeyInDynamoDb,
} from "../services/dynamodb.service";

// add single data in dynamo database
export async function sendDataInDynamoDb(req: Request, res: Response) {
  try {
    const { email, name, phoneNo } = req.body as sendDataReqIf;

    console.log("--- /sendData :: email :: ", email);
    console.log("--- /sendData :: name :: ", name);
    console.log("--- /sendData :: phoneNo :: ", phoneNo);

    await sendDataToDynamoDB({ email, name, phoneNo });

    res.send("Data sent successfully.");
  } catch (error) {
    console.log("--- /sendData :: ERROR :: ", error);
  }
}

// get single data in dynamo database
export async function getDataFromDynamoDb(req: Request, res: Response) {
  try {
    const { userName } = req.body;

    const resData = await getDataFromDynamoDB(userName);

    console.log("--- getDataFromDynamoDb :: resData :: ", resData);

    res.send(resData);
  } catch (error) {
    console.log("--- /getDataFromDynamoDB :: ERROR :: ", error);
  }
}

// update value in dynamo database not update Partition key
export async function updateDataFromDynamoDB(req: Request, res: Response) {
  const { name, email, phoneNo } = req.body as updateDataFromDynamoDBReqIf;

  console.log("--- /updateData :: name :: ", name);
  console.log("--- /updateData :: email :: ", email);
  console.log("--- /updateData :: phoneNo :: ", phoneNo);

  const updateExpression = "SET email = :Email, phoneNo = :PhoneNo";

  const expressionAttributeValues = {
    ":Email": `${email}`,
    ":PhoneNo": `${phoneNo}`
  };

  const Key = {
    name: `${name}`
  }

  const resData = await updateInDynamoDb({
    updateExpression,
    expressionAttributeValues,
    Key
  });

  res.send(resData);
  try {

  } catch (error) {
    console.log("--- /updateData :: ERROR :: ", error);
  }
}

// update partition key
export async function updatePartitionKey(req: Request, res: Response) {
  try {

    const { oldName, newName } = req.body as updatePartitionKeyIf;
    console.log("--- /updateData :: oldName :: ", oldName);
    console.log("--- /updateData :: newName :: ", newName);

    const fetchData: any = await getDataFromDynamoDB(oldName);
    console.log("--- /updateData :: fetchData :: ", fetchData);

    const payload: sendDataReqIf = {
      name: newName,
      email: fetchData.email,
      phoneNo: fetchData.phoneNo
    }

    await sendDataToDynamoDB(payload);

    await removeSingleRecordFromDynamoDb(oldName);

    res.send("Successfully update name ...... ")


  } catch (error) {
    console.log("--- /updatePartitionKey :: ERROR :: ", error);
  }
}

// for detele single record from DynamoDb table
export async function removeRecordFromDynamoDb(req: Request, res: Response) {
  try {
    const { name } = req.body;
    console.log("--- /removeRecordFromDynamoDb :: name :: ", name);

    const data = await removeSingleRecordFromDynamoDb(name)
    console.log("--- /removeRecordFromDynamoDb :: data :: ", data);

    res.send(data);
  } catch (error) {
    console.log("--- /removeRecordFromDynamoDb :: ERROR :: ", error);
  }
}

// get all table data from DynamoDb

export async function getTableDataFromDynamoDb(req: Request, res: Response) {
  try {
    const data = await fetchAllTableDataFromDynamodb();
    console.log("--- /getTableDataFromDynamoDb :: data :: ", data);

    res.send(data);

  } catch (error) {
    console.log("--- /getTableDataFromDynamoDb :: ERROR :: ", error)
  }
}


export async function filterDataFromDynamoDb(req: Request, res: Response) {
  try {
    const data = await filterTableDataFomDynamoDb();

    console.log("---- filterDataFromDynamoDb :: data :: ", data);

    res.send(data);
  } catch (error) {
    console.log("--- /filterDataFromDynamoDb :: ERROR :: ", error)
  }
}



export async function addMultipleDataInDynamoDb(req: Request, res: Response) {
  try {

    const data = await insertMultipleItemsInDynamoDb();

    res.send(data);

  } catch (error) {
    console.log("--- /addMultipleDataInDynamoDb :: ERROR :: ", error)
  }
}

export async function updateManyItemsWithPrimaryKey(req: Request, res: Response) {
  try {

    const data = await updateMannyItemsWithPartitionKeyInDynamoDb();

    res.send(data);

  } catch (error) {
    console.log("Error updateAtOnceMannyItemsInDynamoDb :: ERROR :: ", error);
  }
}

export async function getBatchDataWithPartition(req: Request, res: Response) {
  try {

    const data = await getBatchDataWithPartitionFromDynamoDb();

    res.send(data);

  } catch (error) {
    console.log("Error getBatchDataWithPartition :: ERROR :: ", error)
  }
}


export async function newFuna(req: Request, res: Response) {
  try {

    const data = await newFunction();


    res.send(data);
  } catch (error) {
    console.log("--- ERROR :: ", error)
  }
}