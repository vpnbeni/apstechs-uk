import React from "react";
import HeroSectionTemplate from "../../components/common/HeroSectionTemplate";
import CaseStudyCards from "../../components/case-studies/CaseStudyCards";

const CaseStudies = () => {
  return (
    <div className="w-full overflow-x-hidden pt-[96px]">
      <HeroSectionTemplate
        heading={"Explore Our Case Studies"}
        description={`Building Reliable Connections,
            Unlocking Infinite Possibilities`}
        bg={"/assets/landingPage/windmill.jpg"}
      />
      <CaseStudyCards />
    </div>
  );
};

export default CaseStudies;
