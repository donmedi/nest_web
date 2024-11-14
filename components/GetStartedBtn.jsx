import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const GetStartedBtn = () => {
  return (
    <Link href="#">
      <button className="bg-primary w-fit flex items-center text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition duration-200">
        Get started <GoArrowUpRight className="ml-2" size={20} />
      </button>
    </Link>
  );
};

export default GetStartedBtn;
