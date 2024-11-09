"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@constants/carouselSlides";

const DoubleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 2 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 2 ? 0 : prevIndex + 1
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
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-1/2 h-full flex-shrink-0 p-2">
              <div className="relative h-[16rem] rounded-lg overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 font-montserrat">
                  <h2 className="text-offWhite text-lg sm:text-xl font-medium">
                    {slide.title}
                  </h2>
                  <p className="text-offWhite text-sm">{slide.description}</p>
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
          <ChevronLeft size={22.5} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={22.5} />
        </button>
      </div>
    </div>
  );
};

export default DoubleCarousel;
