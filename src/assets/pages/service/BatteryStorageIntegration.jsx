import React from "react";
import CoreValues from "../../components/service/CoreValues";
import ContactCTA from "../../components/service/ContactCTA";
import TestimonialSlider from "../../components/landingPage/TestimonialSlider";
import HeroSectionTemplate from "../../components/common/HeroSectionTemplate";
import ServiceParallaxSection from "../../components/service/ServiceParallaxSection";
import AboutBatteryService from "../../components/service/BatteryStorageIntegration/AboutBatteryService";

const BatteryStorageIntegration = () => {
  return (
    <div className="py-24">
      <HeroSectionTemplate
        heading={"Battery Storage Integration"}
        description={`With our comprehensive expertise spanning from Power Generation Systems to Distribution Systems.`}
        bg={"/assets/services/battery-storage-integration/img1.png"}
      />
      <AboutBatteryService />
      <ServiceParallaxSection />
      <CoreValues />
      <TestimonialSlider />
      <ContactCTA />
    </div>
  );
};

export default BatteryStorageIntegration;
