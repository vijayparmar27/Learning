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
    // const amount = data.amount;
    const amount = 100 * 100;
    const currency = data.currency;
    const notes = data.notes;
    const receipt = "data.receipt";

    let order: any = await razorpayInstance.orders.create({
        amount: amount,
        currency: currency,
        notes: notes,
        receipt: receipt,

    });

    if (!order) {
        order = false;
    }

    return order;
};

export const getRazorpayOrder = async (orderId: string) => {
    let order: any = await razorpayInstance.orders.fetch(orderId);

    if (!order) {
        order = false;
    }

    return order;
};

export const getRazorpayPayment = async (paymentId: string) => {
    let payment: any = await razorpayInstance.payments.fetch(paymentId);

        if(!payment) {
        payment = false;
    }

    return payment;
}
