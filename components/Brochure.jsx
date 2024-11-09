import React from "react";

const Brochure = () => {
  return (
    <section>
      <div>
        <div className="relative font-montserrat">
          <div>
            <img
              src="/home interior/kitchen/kitchen-1809844.jpg"
              alt=""
              className="xl:max-2xl:h-[75vh] 2xl:h-[70vh] object-cover w-full"
            />
          </div>
          <div className="absolute inset-0 h-full w-full bg-black/65" />
          <div className="absolute inset-0 text-offWhite flex flex-col justify-center items-center text-center max-sm:gap-3 gap-4">
            <div className="text-xl font-medium">
              <button className="flex justify-start mt-12 max-md:mt-7 md:max-lg:mt-10 border-offWhite text-offWhite bg-transparent hover:bg-offWhite hover:border-offWhite hover:text-black transition-all duration-300 border px-4 py-2 font-montserrat max-sm:text-sm max-sm:py-2 max-sm:px-2">
                <span className="tracking-wider">DOWNLOAD THE BROCHURE</span>
              </button>
            </div>
            <div className="max-sm:px-6 max-sm:text-xs text-sm max-sm:max-w-md sm:max-lg:max-w-lg tracking-wide">
              Get started with our essential design guide, packed with must-know
              principles that will set the foundation for your dream space.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;
