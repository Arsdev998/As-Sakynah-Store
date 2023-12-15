import React, { useContext } from "react";
import "./ProductDisplay.css";
import start_icon from "../assets/white-medium-star.svg";
import start_icon_dull from "../assets/star-.svg";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            Rp{product.old_price}.000
          </div>
          <div className="productdisplay-right-price-new">
            Rp{product.new_price}.000
          </div>
        </div>
        <div className="productdisplay-right-description">
          These garments come in a variety of sizes, ensuring that every woman
          can find the right size. Also available in a variety of soft and
          elegant colors, providing flexibility in your appearance. With these
          clothes, you not only wear clothing that conforms to religious
          principles, but also experience extraordinary comfort and unmatched
          beauty of design.
        </div>
        <div className="productdisplay-right-size">
          <h1>Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category:</span>clothes muslim
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span>Modern, Latest ,Sunnah
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
