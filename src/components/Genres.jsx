import React from "react";
import { FaArrowDown, FaArrowAltCircleDown } from "react-icons/fa";

const Genres = () => {
  return (
    <section className="bg-genre ">
      <div className="w-11/12 mx-auto pt-10  ">
        <div className="flex gap-20 justify-around items-center pb-20 ">
          <h1 className=" text-4xl font-semibold text-blue-500">
            BROWSE GENRES
          </h1>
          <div className="flex gap-4">
            <p>All Categories</p>
            <FaArrowDown className="mt-1"></FaArrowDown>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-40 text-white w-full mx-auto   ">
          <button className="bg-orange-600 w-40 py-4 rounded-lg">
            Adventure
          </button>
          <button className="bg-orange-600 w-40 py-4 rounded-lg ">
            Biography
          </button>
          <button className="bg-orange-600 w-40 py-4 rounded-lg">
            Thriller
          </button>
          <button className="bg-orange-600 w-40 py-4 rounded-lg">love</button>
          <button className="bg-orange-600 w-40 py-4 rounded-lg">
            Fiction
          </button>
          <button className="bg-orange-600 w-40 py-4 rounded-lg">
            Science Fiction
          </button>
          <button className="bg-orange-600 w-40 py-4 rounded-lg">
            History
          </button>
          <button className="bg-orange-600 w-40 py-4 rounded-lg">Adult</button>
        </div>
      </div>
    </section>
  );
};

export default Genres;
