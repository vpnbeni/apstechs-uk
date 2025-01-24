import React from "react";
import CareersHero from "../components/careers/CareersHero";
import WelcomeSection from "../components/careers/WelcomeSection";
import JobOpenings from "../components/careers/JobOpenings";

const Careers = () => {
  return (
    <div className="w-full pt-[96px]">
      <CareersHero />
      <WelcomeSection />
      <JobOpenings />
    </div>
  );
};

export default Careers;
