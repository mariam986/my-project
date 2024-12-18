import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-genre">
      <div className="md:w-11/12  md:mx-auto bg-blue-800  py-12 md:px-12 px-3">
        <div className="text-4xl md:text-5xl font-bold text-white">
          <p>Subscribe to Our Newsletter</p>
          <p className="mt-4">Newest Books Updates</p>
        </div>
        <div className="relative md:ml-96 ml-0 mt-10">
          <input
            type="text"
            placeholder="Type your email here"
            className="md:w-[60%] w-[90%] h-20 pl-4 rounded-lg "
          />
          <div className="absolute  top-4 flex items-center md:left-96 left-48">
            <button className="bg-orange-600 py-3 md:px-8 px-4 rounded-lg text-white md:text-2xl text-base font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
