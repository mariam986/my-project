import React from "react";
import fig1 from "../assets/images/fig1.png";
import fig2 from "../assets/images/fig2.png";
import fig3 from "../assets/images/fig3.png";
import fig4 from "../assets/images/fig4.png";
import fig5 from "../assets/images/fig5.png";

export const Authors = () => {
  return (
    <section className="bg-genre">
      <div className="w-11/12 mx-auto pt-20 pb-5">
        <div className="flex w-[88%] m-auto justify-between text-blue-500 ">
          <h1 className="mt-5 text-4xl font-semibold">POPULAR AUTHORS</h1>
          <p className="text-2xl font-medium">See All</p>
        </div>
        <div className="flex mt-8 text-center justify-between">
          <div>
            <img src={fig1} />
            <p className="text-3xl font-medium mt-3">James Clear</p>
            <p className="text-3xl font-medium text-orange-600 mt-3">
              600+ Books
            </p>
          </div>
          <div>
            <img src={fig2} />
            <p className="text-3xl font-medium mt-3">Lucy Caldwel</p>
            <p className="text-3xl font-medium text-orange-600 mt-3">
              150+ Books
            </p>
          </div>
          <div>
            <img src={fig3} />
            <p className="text-3xl font-medium mt-3">Alan Trotter</p>
            <p className="text-3xl font-medium text-orange-600 mt-3">
              10 Ebooks
            </p>
          </div>
          <div>
            <img src={fig4} />
            <p className="text-3xl font-medium mt-3">Sarah Raughan</p>
            <p className="text-3xl font-medium text-orange-600 mt-3">
              100+ Novels
            </p>
          </div>
          <div>
            <img src={fig5} />
            <p className="text-3xl font-medium mt-3">Chip Heath</p>
            <p className="text-3xl font-medium text-orange-600 mt-3">
              250+ Books
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authors;
