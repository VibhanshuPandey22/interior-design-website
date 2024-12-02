"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useFormContext } from "@app/context";

const ContactUs = () => {
  const { isFormOpen, setIsFormOpen } = useFormContext();

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
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
          start: "top 95%",
          end: "bottom 5%",
        },
        duration: 0.5,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-14 pb-14 md:max-lg:pt-16 md:max-lg:pb-16 lg:pt-20 lg:pb-20  bg-darkerOffWhite border-t font-montserrat px-5"
    >
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-full text-center flex flex-col gap-4 xl:gap-7 items-center justify-center">
          <div className="text-xl md:text-2xl xl:text-3xl font-medium tracking-wide">
            CONNECT WITH US
          </div>
          <div className="max-sm:text-xs text-sm lg:text-[0.85rem] xl:text-[1.05rem] max-w-sm lg:max-w-lg xl:max-w-5xl tracking-wide">
            Contact us via Gmail or start now by sharing your details to enjoy
            the ultimate home design experience.
          </div>
        </div>
        <div className=" col-span-full flex items-center justify-center gap-5 xl:gap-6 mt-3 xl:mt-5">
          <div>
            <button
              onClick={toggleForm}
              className="flex gap-2 rounded-full justify-center items-centertransition-all duration-300 px-4 py-2 bg-offWhite drop-shadow-md hover:drop-shadow-lg text-sm xl:text-[1.05rem] xl:py-3"
            >
              <span>
                <img src="/call.svg" height={22} width={22} alt="" />
              </span>
              <span className="tracking-wide text-blue-600">Get started</span>
            </button>
          </div>
          <div>
            <a
              className="rounded-full transition-all duration-300 px-4 py-2 bg-offWhite drop-shadow-md hover:drop-shadow-lg text-sm xl:text-[1.05rem] xl:py-3 flex gap-2 justify-center items-center w-full"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kaizenspreadsheet@gmail.com"
              target="_blank"
            >
              <span>
                <img src="/gmail.svg" height={22} width={22} alt="" />
              </span>
              <span className="tracking-wide text-green-600">Message us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
