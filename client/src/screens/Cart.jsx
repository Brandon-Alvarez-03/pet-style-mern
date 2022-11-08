import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (!getCurrentCart.length) {
      navigate("/emptycart");
    } else {
      setCart(getCurrentCart);
    }
  }, []);

  return (
    <div className="bg">
      <div className="container">
        <div className="cart-items">
          <p className="cart-title">Shopping Cart</p>
          {cart.map((product, index) => {
            return (
              <div key={index} className="cart-product">
                <div className="cart-img-div">
                  <img
                    className="cart-image"
                    src={product.img_thumb}
                    alt={product.name}
                  />
                </div>
                <div className="cart-text">
                  <p>{product.product_name}</p>
                  <p>Price: {product.retail_price}</p>
                  <p>Rating: {product.rating}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="sub-total">
          <p className="cart-title">Subtotal</p>
          <p>Subtotal logic</p>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
