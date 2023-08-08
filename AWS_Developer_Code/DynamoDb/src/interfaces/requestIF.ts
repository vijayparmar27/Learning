export interface sendDataReqIf {
  name: string;
  email: string;
  phoneNo : number
}

export interface updateDataFromDynamoDBReqIf {
    name : string;
    email : string;
    phoneNo : number
  }

  export interface updatePartitionKeyIf{
    oldName : string;
    newName : string;
  }