import React from "react";
import EmptyCart from "../screens/EmptyCart.jsx";
import {Routes, Route} from "react-router-dom";
import Products from "../screens/Products.jsx";
import Checkout from "../screens/Checkout.jsx";
// import Thanks from "../screens/Thankyou.jsx";
import Cart from "../screens/Cart.jsx";
import Home from "../screens/Home/Home.jsx";
import Login from "../screens/Login.jsx";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:all" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/emptycart" element={<EmptyCart />} />
        {/* <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default Main;
