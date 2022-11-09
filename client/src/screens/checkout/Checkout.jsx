import React from "react";
import "./Checkout.css";
import {Link} from "react-router-dom";
import logo from "../../images/logos/PetLyfe-brandmark-removebg.png";

function Checkout() {
  return (
    <div className="checkout">
      <img className="lg" src={logo} alt="" />
      <h2>Contact information</h2>
      <label className="field">
        <input className="field__input" type="text" placeholder="email" />
      </label>
      <form></form>
      <div className="container">
        <h1>Shipping</h1>
        <p>Please enter your shipping details.</p>

        <div className="form">
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
            <span className="field__label" for="address"></span>
            <input
              className="field__input"
              type="text"
              id="address"
              placeholder="address"
            />
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
      <label>
        {" "}
        Your Total is{" "}
        <input
          className="field__input"
          type="number"
          id="total"
          placeholder="0.0"
        />
      </label>
      <div>
        <Link to="/cart">
          <button className="cart"> Return to Cart</button>
        </Link>
      </div>
      <div>
        <button className="checkout-btn"> Checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
