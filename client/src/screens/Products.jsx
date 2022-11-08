import React, {useState, useEffect, useRef} from "react";
import axios from "axios";

function Products() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  // const addToCart = useRef();

  const addToCart = (product) => {
    console.log(product);
    let cartList = [];

    const getCurrentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log(getCurrentCart)

    if (getCurrentCart.length) {
      cartList = getCurrentCart;
      cartList.push(product);
      localStorage.setItem("cart", JSON.stringify(cartList));
    } else {
      cartList.push(product);
      localStorage.setItem("cart", JSON.stringify(cartList));
    }
  };

  const sendGetRequest = async () => {
    try {
      const resp = await axios("https://pet-lyfe-api.up.railway.app/");
      setProductData(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  useEffect(() => {
    sendGetRequest();
    setLoading(false);
  }, []);
  console.log(productData);

  if (!loading) {
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
}

export default Products;
