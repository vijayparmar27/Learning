import { RAZORPAY_WEBHOOK } from "../../constants";
import PaymentHistoryModel from "../../models/paymentHistory.model";
import MongoService from "../../servers/mongodb.service";

export async function paymentAuthorizedRazorPayHook(payload: any) {
    try {
        const data = payload.payment.entity
        const { notes, order_id, id } = data;

        const { userId } = notes;

        const paymentHistoryData = await MongoService.findOne(PaymentHistoryModel, {
            query: {
                $and: [
                    {
                        userId: userId,
                    },
                    {
                        paymentId: id,
                    },
                    {
                        orderId: order_id,
                    },
                ],
            },
        });

        console.log(`-------->> paymentAuthorizedRazorPayHook :: paymentHistoryData :: `, paymentHistoryData);

        if (!paymentHistoryData) {

            await MongoService.create(PaymentHistoryModel, {
                insert: {
                    userId: userId,
                    paymentId: id,
                    orderId: order_id,
                    method: data.method,
                    amount: data.amount / 100,
                    bank: data.bank ? data.bank : "",
                    captured: false,
                    email: data.email ? data.email : "",
                    contact: data.contact ? data.contact : "",
                    notes: notes,
                    isAuthorized: true,
                    card: data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.CARD ?
                        data.card : {},
                    cardId: data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.CARD ?
                        data.card : "",
                    international: data.international,
                    token_id: data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.CARD ?
                        data.token_id : "",
                    acquirerData: data.acquirer_data,
                    upi: data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.UPI ?
                        data.upi : {},
                    currency: data.currency,
                    description: data.description ? data.description : "",
                    wallet: data.wallet ? data.wallet : "",
                    fee: data.fee ? data.fee : 0,
                    tax: data.tax ? data.tax : 0,

                    errorCode: data.error_code ? data.error_code : "",
                    errorDescription: data.error_description ? data.error_description : "",
                    errorSource: data.error_source ? data.error_source : "",
                    errorStep: data.error_step ? data.error_step : "",
                    errorReason: data.error_reason ? data.error_reason : ""
                }
            });

            return;

        } else {
            
            if (!paymentHistoryData.isAuthorized) {

                // update isAuthorized key
                await MongoService.findOneAndUpdate(PaymentHistoryModel, {
                    query: {
                        _id: paymentHistoryData._id
                    },
                    updateData: {
                        $set: {
                            isAuthorized: true
                        }
                    }
                })

                return;
            }
            console.log(`----- paymentAuthorizedRazorPayHook :: nothing heppends ...`)

        }

    } catch (error) {
        console.log(`---- paymentAuthorizedRazorPayHook :: ERROR :: `, error);
        throw error;
    }
}

export async function paymentCapturedRazorPayHook(payload: any) {
    try {
        const data = payload.payment.entity
        const { notes, order_id, id } = data;
        const { userId } = notes;

        const paymentHistoryData = await MongoService.findOne(PaymentHistoryModel, {
            query: {
                $and: [
                    {
                        userId: userId,
                    },
                    {
                        paymentId: id,
                    },
                    {
                        orderId: order_id,
                    },
                ],
            },
        });

        console.log(`-------->> paymentCapturedRazorPayHook :: paymentHistoryData :: `, paymentHistoryData);

        if (!paymentHistoryData) {

            await MongoService.create(PaymentHistoryModel, {
                insert: {
                    userId: userId,
                    paymentId: id,
                    orderId: order_id,
                    method: data.method,
                    amount: data.amount / 100,
                    bank: data.bank ? data.bank : "",
                    captured: data.captured ? data.captured : false,
                    email: data.email ? data.email : "",
                    contact: data.contact ? data.contact : "",
                    notes: notes,
                    isAuthorized: false,
                    isCaptured: true,
                    card: data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.CARD ?
                        data.card : {},
                    cardId: data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.CARD ?
                        data.card : "",
                    international: data.international,
                    token_id: data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.CARD ?
                        data.token_id : "",
                    acquirerData: data.acquirer_data,
                    upi: data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.UPI ?
                        data.upi : {},
                    currency: data.currency,
                    description: data.description ? data.description : "",
                    wallet: data.wallet ? data.wallet : "",
                    fee: data.fee ? data.fee : 0,
                    tax: data.tax ? data.tax : 0,

                    errorCode: data.error_code ? data.error_code : "",
                    errorDescription: data.error_description ? data.error_description : "",
                    errorSource: data.error_source ? data.error_source : "",
                    errorStep: data.error_step ? data.error_step : "",
                    errorReason: data.error_reason ? data.error_reason : ""
                }
            });
            return;

        } else {
            if (!paymentHistoryData.isCaptured) {

                await MongoService.findOneAndUpdate(PaymentHistoryModel, {
                    query: {
                        _id: paymentHistoryData._id
                    },
                    updateData: {
                        $set: {
                            isCaptured: data.captured,
                            captured: data.captured,
                            fee: data.fee,
                            tax: data.tax
                        }
                    }
                });

                return;
            }

            console.log(`----- paymentCapturedRazorPayHook :: nothing heppends ...`)

        }


    } catch (error) {
        console.log(`--- paymentCapturedRazorPayHook :: ERROR :: `, error);
        throw error;
    }
}

