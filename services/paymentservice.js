import Api from "../axios/Api.js";
const PAYMENT_API="paymentStripe"

export const confirmPayment = async (data) => {
    return await Api.post(PAYMENT_API, data);
};
