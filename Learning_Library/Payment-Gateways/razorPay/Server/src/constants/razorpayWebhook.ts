export = Object.freeze({
    PAYMENT_AUTHORIZED: `payment.authorized`,
    PAYMENT_CAPTURED: `payment.captured`,
    PAYMENT_FAILED: `payment.failed`,

    PAYMENT_DOWNTIME_STARTED: `payment.downtime.started`,
    PAYMENT_DOWNTIME_RESOLVED: `payment.downtime.resolved`,
    PAYMENT_DOWNTIME_UPDATED: `payment.downtime.updated`,

    ORDER_PAID: `order.paid`,

    PAYMENT_FRONTEND_VERIFED: `payment.frontend.verified`,

    PAYMENT_METHOD: {
        NET_BANKING: `netbanking`,
        CARD: `card`,
        WALLET: `wallet`,
        UPI: `upi`,
    }
})