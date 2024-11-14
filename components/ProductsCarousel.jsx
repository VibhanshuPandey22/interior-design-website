"use client";
import SingleCarousel from "./SingleCarousel";
import DoubleCarousel from "./DoubleCarousel";
import TripleCarousel from "./TripleCarousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const ProductsCarousel = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const router = useRouter();

  useGSAP(() => {
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
        duration: 0.5,
        ease: "power1.out",
      }
    );
  }, []);
  return (
    <section
      ref={sectionRef}
      className="border-y-[1px] pt-20 pb-20 max-sm:pt-14 max-sm:pb-14"
    >
      <div>
        <div className=" gap-3 mx-0 md:max-lg:ml-9 lg:max-xl:ml-8 xl:ml-10 font-montserrat  flex flex-col items-start max-md:items-center justify-start max-md:px-10">
          <h1 className="text-xl lg:text-2xl  max-md:text-center font-medium">
            DESIGNS THAT SUIT EVERY STYLE
          </h1>
          <p className=" mb-5 max-lg:mb-2 max-md:text-xs lg:text-[0.95rem] text-sm max-sm:max-w-sm max-md:max-w-lg text-left max-md:text-center  text-black/85">
            High-quality finishes, stylish designs, and premium modules at
            budget-friendly prices.
          </p>
        </div>
        <div className="md:hidden">
          <SingleCarousel />
        </div>
        <div className="md:max-lg:block hidden">
          <DoubleCarousel />
        </div>
        <div className="max-lg:hidden">
          <TripleCarousel />
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/designs")}
            className="flex justify-start mt-12 md:max-lg:mt-10 max-md:mt-7 border-black text-black bg-offWhite hover:bg-black hover:border-black hover:text-offWhite transition-all duration-300 border px-3 py-1 font-montserrat max-sm:text-xs max-sm:py-1 max-sm:px-2"
          >
            <span className="tracking-wide"> SEE MORE DESIGNS</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
