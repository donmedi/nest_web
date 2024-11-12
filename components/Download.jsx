import Image from "next/image";
import Link from "next/link";
import React from "react";

const Download = () => {
  return (
    <div className="flex items-center justify-between bg-blue-600 text-white py-12 px-6 md:px-20 rounded-xl shadow-lg max-w-5xl mx-auto my-24 ">
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center md:text-left">
          Getting started takes <br className="hidden md:block" /> just a few
          taps
        </h2>
        <p className="text-base mb-6 text-center md:text-left">
          From creating your account to securing with your pin can be achieved
          in less than 3 minutes.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="">
            <Image
              src="/img/googleLight.png"
              alt="Get it on Google Play"
              width={150}
              height={150}
            />
          </Link>

          <Link href="#" className="">
            <Image
              src="/img/appleLight.png"
              alt="Download on the App Store"
              width={150}
              height={150}
            />
          </Link>
        </div>

        <div className="flex gap-4"></div>
      </div>
    </div>
  );
};

export default Download;
