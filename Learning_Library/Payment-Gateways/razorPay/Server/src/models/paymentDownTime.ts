import mongoose, { Schema, Model } from "mongoose";
import { paymentDowntimeModelIf } from "../interfaces/razorpay.interface";

const paymentDowntimerSchema: Schema<paymentDowntimeModelIf> = new Schema({
    accountId: {
        type: String,
    },
    downTimerId: {
        type: String,
    },
    method: {
        type: String,
    },
    begin: {
        type: Number
    },
    end: {
        type: Number,
        default: null
    },
    status: {
        type: String,
    },
    scheduled: {
        type: Boolean,
        default: false
    },
    severity: {
        type: String
    },
    instrument: {
        type: Object,
        default: {}
    },
    instrumentSchema: [String]
})

const PaymentDowntimerModel: Model<paymentDowntimeModelIf> = mongoose.model<paymentDowntimeModelIf>("paymentdowntimer", paymentDowntimerSchema)

export default PaymentDowntimerModel;