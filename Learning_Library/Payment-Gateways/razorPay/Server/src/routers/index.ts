import express from "express";
import { createOrderRazorpay, razorPayWebhook, verfiedRazorPayFromFrontend } from "../controllers/razorPay.controller";
import { registerUser } from "../controllers/user.controller";
import RazorpayReqValidator from "../validators/requestValidators/razorpay.requiestValidator";
import crypto from "crypto";
import { PAYMENT_CONSTANT } from "../constants";
import { validateWebhookSignature, validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils"

const router = express.Router();

router.get("/test", (req: any, res: any) => {
    res.send("OK...");
});

// router.get("/pay", async (req, res) => {

//     const order_id = "order_Mq0YjTr9NwGNDv"
//     const id = "pay_Mq0YnWW86u4ACC"
//     const sign = "2f7a7f0c2ab1fdf4dc324bd684f01d15d5bd691b9d4785259d337c9ddcc51522"

//     const hmac1 = crypto.createHmac('sha256', PAYMENT_CONSTANT.RAZORPAY_SECRET)
//         .update(order_id + '|' + id)
//         .digest("hex");

//     const hmac2 = await validatePaymentVerification({
//         "order_id": order_id,
//         "payment_id": id
//     }, sign, PAYMENT_CONSTANT.RAZORPAY_SECRET);

    
//     console.log(`=====>> isValid ::  `, sign === hmac1);
//     console.log(`=====>> isValid 1 ::  `, hmac2);


// })
router.get("/pay",verfiedRazorPayFromFrontend)

router.post(
    "/createOrderRazorpay",
    [new RazorpayReqValidator().createOrderRazorpayReqValidator()],
    createOrderRazorpay
);

router.post("/userRegister", registerUser);

let count: number = 1;

// router.post("/callback", razorPayWebhook);

// router.post("/callback", (req, res) => {
//     // console.log(`=====>> req :: `,req);
//     console.log(`=====>> req.body ::  `, req.body);
//     console.log(`=====>> req.body.payment :: `, req.body.payload.payment);
//     console.log(`=====>> req.body.order :: `, req.body.payload.order);
//     console.log(
//         `=====>> req.body.payment :: order_id ::`,
//         req.body.payload.payment.entity.order_id
//     );
//     console.log(
//         `=====>> req.body.payment :: payId ::`,
//         req.body.payload.payment.entity.id
//     );

//     // console.log(`=====>> req.body.order :: `, req.body.payload.order);
//     // console.log(`=====>> req.headers :: `, req.headers);

//     // console.log(`=====>> req.headers :: `, req.headers);
//     console.log(`=====>> count :: `, count);
//     count++;

//     if ("" == "") {
//     }
// });

export default router;
