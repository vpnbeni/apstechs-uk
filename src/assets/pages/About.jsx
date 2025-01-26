import React from "react";
import AboutHeroSection from "../components/about/AboutHeroSection";
import OurValue from "../components/about/OurValue";
import TeamInNumber from "../components/about/TeamInNumber";
import Team from "../components/about/Team";

const About = () => {
  return (
    <div className="w-full overflow-x-hidden ">
      <AboutHeroSection />
      <TeamInNumber />
      <OurValue />
      <Team />
    </div>
  );
};

export default About;
