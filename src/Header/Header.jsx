import React from "react";
import logo from "/assets/logo.png";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="font-outfit">
      <div className="bg-slate-900 w-full h-20 mx-auto flex justify-evenly">
        <div className="w-1/3 pl-20 flex justify-start text-white font-bold cursor-pointer">
          <img src={logo} alt="loog" className="h-20" />
          <h1 className="h-ful content-center text-3xl"><span className="text-red-600">Samosa</span> Bite.</h1>
        </div>
        <div className=" w-1/3 content-center text-white font-bold">
          <ul className="flex justify-evenly ">
            {/* <li>Menu</li>
            <li>Offer</li>
            <li>Foods</li>
            <li>Services</li> */}
          </ul>
        </div>
        <div className="w-1/3 content-center cursor-pointer inline-flex items-center justify-end pr-24 gap-2">
          {/* <img
            src='https://i.pravatar.cc/50'
            alt="user"
            className="h-10 bg-white rounded-full my-auto"
          /> */}
          <FaUser className="text-white" />
          <p className="content-center font-bold text-white">Login</p>
        </div>
      </div>

    </div>
  );
};

export default Header;