export async function paymentFailedRazorPayHook(payload: any) {
    try {

        const data = payload.payment.entity
        const { notes, order_id, id } = data;
        const { userId } = notes;

        const paymentHistoryData = await MongoService.findOne(PaymentHistoryModel, {
            query: {
                $and: [
                    {
                        userId: userId,
                    },
                    {
                        paymentId: id,
                    },
                    {
                        orderId: order_id,
                    },
                ],
            },
        });
        console.log(`-------->> paymentFailedRazorPayHook :: paymentHistoryData :: `, paymentHistoryData);

        if (!paymentHistoryData) {

            await MongoService.create(PaymentHistoryModel, {
                insert: {
                    userId: userId,
                    paymentId: id,
                    orderId: order_id,
                    method: data.method,
                    amount: data.amount / 100,
                    bank: data.bank ? data.bank : "",
                    captured: data.captured ? data.captured : false,
                    email: data.email ? data.email : "",
                    contact: data.contact ? data.contact : "",
                    notes: notes,
                    isFailed: true,
                    card: data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.CARD ?
                        data.card : {},
                    cardId: data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.CARD ?
                        data.card : "",
                    international: data.international,
                    token_id: data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.CARD ?
                        data.token_id : "",
                    acquirerData: data.acquirer_data,
                    upi: data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.UPI ?
                        data.upi : {},
                    currency: data.currency,
                    description: data.description ? data.description : "",
                    wallet: data.wallet ? data.wallet : "",
                    fee: data.fee ? data.fee : 0,
                    tax: data.tax ? data.tax : 0,

                    errorCode: data.error_code ? data.error_code : "",
                    errorDescription: data.error_description ? data.error_description : "",
                    errorSource: data.error_source ? data.error_source : "",
                    errorStep: data.error_step ? data.error_step : "",
                    errorReason: data.error_reason ? data.error_reason : ""
                }
            });

        } else {

            if (!paymentHistoryData.isFailed) {
                await MongoService.findOneAndUpdate(PaymentHistoryModel, {
                    query: {
                        _id: paymentHistoryData._id
                    },
                    updateData: {
                        $set: {
                            isFailed: true,
                            errorCode: data.error_code ? data.error_code : "",
                            errorDescription: data.error_description ? data.error_description : "",
                            errorSource: data.error_source ? data.error_source : "",
                            errorStep: data.error_step ? data.error_step : "",
                            errorReason: data.error_reason ? data.error_reason : ""
                        }
                    }
                });
                return;
            }

            console.log(`----- paymentFailedRazorPayHook :: nothing heppends ...`)

        }

    } catch (error) {
        console.log(`--- paymentFailedRazorPayHook :: ERROR :: `, error);
        throw error;
    }
}