import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-blue-600 text-white py-14 px-4 md:px-28 mb-60 relative -z-10"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7 items-center">
        {/* Heading Section */}
        <div>
          <h2 className="text-4xl md:text-4xl font-medium leading-snug w-full">
            Experience seamless payment of across continent
          </h2>
        </div>

        {/* Description Section */}
        <div>
          <p className="text-xl leading-snug w-full text-gray-200">
            Enjoy a comprehensive payment option with your Nestpay account and
            24/7 customer support.
          </p>
        </div>
      </div>

      {/* White container */}
      <div className="bg-white text-black mt-14 -mb-60 rounded-lg shadow-lg relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 px-7 py-10 gap-7">
          <div className="bg-white text-gray-800 rounded-lg shadow-lg flex flex-col">
            <div
              className="flex justify-center bg-cover bg-center w-full"
              style={{
                backgroundImage: "url('/img/iphoneDown2.png')",
                height: "300px",
              }}
            />
            <div className="px-8 py-5">
              <h3 className="text-2xl font-semibold text-[#1774F6] mb-2">
                Multi-Currency Account
              </h3>
              <p className="text-left text-sm text-black">
                With Nestpay, you have access to multiple secured foreign
                accounts.
              </p>
            </div>
          </div>
          <div className="bg-white text-gray-800 rounded-lg shadow-lg flex flex-col">
            <div className="px-8 py-5">
              <h3 className="text-2xl font-semibold text-[#FCA311] mb-2">
                Payment Tracking
              </h3>
              <p className="text-left text-sm text-black">
                With Nestpay, you have access to multiple secured foreign
                accounts.
              </p>
            </div>
            <div
              className="flex justify-center bg-cover bg-center w-full"
              style={{
                backgroundImage: "url('/img/iphoneUp.png')",
                height: "300px",
              }}
            />
          </div>
          <div className="bg-white text-gray-800 rounded-lg shadow-lg flex flex-col">
            <div
              className="flex justify-center bg-cover bg-center w-full"
              style={{
                backgroundImage: "url('/img/iphoneDown.png')",
                height: "300px",
              }}
            />
            <div className="px-8 py-5">
              <h3 className="text-2xl font-semibold text-[#C9184A] mb-2">
                Instantly Convert Currency
              </h3>
              <p className="text-left text-sm text-black">
                With Nestpay, you have access to multiple secured foreign
                accounts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blue Icon positioned above the main blue container and behind the white box */}
      <Image
        className="top-0 left-0 absolute z-0" // Set z-index to 0 to place above the blue container but below the white container
        src="/img/iconBlue.png"
        alt="icon blue"
        width={250}
        height={250}
      />
    </div>
  );
};

export default About;
