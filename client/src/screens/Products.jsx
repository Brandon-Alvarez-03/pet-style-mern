import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function Products() {
  const [productData, setProductData] = useState([]);


  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.

  const routeParams = useParams();
  const endpoint = routeParams.all;

  console.log(productData);
  // console.log(endpoint)
  console.log(routeParams);
  const addToCart = (product) => {
    console.log(product);
    let cartList = [];

    const getCurrentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log(getCurrentCart);

    if (getCurrentCart.length) {
      cartList = getCurrentCart;
      cartList.push(product);
      localStorage.setItem("cart", JSON.stringify(cartList));
    } else {
      cartList.push(product);
      localStorage.setItem("cart", JSON.stringify(cartList));
    }
  };

  useEffect(() => {
    axios
      .get(`https://pet-lyfe.up.railway.app/products/${endpoint}`)
      .then((response) => setProductData(response.data))
      .then((response) => setProductFilteredData(response.data))
  }, []);

  return (
    <div className="product-cards">
      {productData.map((product, index) => {
        return (
          <div key={index} className="product-card">
            <img
              className="product-image"
              src={product.img_thumb}
              alt={product.name}
            />
            <p>{product.product_name}</p>
            <p>Price: {product.retail_price}</p>
            <p>Rating: {product.rating}</p>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;