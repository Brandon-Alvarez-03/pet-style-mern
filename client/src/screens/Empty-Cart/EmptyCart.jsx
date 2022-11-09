import React from 'react'
// import regCat from "../images/cats/cat-1.jpg"
import sadCat1 from "../../images/sad/sad-cat-1.jpg"
import sadCat2 from "../../images/sad/sad-cat-2.jpg"
import sadCat3 from "../../images/sad/sad-cat-3.jpg"
import "./EmptyCart.css"

function EmptyCart() {
  let sadArr = [sadCat1, sadCat2, sadCat3]

  const randomImg = (max) => {
    return Math.floor(Math.random() * max)
  }
  
  return (
    <div className='empty-cart'>
      <h2>Oops! Your cart's empty D:</h2>
      <h4 className='back-shop'>👉🏼Back to Shopping👈🏼</h4>
      <img className='sadPets' alt='sad-pet' src={ sadArr[randomImg(3)] } />
    </div>
  )
}

export default EmptyCart;