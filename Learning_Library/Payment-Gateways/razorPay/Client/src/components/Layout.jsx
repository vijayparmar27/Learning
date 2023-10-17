import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import Header from "./Header";
import "./Layout.css";
import Products from "./Products";
import displayRazorpay from "../utils/PaymentGateway";

const Layout = () => {
  let totalAmount = useSelector((state) => state.cart.totalAmount);
  const showcard = useSelector((state) => state.cart.showCart);

  return (
    <>
      <div className="layout">
        <Header />
        <Products />
        {showcard && <CartItems />}
        <div className="total-price">
          <h3>Total: ${totalAmount}</h3>
          <button className="orderBtn" onClick={displayRazorpay}>
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Layout;
