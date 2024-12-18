import React from "react";
import noto_books from "../assets/images/noto_books.png";
import shopping from "../assets/images/shopping.png";
import support from "../assets/images/support.png";
import Vector from "../assets/images/Vector.png";

const Features = () => {
  return (
    <section className="bg-navbar-bg">
      <div className="bg-blue-800 md:w-11/12 md:mx-auto py-10">
        <p className="md:w-4/5 md:m-auto  text-3xl md:text-4xl font-semibold text-white ">
          Some Of Our Features include:
        </p>
        <div className="w-4/5 m-auto md:flex md:justify-between mt-10 text-white">
          <div className="text-center flex md:block gap-4 ">
            <div className="bg-white relative rounded-full w-32 h-32 flex items-center justify-center">
              <img className="rounded-full w-20 h-20" src={noto_books} />
            </div>
            <div className="text-xl">
              <p className="md:mt-3 mt-8">Used</p>
              <p>Book Buying</p>
            </div>
          </div>
          <div className="text-center flex md:block gap-4">
            <div className="bg-white relative rounded-full w-32 h-32 flex items-center justify-center mt-5 md:mt-0">
              <img className="rounded-full w-20 h-20" src={Vector} />
            </div>
            <div className="text-xl">
              <p className="md:mt-3 mt-8">Returnees</p>
              <p>& Exchanges</p>
            </div>
          </div>
          <div className="text-center flex md:block gap-4">
            <div className="bg-white relative rounded-full w-32 h-32 flex items-center justify-center mt-5 md:mt-0">
              <img className="rounded-full w-20 h-20" src={shopping} />
            </div>
            <div className="text-xl">
              <p className="md:mt-3 mt-8">Online</p>
              <p>Ordering</p>
            </div>
          </div>
          <div className="text-center flex md:block gap-4">
            <div className="bg-white relative rounded-full w-32 h-32 flex items-center justify-center mt-5 md:mt-0">
              <img className="rounded-full w-20 h-20" src={support} />
            </div>
            <div className="text-xl">
              <p className="md:mt-3 mt-8">24 Hours</p>
              <p>Customer Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
