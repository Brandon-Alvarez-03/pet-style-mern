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

function Home() {
  return (
    <div className='homeScreen'>

      <div className='homeImage'>
        <img className='landingImage' alt='cats and dogs with pink background' src={mainPic}/>
        <h2 className='CTA'>Spoil your fur baby.</h2>
        <button className='CTAButton'>Shop Now</button>
      </div>

      <div className='description'>
        <h3>Your pet slid into our DMs. They said buy whatever you want.</h3>
      </div>
      
      <h2>Choose Your Pet</h2>
      <div className='choosePet'>
        <div className='chooseCat'>
          <img className='chooseCatImg' alt='sleeping cat' src={catPic}/>
          <button className='shopCats'>Shop Cats</button>
        </div>
        <div className='chooseDog'>
          <img className='chooseDogImg'
            alt='dog wearing sunglasses' src={dogPic}
          />
          <button className='shopDogs'>Shop Dogs</button>
        </div>
        <div className='chooseAll'>
          <img className='chooseAllImg' alt='cat and dog' src={allPic}/>
          <button className='shopAll'>Shop All</button>
        </div>
      </div>

      <h2 className='popular-categories'>Popular Categories</h2>
      <div className='categoriesContainer'>
        <div className='cat-toys'>
          <img className='cat-toy-pic' alt='cat toy' src={catToys} />
          <h3>Cat Toys</h3>
        </div>
        <div className='cat-clothes'>
          <img className='cat-clothes-pic' alt='cat clothes' src={catClothes} />
          <h3>Cat Clothes</h3>
        </div>
        <div className='dog-toys'>
          <img className='dog-toy-pic' alt='dog toy' src={dogToys} />
          <h3>Dog Toys</h3>
        </div>
        <div className='dog-clothes'>
          <img className='dog-clothes-pic' alt='dog clothes' src={dogClothes} />
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
