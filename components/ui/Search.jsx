import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title.jsx";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50 flex items-center justify-center">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="relative w-[600px] bg-white border-2 p-6 rounded-lg">
          {/* Close Button */}
          <button
            onClick={() => setIsSearchModal(false)}
            className="absolute top-4 right-4"
          >
            <AiFillCloseCircle
              size={30}
              className="hover:text-primary transition-all"
            />
          </button>

          <Title addClass="text-[32px] text-center mb-4">Search</Title>

          <input
            type="text"
            placeholder="Search..."
            className="border border-black w-full rounded px-3 py-2 mb-6 outline-none"
          />

          <ul className="flex flex-col gap-4 mt-5 max-h-[300px] overflow-y-auto pr-2">
            <li className="flex items-center gap-4 border p-3 rounded hover:bg-primary transition-all cursor-pointer">
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
            </li>{" "}
            <li className="flex items-center gap-4 border p-3 rounded hover:bg-primary transition-all cursor-pointer">
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
            </li>{" "}
            <li className="flex items-center gap-4 border p-3 rounded hover:bg-primary transition-all cursor-pointer">
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
          </ul>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
