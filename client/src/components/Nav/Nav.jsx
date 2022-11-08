import React from 'react'
import "./Nav.css"
import logo from "../../images/logos/PetLyfe-logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Search from "../Search/Search.jsx"
import {Link, useLocation} from "react-router-dom";
import {useState} from "react"

function Nav({productData, query, setQuery, setProductFilteredData}) {
  const location = useLocation()
  console.log(location.pathname)
   
  return (
    <>
      <div className="nav">
        <Link to="/">
          <img className="nav-logo" alt="PetLyfe-logo" src={logo} />
        </Link>
        {location.pathname === "/" ? null : <Search query={query} setQuery={setQuery} productData={productData} setProductFilteredData={setProductFilteredData} />}
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
