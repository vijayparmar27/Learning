import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import React, { useEffect } from "react";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </>
  );
}

export default App;
