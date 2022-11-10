import React, {useState, useEffect, isValidElement} from "react";
import {useNavigate, Link} from "react-router-dom";
import "../Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [sum, setSum] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (!getCurrentCart.length) {
      navigate("/emptycart");
    } else {
      setCart(getCurrentCart);
    }
  }, [toggle]);

  useEffect(() => {
    addItUp();
  }, [cart]);

  function addItUp() {
    return setSum(
      cart
        .reduce((sum, product) => sum + parseFloat(product.retail_price), 0)
        .toFixed(2)
    );
  }

  function handleRemove(product) {
    let updatedCart = cart.filter((currentProduct) => {
      return currentProduct._id !== product._id;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setToggle((prev) => !prev);
  }

  return (
    <div className="bg">
      <div className="container">
        <div className="cart-items">
          <p className="cart-title">Shopping Cart</p>
          {cart.map((product, index) => {
            return (
              <>
                <div key={index} className="cart-product" id={`${product._id}`}>
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
                  <button
                    className="cart-button"
                    onClick={() => handleRemove(product)}
                  >
                    Remove From Cart
                  </button>
                </div>
              </>
            );
          })}
        </div>

        <div className="sub-total">
          <p className="cart-title">Subtotal</p>
          <p className="subtotal-logic">Your Price: ${sum}</p>
          <Link to="/checkout">
            <button className="cart-button">Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
