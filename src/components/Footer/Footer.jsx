import React from "react";
import "./Footer.css";
import footer_logo from "../assets/Logo Baru.png";
import ig from "../assets/instagram.svg";
import fb from "../assets/facebook.svg";
import wa from "../assets/whatsapp.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>AS-SYAKINAH</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-social-icons-container">
        <a href="https://www.instagram.com/arsyaddev/">
          <img src={ig} alt="" />
        </a>
        </div>
        <div className="footer-social-icons-container">
        <a href="https://www.facebook.com/babangarsyad.arsyadcoman/about">
          <img src={fb} alt="" />
        </a>
          
        </div>
        <div className="footer-social-icons-container">
        <a href="https://wa.me/+6282252862796">
          <img src={wa} alt="" />
        </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>&copy; 2023 - ArsDev </p>
      </div>
    </div>
  );
};

export default Footer;
