import React from "react";
import { useLayoutEffect } from "react";
import Css from "./Screen css/Checkout.css"
import logo from "../images/logos/PetLyfe-brandmark-removebg.png"
function Checkout() {
  return (
    
     <div>
      <img classNameName="lg" src={logo} alt="" />
      <h2>Contact information</h2>
      <label className="field">
     
      <input className="field__input" type="text" placeholder="email" />
    </label>
      <form> 

      </form>
      <div className="container">
  <h1>Shipping</h1>
  <p>Please enter your shipping details.</p>

  <div className="form">
    
  <div className="fields fields--2">
    <label className="field">
      <span className="field__label" for=""></span>
      <input className="field__input" type="text" id="firstname" placeholder="First name" />
    </label>
    <label className="field">
      <span className="field__label" for=""></span>
      <input className="field__input" type="text" id="lastname" placeholder="Last name" />
    </label>
  </div>
  <label className="field">
    <span className="field__label" for="address"></span>
    <input className="field__input" type="text" id="address"  placeholder="address"/>
  </label>
  <label className="field">
    <span className="field__label" for="country"></span>

     
    
  </label>
  <div className="fields fields--3">
    <label className="field">
      <span className="field__label" for=""></span>
      <input className="field__input" type="text" placeholder="zipcode"/>
    </label>
    <label className="field">
      <span className="field__label" for="city"></span>
      <input className="field__input" type="text" id="city" placeholder="city" />
    </label>
    <label className="field">
      <span className="field__label" for="state"></span>
      <input className="field__input" type="text" id="city" placeholder="state" />
    </label>
  </div>
  </div>
  

</div>
<div>
<button className="cart"> Return to Cart</button>
</div>
<div>
<button className="checkout"> Checkout</button>
</div>
    </div>
  );
}


export default Checkout;
