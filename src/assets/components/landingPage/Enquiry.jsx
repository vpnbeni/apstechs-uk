import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Enquiry = () => {
  return (
    <div className="w-full flex  h-[60vh] ">
      <div className=" w-[45%]  bg-[#EBEFF2] flex flex-col items-center justify-center   py-10">
        <div className="relative ">
          <div className="w-[1.3px] h-[95%] bg-[#b4b4b4] mr-8 absolute -left-10">
            <div className="h-20 right-[1px] bg-secondary w-[1.3px] absolute top-[40%]"></div>
          </div>
          <h1 className="w-fit bg-secondary px-3 tracking-[.2em]  text-white text-lg mt-6 py-[-1px]">
            HAVE AN ENQUIRY?
          </h1>
          <div className=" text-lg lg:text-[28px] text-start leading-[50px] tracking-widest font-light my-4">
            Get in touch <br /> with one of our <br /> team today.
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
        className="w-[55%] bg-center  h-full"
        style={{
          backgroundImage: `url("/assets/landingPage/enquiry/team.jpg")`,
        }}
      ></div>
    </div>
  );
};

export default Enquiry;
