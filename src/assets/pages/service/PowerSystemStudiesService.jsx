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
import PowerSystemStudiesDetails from "../../components/service/PowerSystemStudies/PowerSystemStudiesDetails";

const PowerSystemStudiesService = () => {
  return (
    <div className="py-24">
      <HeroSectionTemplate
        heading={"Power System Studies"}
        description={`In-depth power system studies to analyze, optimize, and ensure the reliability of your electrical infrastructure.`}
        bg={"/assets/services/power_system/power_system.png"}
      />
      <PowerSystemStudiesDetails />

      <ServiceParallaxSection />
      <CoreValues />
      <TestimonialSlider />

      <ContactCTA />
    </div>
  );
};

export default PowerSystemStudiesService;
