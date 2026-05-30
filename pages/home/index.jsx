import React from "react";
import About from "../../components/About";
import Campaign from "../../components/Campaign";
import Carousel from "../../components/Carousel";
import Customer from "../../components/customer/Customer";
import MenuWrapper from "../../components/product/MenuWrapper";
import Reservation from "../../components/Reservation";

const Index = ({ categoryList, productList }) => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaign />
      <MenuWrapper categoryList={categoryList} productList={productList} />
      <About />
      <Reservation />
      <Customer />
    </React.Fragment>
  );
};

export default Index;