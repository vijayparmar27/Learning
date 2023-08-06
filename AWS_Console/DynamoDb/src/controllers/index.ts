import { Request, Response } from "express";
import {
  sendDataReqIf,
  updateDataFromDynamoDBReqIf,
} from "../interfaces/requestIF";
import {
  getDataFromDynamoDB,
  sendDataToDynamoDB,
  updateInDynamoDb,
} from "../services/dynamodb.service";

export async function sendDataInDynamoDb(req: Request, res: Response) {
  try {
    const { email, name } = req.body as sendDataReqIf;

    console.log("--- /sendData :: email :: ", email);
    console.log("--- /sendData :: name :: ", name);

    await sendDataToDynamoDB({ email, name });

    res.send("Data sent successfully.");
  } catch (error) {
    console.log("--- /sendData :: ERROR :: ", error);
  }
}

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

export async function updateDataFromDynamoDB(req: Request, res: Response) {
  const { name, email } = req.body as updateDataFromDynamoDBReqIf;

  console.log("--- /updateData :: name :: ", name);
  console.log("--- /updateData :: email :: ", email);

  const updateExpression = "SET email = :Email";

  const expressionAttributeValues = {
    ":Email": `${email}`,
  };

  const Key = {
    name : `${name}`
  }

  const resData = await updateInDynamoDb({
    updateExpression,
    expressionAttributeValues,
    Key
  });

  res.send(resData);
  try{

  }catch(error){
    console.log("--- /updateData :: ERROR :: ", error);
  }
}
