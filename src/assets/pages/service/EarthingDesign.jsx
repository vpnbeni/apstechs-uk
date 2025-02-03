import React from "react";
import EarthingDesignDetails from "../../components/service/EarthingDesign/EarthingDesignDetails";
import HeroSectionTemplate from "../../components/common/HeroSectionTemplate";
import ServiceParallaxSection from "../../components/service/ServiceParallaxSection";
import CoreValues from "../../components/service/CoreValues";
import TestimonialSlider from "../../components/landingPage/TestimonialSlider";
import ContactCTA from "../../components/service/ContactCTA";

const EarthingDesign = () => {
  return (
    <div className="py-24">
      <HeroSectionTemplate
        heading={"Earthing Design"}
        description={`At APSTECHS, we specialise in providing comprehensive earthing design services using state-of-the-art software tools such as CDEGS`}
        bg={"/assets/services/earthing/earthing.jpeg"}
      />
      <EarthingDesignDetails />
      <ServiceParallaxSection />
      <CoreValues />
      <TestimonialSlider />
      <ContactCTA />
    </div>
  );
};

export default EarthingDesign;
