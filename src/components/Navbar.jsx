import React from "react";
import Logo from "../assets/images/Logo.png";
import Library from "../assets/images/Library.png";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="flex bg-navbar-bg md:gap-8 w-full ">
      <div className="flex md:gap-6">
        <img className="md:h-14 ml-8 md:ml-28 mt-8" src={Logo} />
        <img className="md:h-8 mt-14" src={Library} />
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl focus:outline-none ml-28 mt-8 text-blue-600 "
      >
        ☰
      </button>

      <nav
        className={`md:flex  md:gap-10 md:mb-40 md:ml-10  md:py-7 md:px-5 md:bg-white  md:h-24 h-12 ${isOpen ? "block" : "hidden"} fixed md:relative z-10 bg-blue-100 w-[50%] md:w-[80%] h-full transition-all duration-300 ease-in-out   `}
      >
        <button onClick={() => setIsOpen(false)}>
          <FaXmark className="md:hidden ml-40 mt-4" />
        </button>
        <ul className="md:flex  md:gap-16 font-medium text-xl  ">
          <li className="mt-3">Home</li>
          <li className="mt-3">About</li>
          <li className="mt-3">Vision</li>
          <li className="mt-3">Contact Us</li>
        </ul>
        <div class="md:relative hidden md:block">
          <input
            type="text"
            class="pl-10 border border-gray-300 rounded w-full h-6 py-2 focus:outline-none md:mt-2 "
            placeholder="Search..."
          />
          <div class="absolute top-3 left-0 flex items-center pl-3">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
        <FaBell className="mt-3 " />
        <p className="text-blue-400 font-medium text-xl mt-2">LOGIN</p>
        <button className="bg-button px-4  text-white rounded-lg font-medium text-xl mt-3 md:mt-0">
          Sign Up
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
