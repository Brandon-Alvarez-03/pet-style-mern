import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../screens/Home.jsx";
import Products from "../screens/Products.jsx";
import Cart from "../screens/Cart.jsx";
import Checkout from "../screens/Checkout.jsx";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default Main;
