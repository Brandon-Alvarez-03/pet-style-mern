import "./Checkout.css";
// import logo from "../../images/logos/PetLyfe-brandmark-removebg.png";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
function Checkout() {
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const getCurrentCart = JSON.parse(localStorage.getItem("cart"));
    setCart(getCurrentCart);
  }, []);

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

  function handleClick() {
    localStorage.clear();
  }

  console.log(cart);

  return (
    <div>
      {/* <img className="checkout-img" src={logo} alt="" /> */}
      <h2 className="checkout-info">Contact information</h2>
      <label className="field">
        <input className="field__input" type="text" placeholder="email" />
      </label>

      <div className="checkout-container">
        <h1 className="checkout-h1">Shipping</h1>
        <p className="checkout-p-tags">Please enter your shipping details.</p>

        <div className="checkout-form">
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label" for=""></span>
              <input
                className="field__input"
                type="text"
                id="firstname"
                placeholder="First name"
              />
            </label>
            <label className="field">
              <span className="field__label" for=""></span>
              <input
                className="field__input"
                type="text"
                id="lastname"
                placeholder="Last name"
              />
            </label>
          </div>
          <label className="field">
            <span className="field__label" for="address">
              <input
                className="field__input"
                type="text"
                id="address"
                placeholder="address"
              />
            </span>
          </label>
          <label className="field">
            <span className="field__label" for="country"></span>
          </label>
          <div className="fields fields--3">
            <label className="field">
              <span className="field__label" for=""></span>
              <input
                className="field__input"
                type="text"
                placeholder="zipcode"
              />
            </label>
            <label className="field">
              <span className="field__label" for="city"></span>
              <input
                className="field__input"
                type="text"
                id="city"
                placeholder="city"
              />
            </label>
            <label className="field">
              <span className="field__label" for="state"></span>
              <input
                className="field__input"
                type="text"
                id="city"
                placeholder="state"
              />
            </label>
          </div>
        </div>
      </div>
      <label className="checkout-total"> Your Total is ${sum}</label>
      <br />

      <div>
        <Link to="/cart">
          <button className="checkout-cart-btn"> Return to Cart</button>
        </Link>
      </div>
      <div>
        <Link to="/thankyou">
          <button className="checkout-btn" onClick={handleClick}>
            {" "}
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
