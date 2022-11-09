import React from "react";
import EmptyCart from "../screens/EmptyCart.jsx";
import {Routes, Route} from "react-router-dom";
import Products from "../screens/Products.jsx";
import CatProducts from "../screens/CatProducts.jsx"
import DogProducts from "../screens/DogProducts.jsx"
import Cart from "../screens/Cart.jsx";
import Home from "../screens/Home/Home.jsx";
import ProductDetail from "../screens/ProductDetail/ProductDetail.jsx";
import Checkout from "../screens/checkout/Checkout.jsx";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:all" element={<Products />} />
        <Route path="/products/cat/:category" element={<CatProducts />} />
        <Route path="/products/dog/:category" element={<DogProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/emptycart" element={<EmptyCart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default Main;
