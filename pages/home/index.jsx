import About from "@/components/About";
import Campaign from "@/components/Campaign";
import Carousel from "@/components/Carousel";
import Customer from "@/components/Customer";
import MenuWrapper from "@/components/product/MenuWrapper";
import Reservation from "@/components/Reservation";
import React from "react";

const Index = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Campaign></Campaign>
      <MenuWrapper></MenuWrapper>
      <About></About>
      <Reservation></Reservation>
      <Customer></Customer>
    </div>
  );
};

export default Index;
