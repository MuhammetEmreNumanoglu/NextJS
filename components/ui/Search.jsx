import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title.jsx";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";
import {slider} from "react-slick"
const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-white">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="relative w-full h-full p-6 overflow-y-auto">

          <button
            onClick={() => setIsSearchModal(false)}
            className="absolute top-5 right-5"
          >
            <GiCancel size={30} className="hover:text-primary transition-all" />
          </button>

          <Title addClass="text-[32px] text-center mb-6">
            Search
          </Title>

          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 w-full rounded px-4 py-3 mb-6 outline-none focus:border-primary"
          />

          <ul className="flex flex-col gap-4 max-w-[700px] mx-auto">
            {[1, 2, 3].map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 border p-3 rounded hover:bg-primary/10 transition-all cursor-pointer"
              >
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src="/images/hamburger.jpg"
                    fill
                    alt="hamburger"
                    className="object-cover rounded"
                  />
                </div>

                <span className="flex-1 font-bold">Good Hamburger</span>
                <span className="font-semibold">$10</span>
              </li>
            ))}
          </ul>

        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;