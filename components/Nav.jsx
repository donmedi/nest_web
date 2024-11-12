"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "about us",
    path: "#about",
  },
  {
    name: "features",
    path: "#features",
  },
  {
    name: "how it works",
    path: "#howItWorks",
  },
  {
    name: "faqs",
    path: "#faqs",
  },
];
const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            className={`capitalize font-medium transition-all hover:text-blue-500 
  ${
    link.path === pathname
      ? "text-blue-500 border-b-2 border-blue-500" // Active link styles
      : "text-black" // Inactive link styles
  }`}
            key={index}
            href={link.path}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
