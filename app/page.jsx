"use client";
import Hero from "@components/Hero";
import AboutUs from "@components/AboutUs";
import SubHero from "@components/SubHero";
import ProductsCarousel from "@components/ProductsCarousel";
import Services from "@components/Services";
import Brochure from "@components/Brochure";
import Working from "@components/Working";
import Testimony from "@components/Testimony";
import ContactUs from "@components/ContactUs";
import Form from "@components/Form";
import { useFormContext } from "./context";

const LandingPage = () => {
  const { isFormOpen, setIsFormOpen } = useFormContext();
  return (
    <div className="relative">
      <div>
        <Hero />
      </div>
      <div>
        <SubHero />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <ProductsCarousel />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Brochure />
      </div>
      <div>
        <Working />
      </div>
      <div>
        <Testimony />
      </div>
      <div>
        <ContactUs />
      </div>
      {isFormOpen && (
        <>
          <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
          <div className="absolute inset-0 z-50">
            <Form title="CONTACT US" text="Please give your details" />
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
