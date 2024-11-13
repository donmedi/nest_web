import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-blue-600 text-white py-14 px-4 md:px-28 mb-60 relative -z-10"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-7 items-center">
        <div>
          <h2 className="text-4xl md:text-4xl font-medium leading-snug w-full">
            Experience seamless payment of across continent
          </h2>
        </div>

        <div>
          <p className="text-xl leading-snug w-full text-gray-200">
            Enjoy a comprehensive payment option with your Nestpay account and
            24/7 customer support.
          </p>
        </div>
      </div>

      <div
        style={{
          borderRadius: "30px",
        }}
        className="bg-white text-black mt-14 -mb-60 px-0 md:px-10 py-10 rounded-lg shadow-lg relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 px-7 py-10 gap-14">
          <div
            style={{
              borderRadius: "30px",
              border: "1px solid #BABABA29",
            }}
            className="bg-white text-gray-800 rounded-lg shadow-lg flex flex-col"
          >
            <div
              className="flex justify-center bg-cover bg-center w-full"
              style={{
                backgroundImage: "url('/img/iphoneDown2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center bottom",
                backgroundRepeat: "no-repeat",
                height: "450px",
                borderTopLeftRadius: "30px",
              }}
            />
            <div className="p-10">
              <h3 className="text-2xl font-bold text-[#1774F6] mb-2">
                Multi-Currency <br /> Account
              </h3>
              <p className="text-left text-md text-black">
                With Nestpay, you have access to multiple secured foreign
                accounts.
              </p>
            </div>
          </div>
          <div
            style={{
              borderRadius: "30px",
              border: "1px solid #BABABA29",
            }}
            className="bg-white text-gray-800 rounded-lg shadow-lg flex flex-col  "
          >
            <div className="p-10">
              <h3 className="text-2xl font-bold text-[#FCA311] mb-2">
                Payment <br /> Tracking
              </h3>
              <p className="text-left text-md text-black">
                Track your payment with our <br /> comprehensive payment
                reporting
              </p>
            </div>
            <div
              className="bg-cover bg-center w-full"
              style={{
                backgroundImage: "url('/img/iphoneUp.png')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
                height: "450px",
                borderBottomRightRadius: "30px",
              }}
            />
          </div>
          <div
            style={{
              borderRadius: "30px",
              border: "1px solid #BABABA29",
            }}
            className="bg-white text-gray-800 rounded-lg shadow-lg flex flex-col"
          >
            <div
              className="flex justify-center bg-cover bg-center w-full"
              style={{
                backgroundImage: "url('/img/iphoneDown5.png')",
                backgroundSize: "cover",
                backgroundPosition: "center bottom",
                backgroundRepeat: "no-repeat",
                height: "450px",
                borderTopLeftRadius: "30px",
              }}
            />
            <div className="p-10">
              <h3 className="text-2xl font-bold text-[#C9184A] mb-2">
                Instantly Convert <br /> Currency
              </h3>
              <p className="text-left text-md text-black">
                Convert currency with ease and enjoy <br /> zero processing
                delay
              </p>
            </div>
          </div>
        </div>
      </div>

      <Image
        className="top-0 left-0 absolute z-0"
        src="/img/iconBlue.png"
        alt="icon blue"
        width={250}
        height={250}
      />
    </div>
  );
};

export default About;
