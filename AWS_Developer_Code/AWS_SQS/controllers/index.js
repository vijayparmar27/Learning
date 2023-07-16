const {
    SQSClient,
    ReceiveMessageCommand,
    DeleteMessageCommand,
    ListQueuesCommand,
    CreateQueueCommand,
    SendMessageCommand,
} = require("@aws-sdk/client-sqs");
const { configObject } = require("./credentials");


const queueUrl = "https://sqs.ap-south-1.amazonaws.com/974898822426/newQueue";

const sqsClient = new SQSClient({
    region: "ap-south-1", // Update with your desired region
    credentials: {
        accessKeyId: configObject.credentials.accessKeyId,
        secretAccessKey: configObject.credentials.secretAccessKey
    }
});

export async function recieveMessage(req, res) {
    try {
        const maxNumberOfMessages = 10; // Maximum number of messages to receive in each iteration
        let totalMessagesReceived = 0;
        const messageArray = [];
        while (totalMessagesReceived < maxNumberOfMessages) {
            const messagesToReceive = Math.min(
                maxNumberOfMessages - totalMessagesReceived,
                10
            ); // Fetch remaining messages or up to 10 messages at a time

            const command = new ReceiveMessageCommand({
                QueueUrl: queueUrl,
                MaxNumberOfMessages: messagesToReceive,
                WaitTimeSeconds: 10
            });
            const response = await sqsClient.send(command);

            const receivedMessages = response.Messages || [];
            if (receivedMessages.length === 0) {
                break;
            }
            messageArray.push(...receivedMessages)
            totalMessagesReceived += response && "Messages" in response ? response.Messages.length : 0;

            console.log("->>>>> receiveMessages ::: receivedMessages :: ", receivedMessages)

            console.log("--- receiveMessages ::: receivedMessages :: ", totalMessagesReceived);
        }

        console.log("Total messages received:", totalMessagesReceived);
        console.log("--- receiveMessages ::: messageArray :: ", messageArray);
        console.log("--- receiveMessages ::: messageArray.length :: ", messageArray.length);

        for (const message of messageArray) {
            console.log('Received message:', message.Body);
            await deleteMessage(message.ReceiptHandle);
        }


    } catch (error) {
        console.log("--- recieveMessage :: ERROR :: ", error)
    }
}

const deleteMessage = async (receiptHandle) => {
    const command = new DeleteMessageCommand({
        QueueUrl: queueUrl,
        ReceiptHandle: receiptHandle,
    });

    try {
        await sqsClient.send(command);
        console.log('Message deleted');
    } catch (error) {
        console.error('Error deleting message:', error);
    }
};


const doesQueueExist = async (queueName) => {
    try {
        const listCommand = new ListQueuesCommand({});
        const listResponse = await sqsClient.send(listCommand);
        const queueUrls = listResponse.QueueUrls || [];
        console.log("---- doesQueueExist :: listResponse :: ", listResponse)
        console.log("---- doesQueueExist :: queueUrls :: ", queueUrls)

        return queueUrls.some(url => url.endsWith(`/${queueName}`));
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
};

// Function to create a queue
const createQueue = async (queueName) => {
    console.log("---- createQueue :: queueName :: ", queueName)

    try {
        const createCommand = new CreateQueueCommand({ QueueName: queueName });
        await sqsClient.send(createCommand);
    } catch (error) {
        console.error('Error creating queue:', error);
    }
};

// Function to send a message to the queue
export const sendMessage = async (req, res) => {
    try {
        const { queueName, messageBody } = req.body
        const sendMessageCommand = new SendMessageCommand({
            QueueUrl: `https://sqs.${configObject.region}.amazonaws.com/974898822426/${queueName}`,
            MessageBody: messageBody
        });
        await sqsClient.send(sendMessageCommand);
        console.log('Message sent successfully.');
    } catch (error) {
        console.error('Error sending message:', error);
    }
};


export async function sendMessageQueue(req, res) {
    const queueName = 'newQueue-1';
    const message = 'Hello, world!';
    try {
        doesQueueExist(queueName).then((exists) => {
            if (exists) {
                sendMessage(queueName, message);
            } else {
                createQueue(queueName).then(() => {
                    sendMessage(queueName, message);
                });
            }
        });
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

