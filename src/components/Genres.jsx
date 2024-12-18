import React from "react";
import { FaArrowDown, FaArrowAltCircleDown } from "react-icons/fa";

const Genres = () => {
  return (
    <section className="bg-genre ">
      <div className="md:w-11/12 md:mx-auto pt-10  ">
        <div className="flex md:gap-20 gap-5 md:justify-around items-center pb-20 ">
          <h1 className="  text-3xl md:text-4xl font-semibold text-blue-500">
            BROWSE GENRES
          </h1>
          <div className="flex md:gap-4 gap-1">
            <p className="text-sm md:text-xl">All Categories</p>
            <FaArrowDown className="mt-1"></FaArrowDown>
          </div>
        </div>
        <div className="grid  md:grid-cols-4 md:gap-40 gap-8 text-white md:w-full  md:mx-auto grid-cols-2 gap-x-0   ">
          <button className="bg-orange-600 w-36 md:w-40 py-4 rounded-lg ">
            Adventure
          </button>
          <button className="bg-orange-600 w-36 md:w-40 py-4 rounded-lg ">
            Biography
          </button>
          <button className="bg-orange-600 w-36 md:w-40 py-4 rounded-lg">
            Thriller
          </button>
          <button className="bg-orange-600 w-36 md:w-40 py-4 rounded-lg">
            love
          </button>
          <button className="bg-orange-600 w-36 md:w-40 py-4 rounded-lg">
            Fiction
          </button>
          <button className="bg-orange-600 w-36 md:w-40 py-4 rounded-lg">
            Science Fiction
          </button>
          <button className="bg-orange-600 w-36 md:w-40 py-4 rounded-lg">
            History
          </button>
          <button className="bg-orange-600 w-36 md:w-40 py-4 rounded-lg">
            Adult
          </button>
        </div>
      </div>
    </section>
  );
};

export default Genres;
