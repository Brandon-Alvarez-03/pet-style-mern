import React from "react";

import EmptyCart from "../screens/EmptyCart.jsx";
import {Routes, Route} from "react-router-dom";
import Products from "../screens/Products.jsx";
import Cart from "../screens/Cart.jsx";
import Checkout from "../screens/Checkout.jsx";
import Home from "../screens/Home/Home.jsx";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/emptycart" element={<EmptyCart />} />
      </Routes>
    </div>
  );
}

export default Main;
