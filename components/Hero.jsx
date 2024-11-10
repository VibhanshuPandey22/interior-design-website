"use client";
import React from "react";
import Image from "next/image";
import { useRef } from "react";
import { useFormContext } from "@app/context";

const Hero = () => {
  const { isFormOpen, setIsFormOpen } = useFormContext();
  const textRef = useRef(null);

  return (
    <section
      id="hero"
      className={`relative mb-0 pb-0 h-screen max-md:h-[75vh] w-full overflow-hidden `}
    >
      <div className="relative w-full h-full">
        <Image
          className="sm:hidden"
          src="/bg_sm.png"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <Image
          className="max-sm:hidden"
          src="/bg_maxsm.png"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-0" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-12 px-4 text-center text-black h-full items-center">
          <div className="w-full col-span-9 sm:max-md:col-span-9 md:max-lg:col-span-9 lg:max-xl:col-span-8 xl:max-2xl:col-span-8 2xl:col-span-7 max-md:ml-5 md:ml-2 lg:max-xl:ml-10">
            <div>
              <h1 className="font-medium tracking-wider text-left pointer-events-none w-full font-montserrat text-[1.7rem] sm:max-md:text-[2rem] md:max-lg:text-[2.35rem] lg:text-[2.9rem] leading-[1.1]">
                <span className="leading-tight w-full ">
                  TRANSFORMING SPACES,
                </span>
                <br />
                <span>ELEVATING EXPERIENCES</span>
              </h1>
            </div>
            <div>
              <p className="text-left pointer-events-none mt-7 font-montserrat max-sm:mb-4 max-sm:text-xs max-w-[18rem] sm:max-w-sm md:max-w-md lg:max-w-xl sm:max-lg:text-xs md:max-lg:text-sm lg:text-[1rem] ">
                <span className="leading-normal">
                  We specialize in architecture and interior design, creating
                  inspiring spaces that fulfill your vision. Build your dream
                  home with bricks and care.
                </span>
              </p>
            </div>

            <button className="flex justify-start mt-7 border-black text-offWhite bg-black hover:bg-offWhite hover:border-black hover:text-black transition-all duration-300 border px-4 py-2 font-montserrat max-sm:text-xs max-sm:py-1 max-sm:px-2">
              <span className="tracking-wide"> LEARN MORE</span>
            </button>
          </div>
          {/* <div className="col-span-5 h-full w-full flex items-center justify-center">
            <div className="h-[70%] w-full bg-white"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
