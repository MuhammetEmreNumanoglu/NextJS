import React from "react";
import Title from "../ui/Title";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-3 items-center">
              <div className="flex items-center justify-center">
                <FaMapMarkerAlt />
                <span className="inline-block ml-2">Location</span>
              </div>
              <div className="flex items-center justify-center">
                <FaPhoneAlt />
                <span className="inline-block ml-2">Call +90 555 555 55 xx</span>
              </div>
              <div className="flex items-center justify-center">
                <FaEnvelope />
                <span className="inline-block ml-2">demo@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="md:flex-1">
            <Title addClass="text-[38px]">Numanoğlu</Title>
            <p className="mt-3">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full "
              >
                <FaFacebook />
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammet-emre-numanoğlu-6017b3220/"
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <FaLinkedin />
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <FaInstagram />
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <FaPinterest />
              </a>
            </div>
          </div>

          <div className="md:flex-1">
            <Title addClass="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3 items-center">
              <div>
                <span className="inline-block ml-2">Everyday</span>
              </div>
              <div>
                <span className="inline-block ml-2">10.00 Am -10.00 Pm</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-10">
          © 2026 All Rights Reserved By Muhammet Emre Numanoğlu
        </p>
      </div>
    </div>
  );
};

export default Footer;