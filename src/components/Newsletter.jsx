import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-genre">
      <div className="w-11/12 mx-auto bg-blue-800 py-12 px-12">
        <div className="text-5xl font-bold text-white">
          <p>Subscribe to Our Newsletter</p>
          <p className="mt-4">Newest Books Updates</p>
        </div>
        <div className="relative ml-96 mt-10">
          <input
            type="text"
            placeholder="Type your email here"
            className="w-[60%] h-20 pl-4 rounded-lg "
          />
          <div className="absolute  top-4 flex items-center left-96">
            <button className="bg-orange-600 py-3 px-8 rounded-lg text-white text-2xl font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
