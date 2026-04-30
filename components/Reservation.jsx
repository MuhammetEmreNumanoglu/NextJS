import React from "react";

import Input from "./form/Input";
import Title from "./ui/Title";

const Reservation = () => {
  return (
    <div className="container mx-auto py-12">
      <Title addClass="text-[40px] mb-10">Book A Table</Title>
      <div className="flex justify-between flex-wrap gap-10">
        <div className="lg:flex-1 w-full">
          <div className="flex flex-col gap-y-3">
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
          </div>
          <button className="btn-primary mt-4">BOOK NOW</button>
        </div>
<div className="lg:flex-1 !h-[384px] w-full">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12039.94675284944!2d29.0029506138158!3d41.02554717775904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab788dccda5cd%3A0x9a8f0dd1e8705bf7!2zw5xza8O8ZGFyIE1leWRhbsSxLCBNaW1hciBTaW5hbiwgMzQ2NzIgw5xza8O8ZGFyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1777547101797!5m2!1str!2str"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
      </div>
    </div>
  );
};

export default Reservation;