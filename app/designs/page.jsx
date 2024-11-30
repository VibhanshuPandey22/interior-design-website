"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Image from "next/image";
import { useFormContext } from "@app/context";
import { roomTypes, designs } from "@constants/designs";
import { X } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import FormNew from "@components/FormNew";

const Designs = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const modalRef = useRef(null); // Ref for the modal content
  const overlayRef = useRef(null); // Ref for the overlay (background)

  useGSAP(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,

        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 90%",
          end: "bottom 10%",
        },
        stagger: 0.125,
        duration: 0.275,

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
        duration: 0.4,
        ease: "power1.out",
      }
    );
  }, []);

  useEffect(() => {
    const handeClickOutsideModal = (e) => {
      if (overlayRef.current && !modalRef.current.contains(e.target)) {
        closeImage();
      }
    };
    document.addEventListener("mousedown", handeClickOutsideModal);
    return () => {
      document.removeEventListener("mousedown", handeClickOutsideModal);
    };
  });

  const [selectedType, setSelectedType] = useState("All");
  const [selectedDesign, setSelectedDesign] = useState(null);
  const { isFormOpen, setIsFormOpen } = useFormContext();
  const router = useRouter();

  const filteredDesigns =
    selectedType === "All"
      ? designs
      : designs.filter((design) => design.type === selectedType);

  const openImage = (design) => {
    setSelectedDesign(design);
  };

  const closeImage = () => {
    setSelectedDesign(null);
  };

  return (
    <section ref={sectionRef} className="mt-4">
      <div className="min-h-screen bg-offWhite py-12 px-4 sm:px-6 lg:px-8 font-montserrat">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl max-md:text-3xl font-semibold text-left max-md:text-center text-gray-900 mb-10 mt-5">
            VIEW OUR DESIGNS
          </h1>

          <div className="flex flex-wrap justify-start max-md:justify-center gap-4 max-sm:gap-2 mb-12 ">
            {roomTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2 rounded-full text-sm max-sm:text-[0.8rem] font-medium transition-colors duration-300 ${
                  selectedType === type
                    ? "bg-orange-600 text-white"
                    : "bg-white text-gray-700 hover:bg-orange-100"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDesigns.map((design, index) => (
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                key={design.id}
                onClick={() => openImage(design)}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Image
                  src={design.image}
                  alt={design.title}
                  width={400}
                  height={300}
                  className="w-full h-[12.5rem] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl max-lg:text-lg font-semibold text-gray-800 mb-2 ">
                    {design.title}
                  </h3>
                  <p className="text-gray-500 text-[0.9rem] max-sm:text-sm">
                    {design.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedDesign && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 font-montserrat"
        >
          <div
            ref={modalRef}
            className="bg-offWhite rounded-lg overflow-hidden shadow-lg max-w-[95%] max-h-[90%] relative"
          >
            <div className="relative w-full h-full max-h-[90vh] overflow-auto">
              <button
                onClick={closeImage}
                className="absolute top-3 left-3 text-offWhite hover:text-orange-600 transition-all duration-300"
              >
                <X size={20} />
              </button>
              <Image
                src={selectedDesign.image}
                alt={selectedDesign.title}
                width={1000}
                height={800}
                className="w-full h-full object-contain overflow-scroll"
              />
            </div>
            <div className="absolute bottom-0 right-0 p-3 bg-black">
              <h2 className="text-2xl font-semibold text-offWhite">
                {selectedDesign.title}
              </h2>
            </div>
          </div>
        </div>
      )}

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

export default Designs;
