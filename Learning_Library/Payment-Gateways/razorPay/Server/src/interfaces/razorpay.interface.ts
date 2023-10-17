export interface CreateRazorpayOrderData {
    amount: number,
    currency: string,
    notes?: any
}

export interface addCashBodyReqIf {
    _id: string;
    amount: number
}