const {
    CognitoIdentityProviderClient,
    SignUpCommand,
    ConfirmSignUpCommand,
    InitiateAuthCommand,
    ForgotPasswordCommand,
    ConfirmForgotPasswordCommand,
} = require('@aws-sdk/client-cognito-identity-provider');
const hashSecret = require('./crypto.service');

const AWS_CLIENT_ID = "AKIA6F7D7PUNA25LOZVW"
const AWS_CLIENT_SECRET = "AKIA6F7D7PUNA25LOZVW"

const clientID = "5bm5eok13usvgba1em6ff1drbp";
const clientSecret = "1ot092eejap7etbh6eh3sja9f054hfgq6d71t77c30fmph1g8j49";

const client = new CognitoIdentityProviderClient({
    credentials: {
        accessKeyId: AWS_CLIENT_ID,
        secretAccessKey: AWS_CLIENT_SECRET
    },
    region: "ap-south-1"
});

async function signUpCofnito({ name, userName, password, email }) {
    try {

        const command = new SignUpCommand({
            ClientId: clientID,
            Password: password,
            Username: userName,
            UserAttributes: [
                { Name: 'email', Value: email },
                { Name: 'name', Value: name },
            ],
            SecretHash: hashSecret(userName)
        });

        const result = await client.send(command);
        return result;

    } catch (error) {
        console.log("--- signUpCofnito :: ERROR :: ", error);
    }
}

async function signUpConfirmationCofnito({ confirmationCode, userName }) {
    try {

        const command = new ConfirmSignUpCommand({
            ClientId: clientID,
            ConfirmationCode: confirmationCode,
            Username: userName,
            SecretHash: hashSecret(userName)
        })
        const result = await client.send(command);
        return result;

    } catch (error) {
        console.log("--- signUpConfirmationCofnito :: ERROR :: ", error);
    }
}

async function signInCofnito({
    userName,
    password
}) {
    try {

        const command = new InitiateAuthCommand({
            AuthFlow: "USER_PASSWORD_AUTH",
            ClientId: clientID,
            AuthParameters: {
                "USERNAME": userName,
                "PASSWORD": password,
                "SECRET_HASH": hashSecret(userName)
            }
        })
        const result = await client.send(command);
        return result;

    } catch (error) {
        console.log("--- signInCofnito :: ERROR :: ", error);
    }
}

async function forgetPasswordCofnito({
    userName
}) {
    try {

        const command = new ForgotPasswordCommand({
            ClientId: clientID,
            Username: userName,
            SecretHash: hashSecret(userName)
        });
        const result = await client.send(command);
        return result;

    } catch (error) {
        console.log("--- forgetPasswordCofnito :: ERROR :: ", error);
    }
}

async function confirmationCofnito({
    userName,
    confirmationCode,
    newPassword
}) {
    try {

        const command = new ConfirmForgotPasswordCommand({
            ClientId: clientID,
            Username: "new",
            SecretHash: hashSecret("new"),
            ConfirmationCode: "179837",
            Password: "1234567"
        });

        const result = await client.send(command);
        return result;

    } catch (error) {
        console.log("--- forgetPasswordCofnito :: ERROR :: ", error);
    }
}

module.exports = {
    signUpCofnito,
    signUpConfirmationCofnito,
    signInCofnito,
    forgetPasswordCofnito,
    confirmationCofnito
}