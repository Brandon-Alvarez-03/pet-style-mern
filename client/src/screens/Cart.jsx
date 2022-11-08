import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import "../Cart.css"
import product from "./Products.jsx"

function Cart() {
  return (

    // if no items, link to /emptycart
<div className="bg">
    <div className="container">
      <div className="items">
          <p>Shopping Cart</p>
          {cart.map((product, index) => {
            return (
        <div key={index} className="product">
              <img
                className="product-image"
                src={product.img_thumb}
                alt={product.name}
              />
              <p>{product.product_name}</p>
              <p>Price: {product.retail_price}</p>
              <p>Rating: {product.rating}</p>
              </div>)
            })}
      </div>

      <div className="subTotal">
        <p>Subtotal</p>
        <Link to="/checkout"><button>Proceed to Checkout</button></Link>
      </div>
      </div>
      </div>
  );
}

export default Cart;
