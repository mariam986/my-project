import React from "react";
import Group16 from "../assets/images/Group16.png";
import image13 from "../assets/images/image13.png";
import Rectangle2 from "../assets/images/Rectangle2.png";
import Rectangle4 from "../assets/images/Rectangle4.png";
import Rectangle5 from "../assets/images/Rectangle5.png";

const Trending = () => {
  return (
    <section className="bg-navbar-bg pt-20">
      <h1 className="text-center text-blue-800 text-5xl font-bold ">
        TOP TRENDING BOOKS
      </h1>

      <div className="w-11/12 mx-auto flex items-center justify-between mt-10">
        <div>
          <div>
            <img src={image13} />
          </div>
          <div>
            <p className="text-xl font-medium mt-5">what i learned....</p>
            <p className="text-xl font-medium text-gray-400">L.E Browman</p>
            <div className="flex gap-6">
              <p className="text-base font-medium text-orange-600">Borrow</p>
              <p className="text-base font-medium text-green-600">
                Add to cart
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={Rectangle4} />
          </div>
          <div>
            <p className="text-xl font-medium mt-5">Made to Stick</p>
            <p className="text-xl font-medium text-gray-400">
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
        <div>
          <div>
            <img src={Rectangle2} />
          </div>
          <div>
            <p className="text-xl font-medium mt-5">Atomic Habits</p>
            <p className="text-xl font-medium text-gray-400">James Clear</p>
            <div className="flex gap-6">
              <p className="text-base font-medium text-orange-600">Borrow</p>
              <p className="text-base font-medium text-green-600">
                Add to cart
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={image13} />
          </div>
          <div>
            <p className="text-xl font-medium mt-5">Muscle</p>
            <p className="text-xl font-medium text-gray-400">Alan Trotter</p>
            <div className="flex gap-6">
              <p className="text-base font-medium text-orange-600">Borrow</p>
              <p className="text-base font-medium text-green-600">
                Add to cart
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={Rectangle5} />
          </div>
          <div>
            <p className="text-xl font-medium mt-5">Happiness by Design</p>
            <p className="text-xl font-medium text-gray-400">Paul Dolan</p>
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
