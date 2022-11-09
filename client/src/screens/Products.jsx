import React, {useState, useEffect} from "react";
import axios from "axios";
import './Products.css';
import {Link, useParams} from "react-router-dom";

function Products() {
  const [productData, setProductData] = useState([]);

  const routeParams = useParams();
  const endpoint = routeParams.all;

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
      // /cats/toys
      .get(`https://pet-lyfe.up.railway.app/products/${endpoint}`)
      .then((response) => setProductData(response.data));
  }, []);

    return (
      <div className="product-page">
        <h1 className="all-products">All Products</h1>
        <div className="nav-products">
        <div className="filter-by-pet">
          <Link to="/products/all">
            <h4 id="all-pets">All Pets</h4>
          </Link>
          <Link to="/products/cat">
            <h4 id="cats">Cats</h4>
          </Link>
          <Link to="/products/dog">
            <h4 id="dogs">Dogs</h4>
          </Link>
        </div>
        <div className="filter-by-category">
          <Link to="/products/cat/toys">
            <h4 id="cat-toys">Cat Toys</h4>
          </Link>  
          <Link to="/products/cat/clothes">
          <h4 id="cat-clothes">Cat Clothes</h4>
          </Link>
          <Link to="/products/dog/toys">
            <h4 id="dog-toys">Dog Toys</h4>
          </Link>
          <Link to="/products/dog/clothes">
            <h4 id="dog-clothes">Dog Clothes</h4>
          </Link>
          </div>
          </div>
  
  

        <div className="products-container">
        {productData.map((product, index) => {
          return (
            <div key={index} className="product-card" id={product._id}>
              <img
                className="product-image"
                src={product.img_thumb}
                alt={product.name}
              />
              <Link to={`/product/${product._id}`}>
                <button className="view-more">View More</button>
              </Link>
              <p className="product-name">{product.product_name}</p>
              <p className="rating">Customer Rating: {product.rating}/5</p>
              <p className="price">${product.retail_price}</p>
              <button
                className="add-to-cart"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              
            </div>
          );
        })}
          </div>
      </div>
  );
}

export default Products;
