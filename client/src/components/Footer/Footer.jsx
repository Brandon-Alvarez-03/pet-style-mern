import React, { useState } from "react";
import Translogo from "../../images/logos/PetLyfe-logo-removebg.png"
import "./Footer.css"
import pawsLogo from "../../images/logos/PetLyfe-paws.png"

function Footer() {


  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);



  return <div className="footer">
    <img className="footer-logo" alt='PetLyfe-logo' src={Translogo} />
    <div className="footer-about">
      <h2>About Us!</h2>
    </div>
    <img className="footer-paws" alt='PetLyfe-Paws' src={pawsLogo} onClick={scrollToTop} />
  </div>;
}

export default Footer;
