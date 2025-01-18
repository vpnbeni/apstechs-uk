import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "../common/heading/SectionHeading";
import { RxArrowRight, RxArrowTopRight } from "react-icons/rx";
import Card from "../common/card/Card";

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
      image: "/assets/landingPage/service/CableSolution.jpg",
    },

    {
      name: "Earthing Solution",
      description:
        "Comprehensive earthing solutions to ensure safety and compliance in electrical systems.",
      image: "/assets/landingPage/service/EarthingSolution.png",
    },
    {
      name: "Battery Storage Integration",
      description:
        "Seamless integration of battery storage systems to enhance energy management and sustainability.",
      image: "/assets/landingPage/service/BatteryStorageIntegration.jpeg",
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
      <div className=" text-5xl font-normal tracking-wider my-4">SERVICES</div>
      <div className=" text-3xl font-light my-4">
        We've Been Transforming Ideas into Reality for Over a Decade.
      </div>

      <div className="grid grid-flow-row gap-10  grid-cols-3 w-full px-[10%] py-10  lg:pb-20 items-center ">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Card
                name={item.name}
                description={item.description}
                image={item.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingServicesCard;
