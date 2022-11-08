import React, { useState } from "react";
import {Link} from "react-router-dom";
import Translogo from "../../images/logos/PetLyfe-logo-removebg.png";
import "./Footer.css";
import pawsLogo from "../../images/logos/PetLyfe-paws.png";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  const [visible, setVisible] = useState(false);

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
      <div className="footer-about-copy">
        <h2>About Us!</h2>
        <div className="copyright-icon">
          <CopyrightIcon /> <h6>PetLyfe 2022</h6>
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
