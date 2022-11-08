import React from "react";
import mainPic from "../../images/catsAndDogs/cat-dog-3.jpg";
import catPic from "../../images/cats/cat-1.jpg";
import dogPic from "../../images/dogs/dog-6.jpg";
import allPic from "../../images/catsAndDogs/cat-dog-2.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="homeScreen">
      <div className="homeImage">
        <img
          className="landingImage"
          alt="cats and dogs with pink background"
          src={mainPic}
        />
        <h3 className="CTA">Spoil your fur baby</h3>
        <button className="CTAButton">Shop Now</button>
      </div>

      <h3>Shop by Pet</h3>

      <div className="choosePet">
        <div className="chooseCat">
          <img className="chooseCatImg" alt="cats" src={catPic} />
          <button className="shopCats">Shop Cats</button>
        </div>
        <div className="chooseDog">
          <img className="chooseDogImg" alt="cats" src={dogPic} />
          <button className="shopDogs">Shop Dogs</button>
        </div>
        <div className="chooseAll">
          <img className="chooseAllImg" alt="cats" src={allPic} />
          <button className="shopAll">Shop All</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
