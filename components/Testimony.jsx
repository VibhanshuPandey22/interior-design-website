"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Testimony = () => {
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
          start: "top 85%",
          end: "bottom 15%",
        },
        duration: 0.5,
        ease: "power1.out",
      }
    );
    gsap.fromTo(
      ".animate",
      {
        opacity: 0,
        x: 75,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 15%",
        },
        duration: 0.5,
        delay: 1,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="p-6 sm:p-8 font-montserrat mt-5 mb-5">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-full md:col-span-6">
          <div className="relative w-full pt-[56.25%] ">
            {" "}
            {/*56.25 is 9/16 => Aspect Ratio 16:9 */}{" "}
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              controls
              preload="none"
              poster="/home interior/Study room/book-2595920.jpg"
            >
              <source src="/videos/sampleTestimony.mp4" type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="col-span-full md:col-span-6 flex flex-col items-center justify-center">
          <div className="text-xl sm:text-2xl font-medium tracking-wide mt-2 sm:mt-4 text-center xl:text-3xl">
            HEAR IT FROM OUR CLIENTS
          </div>
          <div className="animate font-normal text-sm mt-3 sm:mt-5 text-center italic max-w-sm sm:max-w-lg md:max-lg:max-w-sm lg:max-w-md xl:max-w-lg xl:text-[1rem] text-black/85">
            "Our experience with Livspace was pleasurable because of the project
            managers. The work got done before 45 days just the way we wanted it
            to be."
          </div>
          <div className=" animate text-xs mt-6 sm:mt-7 text-center font-medium lg:text-[0.85rem] xl:text-[0.9rem]">
            Vibhanshu and Priyanshu
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
