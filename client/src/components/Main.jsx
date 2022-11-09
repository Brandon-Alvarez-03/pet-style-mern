import React from "react";
import EmptyCart from "../screens/Empty-Cart/EmptyCart.jsx";
import {Routes, Route} from "react-router-dom";
import Products from "../screens/Products.jsx";
import Cart from "../screens/Cart.jsx";
import Checkout from "../screens/Checkout.jsx";
import Home from "../screens/Home/Home.jsx";
import SignIn from "../screens/Sign-In/SignIn.jsx";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/emptycart" element={<EmptyCart />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default Main;
