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
      <div className="w-[80%] flex flex-col items-center  justify-between h-[60%] pt-10 mx-auto">
        <SectionHeading
          heading={"THE TEAM IN NUMBERS "}
          clasName={"bg-white text-primaryText"}
        />
        <div className="grid grid-flow-row grid-cols-3 gap-y-5 gap-x-20 text-white">
          <div className="">
            <div className="text-[70px] font-light">4</div>
            <div className="leading-3 relative">
              <div
                className="bg-green-500 h-[3px] -top-[3px] absolute w-6 left-0 transform 
               transition-transform duration-1000 animate-slide-in"
              ></div>
              <div className="h-[1px] bg-gray-700 w-[180px]"></div>
            </div>
            <div className="uppercase tracking-wide  font-[250] mt-4">
              CORE TEAMS
            </div>
          </div>

          <div className="">
            <div className="text-[70px] font-light">15</div>
            <div className="leading-3 relative">
              <div
                className="bg-green-500 h-[3px] -top-[3px] absolute w-6 left-0 transform 
               transition-transform duration-1000 animate-slide-in"
              ></div>
              <div className="h-[1px] bg-gray-700 w-[180px]"></div>
            </div>
            <div className="uppercase tracking-wide  font-[250] mt-4">
              YEARS EXPERIENCE
            </div>
          </div>
          <div className="">
            <div className="text-[70px] font-light">50+</div>
            <div className="leading-3 relative">
              <div
                className="bg-green-500 h-[3px] -top-[3px] absolute w-6 left-0 transform 
               transition-transform duration-1000 animate-slide-in"
              ></div>
              <div className="h-[1px] bg-gray-700 w-[180px]"></div>
            </div>
            <div className="uppercase tracking-wide  font-[250] mt-4">
              EMPLOYEES
            </div>
          </div>
        </div>
        <div
          className={`absolute bottom-8 left-[50%]  -tranalate-x-[50%] bg-primary text-lightBlue rounded-full p-4 border hover:text-dark hover:bg-white cursor-pointer transition-all duration-1000 delay-500 ease-out transform ${
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
