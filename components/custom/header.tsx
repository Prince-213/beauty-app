import React from "react";
import FixedAdvertTop from "./FixedAdvertTop";
import { Search, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" w-full">
      <FixedAdvertTop />
      <header className="w-[90%] mx-auto py-[20px] flex items-center justify-between">
        <div className=" max-w-fit leading-[0] flex flex-col justify-center">
          <h1 className=" font-melodrama font-medium text-darkslategreen text-6xl">
            fab.
          </h1>
          <h1 className=" font-poppins  text-darkslategreen text-sm text-center uppercase">
            skin care
          </h1>
        </div>
        <nav className=" text-black text-lg flex items-center space-x-10">
          <Link
            href={"/"}
            className=" hover:underline hover:text-darkslategreen transition-all duration-200 delay-75 ease-in"
          >
            Home
          </Link>
          <Link
            href={"/shop"}
            className=" hover:underline hover:text-darkslategreen transition-all duration-200 delay-75 ease-in"
          >
            Shop All
          </Link>
          <Link
            href={"/"}
            className=" hover:underline hover:text-darkslategreen transition-all duration-200 delay-75 ease-in"
          >
            Our Story
          </Link>
          <Link
            href={"/"}
            className=" hover:underline hover:text-darkslategreen transition-all duration-200 delay-75 ease-in"
          >
            Contact Us
          </Link>
        </nav>
        <div className=" flex items-center space-x-5">
          <Search />
          <div className=" relative">
            <ShoppingBagIcon />
            <div className=" w-6 h-6 rounded-full bg-darkslategreen flex items-center justify-center absolute -top-3 -right-2">
              <p className=" text-white font-medium">3</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
