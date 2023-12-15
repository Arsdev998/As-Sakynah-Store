import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptonBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";


const Product = () => {
  const { all_data } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_data.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product} />
     <ProductDisplay product={product}/>
     <DescriptionBox/>
     <RelatedProducts/>
    </div>
  );
};

export default Product;
