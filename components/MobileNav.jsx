"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Import VisuallyHidden

const links = [
  {
    name: "about us",
    path: "/about",
  },
  {
    name: "features",
    path: "/features",
  },
  {
    name: "how it works",
    path: "/projects",
  },
  {
    name: "faqs",
    path: "/faqs",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <LuMenu className="text-[32px] text-black" />
      </SheetTrigger>
      <SheetContent className="flex flex-col" side="right">
        <VisuallyHidden>
          <SheetTitle>Menu</SheetTitle> {/* Hides the title visually */}
        </VisuallyHidden>

        <div className="mt-32 mb-14 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-3xl font-semibold">NestPay</h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path === pathname &&
                  "text-accent  border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
