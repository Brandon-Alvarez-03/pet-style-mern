import React from "react";
import logo from "../../images/logos/PetLyfe-logo.png"
import "./Footer.css"
import pawsLogo from "../../images/logos/PetLyfe-paws.png"

function Footer() {
  return <div className="footer">
    <img className="footer-logo" alt='PetLyfe-logo' src={logo} />
    <div className="footer-about">
      <h2>About Us!</h2>
    </div>
    <img className="footer-paws" alt='PetLyfe-Paws' src={ pawsLogo } />
  </div>;
}

export default Footer;
