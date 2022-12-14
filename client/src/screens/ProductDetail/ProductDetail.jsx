import "./ProductDetail.css";
import axios from "axios";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function ProductDetail() {
  const [productData, setProductData] = useState([]);
  const routeParams = useParams();
  const product_id = routeParams.id;
  console.log(routeParams);
  console.log(product_id);

  const sendGetRequest = async () => {
    try {
      const resp = await axios(
        `https://pet-lyfe.up.railway.app/product/${product_id}`
      );
      setProductData(resp.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    sendGetRequest();
  }, [product_id]);
  console.log(productData);

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

  return (
    <div className="product-main">
    <div className="product-container">
      <img
        className="product-image"
        src={productData.img_url}
        alt={productData.name}
      />
      <div className="product-info">
        <div className="productTitle">{productData.product_name}</div>
        {/* <div className="price">$ {productData.price}</div> */}
        <div className="salePrice">$ {productData.sale_price}</div>
        <div className="rating">{productData.rating}/5</div>
        <button className="addToCart" onClick={() => addToCart(productData)}>
          Add to Cart
        </button>
      </div>
      </div>
      </div>
  );
}

export default ProductDetail;
