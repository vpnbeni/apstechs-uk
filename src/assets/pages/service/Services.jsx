import React from "react";
import LandingServicesCard from "../../components/landingPage/LandingServicesCard";
import HeroSectionTemplate from "../../components/common/HeroSectionTemplate";

const Services = () => {
  return (
    <div className="my-[96px]">
      <HeroSectionTemplate
        heading={"Services"}
        description={`Empowering Seamless Connections, Delivering Limitless Opportunities`}
        bg={"/assets/services/service.jpg"}
      />
      <LandingServicesCard />
    </div>
  );
};

export default Services;
