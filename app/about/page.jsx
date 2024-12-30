"use client";
import Image from "next/image";
import { useFormContext } from "@app/context";
import { founderDetails } from "@constants/aboutUs";
import { X } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import FormNew from "@components/FormNew";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const AboutPage = () => {
  const { isFormOpen, setIsFormOpen } = useFormContext();
  const [selectedFounder, setSelectedFounder] = useState(null);
  const router = useRouter();
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        x: -25,
      },
      {
        opacity: 1,
        x: 0,

        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 90%",
          end: "bottom 10%",
        },
        stagger: 0.175,
        duration: 0.25,
        delay: 0.15,

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
        duration: 0.35,
        ease: "power1.out",
      }
    );
  }, []);

  useEffect(() => {
    const handeClickOutsideModal = (e) => {
      if (overlayRef.current && !modalRef.current.contains(e.target)) {
        closeFounderDiv();
      }
    };
    document.addEventListener("mousedown", handeClickOutsideModal);
    return () => {
      document.removeEventListener("mousedown", handeClickOutsideModal);
    };
  });

  const openFounderDiv = (founder) => {
    setSelectedFounder(founder);
  };

  const closeFounderDiv = () => {
    setSelectedFounder(null);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen font-montserrat mt-10 relative "
    >
      {selectedFounder && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center font-montserrat bg-black/85"
        >
          <div
            ref={modalRef}
            className="bg-offWhite max-sm:max-h-[75vh] rounded-lg w-[50%] max-sm:w-[75%] max-md:w-[80%] overflow-scroll shadow-lg relative"
          >
            <div>
              <div className="relative w-full max-h-[90vh] ">
                <button
                  onClick={closeFounderDiv}
                  className="fixed top-5 right-5 text-offWhite hover:text-orange-600 transition-all duration-300 z-50"
                >
                  <X size={22} />
                </button>
                <div className="relative h-full">
                  <Image
                    src={selectedFounder.imageUrl}
                    alt="founder"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 py-2 px-6 bg-black max-sm:px-3 max-sm:py-1">
                    <h2 className="text-xl font-semibold text-offWhite max-sm:text-[0.8rem]">
                      {selectedFounder.name}
                    </h2>
                  </div>
                </div>
                <div className="relative mt-5 mb-5 max-sm:mt-1 max-sm:mb-1 py-3 px-7 text-[0.85rem] max-sm:text-[0.65rem]">
                  <p>{selectedFounder.detailedDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-offWhite sm:py-8 px-10 sm:px-14 lg:px-20 pb-10">
        <div className="max-w-[90rem] w-full px-2 mx-auto">
          <div>
            <div className="flex flex-col items-center justify-between gap-20 max-xl:gap-16 max-md:gap-14 max-sm:gap-10">
              <div>
                <h3 className="text-3xl max-md:text-2xl max-sm:text-xl font-semibold leading-7 text-black mb-7 pointer-events-none">
                  WHO <span className="text-orange-600">ARE</span> WE?
                </h3>
                <p className="mt-3 text-[0.9rem] max-lg:text-[0.8rem] max-md:text-sm max-sm:text-xs text-black pointer-events-none">
                  Founded in 2010, our company has been at the forefront of
                  technological innovation. We've grown from a small startup to
                  a global leader, always staying true to our core values of
                  creativity, integrity, and customer focus.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  error optio impedit eius temporibus. Consequuntur laboriosam
                  ullam nam, autem nobis tempora placeat labore vero nihil!
                  Voluptas libero earum culpa obcaecati. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Pariatur, debitis
                  temporibus unde fugiat corporis obcaecati provident!
                  Consequatur voluptatem earum velit laborum! Temporibus nulla
                  aliquid quos nobis labore possimus rerum illum! Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Facilis accusamus
                  nemo excepturi laboriosam veniam incidunt vel nisi eius,
                  quisquam omnis doloribus ratione reprehenderit soluta
                  perspiciatis libero ut error sit optio.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  error optio impedit eius temporibus. Consequuntur laboriosam
                  ullam nam, autem nobis tempora placeat labore vero nihil!
                  Voluptas libero earum culpa obcaecati. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Pariatur, debitis
                  temporibus unde fugiat corporis obcaecati provident!
                  Consequatur voluptatem earum velit laborum! Temporibus nulla
                  aliquid quos nobis labore possimus rerum illum!
                </p>
              </div>
              <div>
                <h3 className="text-3xl max-md:text-2xl max-sm:text-xl font-semibold leading-7 text-black mb-7 pointer-events-none">
                  OUR <span className="text-orange-600">KEY</span> OBJECTIVES
                </h3>
                <p className="mt-3 text-[0.9rem] max-lg:text-[0.8rem] max-md:text-sm max-sm:text-xs text-black pointer-events-none">
                  Founded in 2010, our company has been at the forefront of
                  technological innovation. We've grown from a small startup to
                  a global leader, always staying true to our core values of
                  creativity, integrity, and customer focus. Founded in 2010,
                  our company has been at the forefront of technological
                  innovation. We've grown from a small startup to a global
                  leader, always staying true to our core values of creativity,
                  integrity, and customer focus.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  error optio impedit eius temporibus. Consequuntur laboriosam
                  ullam nam, autem nobis tempora placeat labore vero nihil!
                  Voluptas libero earum culpa obcaecati. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Pariatur, debitis
                  temporibus unde fugiat corporis obcaecati provident!
                  <br />
                  <br />
                  Consequatur voluptatem earum velit laborum! Temporibus nulla
                  aliquid quos nobis labore possimus rerum illum! Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Facilis accusamus
                  nemo excepturi laboriosam veniam incidunt vel nisi eius,
                  quisquam omnis doloribus ratione reprehenderit soluta
                  perspiciatis libero ut error sit optio.
                  <br />
                  <br />
                  Founded in 2010, our company has been at the forefront of
                  technological innovation. We've grown from a small startup to
                  a global leader, always staying true to our core values of
                  creativity, integrity, and customer focus. Founded in 2010,
                  our company has been at the forefront of technological
                  innovation. We've grown from a small startup to a global
                  leader, always staying true to our core values of creativity,
                  integrity, and customer focus.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  error optio impedit eius temporibus. Consequuntur laboriosam
                  ullam nam, autem nobis tempora placeat labore vero nihil!
                  Voluptas libero earum culpa obcaecati. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Pariatur, debitis
                  temporibus unde fugiat corporis obcaecati provident!
                  <br />
                  <br />
                  Consequatur voluptatem earum velit laborum! Temporibus nulla
                  aliquid quos nobis labore possimus rerum illum! Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Facilis accusamus
                  nemo excepturi laboriosam veniam incidunt vel nisi eius,
                  quisquam omnis doloribus ratione reprehenderit soluta
                  perspiciatis libero ut error sit optio.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <div className="lg:flex lg:items-center lg:justify-between w-full">
              <div className="w-full">
                <h3 className="text-3xl max-md:text-2xl max-sm:text-xl font-semibold text-black pointer-events-none">
                  MEET <span className="text-orange-600">OUR</span> FOUNDERS
                </h3>
                <div className="mt-2 pt-4 sm:mt-5 md:mt-9 w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {founderDetails.map((founder, index) => (
                      <div
                        ref={(el) => (cardsRef.current[index] = el)}
                        key={founder.id}
                        onClick={() => openFounderDiv(founder)}
                        className="relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 cursor-pointer group"
                      >
                        <Image
                          src={founder.imageUrl}
                          alt={founder.name}
                          width={400}
                          height={300}
                          className="w-full h-[12.5rem] max-sm:h-[11rem] object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ">
                          <span className="text-white text-lg font-semibold">
                            More About{" "}
                            <span className="text-orange-600">
                              {founder.name}
                            </span>
                          </span>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl max-lg:text-lg max-md:text-sm font-semibold text-gray-800 mb-2 ">
                            {founder.name}
                          </h3>
                          <p className="text-gray-500 text-[0.9rem] max-lg:text-[0.85rem] max-sm:text-[0.7rem]">
                            {founder.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mr-10 mb-10">
        <button
          onClick={() => router.push("/")}
          className="flex justify-start mt-10 md:max-lg:mt-8 max-md:mt-5 hover:text-orange-600  transition-all duration-300 font-montserrat"
        >
          <span className="flex justify-center items-center gap-1 text-sm">
            {" "}
            <ArrowLeft size={18} />{" "}
            <span className="font-medium">Back to Home</span>
          </span>
        </button>
      </div>

      {isFormOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 z-10 pointer-events-none" />
          <div className="absolute inset-0 z-50">
            <FormNew
              title="CONTACT US"
              text1="Please give your personal details"
              text2="Please give your address details"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default AboutPage;
