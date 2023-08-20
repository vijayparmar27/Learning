const { signUpCofnito, signUpConfirmationCofnito, signInCofnito, forgetPasswordCofnito, confirmationCofnito } = require("../services/cognito.service")

exports.signUpCofnitoRouter = async (req, res) => {
    try {

        const { name, userName, password, email } = req.body;

        const data = await signUpCofnito({ name, userName, password, email })
        res.send(data)
    } catch (error) {
        console.log("Error: " + error)
    }
}
exports.signUpConfirmationRouter = async (req, res) => {
    try {
        const { confirmationCode, userName } = req.body;
        const data = await signUpConfirmationCofnito({ confirmationCode, userName })
        res.send(data)
    } catch (error) {
        console.log("Error: " + error)
    }
}
exports.signInRouter = async (req, res) => {
    try {
        const {
            userName,
            password
        } = req.body;
        const data = await signInCofnito({
            userName,
            password
        })
        res.send(data)
    } catch (error) {
        console.log("Error: " + error)
    }
}
exports.forgetPasswordRouter = async (req, res) => {
    try {
        const { userName } = req.body;
        const data = await forgetPasswordCofnito({ userName })
        res.send(data)
    } catch (error) {
        console.log("Error: " + error)
    }
}
exports.confirmationRouter = async (req, res) => {
    try {
        const {
            userName,
            confirmationCode,
            newPassword
        } = req.body;
        const data = await confirmationCofnito({
            userName,
            confirmationCode,
            newPassword
        })
        res.send(data)
    } catch (error) {
        console.log("Error: " + error)
    }
}