export interface updateInDynamoDbIf {
  updateExpression: string;
  expressionAttributeValues: { [key: string]: any };
  Key: { [key: string]: any };
}
