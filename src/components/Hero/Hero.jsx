import React from "react";
import "./Hero.css";
import hand_icon from "../assets/hand-sign.svg";
import arrow_icon from "../assets/arrow-right (1).svg";
import hero_image from "../assets/HeroR.png";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="">
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Muslim collection</p>
          <p>for everyone</p>
        </div>
        <Link to="colection">
          <div className="hero-last-btn">
            <div>Latest Colection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </Link>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
