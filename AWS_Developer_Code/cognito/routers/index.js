const express = require('express');
const { signUpCofnitoRouter, signUpConfirmationRouter, signInRouter, forgetPasswordRouter, confirmationRouter } = require('../controllers');

const router = express.Router();

router.post("/signUpCofnitoRouter",signUpCofnitoRouter)
router.post("/signUpConfirmationRouter",signUpConfirmationRouter)
router.post("/signInRouter",signInRouter)
router.post("/forgetPasswordRouter",forgetPasswordRouter)
router.post("/confirmationRouter",confirmationRouter)

module.exports = router;