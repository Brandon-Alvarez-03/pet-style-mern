import React from "react";
import "./Nav.css";
import logo from "../../images/logos/PetLyfe-logo-removebg.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';


function Nav() {

 

    return (
      <>
        <div className="nav">
          <MenuIcon
            className="ham-menu-icon"
          />
          <Link to="/">
            <img className="nav-logo" alt="PetLyfe-logo" src={logo} />
          </Link>
          <div className="account-buttons">
          <Link to="/signup">
           <button className="signup">Sign Up</button>
            </Link>
            <Link to="/login">
              {/* <button className="login">Login</button> */}
              <PersonIcon />
              </Link>
            </div>
          <div className="cart-container">
            <Link to="/cart">
              <ShoppingCartIcon className="shopping-cart" />
            </Link>
          </div>
        </div>
      </>
    );
  }

export default Nav;
