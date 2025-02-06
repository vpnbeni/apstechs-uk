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
import ProtectionDesignDetails from "../../components/service/ProtectionDesign/ProtectionDesignDetails";

const ProtectionDesign = () => {
  return (
    <div className="py-24">
      <HeroSectionTemplate
        heading={"Protection Design"}
        description={`We design customised protection schemes to meet client standards, ensuring reliable and safe electrical networks.`}
        bg={"/assets/services/protection-design/protection-design.png"}
      />
      <ProtectionDesignDetails />

      <ServiceParallaxSection />
      <CoreValues />
      <TestimonialSlider />

      <ContactCTA />
    </div>
  );
};

export default ProtectionDesign;
