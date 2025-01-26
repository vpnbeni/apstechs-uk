import React from "react";
import { FaArrowRight } from "react-icons/fa";
import JobSwiper from "../careers/JobSwiper";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row h-auto bg-[#001C38]">
      <div className="w-full lg:w-[45%] flex flex-col items-start pl-8 lg:pl-32 justify-center text-white py-10 px-6">
        <div className="relative">
          <div className="w-[1.3px] h-[95%] bg-[#b4b4b4] mr-8 absolute -left-10">
            <div className="h-20 right-[1px] bg-secondary w-[1.3px] absolute top-[40%]"></div>
          </div>
          <h1 className="w-fit bg-secondary px-3 tracking-[.2em] text-white text-lg lg:text-xl mt-6 py-[-1px]">
            CAREERS
          </h1>
          <div className="text-lg lg:text-[28px] text-start leading-[50px] tracking-widest font-light my-4">
            We’re Looking for New <br /> Talent to Join Our Team. <br /> See All
            Positions and <br /> Submit Your CV.
          </div>
        </div>

        <Link
          to={"/careers"}
          className="flex mt-10 border border-white rounded-lg text-white items-center justify-start"
        >
          <div className="px-6 cursor-pointer hover:bg-white hover:text-black py-2 border-r border-white rounded-l-lg">
            Openings
          </div>
          <span className="px-4 py-2 rounded-r-lg">
            <FaArrowRight />
          </span>
        </Link>
      </div>

      <div className="w-full lg:w-[55%] h-auto px-4 py-20 text-white">
        <JobSwiper />
      </div>
    </div>
  );
};

export default Careers;
