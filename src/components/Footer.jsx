import React from "react";
import Logo from "../assets/images/Logo.png";
import Library from "../assets/images/Library.png";
import {
  FaFacebook,
  FaTwitter,
  FaVoicemail,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-genre mb-10">
      <div className="w-11/12 mx-auto py-10 flex gap-60">
        <div>
          <div className="flex gap-3">
            <img src={Logo} />
            <img src={Library} className="mt-2 mb-2" />
          </div>
          <div className="text-2xl font-medium text-gray-600 ">
            <p className="mt-5">Tee’s Library is an e-library website that</p>
            <p>consists of all genres of books from </p>
            <p>around the world </p>
          </div>
        </div>
        <div className="flex gap-32">
          <div>
            <h1 className="text-3xl font-semibold text-black">Quick Links</h1>
            <div className="text-2xl font-medium text-gray-600 ">
              <p className="mt-8">Home</p>
              <p className="mt-2">About Us</p>
              <p className="mt-2">Shop</p>
              <p className="mt-2">Authors</p>
              <p className="mt-2">Help</p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-black">Customer Area</h1>
            <div className="text-2xl font-medium text-gray-600 ">
              <p className="mt-8">My Account</p>
              <p className="mt-2">Tracking List</p>
              <p className="mt-2">Privacy Policy</p>
              <p className="mt-2">FAQ</p>
              <p className="mt-2">Terms</p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-black">Social Medias</h1>
            <div className="text-blue-600 ">
              <FaFacebook className="mt-8 " />
              <FaTwitter className="mt-6" />
              <FaVoicemail className="mt-6" />
              <FaInstagram className="mt-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
