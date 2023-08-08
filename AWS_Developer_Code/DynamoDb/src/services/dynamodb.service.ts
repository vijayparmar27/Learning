import {
  DynamoDBClient,
  PutItemCommand,
  GetItemCommand,
  UpdateItemCommand,
  DeleteItemCommand,
  ScanCommand,
  BatchWriteItemCommand,
  TransactWriteItemsCommand,
  BatchGetItemCommand,
  QueryCommand,
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
    Key: marshall({ name: key }), // Replace 'yourKeyAttribute' with the actual attribute name used as the primary key
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

export async function removeSingleRecordFromDynamoDb(data: string) {
  try {
    const deleteParams = {
      TableName: tableName,
      Key: marshall({ name: data }),
    };
    console.log("--- removeSingleRecordFromDynamoDb :: deleteParams :: ", deleteParams);

    const deleteCommand = new DeleteItemCommand(deleteParams);

    const result = await dynamodbClient.send(deleteCommand);
    console.log("--- removeSingleRecordFromDynamoDb :: result :: ", result);

    return result;
  } catch (error) {
    console.error("Error removing single record from DynamoDB:", error);
  }
}

export async function fetchAllTableDataFromDynamodb() {
  try {

    const scanParams = {
      TableName: tableName, // Replace with the name of your DynamoDB table
    };

    const scanCommand = new ScanCommand(scanParams);

    const result = await dynamodbClient.send(scanCommand);
    console.log("All items:", result.Items);

    const data = result?.Items || [];
    const formatedRes = [];

    for await (const item of data) {
      formatedRes.push(unmarshall(item))
    }

    console.log("All items: formatedRes ::", formatedRes);

    return formatedRes;

  } catch (error) {
    console.error("Error fetching all tables from Dynamodb:", error);
  }
}

// for get filter data from db
export async function filterTableDataFomDynamoDb() {
  try {

    const expressionAttributeValues = {
      ":Email": "14"
    }

    const scanCommand = new ScanCommand({
      TableName: tableName,
      FilterExpression: "email = :Email",
      ExpressionAttributeValues: marshall(expressionAttributeValues),
      ProjectionExpression: "phoneNo", // thisfor which field we want from db
      Limit: 1, // for limit
    })

    const result = await dynamodbClient.send(scanCommand);
    const data = result?.Items || [];
    const formatedRes = [];

    for await (const item of data) {
      formatedRes.push(unmarshall(item))
    }

    return formatedRes;

  } catch (error) {
    console.log("Error filterTableDataFomDynamoDb all tables from Dynamodb:", error);
  }
}

// intert many data at once
export async function insertMultipleItemsInDynamoDb() {
  try {

    // Define an array of items to insert
    const itemsToInsert = [
      { id: "1", name: "Item 11", category: "Category 1" },
      { id: "2", name: "Item 21", category: "Category 2" },
      // Add more items as needed
    ];

    // Convert the array of items into the required format for BatchWriteItemCommand
    const putRequests = itemsToInsert.map(item => ({
      PutRequest: {
        Item: marshall({
          email: item.id,
          name: item.name,
          phoneNo: "123"
        })
      }
    }));

    console.log("----->> insertMultipleItemsInDynamoDb :: putRequests ::", JSON.stringify(putRequests))

    // Create the BatchWriteItemCommand with the putRequests
    const batchWriteParams = {
      RequestItems: {
        [tableName]: putRequests // Replace "YourTableName" with your actual table name
      }
    };

    console.log("----->> insertMultipleItemsInDynamoDb :: batchWriteParams ::", JSON.stringify(batchWriteParams))

    const command = new BatchWriteItemCommand(batchWriteParams);
    const response = await dynamodbClient.send(command);

    if (response.UnprocessedItems && Object.keys(response.UnprocessedItems).length > 0) {
      console.error("Some items were not processed:", response.UnprocessedItems);
    } else {
      console.log("All items inserted successfully.");
    }

    return response;
  } catch (error) {
    console.log("Error insertMultipleItemsInDynamoDb :: ERROR :: ", error);
  }
}

// update multiple items in DynamoDB with primary key
export async function updateMannyItemsWithPartitionKeyInDynamoDb() {
  try {

    const command = new TransactWriteItemsCommand({
      TransactItems: [
        {
          Update: {
            TableName: tableName,
            Key: marshall({ "name": "svaggy" }),
            UpdateExpression: 'SET email = :Email',
            ExpressionAttributeValues: marshall({ ":Email": "15" }),
          }
        }
      ]
    });

    const res = await dynamodbClient.send(command);

    return res;

  } catch (error) {
    console.log("Error updateAtOnceMannyItemsInDynamoDb :: ERROR ", error);
  }
}

// for get any amount of data get with partition key
export async function getBatchDataWithPartitionFromDynamoDb() {
  try {

    const command = new BatchGetItemCommand({
      RequestItems: {
        [tableName]: {
          Keys: [
            {
              "name": { "S": "1" }
            },
            {
              "name": { "S": "12" }
            },
          ]
        }
      }
    });

    const response = await dynamodbClient.send(command);

    return response;

  } catch (error) {
    console.log(" ERRROR ::: ", error)
  }
}

export async function newFunction() {
  try {

      // Create the QueryCommand
      const queryCommand = new QueryCommand({
        TableName: tableName,
        KeyConditionExpression: "phoneNo = :PhoneNo AND #attrName = :Name",
        ExpressionAttributeNames: {
          "#attrName": "name"
        },
        ExpressionAttributeValues: marshall({
          ':PhoneNo': '1000011220120000', 
          ":Name": "svaggy1213122sdsd"
        })                                                      
      });

    const response = await dynamodbClient.send(queryCommand);

    return response;

  } catch (error) {
    console.log(" ERRROR ::: ", error)
  }
}