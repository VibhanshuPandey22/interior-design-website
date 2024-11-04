"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@constants/carouselSlides";

const SingleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="mt-6 flex items-center justify-center gap-3 px-3 overflow-hidden">
      <div className="relative w-full max-w-4xl mx-auto px-3">
        <div
          className="flex duration-500 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 p-2">
              <div className="relative h-[15rem] sm:h-[20rem] rounded-lg overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 font-urbanist">
                  <h2 className="text-offWhite text-lg sm:text-2xl font-bold">
                    {slide.title}
                  </h2>
                  <p className="text-offWhite text-sm sm:text-base font-normal">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SingleCarousel;
