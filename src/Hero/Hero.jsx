import React from "react";
import human from "/assets/person.png";
import { IoSearch } from "react-icons/io5";
import illustration from '/assets/samosa.jpg';

const Hero = () => {
  return (
    <div className="w-5/6 mt-16 ml-16">
      <div className="absolute">
        <svg height="250" width="500" xmlns="http://www.w3.org/2000/svg">
          <circle r="80" cx="150" cy="80" fill="orange" opacity="0.2" />
          Sorry, your browser does not support inline SVG.
        </svg>
      </div>
      <div className="absolute">
        <svg height="250" width="500" xmlns="http://www.w3.org/2000/svg">
          <circle r="50" cx="180" cy="180" fill="red" opacity="0.2" />
          Sorry, your browser does not support inline SVG.
        </svg>
      </div>

      <div className="flex">
        <div className="w-full ml-20 mt-20 ">
          <h1 className="text-5xl font-bold">
            <span className="text-black ">Craving</span> Something{" "}
            <span className="text-red-600 ">Delicious?</span><br /> </h1>
          <h1 className="text-7xl font-bold"> Order<span className="text-red-600 "> Now !</span>{" "}</h1>

          <br />
          <div className="inline-flex content-center">
            <img
              src={human}
              alt="person"
              className="h-8 bg-slate-400 rounded-full m-2"
            />
            <p>
              When you are too lazy to cook, <br />
              We are just a click away
            </p>
          </div>
          <div className="mt-20">
            <button className="p-3 px-8 bg-red-600 rounded-full cursor-pointer text-base flex text-white">
              <IoSearch className="my-auto" />&nbsp; |&nbsp; Find Shop Near Me
            </button>
          </div>
        </div>
        <div className=" w-full content-center flex justify-end">
          <img src={illustration} alt="illustration" className="my-10 rounded-full max-h-96 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
