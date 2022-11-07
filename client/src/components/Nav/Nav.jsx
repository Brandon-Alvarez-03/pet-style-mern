import React from 'react'
import "./Nav.css"
import logo from "../../images/logos/PetLyfe-logo.png"

function Nav() {
  return (
    <div className='nav'>
      <h2>Placeholder</h2>
      <img className='nav-logo' alt='PetLyfe-logo' src={ logo } />
      <h2>Login</h2>
    </div>
  )
}

export default Nav