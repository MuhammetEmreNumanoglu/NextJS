import React from 'react'
import Logo from "../ui/Logo.jsx"
import { FaUserAlt,FaShoppingCart,FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className='h-[5.5rem] bg-secondary '>    
<div className='container text-white mx-auto flex justify-between items-center h-full'>
        <div><Logo/></div>
    <div>
        <nav>
            <ul className='flex gap-x-1'>
                <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all'><a href="">Home</a></li>
                <li className='px-[5px] py-[10px] uppercase'><a href="">Menu</a></li>
                <li className='px-[5px] py-[10px] uppercase'><a href="">About</a></li>
                <li className='px-[5px] py-[10px] uppercase'><a href="">Book Table</a></li>

            </ul>
        </nav>
    </div>
    <div className='flex gap-x-4 '>
    <a href="#"><FaUserAlt /></a>
    <a href="#"><FaShoppingCart/></a>
    <a href="#"><FaSearch /></a>
    <a href=""><button className='btn-primary'>Order Online</button></a>
    </div>
</div>
</div>
  )
}

export default Header