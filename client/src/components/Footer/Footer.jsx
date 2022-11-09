import React, { useState } from "react";
import Translogo from "../../images/logos/PetLyfe-logo-removebg.png";
import "./Footer.css";
import pawsLogo from "../../images/logos/PetLyfe-paws.png";
import GitLogo from "../../images/logos/GitHub32px.png";
import { Link } from "react-router-dom"


function Footer() {
  const [visible, setVisible] = useState(false);

  const handleClickSandy = () => {
    window.open("https://github.com/limbocaba", "_blank")  
  }
  const handleClickBrandon = () => {
    window.open("https://github.com/Brandon-Alvarez-03", "_blank")  
  }
  const handleClickGary = () => {
    window.open("https://github.com/garybones86", "_blank")  
  }
  const handleClickErin = () => {
    window.open("https://github.com/erinbaright", "_blank")  
  }
  const handleClickCap = () => {
    window.open("https://github.com/CapriceLoren", "_blank")  
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="footer">
      <Link to="/">
        <img className="footer-logo" alt="PetLyfe-logo" src={Translogo} />
        </Link>
      <div className="footer-middle">
        <div className="sandy-git">
        <h3>Sandy C.</h3>
          <img alt="Sandys GitHub" src={GitLogo} onClick={ handleClickSandy } />
        </div>
        <div className="brandon-git">
          <h3>Brandon A.</h3>
          <img alt="Brandons GitHub" src={GitLogo} onClick={ handleClickBrandon } />
        </div>
        <div className="cap-git">
          <h3>Caprice G.</h3>
          <img alt="Caprices GitHub" src={GitLogo} onClick={ handleClickCap } />
        </div>
        <div className="erin-git">
          <h3>Erin B.</h3>
          <img alt="Erin GitHub" src={GitLogo} onClick={ handleClickErin } />
        </div>
        <div className="gary-git">
          <h3>Gary B.</h3>
          <img alt="Garys GitHub" src={GitLogo} onClick={ handleClickGary} />
        </div>
      </div>
      <img
        className="footer-paws"
        alt="PetLyfe-Paws"
        src={pawsLogo}
        onClick={scrollToTop}
      />
    </div>
  );
}

export default Footer;
