import About from "@/components/About";
import Campaign from "@/components/Campaign";
import Carousel from "@/components/Carousel";
import MenuWrapper from "@/components/product/MenuWrapper";
import React from "react";

const Index = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Campaign></Campaign>
      <MenuWrapper></MenuWrapper>
      <About></About>
    </div>
  );
};

export default Index;
