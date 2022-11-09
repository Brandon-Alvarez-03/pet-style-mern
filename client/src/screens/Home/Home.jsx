import React from 'react';
import mainPic from '../../images/catsAndDogs/hero-cat-dog.png';
import catPic from '../../images/cats/square-cat-1.png';
import dogPic from '../../images/dogs/square-dog-2.png';
import allPic from '../../images/catsAndDogs/square-cat-dog-1.png';
import catToys from '../../images/categories/cat-toys.jpg';
import catClothes from '../../images/categories/cat-clothes.jpg';
import dogToys from '../../images/categories/dog-toys.jpg';
import dogClothes from '../../images/categories/dog-clothes.jpg';
import './Home.css';

import {Link} from "react-router-dom";

function Home() {
  return (
    <div className='homeScreen'>

      <div className='homeImage'>
        <img className='landingImage' alt='cats and dogs with pink background' src={mainPic} />
        <h2 className='CTA'>Spoil your fur baby.</h2>
        <Link to="/products/all">
          <button className='CTAButton'>Shop Now</button>
        </Link>
      </div>

      <div className='description'>
        <h3>Your pet slid into our DMs. They said buy whatever you want.</h3>
      </div>
      
      <h2>Choose Your Pet</h2>
      <div className='choosePet'>
        <div className='chooseCat'>
          <Link to="/products/cat">
            <img className='chooseCatImg' alt='sleeping cat' src={catPic} />
          </Link>    
          <Link to="/products/cat">
            <button className='shopCats'>Shop Cats</button>
          </Link>
        </div>
        <div className='chooseDog'>
          <Link to="/products/dog">
          <img className='chooseDogImg'
            alt='dog wearing sunglasses' src={dogPic}
            />
            </Link> 
            <Link to="/products/dog">
          <button className='shopDogs'>Shop Dogs</button>
          </Link> 
        </div>
        <div className='chooseAll'>
          <Link to="/products/all">
            <img className='chooseAllImg' alt='cat and dog' src={allPic} />
          </Link>
          <Link to="/products/all">
          <button className='shopAll'>Shop All</button>
          </Link>
        </div>
      </div>

      <h2 className='popular-categories'>Popular Categories</h2>
      <div className='categoriesContainer'>
        <div className='cat-toys'>
        <Link to="/products/cat/toys">
            <img className='cat-toy-pic' alt='cat toy' src={catToys} />
            </Link>
          <h3>Cat Toys</h3>
        </div>
        <div className='cat-clothes'>
        <Link to="/products/cat/clothes">
            <img className='cat-clothes-pic' alt='cat clothes' src={catClothes} />
            </Link>
          <h3>Cat Clothes</h3>
        </div>
        <div className='dog-toys'>
        <Link to="/products/dog/toys">
            <img className='dog-toy-pic' alt='dog toy' src={dogToys} />
            </Link>
          <h3>Dog Toys</h3>
        </div>
        <div className='dog-clothes'>
        <Link to="/products/dog/clothes">
            <img className='dog-clothes-pic' alt='dog clothes' src={dogClothes} />
            </Link>
          <h3>Dog Clothes</h3>
        </div>
      </div>

      <div className='help'>
        <p className='help-1'>We're happy to help! 👋</p>
        <p className='help-2'>☎️ 1-800-PET-LYFE</p>
        <p className='help-3'>📧 help@petlyfe.com</p>

      </div>
    </div>
  );
}

export default Home;
