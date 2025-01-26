import React from "react";
import HeroSectionTemplate from "../../components/common/HeroSectionTemplate";

const Survey = () => {
  return (
    <div className="py-24">
      <HeroSectionTemplate
        heading={"Survey"}
        description={`In-depth power system studies to analyze, optimize, and ensure the reliability of your electrical infrastructure.`}
        bg={"/assets/services/power_system/power_system.jpeg"}
      />
    </div>
  );
};

export default Survey;
