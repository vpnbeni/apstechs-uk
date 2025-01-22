import React from "react";
import { GoDash } from "react-icons/go";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const servicesData = [
    {
      id: 1,
      name: "High Voltage (HV) Design",
      description:
        "We specialize in designing HV systems ranging from 11kV to 220kV, ensuring optimal performance, reliability, and safety.",
      list: ["Equipment selection", "Layout planning"],
      icon: "/assets/services/plant-engineering/icons/transformer.png",
      img: "/assets/services/plant-engineering/image/HighVoltage.jpg",
    },
    {
      id: 2,
      name: "Low Voltage (LV) Design",
      description:
        "Our LV design services encompass the design of distribution systems operating at voltages below 1kV.",
      list: ["LV switchgear", "Distribution panels"],
      icon: "/assets/services/plant-engineering/icons/smartphone.png",
      img: "/assets/services/plant-engineering/image/LowVoltage.jpg",
    },
    {
      id: 3,
      name: "Substation Design Solutions",
      description:
        "From greenfield developments to upgrades and expansions, we provide end-to-end substation design solutions.",
      list: ["Primary system design", "Secondary system design"],
      icon: "/assets/services/plant-engineering/icons/electric-factory.png",
      img: "/assets/services/plant-engineering/image/SubstationDesignSolutions.jpg",
    },
    {
      id: 4,
      name: "Primary System Design",
      description:
        "We design the primary components of substations, including transformers, circuit breakers, disconnect switches, and lightning arrestors.",
      list: ["Transformers", "Circuit breakers"],
      icon: "/assets/services/plant-engineering/icons/energy.png",
      img: "/assets/services/plant-engineering/image/PrimarySystemDesign.jpg",
    },
    {
      id: 5,
      name: "Secondary System Design",
      description:
        "Our secondary system design services cover the design of control, protection, and monitoring systems within substations.",
      list: ["Relay panels", "Control cabinets"],
      icon: "/assets/services/plant-engineering/icons/plug.png",
      img: "/assets/services/plant-engineering/image/SecondarySystemDesign.jpg",
    },
    {
      id: 6,
      name: "Civil Design Requirements",
      description:
        "We offer civil engineering services tailored to the unique requirements of substation projects.",
      list: ["Site layout planning", "Foundation design"],
      icon: "/assets/services/plant-engineering/icons/requirement.png",
      img: "/assets/services/plant-engineering/image/CivilDesignRequirements.jpg",
    },
    {
      id: 7,
      name: "Concept to Commissioning Support",
      description:
        "From conceptualization to commissioning, we provide comprehensive support throughout the project lifecycle.",
      list: ["Feasibility studies", "Detailed engineering", "Procurement"],
      icon: "/assets/services/plant-engineering/icons/leadership.png",
      img: "/assets/services/plant-engineering/image/ConceptCommissioningSupport.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 lg:p-20 bg-primaryText">
      {servicesData.map((item) => (
        <div
          key={item.id}
          className={`bg-white flex flex-col justify-start ${
            item.id === 2 ? "max-h-[500px] min-h-[500px]" : "h-auto"
          } text-black rounded-lg max-w-sm mx-auto relative shadow overflow-hidden h-fit`}
        >
          <div className="relative">
            <div className="relative">
              <div className="w-full max-h-[210px] overflow-y-hidden -translate-y-5 skew-y-6 absolute z-[3]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="object-center -skew-y-6"
                />
              </div>
            </div>
            <div className="absolute z-[4] bg-white border-4 overflow-hidden rounded-full border-gray-100 left-[10%] translate-x-[20%] translate-y-[200%] flex items-center justify-center">
              <div className="w-[64px] h-[64px] rounded-full p-2">
                <img src={item.icon} alt={item.name} />
              </div>
            </div>
          </div>
          <div className="h-[180px] w-full mt-11"></div>
          <div className="p-4">
            <h2 className="xl:text-xl 2xl:text-2xl mx-4 font-bold">
              {item.name}
            </h2>
            <p className="m-4">{item.description}</p>
            <ul className="m-4 flex flex-col gap-2 text-sm text-gray-800">
              {item.list.map((listItem, index) => (
                <Link className="flex items-center" key={index}>
                  <GoDash className="text-xl font-bold mr-2" /> {listItem}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesOverview;
