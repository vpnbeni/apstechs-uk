import React, { useEffect } from "react";
import CaseStudy from "../components/case-studies/CaseStudy";

const DesignAndSupply = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <CaseStudy />
    </div>
  );
};

export default DesignAndSupply;
