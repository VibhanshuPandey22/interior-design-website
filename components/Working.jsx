"use client";
import { steps } from "@constants/howWeWork";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { useFormContext } from "@app/context";

const Working = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const cardsRef1 = useRef([]);
  const cardsRef2 = useRef([]);
  const lineRef1 = useRef(null);
  const lineRef2 = useRef(null);

  const { isFormOpen, setIsFormOpen } = useFormContext();
  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  useGSAP(() => {
    gsap.fromTo(
      cardsRef1.current,
      {
        opacity: 0,
        x: -70,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 10%",
        },
        duration: 0.3,
        ease: "power2.in",
      }
    );
    gsap.fromTo(
      cardsRef2.current,
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 10%",
        },
        duration: 0.3,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      lineRef1.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 10%",
        },
        delay: 2,
        duration: 0.5,
        ease: "power2.in",
      }
    );
    gsap.fromTo(
      lineRef2.current,
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 10%",
        },
        delay: 2,
        duration: 0.5,
        ease: "power2.in",
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
          start: "top 80%",
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
      className="relative pt-16 pb-16 h-80 max-md:h-[75vh] max-xs:h-[70vh] bg-darkerOffWhite border-b"
    >
      {/* Desktop View */}
      <div className="font-montserrat h-full max-md:hidden">
        <div className="h-full">
          <div className="flex justify-center items-center text-2xl xl:text-3xl font-medium tracking-wider ">
            <p>
              HOW <span className="text-orange-600">WE</span> WORK ?
            </p>
          </div>
          <div className="h-full relative xl:pt-28">
            <div
              ref={lineRef1}
              className="absolute inset-0 top-1/2 h-0 w-[75%] left-[12.5%] border-dashed border-black/60 border"
            />
            <div className="absolute flex justify-around items-center inset-0 lg:px-10 xl:px-14 2xl:px-20 h-full">
              {steps.map((step, index) => (
                <div
                  onClick={toggleForm}
                  key={index}
                  ref={(el) => (cardsRef1.current[index] = el)}
                  className="rounded-xl cursor-pointer bg-offWhite hover:shadow-lg transition-all duration-200 p-3 xl:p-4 text-black drop-shadow-lg flex flex-col gap-1 items-center justify-center xl:text-[0.9rem] max-xl:text-sm"
                >
                  {step.icon}
                  <span className="pointer-events-none">{step.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="font-montserrat h-full md:hidden">
        <div className="h-full">
          <div className="mb-5 text-right pr-5 sm:pr-8 font-medium tracking-wider text-lg sm:text-xl">
            <p>
              HOW <span className="text-orange-600">WE</span> WORK ?
            </p>
          </div>
          <div className="grid grid-cols-12 h-full">
            <div className="h-full relative col-span-12">
              <div
                ref={lineRef2}
                className="absolute inset-0 left-1/2 w-0 border-dashed border-black/60 border h-[87.5%] top-[5%]"
              />
              <div className="absolute flex flex-col justify-around items-center inset-0 h-full text-[0.95rem] max-sm:text-sm">
                {steps.map((step, index) => (
                  <div
                    onClick={toggleForm}
                    key={index}
                    ref={(el) => (cardsRef2.current[index] = el)}
                    className="h-16 cursor-pointer bg-offWhite w-[70vw] max-sm:w-[90vw] drop-shadow-md hover:shadow-lg transition-all duration-200 px-20 text-black grid grid-cols-12 gap-3"
                  >
                    <div className="col-span-4 flex items-center justify-end">
                      {step.icon}
                    </div>
                    <div className="col-span-8 flex items-center justify-start pointer-events-none">
                      {step.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
