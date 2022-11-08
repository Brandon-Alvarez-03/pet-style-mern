import {useState, useEffect} from "react";
import {useNavigate, Link} from "react-router-dom";

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
