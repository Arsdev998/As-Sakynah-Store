import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../assets/remove.svg";
const CartItems = () => {
  const {getTotalCartAmount,all_data, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_data.map((e) => {
        if (cartItems[e.id] > 0) 
        {
          return (
            <div>
              <div className="cartitems-format cartitems-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>Rp{e.new_price}.000</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>Rp{e.new_price*cartItems[e.id]}.000</p>
                <img className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt=""
                />
              </div>
              <hr />
            </div>
          )
        }
        return null;
      })}
      <div className="cartitems-dow">
        <div className="cartitems-total">
          <h1>Carts Totals</h1>
          <div className="">
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>Rp.{getTotalCartAmount()}.000</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shiping Fee</p>
              <p>Free</p>
            </div> 
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>Rp.{getTotalCartAmount()}.000</h3>
            </div>
          </div>
          <button>CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
