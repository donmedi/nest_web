import React from "react";
import { IoCheckbox } from "react-icons/io5";

const HowItWorks = () => {
  return (
    <div id="howItWorks" className="container mx-auto py-24 px-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <div
            className="flex justify-center  bg-cover bg-center w-full"
            style={{
              backgroundImage: "url('/img/guy22.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "500px",
            }}
          ></div>
        </div>
        <div className="flex flex-col justify-center w-full lg:w-[70%] mt-9 md:mt-0 ml-0 md:ml-6 px-5">
          <h1 className="text-[40px] leading-tight font-bold mb-4">
            Getting started takes just a few taps
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            From creating your account to securing it with your pin can be
            achieved in less than 3 minutes.
          </p>
          <ul className=" mb-6 grid  grid-cols-2  justify-center">
            <li className="flex items-center text-md">
              <span className="text-blue-600 mr-2">
                <IoCheckbox />
              </span>{" "}
              Create account
            </li>
            <li className="flex items-center text-md">
              <span className="text-blue-600 mr-2">
                <IoCheckbox />
              </span>{" "}
              Set Password
            </li>
            <li className="flex items-center mt-3 text-md">
              <span className="text-blue-600 mr-2">
                <IoCheckbox />
              </span>{" "}
              Start transacting
            </li>
          </ul>
          <button className="bg-blue-600 w-fit text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition duration-200">
            Get started →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
