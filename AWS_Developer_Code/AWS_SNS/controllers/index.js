const { SNSClient, SubscribeCommand, PublishCommand, ListTopicsCommand, CreateTopicCommand } = require('@aws-sdk/client-sns');
const { STSClient, GetCallerIdentityCommand } = require('@aws-sdk/client-sts');
const { configObject } = require("../credentials")


const snsClient = new SNSClient({
    region: configObject.region,
    credentials: {
        accessKeyId: configObject.credentials.accessKeyId,
        secretAccessKey: configObject.credentials.secretAccessKey
    }
})

const topicArn = "arn:aws:sns:ap-south-1:974898822426:snsDemo";

// Function to subscribe to a topic
async function subscribeToTopicEmail(req, res) {

    const { email } = req.body;

    console.log("----->> subscribeToTopic :: email :: ", email);

    const subscribeParams = {
        TopicArn: topicArn,
        Protocol: "email",
        Endpoint: email,
    };

    try {
        const subscribeCommand = new SubscribeCommand(subscribeParams);
        const data = await snsClient.send(subscribeCommand);
        console.log('Subscribed successfully:', data.SubscriptionArn);
        res.send(data.SubscriptionArn);
    } catch (err) {
        console.error('Error subscribing to topic:', err);
    }
}


// Function to publish a message to a topic
async function publishMessageEmail(req, res) {

    const { subject, message } = req.body;

    console.log("----->> publishMessage :: subject :: ", subject);
    console.log("----->> publishMessage :: message :: ", message);

    const publishParams = {
        TopicArn: topicArn,
        Subject: subject,
        Message: message,
    };

    try {
        const publishCommand = new PublishCommand(publishParams);
        const data = await snsClient.send(publishCommand);
        console.log('Message published successfully:', data.MessageId);

        res.send(data);
    } catch (err) {
        console.error('Error publishing message:', err);
    }
}

async function subscribeToTopicSMS(req, res) {

    const { phoneNumber } = req.body;

    console.log("----->> subscribeToTopicSMS :: phoneNumber :: ", phoneNumber);

    const subscribeParams = {
        TopicArn: topicArn,
        Protocol: 'sms', // You can change this to other supported protocols like 'email', 'http', 'https', etc.
        Endpoint: phoneNumber,
    };

    try {
        const subscribeCommand = new SubscribeCommand(subscribeParams);
        const data = await snsClient.send(subscribeCommand);
        console.log('Subscribed successfully:', data.SubscriptionArn);

        res.send(data.SubscriptionArn)
    } catch (err) {
        console.error('Error subscribing to topic:', err);
    }
}

// Function to publish a message to a topic
async function publishMessageSMS(req, res) {

    const { message } = req.body;

    console.log("----->> subscribeToTopicSMS :: message :: ", message);

    const publishParams = {
        TopicArn: topicArn,
        Message: message,
    };

    try {
        const publishCommand = new PublishCommand(publishParams);
        const data = await snsClient.send(publishCommand);
        console.log('Message published successfully:', data.MessageId);
    } catch (err) {
        console.error('Error publishing message:', err);
    }
}

// Function to get a list of all topics
async function listTopics(req, res) {
    try {
        const listTopicsCommand = new ListTopicsCommand({});
        const data = await snsClient.send(listTopicsCommand);

        if (data.Topics && data.Topics.length > 0) {
            console.log('List of all topics:');


            data.Topics.forEach((topic) => {
                console.log(topic.TopicArn);
            });

            console.log(data.Topics.some(url => url.TopicArn.endsWith(`snsDemo`)));

            res.send(data.Topics);
        } else {
            res.send('No topics found.');
        }
    } catch (err) {
        console.error('Error listing topics:', err);
    }
}

// Function to create an SNS topic
async function createTopic(req, res) {

    const { topicName } = req.body;

    const createTopicParams = {
        Name: topicName,
    };

    try {
        const createTopicCommand = new CreateTopicCommand(createTopicParams);
        const data = await snsClient.send(createTopicCommand);
        console.log('Topic created:', data.TopicArn);
        res.send(data.TopicArn);
    } catch (err) {
        console.error('Error creating topic:', err);
        return null;
    }
}


module.exports = { publishMessageEmail, subscribeToTopicEmail, subscribeToTopicSMS, publishMessageSMS, listTopics, createTopic }