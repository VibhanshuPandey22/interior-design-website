"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { aboutCards } from "@constants/aboutCards";
import { useRouter } from "next/navigation";

const AboutUs = () => {
  gsap.registerPlugin(ScrollTrigger);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);
  const router = useRouter();

  useGSAP(() => {
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        x: -300,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 90%",
          end: "bottom 10%",
        },
        delay: 0.31,
        duration: 0.75,
        ease: "power2.inOut",
      }
    );
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
        stagger: 0.17,
        duration: 0.27,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      ".animate1",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".animate1",
          start: "top 90%",
          end: "bottom 10%",
        },
        duration: 0.35,
        ease: "power1.out",
      }
    );

    gsap.fromTo(
      ".animate2",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".animate2",
          start: "top 90%",
          end: "bottom 10%",
        },
        duration: 0.35,
        ease: "power1.out",
      }
    );
  }, []);
  return (
    <section
      id="about"
      className="pt-16 max-sm:pt-12 bg-darkerOffWhite pb-16 max-sm:pb-12"
    >
      <div className="px-6 h-full grid grid-cols-12 gap-5 text-[0.7rem] sm:max-md:text-xs md:max-lg:text-sm lg:text-[1rem] font-montserrat">
        <div className="animate1 col-span-full lg:col-span-6 flex flex-col gap-3">
          <div>
            <h1 className="text-xl md:max-xl:text-2xl xl:text-3xl text-left font-medium">
              ABOUT BRICKS AND CARE
            </h1>
          </div>
          <div>
            <p className="pt-5 max-md:pt-2 text-left max-md:text-sm max-md:leading-relaxed text-sm leading-relaxed md:max-lg:text-[0.9rem] lg:text-[1rem]">
              Bricks and Care has years of experience in the industry and we
              believe that great design is about more than just aesthetics, it's
              about creating spaces that improve the way you live and work.
              <span className="text-orange-600">
                {" "}
                Founded by Mr. Anand Singh, our firm has a passion for blending
                form, function, and innovation.
              </span>{" "}
              <br />
              <br />
              With a team of experienced architects and interior designers, we
              have successfully completed an extensive array of projects,
              ranging from cozy residential homes to expansive commercial
              complexes. Our team brings creativity, expertise, and attention to
              detail to each project. Our portfolio is much reflective of our
              commitment to meeting the unique needs and visions of our clients.
              <button
                onClick={() => router.push("/about")}
                ref={buttonRef}
                className="flex justify-start mt-12 max-md:mt-7 md:max-lg:mt-10 border-black text-black bg-darkerOffWhite hover:bg-black hover:border-black hover:text-darkerOffWhite transition-all duration-300 border px-3 py-1 font-montserrat max-sm:text-xs max-sm:py-1 max-sm:px-2"
              >
                <span className="tracking-wide">LEARN MORE</span>
              </button>
            </p>
          </div>
        </div>
        <div className="animate2 h-[60vh] max-md:h-screen max-lg:mt-8 relative col-span-full lg:col-span-6 w-full overflow-hidden">
          <Image
            src="/bg5.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 grid grid-cols-12 gap-5 my-5 mx-5">
            {aboutCards.map((card, index) => (
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                key={card.id}
                className="flex flex-col justify-center items-center bg-offWhite shadow-md h-30 w-30 col-span-6 max-md:col-span-full"
              >
                <div>
                  <img src={card.imgUrl} alt="card" />
                </div>
                <div className=" font-montserrat max-md:text-[0.875rem] mt-4 font-medium">
                  {card.title}
                </div>
                <div className="font-montserrat text-xs xl:text-sm text-orange-600 mt-1">
                  {card.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
