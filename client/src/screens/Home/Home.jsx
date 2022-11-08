import React from 'react';
import mainPic from '../../images/catsAndDogs/hero-cat-dog.png';
import catPic from '../../images/cats/square-cat-1.png';
import dogPic from '../../images/dogs/square-dog-2.png';
import allPic from '../../images/catsAndDogs/square-cat-dog-1.png';
import Collar from '../../images/categories/collar.jpg';
import Leash from '../../images/categories/leash.jpg';
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

      <h2>Popular Categories</h2>
      <div className='categoriesContainer'>
        <div className='collars'>
          <img className='collarPic' alt='puppy collar' src={Collar} />
          <h3>Collars</h3>
        </div>
        <div className='leashes'>
          <img className='leashPic' alt='dog leash' src={Leash} />
          <h3>Leashes</h3>
        </div>
      </div>

      <div className='help'>
        <p className='help-1'>We're happy to help! 👋</p>
        <p className='help-2'>☎️ 1-800-PET-LYFE</p>
        <p className='help-3'>📧 help@petlyfe.com</p>
      </div>

    </div>
  )
}

export default Home