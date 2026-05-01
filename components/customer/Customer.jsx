import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";

const Customer = () => {
  return (
    <div className="container my-20 mx-auto">
      <Title addClass={" text-center"}>What Our Customer Says</Title>
      <div className="flex gap-x-10">
        <CustomerItem imgSrc={"/images/client1.jpg"}/>
        <CustomerItem imgSrc={"/images/client2.jpg"}/>
      </div>
    </div>
  );
};

export default Customer;
