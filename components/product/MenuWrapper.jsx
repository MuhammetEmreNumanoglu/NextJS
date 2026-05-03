import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div id="menu" className="container mx-auto  mb-16">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-[40px]">Our Menu</Title>
        <div className="mt-10">
          <button className="px-6 py-2 bg-secondary rounded-3xl text-white">
            All
          </button>
          <button className="px-6 py-2 rounded-3xl ">Burger</button>
          <button className="px-6 py-2  rounded-3xl ">Pizza</button>
          <button className="px-6 py-2  rounded-3xl ">Drink</button>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <MenuItem
          img="/images/hamburger.jpg"
          title="Delicious Pizza"
          desc="Very delicious hamburger from Spain."
          price={9}
        />{" "}
        <MenuItem
          img="/images/hamburger2.jpg"
          title="Delicious Pizza"
          desc="Very delicious hamburger from Spain."
          price={10}
        />{" "}
        <MenuItem
          img="/images/hamburger3.jpg"
          title="Delicious Pizza"
          desc="Very delicious hamburger from Spain."
          price={8}
        />{" "}
   
        <MenuItem
          img="/images/pizza.jpg"
          title="Delicious Pizza"
          desc="Very delicious pizza from Italy."
          price={10}
        />{" "}
        <MenuItem
          img="/images/pizza2.jpg"
          title="Delicious Pizza"
          desc="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit"
          price={13}
        />{" "}
        <MenuItem
          img="/images/pizza3.jpg"
          title="Delicious Pizza"
          desc="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit"
          price={12}
        />{" "}
        <MenuItem
          img="/images/pizza4.jpg"
          title="Delicious Pizza"
          desc="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit"
          price={16}
        />
      </div>
    </div>
  );
};

export default MenuWrapper;
