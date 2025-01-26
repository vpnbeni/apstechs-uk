import React, { useEffect, useState } from "react";
import SectionHeading from "../common/heading/SectionHeading";
import { FaDownload } from "react-icons/fa";

const TeamInNumber = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="h-[452px] w-full bg-primaryText relative">
      <div className="w-[80%] flex flex-col items-center justify-between h-[60%] pt-10 mx-auto">
        <SectionHeading
          heading={"THE TEAM IN NUMBERS"}
          clasName={"bg-white text-primaryText"}
        />
        <div className="grid grid-flow-row grid-cols-3 gap-y-5 gap-x-20 text-white">
          {[
            { number: "4", label: "CORE TEAMS" },
            { number: "20+", label: "YEARS EXPERIENCE" },
            { number: "50+", label: "EMPLOYEES" },
          ].map((item, index) => (
            <div key={index} className="text-start">
              <div className="text-[30px] md:text-[50px] lg:text-[70px] font-light">
                {item.number}
              </div>
              <div className="leading-3 relative">
                <div className="bg-green-500 h-[3px] -top-[3px] absolute w-3 md:w-5 lg:w-6 left-0 transform transition-transform duration-1000 ease-in-out"></div>
                <div className="h-[1px] bg-gray-700  lg:w-[180px]"></div>
              </div>
              <div className="uppercase tracking-wide text-[12px] md:text-[14px] lg:text-[16px] font-[250] mt-4">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <div
          className={`absolute bottom-8 left-[50%] -translate-x-[50%] bg-primary text-lightBlue rounded-full p-4 border hover:text-dark hover:bg-white cursor-pointer transition-all duration-1000 delay-500 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-48"
          }`}
        >
          <FaDownload />
        </div>
      </div>
    </div>
  );
};

export default TeamInNumber;
