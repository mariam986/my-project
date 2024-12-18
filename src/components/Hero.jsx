import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaVoicemail,
  FaInstagram,
} from "react-icons/fa";
import Illustration from "../assets/images/Illustration.png";

const Hero = () => {
  return (
    <section className="bg-navbar-bg pb-3 ">
      <div className="md:w-4/5 md:mx-auto md:flex">
        <div className="md:w-3/6 pt-6 md:pt-3">
          <p className="text-xl  font-medium text-gray-400 ">
            Anywhere and Everywhere
          </p>
          <h1 className=" text-4xl md:text-5xl font-semibold text-tee mt-5 w-[100%]">
            Welcome To TEE'S LIBRARY
          </h1>
          <p className="text-xl md:text-xl font-medium text-gray-700 mt-5">
            Track your Reading and Build your Library.
          </p>
          <p className="text-xl md:text-xl font-medium text-gray-700 mt-2">
            Discover your next Favourite Book.{" "}
          </p>
          <p className="text-xl md:text-xl font-medium text-gray-700 mt-2">
            Browse from the Largest Collections of Ebooks.
          </p>
          <p className="text-xl md:text-xl font-medium text-gray-700 mt-2">
            Read stories from anywhere at anytime.
          </p>
          <button className="bg-button px-8 md:px-16 py-3 text-white mt-12 md:mt-20 rounded-lg text-base md:text-2xl font-medium">
            Get Started For Free
          </button>
          <p className="text-2xl md:text-2xl font-medium text-blue-500 mt-14 md:mt-28">
            Contact us:
          </p>
          <p className=" text-xl md:text-2xl font-medium text-gray-500 mt-2">
            Address: columbia Sc
          </p>
          <p className="text-xl md:text-2xl font-medium text-gray-500 mt-2">
            Email:Tee's Library@gmail.com
          </p>
          <div className="flex gap-3  mt-5 md:mt-8 text-blue-700 w-full">
            <FaFacebook />
            <FaTwitter />
            <FaVoicemail />
            <FaInstagram />
          </div>
        </div>
        <div className="md:w-3/6 hidden md:block">
          <img className="md:max-w-3xl" src={Illustration} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
