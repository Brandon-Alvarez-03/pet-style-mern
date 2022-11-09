import React from "react";
import EmptyCart from "../screens/EmptyCart.jsx";
import {Routes, Route} from "react-router-dom";
import Products from "../screens/Products.jsx";
import Cart from "../screens/Cart.jsx";
import Home from "../screens/Home/Home.jsx";
import ProductDetail from "../screens/ProductDetail/ProductDetail.jsx";


function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:animal" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/emptycart" element={<EmptyCart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default Main;
