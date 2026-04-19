import React, { useState } from "react";
import Logo from "../ui/Logo.jsx";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../ui/Search.jsx";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  return (
    <div className="h-[5.5rem] bg-secondary ">
      <div className="container text-white mx-auto flex justify-between items-center h-full">
        <div>
          <Logo />
        </div>
        <div>
          <nav>
            <ul className="flex gap-x-1">
              <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all">
                <a href="">Home</a>
              </li>
              <li className="px-[5px] py-[10px] uppercase">
                <a href="">Menu</a>
              </li>
              <li className="px-[5px] py-[10px] uppercase">
                <a href="">About</a>
              </li>
              <li className="px-[5px] py-[10px] uppercase">
                <a href="">Book Table</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-x-4 ">
          <a href="#">
            <FaUserAlt className="hover:text-primary transition-all" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </a>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="">
            <button className="btn-primary">Order Online</button>
          </a>
        </div>
      </div>
      {isSearchModal && (
        <div>
            <Search setIsSearchModal={setIsSearchModal} />
        </div>
      )}
    </div>
  );
};

export default Header;
