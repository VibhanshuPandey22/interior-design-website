"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { serviceCards } from "@constants/aboutCards";

const Services = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  useGSAP(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 90%",
          end: "bottom 10%",
        },
        stagger: 0.125,
        duration: 0.25,
        ease: "power2.inOut",
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
        duration: 0.5,
        ease: "power1.out",
      }
    );
  }, []);
  return (
    <section
      id="services"
      ref={sectionRef}
      className="border-b-[1px] pt-16 pb-16 max-sm:pt-12 max-sm:pb-12 bg-darkerOffWhite"
    >
      <div className="font-montserrat flex flex-col justify-center items-center">
        <div className="font-medium tracking-normal text-xl md:max-lg:text-2xl lg:text-3xl flex max-md:flex-col justify-center items-center mb-10 max-sm:mb-8">
          <div className="max-md:hidden">THE BEST SERVICES, JUST FOR YOU</div>
          <div className="animate md:hidden text-center">
            <span>THE BEST SERVICES</span>
            <br />
            <span>JUST FOR YOU</span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 w-full px-10 max-sm:px-6">
          {serviceCards.map((card, index) => (
            <div
              ref={(el) => (cardsRef.current[index] = el)}
              key={card.id}
              className=" flex rounded-xl hover:shadow-lg transition-all duration-300 flex-col justify-center items-center py-6 px-5 bg-offWhite shadow-md h-30 w-full col-span-6 max-md:col-span-full text-center"
            >
              <div>
                <img
                  className="pointer-events-none"
                  src={card.imgUrl}
                  alt="card"
                />
              </div>
              <div className="pointer-events-none font-montserrat max-md:text-[0.875rem] mt-4 font-medium">
                {card.id}. {card.title}
              </div>
              <div className="pointer-events-none font-montserrat text-xs xl:text-sm text-orange-600 mt-1">
                {card.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="flex justify-start mt-14 md:max-lg:mt-12 max-md:mt-10 border-black text-black bg-offWhite hover:bg-black hover:border-black hover:text-offWhite transition-all duration-300 border px-3 py-1 font-montserrat max-sm:text-xs max-sm:py-1 max-sm:px-2">
            <span className="tracking-wide">OUR SERVICES</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
