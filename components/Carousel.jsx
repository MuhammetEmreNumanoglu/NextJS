import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full container mx-auto -mt-[88px] ">
      <div className="absolute top-0 left-0 w-full h-full  ">
        <div className="relative h-full w-full">
          <Image
            src="/images/hamburger3.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">Real Burger Experience</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Prepared by skilled chefs, our burgers go beyond the ordinary with
              unique recipes and rich flavors. Every detail, from the bun to the
              toppings, is carefully chosen to give you a satisfying and
              memorable restaurant experience.
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
        <div>
          <div className="mt-48  text-white flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">Taste Beyond Limits</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Our burgers are crafted with fresh ingredients and premium-quality
              meat, delivering bold flavors in every bite. Paired with our
              signature sauces and fast, friendly service, we create a dining
              experience that keeps you coming back for more.
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
