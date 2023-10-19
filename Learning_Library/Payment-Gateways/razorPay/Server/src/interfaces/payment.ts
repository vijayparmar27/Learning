export interface razorpayPaymentHistoryModelIf {
    userId: string;
    paymentId: string;
    orderId: string;
    method: string;
    amount: number;
    amountRefunded: number;
    bank: string;
    captured: boolean;
    email: string;
    contact: string;
    notes: Object;

    isAuthorized: boolean;
    isCaptured: boolean;
    isFailed: boolean;

    isDownTimerStated: boolean;
    isDownTimerUpdated: boolean;
    isDownTimerResolved: boolean;

    isOrderPaid: boolean;
    isVerified: boolean;

    card: Object;
    cardId: string;

    international: boolean;
    token_id: string;

    acquirerData: Object;
    upi: any

    currency: string;
    description: string;
    wallet: string;
    fee: number;
    tax: number;

    errorCode : string;
    errorDescription : string;
    errorSource : string;
    errorStep : string;
    errorReason : string;
}