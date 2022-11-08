import React from "react";
import "./Nav.css";
import logo from "../../images/logos/PetLyfe-logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="nav">
        <Link to="/">
          <img className="nav-logo" alt="PetLyfe-logo" src={logo} />
        </Link>
        <div className="cart-container">
          <ShoppingCartIcon className="shopping-cart" />
        </div>
      </div>
    </>
  );
}

export default Nav;
