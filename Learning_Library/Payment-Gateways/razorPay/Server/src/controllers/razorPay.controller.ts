import { Request, Response, NextFunction } from "express";
import { addCashBodyReqIf } from "../interfaces/razorpay.interface";
import { createRazorpayOrder } from "../servers/razorPay.service";
import { ERROR_MESSAGES, PAYMENT_CONSTANT, RAZORPAY_WEBHOOK } from "../constants";
import { validateWebhookSignature, validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils"
import crypto from "crypto";
import { paymentAuthorizedRazorPayHook, paymentCapturedRazorPayHook, paymentFailedRazorPayHook } from "./helpers/razorPayWebhook.helper";

export async function createOrderRazorpay(req: Request, res: Response, next: NextFunction) {
    try {
        const { _id: userId, amount } = req.body as addCashBodyReqIf;

        const responce = await createRazorpayOrder({
            amount: amount * 100,
            currency: "INR",
            notes: {
                userId: userId
            }
        });

        res.send(responce);
    } catch (error) {
        console.log("------ addCash :: ERROR :: ", error);
        next(error);
    }
}

export async function razorPayWebhook(request: Request, response: Response, next: NextFunction) {
    try {
        // check signature
        const signature: string = request.headers['x-razorpay-signature'] as string;

        /*for this generatSign === signature for sign validation
             const generatSign = crypto.createHmac('sha256', "Dev@121")
            .update(JSON.stringify(request.body)).digest("hex"); */

        const webhookValidator = validateWebhookSignature(JSON.stringify(request.body), signature, PAYMENT_CONSTANT.RAZORPAY_WEBHOOK_SECRET)

        if (webhookValidator) {

            const { event, payload } = request.body;

            switch (event) {
                case RAZORPAY_WEBHOOK.PAYMENT_AUTHORIZED:
                    await paymentAuthorizedRazorPayHook(payload)
                    break;
                case RAZORPAY_WEBHOOK.PAYMENT_CAPTURED:
                    await paymentCapturedRazorPayHook(payload);
                    break;
                case RAZORPAY_WEBHOOK.PAYMENT_FAILED:
                    await paymentFailedRazorPayHook(payload)
                    break;


                case RAZORPAY_WEBHOOK.PAYMENT_DOWNTIME_STARTED:
                    break;
                case RAZORPAY_WEBHOOK.PAYMENT_DOWNTIME_UPDATED:
                    break;
                case RAZORPAY_WEBHOOK.PAYMENT_DOWNTIME_RESOLVED:
                    break;


                case RAZORPAY_WEBHOOK.ORDER_PAID:
                    break;

                default:
                    console.log(`---- razorPayWebhook :: switch :: default :: call`)
                    break;

            }


        }


    } catch (error) {
        next(error);
    }
}

