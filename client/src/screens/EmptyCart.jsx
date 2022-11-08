import React from 'react'
import sadCat1 from "../images/sad/sad-cat-1.jpg"
import sadCat2 from "../images/sad/sad-cat-2.jpg"
import sadCat3 from "../images/sad/sad-cat-3.jpg"

function EmptyCart() {
  return (
    <div className='empty-cart'>
      <h2>Oops! Your cart's empty D:</h2>
      <h4 className='back-shop'>👉🏼Back to Shopping👈🏼</h4>
      <img className='sadPets' alt='sad-pet' src={ sadCat1 } />
    </div>
  )
}

export default EmptyCart;