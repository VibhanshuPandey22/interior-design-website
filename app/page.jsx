import Image from "next/image";
import Hero from "@components/Hero";
import AboutUs from "@components/AboutUs";
import SubHero from "@components/SubHero";
import ProductsCarousel from "@components/ProductsCarousel";
import Services from "@components/Services";
import Brochure from "@components/Brochure";
import Working from "@components/Working";
import Testimony from "@components/Testimony";
import ContactUs from "@components/ContactUs";

const LandingPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default LandingPage;
