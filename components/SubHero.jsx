"use client";
import React, { useRef } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddHomeIcon from "@mui/icons-material/AddHome";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const SubHero = () => {
  return (
    <section className=" w-full max-h-[50vh] border-y-[1px]">
      <div className="w-full flex justify-evenly max-md:flex-col max-md:gap-10 items-center max-md:py-14 py-20 ">
        <div className="w-full flex gap-4 flex-col max-md:flex-row max-md:justify-start max-md:pl-12 items-center justify-center">
          <div className="bg-black p-4 max-md:p-3 rounded-full border shadow-sm text-offWhite">
            <AddHomeIcon
              fontSize="large"
              className="max-md:text-4xl max-sm:text-[1.75em]"
            />
          </div>
          <div className=" font-montserrat font-medium text-[1rem] md:max-lg:text-[0.9rem] max-md:text-[1rem] max-sm:text-sm">
            PERSONALISED DESIGNS
          </div>
        </div>
        <div className="w-full flex gap-4 flex-col max-md:flex-row max-md:justify-start max-md:pl-12 items-center justify-center">
          <div className="bg-black p-4 max-md:p-3 rounded-full border shadow-sm text-offWhite">
            <SupportAgentIcon
              fontSize="large"
              className="max-md:text-4xl max-sm:text-[1.75em]"
            />
          </div>
          <div className=" font-montserrat font-medium text-[1rem] md:max-lg:text-[0.9rem] max-md:text-[1rem] max-sm:text-sm">
            100% CUSTOMER CENTRIC
          </div>
        </div>

        <div className="w-full flex gap-4 flex-col max-md:flex-row max-md:justify-start max-md:pl-12 items-center justify-center">
          <div className="bg-black p-4 max-md:p-3 rounded-full border shadow-sm text-offWhite">
            <CurrencyRupeeIcon
              fontSize="large"
              className="max-md:text-4xl max-sm:text-[1.75em]"
            />
          </div>
          <div className="font-montserrat font-medium text-[1rem] md:max-lg:text-[0.9rem] max-md:text-[1rem] max-sm:text-sm">
            TRANSPARENT PRICING
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
