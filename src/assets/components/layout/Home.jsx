import React from "react";
import HeroSection from "../landingPage/HeroSection";
import SectionTwo from "../landingPage/SectionTwo";
import LandingServicesCard from "../landingPage/LandingServicesCard";

import Heighlights from "../landingPage/Heighlights";
import OurClients from "../landingPage/OurClients";
import ParallaxSection from "../landingPage/ParallaxSection";
import Enquiry from "../landingPage/Enquiry";
import TestimonialSlider from "../landingPage/TestimonialSlider";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SectionTwo />
      <LandingServicesCard />
      <Heighlights />
      <ParallaxSection />
      <OurClients />
      <TestimonialSlider />

      <Enquiry />
    </div>
  );
};

export default Home;
