import mongoose, { Schema, Model } from "mongoose";
import { razorpayPaymentHistoryModelIf } from "../interfaces/payment";

const paymentHistorySchema: Schema<razorpayPaymentHistoryModelIf> = new Schema({
    userId: {
        type: String,
        default: ""
    },
    paymentId: {
        type: String,
        default: ""
    },
    orderId: {
        type: String,
        default: ""
    },
    method: {
        type: String,
        default: ""
    },
    amount: {
        type: Number,
        default: 0
    },
    amountRefunded: {
        type: Number,
        default: 0
    },
    bank: {
        type: String,
        default: ""
    },
    captured: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        default: ""
    },
    contact: {
        type: String,
        default: ""
    },
    notes: {
        type: Object,
        default: {}
    },
    isAuthorized: {
        type: Boolean,
        default: false
    },
    isCaptured: {
        type: Boolean,
        default: false
    },
    isFailed: {
        type: Boolean,
        default: false
    },
    isDownTimerStated: {
        type: Boolean,
        default: false
    },
    isDownTimerUpdated: {
        type: Boolean,
        default: false
    },
    isDownTimerResolved: {
        type: Boolean,
        default: false
    },
    isOrderPaid: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    card: {
        type: Object,
        default: {}
    },
    cardId: {
        type: String,
        default: ""
    },
    international: {
        type: Boolean,
        default: false
    },
    token_id: {
        type: String,
        default: ""
    },
    acquirerData: {
        type: Object,
        default: {}
    },
    upi: {
        type: Object,
        default: {}
    },
    currency: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    wallet: {
        type: String,
        default: ""
    },
    fee: {
        type: Number,
        default: 0
    },
    tax: {
        type: Number,
        default: 0
    },
    errorCode: {
        type: String,
        default: ""
    },
    errorDescription: {
        type: String,
        default: ""
    },
    errorSource: {
        type: String,
        default: ""
    },
    errorStep: {
        type: String,
        default: ""
    },
    errorReason: {
        type: String,
        default: ""
    },
});

const PaymentHistoryModel: Model<razorpayPaymentHistoryModelIf> = mongoose.model<razorpayPaymentHistoryModelIf>("paymentHistory", paymentHistorySchema)

export default PaymentHistoryModel;