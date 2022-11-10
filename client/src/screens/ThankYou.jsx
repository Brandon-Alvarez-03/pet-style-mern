import React from "react";
import "./ThankYou.css";
// import logo from "../images/logos/PetLyfe-brandmark-removebg.png";
// import Check from "../images/logos/Green-check-mark-on-transparent-background-PNG.png";
// import Home from "../screens/Home/Home.jsx";

import {Link} from "react-router-dom";

function Thanks() {
  const randomTrack = () => {
    return Math.floor(Math.random() * (5000000000 - 100000000 + 1));
  };

  return (
    <div className="thanks-container">
      <div className="thanks">
        {/* <img src={logo} alt="" /> */}

        <section>
          <h2> Thank you for your order!</h2>
          {/* <img src={Check} alt="" /> */}
          <h3> Your order was completed successfully.</h3>

          <h2>
            Your tracking number is
            <label>
              <div className="tracking">
                <h2>{randomTrack()}</h2>
              </div>
            </label>
          </h2>
          <div className="thanks-img">
            <img
              src="https://media2.giphy.com/media/3ndAvMC5LFPNMCzq7m/giphy.gif?cid=ecf05e471v7apokey6tpn54rqd0ck9bw8avn3q0fb7w3qrhp&rid=giphy.gif&ct=g"
              alt=""
            />
          </div>
          <div className="button-div">
            <Link to="/">
              <button className="thanks-button">Home</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Thanks;
