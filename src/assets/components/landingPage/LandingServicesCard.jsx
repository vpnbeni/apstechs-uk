import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "../common/heading/SectionHeading";
import { RxArrowRight, RxArrowTopRight } from "react-icons/rx";

const LandingServicesCard = () => {
  const data = [
    {
      name: "Plant Engineering",
      description:
        "Expert solutions for optimizing plant efficiency and reliability through innovative engineering practices.",
      image: "/assets/landingPage/service/PlantEngineering.jpg",
    },
    {
      name: "Cable Solution",
      description:
        "High-quality cable solutions designed for durability and preformance in demanding environments.",
      image: "/assets/landingPage/service/CableSolution.png",
    },

    {
      name: "Earthing Solution",
      description:
        "Comprehensive earthing solutions to ensure safety and compliance in electrical systems.",
      image: "/assets/landingPage/service/EarthingSolution.jpg",
    },
    {
      name: "Battery Storage Integration",
      description:
        "Seamless integration of battery storage systems to enhance energy management and sustainability.",
      image: "/assets/landingPage/service/BatteryStorageIntegration.jpg",
    },
    {
      name: "Protection Design",
      description:
        "Tailored protection designs to safeguard your electrical systems from faults and overloads.",
      image: "/assets/landingPage/service/ProtectionDesign.jpg",
    },
    {
      name: "Power System Studies",
      description:
        "In-depth power system studies to analyze,optimize, and ensure the reliability of your electrical infrastructure.",
      image: "/assets/landingPage/service/PowerSystemStudies.jpg",
    },
  ];
  return (
    <div className="w-full pt-10 flex flex-col items-center min-h-screen text-center">
      <SectionHeading heading={"SERVICES"} />
      <div className=" text-3xl font-light my-4">
        We've Been Transforming Ideas into Reality for Over a Decade.
      </div>

      <div className="grid grid-flow-row gap-10  grid-cols-3 w-full px-[10%] py-10  lg:pb-20 items-center ">
        {data.map((item, index) => {
          return (
            <div className=" shadow-md border-b-2 w-full group relative flex flex-col items-start justify-start overflow-hidden  h-[428px] border-[#6796DF]  font-light">
              <div className="flex   w-full flex-col items-start text-start ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[240px] group-hover:scale-105 duration-700"
                />
              </div>
              <div className="px-4  pt-6 flex flex-col items-start justify-between">
                <div className="text-black group-hover:text-[#6796DF] font-semibold text-lg">
                  {item.name}
                </div>
                <div className="text-start  text-[17px]">
                  {item.description}
                </div>
                <div className="flex text-[#6796DF] group-hover:tracking-wider duration-700  items-center justify-center">
                  <div className=" pr-2 uppercase font-semibold text-sm cursor-pointer py-2 ">
                    Read More
                  </div>
                  <span className="  rounded-r-lg">
                    <RxArrowRight className="group-hover:hidden block " />
                    <RxArrowTopRight className="group-hover:block hidden" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingServicesCard;
