import React from 'react'
import "./Nav.css"
import logo from "../../images/logos/PetLyfe-logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Search from "../Search/Search.jsx"
function Nav() {
  const [query, setQuery] = useState("");
  <Search query={query} setQuery={setQuery} />
  return (
    <div className='nav'>
      <img className='nav-logo' alt='PetLyfe-logo' src={logo} />
      < ShoppingCartIcon className='shopping-cart'/>
      
    </div>
  )
}


export default Nav