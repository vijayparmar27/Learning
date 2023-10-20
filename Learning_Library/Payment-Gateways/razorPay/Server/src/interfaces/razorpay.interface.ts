export interface CreateRazorpayOrderData {
    amount: number,
    currency: string,
    notes?: any
}

export interface addCashBodyReqIf {
    _id: string;
    amount: number
}

export interface paymentDowntimeModelIf {
    downTimerId: string;
    accountId: string;
    method: string;
    begin: number;
    end: number;
    status: string;
    scheduled: boolean;
    severity: string;
    instrument: Object;
    instrumentSchema: string[];
}
