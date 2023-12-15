import React from "react";
import "./Offers.css";
import exlucive from "../assets/exlucive.jpg";
const Offers = () => {
  return (
    <div className="offers ">
      <div className="offers-left">
        <h1>Exlusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY BEST SELLERS PRODUCTS</p>
        <button>Chek Now</button>
      </div>
      <div className="offers-right">
        <img src={exlucive} alt="" />
      </div>
    </div>
  );
};

export default Offers;
