import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      cl
      style={{
        backgroundImage: "url('/img/banner_bg2.png')",

        // backgroundSize: "cover",
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat",
        // height: "450px",
        // borderTopLeftRadius: "30px",
      }}
    >
      <div className="container mx-auto h-full py-10 px-4 lg:px-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-10 md:space-y-32">
            <div className="space-y-5">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Your Gateway to <br /> Global Finance
              </h1>
              <p className="text-gray-600">
                NestPay is your all-in-one payment platform designed to
                streamline and enhance your financial operations over 100
                countries.
              </p>
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition duration-200">
                Get started →
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center lg:justify-start mt-4 gap-4">
                <Image
                  src="/img/googleBtn.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={150}
                />
                <Image
                  src="/img/appleBtn.png"
                  alt="Download on the App Store"
                  width={150}
                  height={150}
                />
              </div>
              <p className=" text-gray-500 text-sm text-center lg:text-left">
                Download our apps, we have the best ratings
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="flex justify-center  bg-contain bg-no-repeat bg-center w-full"
            style={{
              backgroundImage: "url('/img/hero.png')",

              height: "600px",
            }}
          ></div>
        </div>
        {/* 
      <div className="absolute bottom-0 right-0 ">
        <Image src={"/img/icon2.png"} alt="" width={100} height={100} />
      </div> */}
      </div>
    </div>
  );
};

export default Hero;
