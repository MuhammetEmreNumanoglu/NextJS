import About from "@/components/About";
import Campaign from "@/components/Campaign";
import Carousel from "@/components/Carousel";
import Customer from "@/components/customer/Customer";
import Footer from "@/components/layout/Footer";
import MenuWrapper from "@/components/product/MenuWrapper";
import Reservation from "@/components/Reservation";
import React from "react";

const Index = () => {
  return (
    <React.Fragment>
      <Carousel></Carousel>
      <Campaign></Campaign>
      <MenuWrapper></MenuWrapper>
      <About></About>
      <Reservation></Reservation>
      <Customer></Customer>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Index;
