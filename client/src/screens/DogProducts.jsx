import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Products.css";
import {Link, useParams} from "react-router-dom";

function Products() {
  const [productData, setProductData] = useState([]);

  const routeParams = useParams();
  const endpoint = routeParams.category;
  console.log(routeParams);
  console.log(endpoint);

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
      .get(`https://pet-lyfe.up.railway.app/products/dog/${endpoint}`)
      .then((response) => setProductData(response.data));
  }, []);

  return (
    <div className="product-page">
      <h3 className="all-products">All Products</h3>
      <div className="products-container">
        {productData.map((product, index) => {
          return (
            <div key={index} className="product-card" id={product._id}>
              <img
                className="product-image"
                src={product.img_thumb}
                alt={product.name}
              />
              <h3 className="product-name">{product.product_name}</h3>
              <p className="rating">Customer Rating: {product.rating}/5</p>
              <p className="price">${product.retail_price}</p>
              <button
                className="add-to-cart"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <Link to={`/product/${product._id}`}>
                <button className="add-to-cart">See More</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
