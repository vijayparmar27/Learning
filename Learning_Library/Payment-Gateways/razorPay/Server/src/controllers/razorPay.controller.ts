import { Request, Response } from "express"
import { addCashBodyReqIf } from "../interfaces/razorpay.interface";
import { createRazorpayOrder } from "../servers/razorPay.service";

export async function addCash(req: Request, res: Response) {
    try {
        const { _id, amount } = req.body as addCashBodyReqIf;

        console.log("-------->> req.body :: ",req.body)

        const responce = await createRazorpayOrder({
            amount: amount * 1000,
            currency: "INR"
        });

        res.send(responce)
    } catch (error) {
        console.log("------ addCash :: ERROR :: ", error);
        throw error;
    }
}
