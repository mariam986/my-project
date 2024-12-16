import React from "react";
import Logo from "../assets/images/Logo.png";
import unsplash from "../assets/images/unsplash.png";

const Meetup = () => {
  return (
    <section className="bg-navbar-bg">
      <div className="flex w-11/12 mx-auto py-10 ">
        <div className="w-[50%]">
          <div className="flex gap-3">
            <img className="w-[5%] h-16" src={Logo} />
            <div className="text-5xl font-semibold text-blue-600 mt-4 text-center">
              <h1>TEE'S LIBRARY</h1>
              <h1>MEETUP.</h1>
            </div>
          </div>
          <div className="text-2xl font-medium  text-gray-600">
            <p className="mt-16">
              Meet Kindred Book Lovers In A Local Meetup Book Club!.
            </p>
            <p className="mt-3">
              Fiction Or Non Fiction ,Paperback Or Hardcover,You Like?
            </p>
            <p className="mt-3">Read A New Book Every Month..</p>
          </div>
          <div className="flex gap-40">
            <div>
              <p className="mt-20 text-orange-600 text-4xl font-semibold">
                1M+
              </p>
              <p className="text-2xl font-medium mt-5 text-gray-600">Books</p>
              <p className="text-2xl font-medium text-gray-600">Collections</p>
            </div>
            <div>
              <p className="mt-20 text-orange-600 text-4xl font-semibold">
                50k+
              </p>
              <p className="text-2xl font-medium mt-5 text-gray-600">Club</p>
              <p className="text-2xl font-medium text-gray-600">Members</p>
            </div>
            <div>
              <p className="mt-20 text-orange-600 text-4xl font-semibold">
                4,972
              </p>
              <p className="text-2xl font-medium mt-5 text-gray-600">Groups</p>
              <p className="text-2xl font-medium text-gray-600">Created</p>
            </div>
          </div>
          <button className="bg-orange-600 text-white w-[50%] py-4 ml-24 mt-20 text-3xl font-bold">
            Join Now
          </button>
        </div>
        <div className="w-[45%] mt-20">
          <img className="w-[100%] h-[75%]" src={unsplash} />
        </div>
      </div>
    </section>
  );
};

export default Meetup;
