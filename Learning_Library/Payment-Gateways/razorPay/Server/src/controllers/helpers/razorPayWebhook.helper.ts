import { RAZORPAY_WEBHOOK } from "../../constants";
import PaymentDowntimerModel from "../../models/paymentDownTime";
import PaymentHistoryModel from "../../models/paymentHistory.model";
import MongoService from "../../servers/mongodb.service";

export async function paymentAuthorizedOrCapturedOrFailedOrOrderdPaidRazorOrFrontVerfiedPayHook(
    payload: any,
    event: string,
    accountId?: string
) {
    try {
        const data = payload.payment.entity;
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
        console.log(
            `-------->> paymentFailedRazorPayHook :: paymentHistoryData :: `,
            paymentHistoryData
        );

        if (!paymentHistoryData) {
            await MongoService.create(PaymentHistoryModel, {
                insert: {
                    accountId: accountId ? accountId : "",
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
                    isAuthorized: event === RAZORPAY_WEBHOOK.PAYMENT_AUTHORIZED ? true : false,
                    isFailed: event === RAZORPAY_WEBHOOK.PAYMENT_FAILED ? true : false,
                    isCaptured: event === RAZORPAY_WEBHOOK.PAYMENT_CAPTURED ? true : false,
                    isOrderPaid: event === RAZORPAY_WEBHOOK.ORDER_PAID ? true : false,
                    isVerified: event === RAZORPAY_WEBHOOK.PAYMENT_FRONTEND_VERIFED ? true : false,
                    card:
                        data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.CARD
                            ? data.card
                            : {},
                    cardId:
                        data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.CARD
                            ? data.card
                            : "",
                    international: data.international,
                    token_id:
                        data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.CARD
                            ? data.token_id
                            : "",
                    acquirerData: data.acquirer_data,
                    upi:
                        data.method === RAZORPAY_WEBHOOK.PAYMENT_METHOD.UPI ? data.upi : {},
                    currency: data.currency,
                    description: data.description ? data.description : "",
                    wallet: data.wallet ? data.wallet : "",
                    fee: data.fee ? data.fee : 0,
                    tax: data.tax ? data.tax : 0,
                    errorCode: data.error_code ? data.error_code : "",
                    errorDescription: data.error_description
                        ? data.error_description
                        : "",
                    errorSource: data.error_source ? data.error_source : "",
                    errorStep: data.error_step ? data.error_step : "",
                    errorReason: data.error_reason ? data.error_reason : "",

                    OrderdReceipt:
                        event === RAZORPAY_WEBHOOK.ORDER_PAID
                            ? payload.order.entity.receipt
                                ? payload.order.entity.receipt
                                : ""
                            : "",
                },
            });
        } else {
            if (
                !paymentHistoryData.isAuthorized &&
                event === RAZORPAY_WEBHOOK.PAYMENT_AUTHORIZED
            ) {
                // update isAuthorized key
                await MongoService.findOneAndUpdate(PaymentHistoryModel, {
                    query: {
                        _id: paymentHistoryData._id,
                    },
                    updateData: {
                        $set: {
                            accountId: accountId,
                            isAuthorized: true,
                        },
                    },
                });

                return;
            }

            if (
                !paymentHistoryData.isFailed &&
                event === RAZORPAY_WEBHOOK.PAYMENT_FAILED
            ) {
                await MongoService.findOneAndUpdate(PaymentHistoryModel, {
                    query: {
                        _id: paymentHistoryData._id,
                    },
                    updateData: {
                        $set: {
                            accountId: accountId,
                            isFailed: true,
                            errorCode: data.error_code ? data.error_code : "",
                            errorDescription: data.error_description
                                ? data.error_description
                                : "",
                            errorSource: data.error_source ? data.error_source : "",
                            errorStep: data.error_step ? data.error_step : "",
                            errorReason: data.error_reason ? data.error_reason : "",
                        },
                    },
                });
                return;
            }

            if (
                !paymentHistoryData.isCaptured &&
                event === RAZORPAY_WEBHOOK.PAYMENT_CAPTURED
            ) {
                await MongoService.findOneAndUpdate(PaymentHistoryModel, {
                    query: {
                        _id: paymentHistoryData._id,
                    },
                    updateData: {
                        $set: {
                            accountId: accountId,
                            isCaptured: data.captured,
                            captured: data.captured,
                            fee: data.fee,
                            tax: data.tax,
                        },
                    },
                });

                return;
            }

            if (
                !paymentHistoryData.isOrderPaid &&
                event === RAZORPAY_WEBHOOK.ORDER_PAID
            ) {
                await MongoService.findOneAndUpdate(PaymentHistoryModel, {
                    query: {
                        _id: paymentHistoryData._id,
                    },
                    updateData: {
                        $set: {
                            accountId: accountId,
                            isOrderPaid: true,
                            fee: data.fee,
                            tax: data.tax,
                            OrderdReceipt: payload.order.entity.receipt
                                ? payload.order.entity.receipt
                                : "",
                        },
                    },
                });

                return;
            }

            if (
                !paymentHistoryData.isVerified &&
                event === RAZORPAY_WEBHOOK.PAYMENT_FRONTEND_VERIFED
            ) {
                await MongoService.findOneAndUpdate(PaymentHistoryModel, {
                    query: {
                        _id: paymentHistoryData._id,
                    },
                    updateData: {
                        $set: {
                            isVerified: true,
                            fee: data.fee,
                            tax: data.tax,
                            OrderdReceipt: payload.order.entity.receipt
                                ? payload.order.entity.receipt
                                : "",
                        },
                    },
                });

                return;
            }

            console.log(`----- paymentFailedRazorPayHook :: nothing heppends ...`);
        }
    } catch (error) {
        console.log(`--- paymentFailedRazorPayHook :: ERROR :: `, error);
        throw error;
    }
}

export async function paymentDowntimeStartedAndUpdatedAndResolvedHook(
    payload: any,
    accountId: string
) {
    try {
        const data = payload["payment.downtime"].entity;

        const paymentDowntimerData = await MongoService.findOne(
            PaymentDowntimerModel,
            {
                query: {
                    downTimerId: data.id,
                },
            }
        );

        console.log(
            `----- paymentDowntimeupdatedHook :: paymentDowntimerData :: `,
            paymentDowntimerData
        );

        if (!paymentDowntimerData) {
            await MongoService.create(PaymentDowntimerModel, {
                insert: {
                    downTimerId: data.id,
                    accountId: accountId,
                    method: data.method,
                    begin: data.begin,
                    end: data.end ? data.end : "",
                    status: data.status,
                    scheduled: data.scheduled,
                    severity: data.severity,
                    instrument: data.instrument,
                    instrumentSchema: data.instrument_schema,
                },
            });
        } else {
            if (
                paymentDowntimerData.status === "updated" ||
                paymentDowntimerData.status === "resolved"
            ) {
                return;
            }

            await MongoService.findOneAndUpdate(PaymentDowntimerModel, {
                query: {
                    _id: paymentDowntimerData._id,
                },
                updateData: {
                    $set: {
                        end: data.end ? data.end : "",
                        scheduled: data.scheduled,
                        status: data.status,
                    },
                },
            });

            return;
        }
    } catch (error) {
        console.log(`------ paymentDowntimeupdatedHook :: ERROR :: `, error);
        throw error;
    }
}
