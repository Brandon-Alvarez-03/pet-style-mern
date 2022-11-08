import React from "react";
import EmptyCart from "../screens/EmptyCart.jsx";
import {Routes, Route} from "react-router-dom";
import Products from "../screens/Products.jsx";
import Checkout from "../screens/Checkout.jsx";
// import Thanks from "../screens/Thankyou.jsx";
import Cart from "../screens/Cart.jsx";
import Home from "../screens/Home/Home.jsx";
import Login from "../screens/Login.jsx";

function Main({productFilteredData, setProductFilteredData, setProductData}) {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:all" element={<Products productFilteredData={productFilteredData} setProductFilteredData={setProductFilteredData} setProductData={setProductData}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/emptycart" element={<EmptyCart />} />
        {/* <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default Main;
