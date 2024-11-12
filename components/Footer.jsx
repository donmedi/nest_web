import Image from "next/image";
import Link from "next/link";
import React from "react";

import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 md:px-20 text-gray-700 mt-10 mb-20">
      <div className="max-w-6xl container mx-auto grid grid-cols-1 gap-8 text-center md:text-left md:grid-cols-2">
        <div>
          <Image
            src={"/img/logo.png"}
            alt={"NestPay"}
            width={100}
            height={100}
            className="mx-auto md:mx-0 mb-4"
          />
          <p className="text-sm mb-4 max-w-md">
            NestPay operates through licenses held across countries, and through
            partnerships with fully licensed and nationally chartered banks.
          </p>
          <h3 className="font-semibold mb-2">Subscribe to our newsletter</h3>
          <p className="text-sm mb-4">We promise not to spam you.</p>
          <div className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="name@example.com"
              className="border border-gray-300 rounded-l-md p-2 w-60 text-sm"
            />
            <button className="bg-blue-600 text-white px-4 rounded-r-md">
              →
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 text-center md:text-left md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold text-gray-500 mb-3">
              COMPANY
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-sm hover:text-blue-500">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#howItWorks"
                  className="text-sm hover:text-blue-500"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="#Testimonials"
                  className="text-sm hover:text-blue-500"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="text-sm hover:text-blue-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-500 mb-3">LEGAL</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-blue-500">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-500 mb-3">
              CONTACT US
            </h4>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
