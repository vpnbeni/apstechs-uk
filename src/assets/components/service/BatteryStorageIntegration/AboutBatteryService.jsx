import React from "react";
import SectionHeading from "../../common/heading/SectionHeading";

const AboutBatteryService = () => {
  return (
    <div className="bg-primaryText w-full text-white">
      <div className="mb-5 flex flex-col justify-center items-center gap-2 py-8 w-[70%] mx-auto">
        <img
          className="w-[80px] mb-4"
          src={"/assets/services/plant-engineering/icons/service.svg"}
          alt="Battery Service Integration Icon" // Descriptive alt text for better accessibility
        />

        <SectionHeading
          heading={"OUR BATTERY SERVICE INTEGRATION "}
          clasName={"bg-secondary text-white text-base"}
        />
      </div>
      <div className="text-base sm:text-lg md:text-xl text-center w-[90%] lg:w-[70%] mx-auto pb-16">
        With our comprehensive expertise spanning from Power Generation Systems
        to Distribution Systems, APSTECHS offers a seamless integration solution
        for battery storage networks. Leveraging our extensive network knowledge
        and design capabilities, we specialise in providing complete battery
        network solutions for substations and renewable generator projects.{" "}
        <br /> <br />
        By offering a complete battery network integrated solution, APSTECHS
        empowers clients to enhance grid stability, reliability, and resilience
        while unlocking the full potential of renewable energy resources. Our
        commitment to innovation, reliability, and customer satisfaction ensures
        that clients receive best-in-class solutions that meet their evolving
        energy storage needs.
      </div>
    </div>
  );
};

export default AboutBatteryService;
