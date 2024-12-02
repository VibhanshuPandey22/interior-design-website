"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { services } from "@constants/services";
import { useFormContext } from "@app/context";
import FormNew from "@components/FormNew";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const ourServices = () => {
  const { isFormOpen, setIsFormOpen } = useFormContext();
  const [learnMore, setLearnMore] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const router = useRouter();

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

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
        stagger: 0.175,
        duration: 0.25,
        delay: 0.6,

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
        duration: 0.3,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="font-montserrat ">
      <div className="min-h-screen bg-darkerOffWhite">
        <div className="max-w-[90rem] mx-auto py-6 px-5 sm:px-6 lg:px-7 ">
          <div className="relative h-64 sm:h-80 md:h-[26rem] xl:h-[28rem] rounded-lg overflow-hidden mb-8 pointer-events-none">
            <Image
              src="/bg4.jpg"
              alt="Interior Design Services"
              layout="fill"
              objectFit="cover"
              className="filter brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">
                  <span className="text-cyan-100">TRANSFORM</span> YOUR SPACE
                </h2>
                <p className="mt-2 sm:mt-3 max-w-md mx-auto text-xs sm:text-sm md:text-base tracking-wide lg:text-[1.1rem] text-gray-300 md:max-w-3xl">
                  Elevate your home with our professional services
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                key={index}
                className="relative bg-offWhite shadow-lg overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-5 sm:p-8">
                  <div className="flex items-center justify-center h-14 w-14 sm:h-24 sm:w-24 rounded-full mx-auto border-2 border-black">
                    {service.icon}
                  </div>
                  <div className="mt-4 sm:mt-8 text-center">
                    <h3 className="text-lg font-medium text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="absolute cursor-pointer inset-0 bg-black/90 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center text-center">
                  <p className="text-white text-center text-xs sm:text-[0.8rem] lg:text-sm px-12 py-5">
                    {service.detailedDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 rounded-lg shadow-xl overflow-hidden relative mb-5">
            <Image
              src="/bg5.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />

            <div className="relative bg-black/50  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-xl sm:text-2xl px-1 md:text-3xl font-bold tracking-wide text-white">
                  READY TO TRANSFORM YOUR SPACE?
                </h2>
                <p className="mt-3 px-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-200">
                  Book a consultation with our expert designers and start your
                  journey to a beautiful home.
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={toggleForm}
                    className="flex justify-start mt-8 max-md:mt-5 md:max-lg:mt-7 text-black bg-offWhite hover:bg-black hover:text-offWhite transition-all duration-300  px-5 py-2 font-montserrat max-lg:text-sm max-sm:text-xs max-sm:py-2 max-sm:px-3"
                  >
                    BOOK A CONSULTATION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pr-10 pb-10 bg-darkerOffWhite">
        <button
          onClick={() => router.push("/")}
          className="flex justify-start mt-4 md:max-lg:mt-8 max-md:mt-5 hover:text-orange-600  transition-all duration-300 font-montserrat"
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

export default ourServices;
