"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { aboutCards } from "@constants/aboutCards";
const Brochure = () => {
  gsap.registerPlugin(ScrollTrigger);
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: -70,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 10%",
        },
        delay: 0.65,
        duration: 0.35,
        ease: "power1.in",
      }
    );
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom 10%",
        },
        duration: 0.2,
        ease: "power1.out",
      }
    );
  }, []);
  return (
    <section ref={sectionRef}>
      <div>
        <div className="relative font-montserrat">
          <div>
            <img
              src="/home interior/kitchen/kitchen-1809844.jpg"
              alt=""
              className="xl:max-2xl:h-[75vh] 2xl:h-[70vh] object-cover w-full"
            />
          </div>
          <div className="absolute inset-0 h-full w-full bg-black/65" />
          <div className="absolute inset-0 text-offWhite flex flex-col justify-center items-center text-center max-sm:gap-3 gap-4">
            <div className="text-xl font-medium">
              <button
                ref={buttonRef}
                className="flex justify-start mt-12 max-md:mt-7 md:max-lg:mt-10 border-offWhite text-offWhite bg-transparent hover:bg-offWhite hover:border-offWhite hover:text-black transition-all duration-300 border px-4 py-2 font-montserrat max-sm:text-sm max-sm:py-2 max-sm:px-2"
              >
                <span className="tracking-wider">DOWNLOAD THE BROCHURE</span>
              </button>
            </div>
            <div className="max-sm:px-6 max-sm:text-xs text-sm max-sm:max-w-md sm:max-lg:max-w-lg tracking-wide">
              Get started with our essential design guide, packed with must-know
              principles that will set the foundation for your dream space.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;
