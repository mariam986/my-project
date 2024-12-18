import React from "react";
import Group16 from "../assets/images/Group16.png";
import image13 from "../assets/images/image13.png";
import Rectangle2 from "../assets/images/Rectangle2.png";
import Rectangle4 from "../assets/images/Rectangle4.png";
import Rectangle5 from "../assets/images/Rectangle5.png";

const Trending = () => {
  return (
    <section className="bg-navbar-bg pt-20 pb-5">
      <h1 className="md:text-center text-blue-800 md:text-5xl text-3xl font-bold ">
        TOP TRENDING BOOKS
      </h1>

      <div className="md:w-11/12  w-[80%] mx-auto md:flex md:items-center md:justify-between mt-10">
        <div className="flex md:block gap-4  ">
          <div className="w-[35%] md:w-full">
            <img src={image13} />
          </div>
          <div>
            <p className="text-xl font-medium md:mt-5 ">what i learned....</p>
            <p className=" text-base md:text-xl font-medium text-gray-400">
              L.E Browman
            </p>
            <div className="flex gap-6">
              <p className="text-base font-medium text-orange-600">Borrow</p>
              <p className="text-base font-medium text-green-600">
                Add to cart
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:block gap-4 mt-4 md:mt-0">
          <div className="w-[35%] md:w-full">
            <img src={Rectangle4} />
          </div>
          <div>
            <p className="text-xl font-medium mt-5">Made to Stick</p>
            <p className="text-base md:text-xl font-medium text-gray-400">
              Chip Heath & Dan Heath
            </p>
            <div className="flex gap-6">
              <p className="text-base font-medium text-orange-600">Borrow</p>
              <p className="text-base font-medium text-green-600">
                Add to cart
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:block gap-4 mt-4 md:mt-0 ">
          <div className="w-[35%] md:w-full">
            <img src={Rectangle2} />
          </div>
          <div>
            <p className="text-xl font-medium mt-5">Atomic Habits</p>
            <p className=" text-base md:text-xl font-medium text-gray-400">
              James Clear
            </p>
            <div className="flex gap-6">
              <p className="text-base font-medium text-orange-600">Borrow</p>
              <p className="text-base font-medium text-green-600">
                Add to cart
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:block gap-4 mt-4 md:mt-0 ">
          <div className="w-[35%] md:w-full">
            <img src={image13} />
          </div>
          <div>
            <p className="text-xl font-medium mt-5">Muscle</p>
            <p className="text-base md:text-xl font-medium text-gray-400">
              Alan Trotter
            </p>
            <div className="flex gap-6">
              <p className="text-base font-medium text-orange-600">Borrow</p>
              <p className="text-base font-medium text-green-600">
                Add to cart
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:block gap-4 mt-4 md:mt-0 ">
          <div className="w-[35%] md:w-full">
            <img src={Rectangle5} />
          </div>
          <div>
            <p className="text-xl font-medium mt-5">Happiness by Design</p>
            <p className="text-base md:text-xl font-medium text-gray-400">
              Paul Dolan
            </p>
            <div className="flex gap-6">
              <p className="text-base font-medium text-orange-600">Borrow</p>
              <p className="text-base font-medium text-green-600">
                Add to cart
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
