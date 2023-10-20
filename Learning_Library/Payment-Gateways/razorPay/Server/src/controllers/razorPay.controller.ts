import { Request, Response, NextFunction } from "express";
import { addCashBodyReqIf } from "../interfaces/razorpay.interface";
import { createRazorpayOrder, getRazorpayOrder, getRazorpayPayment } from "../servers/razorPay.service";
import {
    ERROR_MESSAGES,
    PAYMENT_CONSTANT,
    RAZORPAY_WEBHOOK,
} from "../constants";
import {
    validateWebhookSignature,
    validatePaymentVerification,
} from "razorpay/dist/utils/razorpay-utils";
import crypto from "crypto";
import {
    paymentAuthorizedOrCapturedOrFailedOrOrderdPaidRazorOrFrontVerfiedPayHook,
    paymentDowntimeStartedAndUpdatedAndResolvedHook,
} from "./helpers/razorPayWebhook.helper";

export async function createOrderRazorpay(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { _id: userId, amount } = req.body as addCashBodyReqIf;

        const responce = await createRazorpayOrder({
            amount: amount * 100,
            currency: "INR",
            notes: {
                userId: userId,
            },
        });

        res.send(responce);
    } catch (error) {
        console.log("------ createOrderRazorpay :: ERROR :: ", error);
        next(error);
    }
}

export async function razorPayWebhook(
    request: Request,
    response: Response,
    next: NextFunction
) {
    try {
        // check signature
        const signature: string = request.headers["x-razorpay-signature"] as string;

        /**
         * for this generatSign === signature for sign validation
         * const generatSign = crypto.createHmac('sha256', "Dev@121")
                    .update(JSON.stringify(request.body)).digest("hex"); 
                    */

        const webhookValidator = validateWebhookSignature(
            JSON.stringify(request.body),
            signature,
            PAYMENT_CONSTANT.RAZORPAY_WEBHOOK_SECRET
        );

        if (webhookValidator) {
            const { event, payload, account_id } = request.body;

            switch (event) {
                case RAZORPAY_WEBHOOK.PAYMENT_AUTHORIZED:
                case RAZORPAY_WEBHOOK.PAYMENT_CAPTURED:
                case RAZORPAY_WEBHOOK.PAYMENT_FAILED:
                case RAZORPAY_WEBHOOK.ORDER_PAID:
                    await paymentAuthorizedOrCapturedOrFailedOrOrderdPaidRazorOrFrontVerfiedPayHook(
                        payload,
                        event,
                        account_id
                    );
                    break;

                case RAZORPAY_WEBHOOK.PAYMENT_DOWNTIME_STARTED:
                case RAZORPAY_WEBHOOK.PAYMENT_DOWNTIME_UPDATED:
                case RAZORPAY_WEBHOOK.PAYMENT_DOWNTIME_RESOLVED:
                    await paymentDowntimeStartedAndUpdatedAndResolvedHook(
                        payload,
                        account_id
                    );
                    break;

                default:
                    console.log(`---- razorPayWebhook :: switch :: default :: call`);
                    break;
            }
        }
    } catch (error) {
        next(error);
    }
}

export async function verfiedRazorPayFromFrontend(
    request: Request,
    response: Response,
    next: NextFunction
) {
    try {
        const { paymentId, orderId } = request.body;
        const razorpaySignature = request.headers['x-razorpay-signature'] as string;

        // const orderId = "order_Mq0YjTr9NwGNDv"
        // const paymentId = "pay_Mq0YnWW86u4ACC"
        // const razorpaySignature = "2f7a7f0c2ab1fdf4dc324bd684f01d15d5bd691b9d4785259d337c9ddcc51522"


        /**
         * for this generatSign === signature for sign validation
         * const generatSign = crypto.createHmac('sha256', PAYMENT_CONSTANT.RAZORPAY_SECRET)
            .update(orderId + '|' + paymentId)
            .digest("hex");
            */

        const valiodateSignature = await validatePaymentVerification({
            "order_id": orderId,
            "payment_id": paymentId
        }, razorpaySignature, PAYMENT_CONSTANT.RAZORPAY_SECRET);

        if (valiodateSignature) {
            const getOrderd = await getRazorpayOrder(orderId);
            const getPayment = await getRazorpayPayment(paymentId);

            console.log("------- getOrderd :: ", getOrderd);
            console.log("------- getPayment :: ", getPayment);

            if (getOrderd && getPayment) {

                const payload: any = {};

                payload["payment"] = {
                    entity: getPayment
                };
                payload["order"] = {
                    entity: getOrderd
                };

                await paymentAuthorizedOrCapturedOrFailedOrOrderdPaidRazorOrFrontVerfiedPayHook(
                    payload,
                    RAZORPAY_WEBHOOK.PAYMENT_FRONTEND_VERIFED,
                )

            }
        }

    } catch (error) {
        console.log("------ verfiedRazorPayFromFrontend :: ERROR :: ", error);
        next(error);
    }
}