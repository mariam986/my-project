import React from "react";
import noto_books from "../assets/images/noto_books.png";
import shopping from "../assets/images/shopping.png";
import support from "../assets/images/support.png";
import vector from "../assets/images/vector.png";

const Features = () => {
  return (
    <section className="bg-navbar-bg">
      <div className="bg-blue-800 w-11/12 mx-auto py-10">
        <p className="w-4/5 m-auto text-4xl font-semibold text-white ">
          Some Of Our Features include:
        </p>
        <div className="w-4/5 m-auto flex justify-between mt-10 text-white">
          <div className="text-center">
            <div className="bg-white relative rounded-full w-32 h-32 flex items-center justify-center">
              <img className="rounded-full w-20 h-20" src={noto_books} />
            </div>
            <p className="mt-3">Used</p>
            <p>Book Buying</p>
          </div>
          <div className="text-center">
            <div className="bg-white relative rounded-full w-32 h-32 flex items-center justify-center">
              <img className="rounded-full w-20 h-20" src={vector} />
            </div>
            <p className="mt-3">Returnees</p>
            <p>& Exchanges</p>
          </div>
          <div className="text-center">
            <div className="bg-white relative rounded-full w-32 h-32 flex items-center justify-center">
              <img className="rounded-full w-20 h-20" src={shopping} />
            </div>
            <p className="mt-3">Online</p>
            <p>Ordering</p>
          </div>
          <div className="text-center">
            <div className="bg-white relative rounded-full w-32 h-32 flex items-center justify-center">
              <img className="rounded-full w-20 h-20" src={support} />
            </div>
            <p className="mt-3">24 Hours</p>
            <p>Customer Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
