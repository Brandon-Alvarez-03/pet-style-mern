import React from 'react';
import './ProductDetail.css';
import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductDetail() {
  const { product_id } = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const sendGetRequest = async () => {
    try {
      const resp = await axios(
        `https://pet-lyfe-api.up.railway.app/product/${product_id}`
      );
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

    return (
      <div className='product-container'>
        <div className='product-pic'>

        </div>
        <div className='product-info'>
        <div className='productTitle'>Product Title</div>
        <div className='price'>Price</div>
        <div className='salePrice'>Sale Price</div>
        <div className='rating'>Rating</div>
          <button className='addToCart'>Add to Cart</button>
        </div>




      </div>
    );
  }

  
  export default ProductDetail;