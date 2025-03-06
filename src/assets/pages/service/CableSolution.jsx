import React from "react";
import CableSolutionHero from "../../components/service/CaboleSolution/CableSolutionHero";
import CableSolutionDetails from "../../components/service/CaboleSolution/CableSolutionDetails";
import HeroSectionTemplate from "../../components/common/HeroSectionTemplate";
import CoreValues from "../../components/service/CoreValues";
import ServiceParallaxSection from "../../components/service/ServiceParallaxSection";
import TestimonialSlider from "../../components/landingPage/TestimonialSlider";
import ContactCTA from "../../components/service/ContactCTA";

const CableSolution = () => {
  return (
    <div className="py-24 ">
      <HeroSectionTemplate
        heading={"Cable Solutions"}
        description={`Expanding our reach beyond the UK and India, APSTECHS now offers comprehensive cable system design services for clients worldwide, covering a wide range of voltages from low voltage to extra high voltage. `}
        bg={"/assets/services/plant-engineering/herosection.jpg"}
      />

      <CableSolutionDetails />
      <ServiceParallaxSection />
      <CoreValues />
      <TestimonialSlider />
      <ContactCTA />
    </div>
  );
};

export default CableSolution;
