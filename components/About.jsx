import Image from "next/image";
import React from "react";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around text-center md:text-left py-10 md:py-[50px] gap-10">
        
        <div className="relative w-[280px] h-[380px] sm:w-[350px] sm:h-[480px] md:w-[445px] md:h-[610px]">
          <Image
            src={"/images/about-img.png"}
            fill
            className="object-cover"
            alt="about"
          />
        </div>

        <div className="text-white flex flex-col justify-center items-center md:items-start max-w-[90%] sm:max-w-[500px] md:max-w-[400px] gap-4 my-auto">
          
          <Title addClass={"text-3xl sm:text-4xl md:text-5xl"}>
            We Are Numanoğlu
          </Title>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur dignissimos debitis nostrum, accusantium ducimus ullam.
            Minus deleniti eveniet deserunt accusantium a quae debitis voluptatem rem ducimus.
          </p>

          <button className="btn-primary px-5 py-3 rounded-full  ">
            Read More
          </button>

        </div>
      </div>
    </div>
  );
};

export default About;