import React from "react";
import fig1 from "../assets/images/fig1.png";
import fig2 from "../assets/images/fig2.png";
import fig3 from "../assets/images/fig3.png";
import fig4 from "../assets/images/fig4.png";
import fig5 from "../assets/images/fig5.png";

export const Authors = () => {
  return (
    <section className="bg-genre">
      <div className="md:w-11/12 md:mx-auto pt-20 pb-5">
        <div className="flex md:w-[88%] md:m-auto md:justify-between text-blue-500 gap-10 md:gap-0 ">
          <h1 className="mt-5 text-3xl md:text-4xl font-semibold">
            POPULAR AUTHORS
          </h1>
          <p className=" text-sm  md:text-2xl font-medium">See All</p>
        </div>
        <div className="md:flex block mt-8 md:text-center md:justify-between w-[80%] mx-auto md:w-full">
          <div className="flex md:block gap-3">
            <img className="w-[35%] md:w-full" src={fig1} />
            <div className="mt-5 md:mt-0">
              <p className="text-2xl md:text-3xl font-medium mt-3">
                James Clear
              </p>
              <p className="text-xl md:text-3xl font-medium text-orange-600 mt-1 md:mt-3">
                600+ Books
              </p>
            </div>
          </div>
          <div className="flex md:block mt-5 md:mt-0 gap-3">
            <img className="w-[35%] md:w-full" src={fig2} />
            <div className="mt-5 md:mt-0">
              <p className="text-2xl md:text-3xl  font-medium mt-3">
                Lucy Caldwel
              </p>
              <p className="text-xl md:text-3xl font-medium text-orange-600 mt-3">
                150+ Books
              </p>
            </div>
          </div>
          <div className="flex md:block  mt-5 md:mt-0 gap-3">
            <img className="w-[35%] md:w-full" src={fig3} />
            <div className="mt-5 md:mt-0">
              <p className="text-2xl md:text-3xl  font-medium mt-3">
                Alan Trotter
              </p>
              <p className="text-xl md:text-3xl  font-medium text-orange-600 mt-3">
                10 Ebooks
              </p>
            </div>
          </div>
          <div className="flex md:block  mt-5 md:mt-0 gap-3">
            <img className="w-[35%] md:w-full" src={fig4} />
            <div className="mt-5 md:mt-0">
              <p className="text-2xl md:text-3xl  font-medium mt-3">
                Sarah Raughan
              </p>
              <p className="text-xl md:text-3xl  font-medium text-orange-600 mt-3">
                100+ Novels
              </p>
            </div>
          </div>
          <div className="flex md:block  mt-5 md:mt-0 gap-3">
            <img className="w-[35%] md:w-full" src={fig5} />
            <div className="mt-5 md:mt-0">
              <p className="text-2xl md:text-3xl  font-medium mt-3">
                Chip Heath
              </p>
              <p className="text-xl md:text-3xl  font-medium text-orange-600 mt-3">
                250+ Books
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authors;
