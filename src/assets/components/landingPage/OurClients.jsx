import React from "react";
import { FaArrowRight } from "react-icons/fa";

const clientData = [
  { name: "Solar", icon: "/assets/landingPage/clients/solar-panel.png" },
  { name: "Wind", icon: "/assets/landingPage/clients/wind.png" },
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
    name: "Railway ",
    icon: "/assets/landingPage/clients/railway.png",
  },
  { name: "Earthing", icon: "/assets/landingPage/clients/save.png" },
];

const OurClients = () => {
  return (
    <div className="w-full flex h-screen">
      <div className="w-[40%] bg-[#EBEFF2] flex flex-col items-start px-28 py-10">
        <div className="mt-28 ml-10">
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
                We are proud of the extensive range of clients we serve. Our
                diverse portfolio includes businesses across various industries,
                ranging from small local enterprises to large multinational
                corporations. Our clientele spans across the United Kingdom and
                we have worked with businesses from the highlands of Scotland to
                the picturesque landscapes of Cornwall.
              </div>
            </div>
          </div>
          <div className="flex w-fit mt-10 border border-primary rounded-lg text-primaryText items-center justify-center">
            <div className="px-4 cursor-pointer font-light text-[14px] hover:bg-primaryText hover:text-white py-2 border-r border-primary rounded-l-lg">
              Discover Our Case Studies
            </div>
            <span className="px-4 py-2 rounded-r-lg">
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
      <div className="w-[60%] bg-[#011E3A] flex py-20">
        <div className="grid grid-flow-row grid-cols-3 gap-4 text-white w-[80%] mx-auto ">
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
