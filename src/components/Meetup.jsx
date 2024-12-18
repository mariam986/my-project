import React from "react";
import Logo from "../assets/images/Logo.png";
import unsplash from "../assets/images/unsplash.png";

const Meetup = () => {
  return (
    <section className="bg-navbar-bg">
      <div className="md:flex  md:w-11/12 mx-auto w-[80%] py-10 ">
        <div className="md:w-[50%] w-full ">
          <div className="flex gap-3">
            <img className="w-[10%] md:h-16 h-10" src={Logo} />
            <div className="text-4xl md:text-5xl font-semibold text-blue-600 mt-4 text-center">
              <h1>TEE'S LIBRARY</h1>
              <h1>MEETUP.</h1>
            </div>
          </div>
          <div className="text-2xl md:text-2xl font-medium  text-gray-600 w-[100%] md:w-full">
            <p className="mt-16">
              Meet Kindred Book Lovers In A Local Meetup Book Club!.
            </p>
            <p className="mt-3">
              Fiction Or Non Fiction ,Paperback Or Hardcover,You Like?
            </p>
            <p className="mt-3">Read A New Book Every Month..</p>
          </div>
          <div className="flex md:gap-40 gap-10">
            <div>
              <p className="mt-20 text-orange-600 md:text-4xl text-3xl font-semibold">
                1M+
              </p>
              <p className=" text-xl md:text-2xl font-medium mt-5 text-gray-600">
                Books
              </p>
              <p className="text-xl md:text-2xl font-medium text-gray-600">
                Collections
              </p>
            </div>
            <div>
              <p className="mt-20 text-orange-600 md:text-4xl text-3xl  font-semibold">
                50k+
              </p>
              <p className="text-xl md:text-2xl font-medium mt-5 text-gray-600">
                Club
              </p>
              <p className="text-xl md:text-2xl font-medium text-gray-600">
                Members
              </p>
            </div>
            <div>
              <p className="mt-20 text-orange-600 md:text-4xl text-3xl  font-semibold">
                4,972
              </p>
              <p className="text-xl md:text-2xlfont-medium mt-5 text-gray-600">
                Groups
              </p>
              <p className="text-xl md:text-2xl font-medium text-gray-600">
                Created
              </p>
            </div>
          </div>
          <button className="bg-orange-600 text-white w-[50%] md:w-[50%]   py-4  ml-24 mt-20 md:text-3xl text-2xl font-bold ">
            Join Now
          </button>
        </div>
        <div className="w-[45%] mt-20 md:block hidden">
          <img className="w-[100%] h-[75%]" src={unsplash} />
        </div>
      </div>
    </section>
  );
};

export default Meetup;
