import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart.slice";
import "./Product.css";

const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch()
  const addCart = () => {
    dispatch(cartActions.addToCart({
      id,
      name,
      price,
    }))
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addCart}>Add to cart</button>
    </div>
  );
};

export default Product;
