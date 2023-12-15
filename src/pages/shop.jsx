import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import NewCollections from "../components/Newcollections/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default shop;
