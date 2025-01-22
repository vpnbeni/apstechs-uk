import React from "react";
import SectionHeading from "../common/heading/SectionHeading";

const AboutService = () => {
  return (
    <div className="bg-primaryText w-full text-white">
      <div className="mb-5 w-full flex flex-col justify-center items-center gap-2 py-8">
        <img
          className="w-[80px] mb-4"
          src={"/assets/services/plant-engineering/icons/service.svg"}
          alt={""}
        />

        <SectionHeading
          heading={"OUR POWER ENGINEERING SERVICE"}
          clasName={"bg-secondary text-white  text-base"}
        />
      </div>
      <div className="text-[20px] text-center w-[70%] mx-auto">
        At APSTECHS, we excel in providing comprehensive HV (High Voltage) and
        LV (Low Voltage) plant design services, spanning from 11kV to 220kV. Our
        expertise covers the entire spectrum of substation design, offering
        tailored solutions for primary, secondary, and civil requirements, from
        initial concept to final commissioning.
      </div>
    </div>
  );
};

export default AboutService;
