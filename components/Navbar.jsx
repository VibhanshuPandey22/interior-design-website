"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navLinks1, navLinks2 } from "@constants/navbarLists";

const Navbar = () => {
  const [isShadowVisible, setIsShadowVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.querySelector("#hero").clientHeight;
      setIsShadowVisible(window.scrollY > heroSectionHeight * 0.08);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-fit bg-offWhite fixed py-1 px-6 flex items-center z-50 max-sm:px-5 ${
        isShadowVisible && "shadow-md"
      }`}
    >
      <div className="flex w-full justify-between items-center h-full">
        <div>
          <Image
            src="/logo_coloured.png"
            className="max-lg:hidden"
            alt="logo navbar"
            height={170}
            width={170}
            priority
          />
          <Image
            src="/logo_coloured.png"
            className="hidden sm:max-lg:block"
            alt="logo navbar"
            height={150}
            width={150}
            priority
          />
          <Image
            src="/logo_coloured.png"
            className="sm:hidden"
            alt="logo navbar"
            height={130}
            width={130}
            priority
          />
        </div>
        <div>
          <ul className="flex max-md:hidden md:max-lg:gap-5 md:max-lg:text-xs lg:gap-8 text-sm">
            {navLinks1.map((link, index) => (
              <li
                className="cursor-pointer hover:text-orange-600 font-montserrat font-normal tracking-wide transition-all duration-200"
                key={index}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="max-md:hidden">
            <button className="border-black bg-offWhite text-black hover:bg-black hover:text-offWhite transition-all duration-200 border px-2 py-[0.4rem] text-sm font-montserrat max-sm:text-[0.6rem] sm:max-md:text-[0.7rem] sm:max-md:py-[0.2rem] max-sm:py-[0.15rem] max-sm:px-2 md:max-lg:text-[0.75rem] md:max-lg:py-[.28rem] md:max-lg:px-[0.4rem]">
              <span> START NOW</span>
            </button>
          </div>

          <div
            onClick={toggleMenu}
            className="md:hidden cursor-pointer hover:text-orange-500 transition-all duration-[180ms]"
          >
            <MenuIcon />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="z-100 absolute inset-0 w-screen h-fit pb-10 bg-offWhite shadow-md">
          <div
            onClick={toggleMenu}
            className="hover:text-orange-500 transition-all duration-200 mt-4 pl-2 mb-4 cursor-pointer w-fit"
          >
            <CloseIcon fontSize="small" />
          </div>
          <ul className="flex flex-col items-end gap-7 text-sm pr-5">
            {navLinks2.map((link, index) => (
              <li
                className="cursor-pointer hover:text-orange-500 font-montserrat font-normal tracking-wide transition-all duration-[180ms]"
                key={index}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
