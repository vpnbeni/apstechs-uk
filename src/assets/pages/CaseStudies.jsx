import React from "react";
import CaseStudiesHeroSection from "../components/case-studies/CaseStudiesHeroSection";
import CaseStudyCards from "../components/case-studies/CaseStudyCards";

const CaseStudies = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <CaseStudiesHeroSection />
      <CaseStudyCards />
    </div>
  );
};

export default CaseStudies;
