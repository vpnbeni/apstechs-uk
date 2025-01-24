import React from "react";
import ServicesOverview from "../../components/service/ServicesOverview";
import CoreValues from "../../components/service/CoreValues";
import ContactCTA from "../../components/service/ContactCTA";
import AboutService from "../../components/service/AboutService";
import TestimonialSlider from "../../components/landingPage/TestimonialSlider";
import HeroSectionTemplate from "../../components/common/HeroSectionTemplate";
import ServiceParallaxSection from "../../components/service/ServiceParallaxSection";

const BatteryStorageIntegration = () => {
  return (
    <div className="py-24">
      <HeroSectionTemplate
        heading={"Battery Storage Integration"}
        description={`With our comprehensive expertise spanning from Power Generation Systems to Distribution Systems, APSTECHS offers a seamless integration solution for battery storage networks.`}
        bg={"/assets/services/battery-storage-integration/img3.jpeg"}
      />
      {/* <AboutService />
      <ServicesOverview />
      <ServiceParallaxSection />
      <CoreValues />
      <TestimonialSlider />

      <ContactCTA /> */}
    </div>
  );
};

export default BatteryStorageIntegration;
