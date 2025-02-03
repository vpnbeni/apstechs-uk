import React from "react";
import ServicesOverview from "../../components/service/ServicesOverview";
import ServiceDetails from "../../components/service/ServiceDetails";
import CoreValues from "../../components/service/CoreValues";
import ContactCTA from "../../components/service/ContactCTA";
import AboutService from "../../components/service/AboutService";
import ParallaxSection from "../../components/landingPage/ParallaxSection";
import TestimonialSlider from "../../components/landingPage/TestimonialSlider";
import HeroSectionTemplate from "../../components/common/HeroSectionTemplate";
import ServiceParallaxSection from "../../components/service/ServiceParallaxSection";

const PlantEngineering = () => {
  return (
    <div className="py-24">
      <HeroSectionTemplate
        heading={"Plant Engineering"}
        description={`Expert solutions to optimise plant efficiency and reliability through innovative engineering practices.`}
        bg={"/assets/services/plant-engineering/herosection.jpg"}
      />
      {/* <AboutService /> */}
      <ServicesOverview />
      <ServiceParallaxSection />
      <CoreValues />
      <TestimonialSlider />

      <ContactCTA />
    </div>
  );
};

export default PlantEngineering;
