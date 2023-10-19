import { ERROR_MESSAGES } from "../../constants";
import { validateReq } from "../../middlewares/validate.middleware";
import { body } from "express-validator";

class RazorpayReqValidator {

  createOrderRazorpayReqValidator = () =>
    validateReq([
      body("_id")
        .notEmpty()
        .withMessage(
          ERROR_MESSAGES.COMMON.REQUIRED.replace(":attribute", "userId")
        ),
      body("amount")
        .notEmpty()
        .withMessage(
          ERROR_MESSAGES.COMMON.REQUIRED.replace(":attribute", "amount")
        ),  
    ]);
}

export default RazorpayReqValidator;
