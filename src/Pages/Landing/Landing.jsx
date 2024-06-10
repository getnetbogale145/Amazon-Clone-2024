import React from "react";
import Category from "../../Components/Category/Category";
import Carousel from "../../Components/Carousel/Carousel";
import Product from "../../Components/Product/Product";
import LayOut from "../../Components/LayOut/LayOut";

function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
