import React from "react";

const Footer = () => {
  return (
    <section className="bg-black/90 pt-20 pb-12 text-darkerOffWhite font-montserrat">
      <div className="grid grid-cols-12 gap-2">
        <div className="pointer-events-none col-span-full text-sm text-center tracking-wide">
          KAIZEN Bricks and Care Pvt Ltd.
        </div>
        <div className=" pointer-events-none col-span-full text-xs text-center tracking-wide">
          Copyright © All Right Reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
