import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Heighlights = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row h-screen ">
      {/* Left Section */}
      <div className="w-full lg:w-[40%] bg-[#EBEFF2] flex flex-col items-start px-6 md:px-16 py-10">
        <div className="">
          <h1 className="w-fit bg-secondary px-3 tracking-[.2em] text-white text-sm md:text-lg mt-10">
            THE SUM OF OUR ACTIONS
          </h1>
          <div className="text-lg md:text-[28px] text-start leading-10 tracking-widest font-light my-4">
            APSTECHS in <br /> Numbers
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-5 gap-x-8 md:gap-x-20">
          {[
            { number: "50+", label: "EMPLOYEES" },
            { number: "4", label: "CORE TEAMS" },
            { number: "20+", label: "YEARS EXPERIENCE" },
            { number: "100+", label: "PARTNERS" },
          ].map((item, index) => (
            <div key={index} className="">
              <div className="text-[40px] md:text-[70px] font-light">{item.number}</div>
              <div className="leading-3 relative">
                <div
                  className="bg-secondary h-[1.5px] -top-[1.5px] absolute w-6 left-0 transform 
               transition-transform duration-1000 animate-slide-in"
                ></div>
                <div className="h-[2px] bg-black w-full"></div>
              </div>
              <div className="uppercase tracking-wide font-[250] mt-4 text-sm md:text-base">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <Link
          to={"/contact"}
          className="flex mt-10 border border-primary rounded-lg text-primaryText items-center justify-center"
        >
          <div className="px-6 cursor-pointer hover:bg-primaryText hover:text-white py-2 border-r border-primary rounded-l-lg">
            Contact Us
          </div>
          <span className="px-4 py-2 rounded-r-lg">
            <FaArrowRight />
          </span>
        </Link>
      </div>

      {/* Right Section */}
      <div
        className="w-full lg:w-[60%] bg-center bg-cover bg-no-repeat h-[50vh] lg:h-full"
        style={{
          backgroundImage: `url("/assets/landingPage/heighlights/group-photo.png")`,
        }}
      ></div>
    </div>
  );
};

export default Heighlights;
