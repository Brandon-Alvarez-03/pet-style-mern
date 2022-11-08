import React, {useState, useEffect} from "react";
import axios from "axios";
import Search from "../components/Search/Search.jsx"

function Products() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const sendGetRequest = async () => {
    try {
      const resp = await axios(`https://pet-lyfe-api.up.railway.app?name=${query}`);
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
            </div>
          );
        })}
      </div>
    );
  }
}

export default Products;
