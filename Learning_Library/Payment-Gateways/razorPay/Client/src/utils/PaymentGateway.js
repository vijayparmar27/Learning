import axios from "axios";

export default async function DisplayRazorpay() {

  const responce = await axios.post(`http://localhost:8888/createOrderRazorpay`, {
    _id: "123",
    amount: 10
  });

  console.log("data :: ", responce.data);

  const options = {
    key: "rzp_test_yYGqIeutwEWVkm",
    currency: responce.data.currency,
    amount: responce.data.amount,
    name: "Learn Code Online",
    description: "Wallet Transaction",
    image: "http://localhost:1337/logo.png",
    order_id: responce.data.id,
    handler: function (res) {

      console.log("----->> res :: ", res)

      alert("PAYMENT ID ::" + res.razorpay_payment_id);
      alert("ORDER ID :: " + res.razorpay_order_id);
    },
    // prefill: {
    //   name: "vijay parmar",
    //   email: "vijay@gmail.com",
    //   contact: "9999999999",
    // },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
