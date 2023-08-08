import {
  DynamoDBClient,
  PutItemCommand,
  GetItemCommand,
  UpdateItemCommand,
} from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { sendDataReqIf } from "../interfaces/requestIF";
import dotenv from "dotenv";
import { updateInDynamoDbIf } from "../interfaces/dynamoDbIf";
dotenv.config();

const accessKeyId: string = process.env.AWS_ACCESS_KEY as string;
const secretAccessKey: string = process.env.AWS_SECRET_ACCESS_KEY as string;

const tableName: string = process.env.AWS_DYNAMODB_TABLE_NAME as string;

const dynamodbClient = new DynamoDBClient({
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
  region: process.env.AWS_REGION,
});

// add single data
export async function sendDataToDynamoDB(data: sendDataReqIf) {
  console.log(
    "--- sendDataToDynamoDB :: process.env.AWS_DYNAMODB_TABLE_NAME :: ",
    process.env.AWS_DYNAMODB_TABLE_NAME
  );

  console.log("---- sendDataToDynamoDB :: data :: ", data);
  console.log("---- sendDataToDynamoDB :: data :: marshall ::", marshall(data));

  const params = {
    TableName: process.env.AWS_DYNAMODB_TABLE_NAME,
    Item: marshall(data), // Converts JavaScript object to DynamoDB AttributeValue
  };

  try {
    await dynamodbClient.send(new PutItemCommand(params));
    console.log("Data sent successfully.");
  } catch (error) {
    console.error("Error sending data to DynamoDB:", error);
  }
}

// get single data
export async function getDataFromDynamoDB(key: string) {
  const params = {
    TableName: tableName,
    Key: marshall({ name: "dev" }), // Replace 'yourKeyAttribute' with the actual attribute name used as the primary key
  };

  console.log("getDataFromDynamoDB :: params :: ", params);

  try {
    const data = await dynamodbClient.send(new GetItemCommand(params));

    console.log("getDataFromDynamoDB :: data :: ", data);

    if (data.Item) {
      // Convert DynamoDB AttributeValue to JavaScript object
      const item = unmarshall(data.Item);
      console.log("Data retrieved successfully:", item);
      return item;
    } else {
      console.log("No item found with the given key.");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving data from DynamoDB:", error);
    return null;
  }
}

// only update other values
export async function updateInDynamoDb(data: updateInDynamoDbIf) {
  console.log("--- updateInDynamoDb :: data :: ", data);

  const params = {
    TableName: tableName,
    Key: marshall({ ...data.Key }), // Replace 'yourKeyAttribute' with the actual attribute name used as the primary key
    UpdateExpression: data.updateExpression,
    ExpressionAttributeValues: marshall(data.expressionAttributeValues),
    ReturnValues: "ALL_NEW", // Specify what values to return after the update
  };

  try {
    const data = await dynamodbClient.send(new UpdateItemCommand(params));
    // Convert DynamoDB AttributeValue to JavaScript object
    const updatedItem = data.Attributes ? unmarshall(data.Attributes) : null;
    console.log("Data updated successfully:", updatedItem);
    return updatedItem;
  } catch (error) {
    console.error("Error updating data in DynamoDB:", error);
    return null;
  }
}
