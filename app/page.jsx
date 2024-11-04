import Image from "next/image";
import Hero from "@components/Hero";
import AboutUs from "@components/AboutUs";
import SubHero from "@components/SubHero";
import ProductsCarousel from "@components/ProductsCarousel";

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
    </div>
  );
};

export default LandingPage;
