import React from "react";
import Logo from "../assets/images/Logo.png";
import Library from "../assets/images/Library.png";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <section className="flex bg-navbar-bg gap-8 ">
      <div className="flex gap-6">
        <img className="h-14 ml-28 mt-8" src={Logo} />
        <img className="h-8 mt-14" src={Library} />
      </div>
      <nav className=" flex  gap-14 mb-40 ml-10  py-7 px-5 bg-white h-24">
        <ul className="flex  gap-16 font-medium text-xl ">
          <li>Home</li>
          <li>About</li>
          <li>Vision</li>
          <li>Contact Us</li>
        </ul>
        <div class="relative">
          <input
            type="text"
            class="pl-10 border border-gray-300 rounded w-full h-6 py-2 focus:outline-none "
            placeholder="Search..."
          />
          <div class="absolute top-1 left-0 flex items-center pl-3">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
        <FaBell className="mt-1" />
        <p className="text-blue-400 font-medium text-xl">LOGIN</p>
        <button className="bg-button px-4  text-white rounded-lg font-medium text-xl">
          Sign Up
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
