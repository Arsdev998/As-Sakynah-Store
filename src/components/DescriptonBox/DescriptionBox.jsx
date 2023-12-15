import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="description-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          This Muslim clothing is the perfect choice for women who prioritize
          sharia-compliant design, comfort and modesty in clothing. Designed
          with special attention to Islamic ethical values, these clothes make
          your appearance elegant and adhere to religious norms.
        </p>
        <p>
          Made using high-quality materials, these garments provide optimal
          comfort all day long. Carefully selected ingredients not only provide
          a soft touch to the skin but also ensure good absorption, keeping cool
          even in warm weather
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
