import React from "react";
import HeroSectionTemplate from "../../components/common/HeroSectionTemplate";
import SurveyDetails from "../../components/service/Survay/SurveyDetails";
import ServiceParallaxSection from "../../components/service/ServiceParallaxSection";
import CoreValues from "../../components/service/CoreValues";
import TestimonialSlider from "../../components/landingPage/TestimonialSlider";
import ContactCTA from "../../components/service/ContactCTA";

const Survey = () => {
  return (
    <div className="py-24">
      <HeroSectionTemplate
        heading={"Survey"}
        description={`In-depth power system studies to analyze, optimize, and ensure the reliability of your electrical infrastructure.`}
        bg={"/assets/services/survay/survay.jpg"}
      />
      <SurveyDetails />

      <ServiceParallaxSection />
      <CoreValues />
      <TestimonialSlider />

      <ContactCTA />
    </div>
  );
};

export default Survey;
