import React from "react";
<<<<<<< HEAD
import {Routes, Route} from "react-router-dom";
import Home from "../screens/Home.jsx";
=======
// import {Routes, Route} from "react-router-dom";
import Home from "../screens/Home/Home.jsx";
>>>>>>> 3fdc6773a940080366301e7aa8287e227feb811c
import Products from "../screens/Products.jsx";
import Cart from "../screens/Cart.jsx";
import Checkout from "../screens/Checkout.jsx";

function Main() {
  return (
    <div className="main">
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
=======
      <Home />
      {/* <Products /> */}
>>>>>>> 3fdc6773a940080366301e7aa8287e227feb811c
    </div>
  );
}

export default Main;
