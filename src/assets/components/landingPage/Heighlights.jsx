import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Heighlights = () => {
  return (
    <div className="w-full flex  h-screen ">
      <div className=" w-[40%] bg-[#EBEFF2] flex flex-col items-start px-24  py-10">
        <div className="">
          <h1 className="w-fit bg-secondary px-3 tracking-[.2em]  text-white text-lg mt-10 py-[-1px]">
            THE SUM OF OUR ACTIONS
          </h1>
          <div className=" text-lg lg:text-[28px] text-start leading-10 tracking-widest font-light my-4">
            APSTECHS in <br /> Numbers
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-2 gap-y-5 gap-x-20">
          <div className="">
            <div className="text-[70px] font-light">50+</div>
            <div className="leading-3 relative">
              <div
                className="bg-secondary h-[1.5px] -top-[1.5px] absolute w-6 left-0 transform 
               transition-transform duration-1000 animate-slide-in"
              ></div>
              <div className="h-[2px] bg-black w-full"></div>
            </div>
            <div className="uppercase tracking-wide  font-[250] mt-4">
              EMPLOYEES
            </div>
          </div>
          <div className="">
            <div className="text-[70px] font-light">4</div>
            <div className="leading-3 relative">
              <div
                className="bg-secondary h-[1.5px] -top-[1.5px] absolute w-6 left-0 transform 
               transition-transform duration-1000 animate-slide-in"
              ></div>
              <div className="h-[2px] bg-black w-full"></div>
            </div>
            <div className="uppercase tracking-wide  font-[250] mt-4">
              CORE TEAMS
            </div>
          </div>
          <div className="">
            <div className="text-[70px] font-light">20+</div>
            <div className="leading-3 relative">
              <div
                className="bg-secondary h-[1.5px] -top-[1.5px] absolute w-6 left-0 transform 
               transition-transform duration-1000 animate-slide-in"
              ></div>
              <div className="h-[2px] bg-black w-full"></div>
            </div>
            <div className="uppercase tracking-wide  font-[250] mt-4">
              YEARS EXPERIENCE
            </div>
          </div>
          <div className="">
            <div className="text-[70px] font-light">100+</div>
            <div className="leading-3 relative">
              <div
                className="bg-secondary h-[1.5px] -top-[1.5px] absolute w-6 left-0 transform 
               transition-transform duration-1000 animate-slide-in"
              ></div>
              <div className="h-[2px] bg-black w-full"></div>
            </div>
            <div className="uppercase tracking-wide  font-[250] mt-4">
              PARTNERS
            </div>
          </div>
        </div>
        <div className="flex mt-10 border border-primary  rounded-lg text-primaryText items-center justify-center">
          <div className=" px-6 cursor-pointer hover:bg-primaryText hover:text-white py-2 border-r  border-primary rounded-l-lg ">
            Contact Us
          </div>
          <span className="px-4 py-2  rounded-r-lg">
            <FaArrowRight />
          </span>
        </div>
      </div>
      <div
        className="w-[60%] bg-center bg-cover bg-no-repeat h-full"
        style={{
          backgroundImage: `url("/assets/landingPage/heighlights/group-photo.png")`,
        }}
      ></div>
    </div>
  );
};

export default Heighlights;
