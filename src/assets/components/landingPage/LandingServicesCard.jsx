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
        "Expert solutions to optimise plant efficiency and reliability through innovative engineering practices.",
      image: "/assets/landingPage/service/PlantEngineering.jpg",
      slug: "services/plant-engineering",
    },
    {
      name: "Battery Storage Integration",
      description:
        "Seamless integration of battery storage systems to enhance energy management and sustainability.",
      image: "/assets/landingPage/service/bess.jpeg",
      slug: "services/battery-storage-integration",
    },
    {
      name: "Cable Solution",
      description:
        "High-quality cable solutions designed for durability and performance in demanding environments.",
      image: "/assets/landingPage/service/CableSolution.jpg",
      slug: "services/cable-solution",
    },
    {
      name: "Earthing Solution",
      description:
        "Comprehensive earthing solutions to ensure safety and compliance in electrical systems.",
      image: "/assets/landingPage/service/EarthingSolution.png",
      slug: "services/earthing-solution",
    },

    {
      name: "Protection Design",
      description:
        "Tailored protection designs to safeguard your electrical systems from faults and overloads.",
      image: "/assets/landingPage/service/ProtectionDesign.jpg",
      slug: "services/protection-design",
    },
    {
      name: "Power System Studies",
      description:
        "In-depth power system studies to analyze, optimize, and ensure the reliability of your electrical infrastructure.",
      image: "/assets/landingPage/service/PowerSystemStudies.jpg",
      slug: "services/power-system",
    },
  ];

  return (
    <div className="w-full pt-10 flex flex-col items-center min-h-screen text-center">
      <div className="text-3xl sm:text-4xl font-semibold tracking-wider my-4">
        SERVICES
      </div>
      <div className="text-xl sm:text-3xl font-light my-4">
        Transforming Energy Challenges into Engineering Excellence
      </div>

      <div className="grid grid-flow-row gap-6 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full px-4 sm:px-[10%] py-10 lg:pb-20 items-center">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Card
                name={item.name}
                description={item.description}
                image={item.image}
                link={item.slug}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingServicesCard;
