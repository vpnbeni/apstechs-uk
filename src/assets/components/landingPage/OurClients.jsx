import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const clientData = [
  { name: "Solar", icon: "/assets/landingPage/clients/solar-panel.png" },
  { name: "Wind", icon: "/assets/landingPage/clients/windmill.png" },
  { name: "Data center", icon: "/assets/landingPage/clients/data-center.png" },
  { name: "Hospital", icon: "/assets/landingPage/clients/healthcare.svg" },
  {
    name: "Manufacturing",
    icon: "/assets/landingPage/clients/manufacturing.svg",
  },
  {
    name: "BESS",
    icon: "/assets/landingPage/clients/bess.png",
  },
  { name: "Utilities", icon: "/assets/landingPage/clients/utilities.svg" },
  {
    name: "Railway ",
    icon: "/assets/landingPage/clients/railway.png",
  },
  {
    name: "Earthing",
    icon: "/assets/landingPage/clients/internet-connection.png",
  },
];

const OurClients = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row h-full">
      <div className="lg:w-[40%] bg-[#EBEFF2] flex flex-col items-start px-8 lg:px-28 py-10">
        <div className="mt-10 ml-0 lg:ml-10">
          <div className="flex justify-start items-start h-fit">
            <div className="w-full h-fit relative">
              <div className="w-[1.5px] h-[95%] bg-[#b4b4b4] mr-8 absolute -left-8">
                <div className="h-20 right-[1px] bg-secondary w-[2px] absolute top-[12%]"></div>
              </div>
              <h1 className="w-fit bg-secondary px-3 tracking-[.2em] text-white text-lg py-[-1px]">
                INDUSTRY
              </h1>
              <div className="text-lg lg:text-[28px] text-start leading-10 tracking-widest font-light my-4">
                Our Clients
              </div>
              <div className="text-[16px] tracking-wide font-[250] mt-4 leading-[30px]">
                At APS, we take pride in serving a diverse range of clients,
                including Distribution Network Operators (DNOs) and Independent
                Connection Providers (ICPs) across the UK. Our client base spans
                the length and breadth of the UK, where we provide tailored
                power system solutions that meet their specific needs. By
                leveraging our expertise and commitment to quality, we ensure
                the successful delivery of projects in electrical distribution,
                automation, and renewable energy, helping our clients achieve
                their goals with efficiency and reliability.
              </div>
            </div>
          </div>
          <Link
            to={"/case-studies"}
            className="flex w-fit mt-10 border border-primary rounded-lg text-primaryText items-center justify-center"
          >
            <div className="px-4 cursor-pointer font-light text-[14px] hover:bg-primaryText hover:text-white py-2 border-r border-primary rounded-l-lg">
              Discover Our Case Studies
            </div>
            <span className="px-4 py-2 rounded-r-lg">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="lg:w-[60%] bg-[#011E3A] hidden md:flex py-10 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 text-white w-[90%] mx-auto">
          {clientData.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <img
                className="w-[57px] mb-4"
                src={client.icon}
                alt={client.name}
              />
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
