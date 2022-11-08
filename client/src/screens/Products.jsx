import React, {useState, useEffect} from "react";
import axios from "axios";
import './Products.css';

function Products() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <div className="product-page">
          <h3 className="all-products">All Products</h3>
  

        <div className="products-container">
        {productData.map((product, index) => {
          return (
            <div key={index} className="product-card">
              <img
                className="product-image"
                src={product.img_thumb}
                alt={product.name}
              />
              <h3 className="product-name">{product.product_name}</h3>
              <p className="rating">Customer Rating: {product.rating}/5</p>
              <p className="price">${product.retail_price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          );
        })}
          </div>
      </div>
    );
  }
}

export default Products;
