import Razorpay from "razorpay"
import { PAYMENT_CONSTANT } from "../constants";
import { CreateRazorpayOrderData } from "../interfaces/razorpay.interface";

const razorpayInstance = new Razorpay({
    key_id: PAYMENT_CONSTANT.RAZORPAY_KEY,
    key_secret: PAYMENT_CONSTANT.RAZORPAY_SECRET
});


export async function createRazorpayOrder(
    data: CreateRazorpayOrderData
): Promise<any> {
    const amount = data.amount;
    const currency = data.currency;
    const notes = data.notes;

    let order: any = await razorpayInstance.orders.create({
        amount: amount,
        currency: currency,
        notes: notes
    });

    if (!order) {
        order = false;
    }

    return order;
};