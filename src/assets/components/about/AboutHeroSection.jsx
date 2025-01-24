import React, { useEffect, useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import SectionHeading from "../common/heading/SectionHeading";
import DownloadBtn from "../common/DownloadBtn";

const AboutHeroSection = () => {
  
  return (
    <div
      className="w-screen relative flex h-[90vh]"
      style={{
        backgroundImage: `url("/assets/about/bg.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[45%] flex flex-col items-start pl-32 justify-center text-white py-10">
        <div className="relative">
          <SectionHeading heading={"Our Story"} />

          <div className="text-lg lg:text-[28px] text-start leading-[50px] tracking-widest font-light my-4">
            From Planning to Power: <br />
            Our Journey to Becoming <br /> Your Nationwide ICP.
          </div>
        </div>
        <div className="cursor-pointer bg-primary w-fit hover:bg-white hover:text-dark my-6 text-white flex justify-start items-center rounded-lg border border-white">
          <button className="text-lg pl-5 py-1 rounded-l-lg">Contact Us</button>
          <button className="flex justify-center pl-3 pr-3 py-1 h-full items-center">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <DownloadBtn />
    </div>
  );
};

export default AboutHeroSection;
