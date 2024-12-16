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
    <section className="bg-navbar-bg ">
      <div className="w-4/5 mx-auto flex">
        <div className="w-3/6">
          <p className="text-xl font-medium text-gray-400 ">
            Anywhere and Everywhere
          </p>
          <h1 className="text-5xl font-semibold text-tee mt-5">
            Welcome To TEE'S LIBRARY
          </h1>
          <p className="text-xl font-medium text-gray-700 mt-5">
            Track your Reading and Build your Library.
          </p>
          <p className="text-xl font-medium text-gray-700 mt-2">
            Discover your next Favourite Book.{" "}
          </p>
          <p className="text-xl font-medium text-gray-700 mt-2">
            Browse from the Largest Collections of Ebooks.
          </p>
          <p className="text-xl font-medium text-gray-700 mt-2">
            Read stories from anywhere at anytime.
          </p>
          <button className="bg-button px-16 py-3 text-white mt-20 rounded-lg text-2xl font-medium">
            Get Started For Free
          </button>
          <p className="text-2xl font-medium text-blue-500 mt-28">
            Contact us:
          </p>
          <p className="text-2xl font-medium text-gray-500 mt-2">
            Address: columbia Sc
          </p>
          <p className="text-2xl font-medium text-gray-500 mt-2">
            Email:Tee's Library@gmail.com
          </p>
          <div className="flex gap-3 mt-8 text-blue-700 w-full">
            <FaFacebook />
            <FaTwitter />
            <FaVoicemail />
            <FaInstagram />
          </div>
        </div>
        <div className="w-3/6 ">
          <img className="max-w-3xl" src={Illustration} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
