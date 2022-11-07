import React from 'react'
import "./Nav.css"
import logo from "../../images/logos/PetLyfe-logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Nav() {
  return (
    <div className='nav'>
      <img className='nav-logo' alt='PetLyfe-logo' src={logo} />
      < ShoppingCartIcon />
      
    </div>
  )
}


export default Nav