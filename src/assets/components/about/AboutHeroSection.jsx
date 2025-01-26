import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "../common/heading/SectionHeading";
import DownloadBtn from "../common/DownloadBtn";
import { Link } from "react-router-dom";

const AboutHeroSection = () => {
  return (
    <div
      className="w-screen relative flex flex-col lg:flex-row h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: `url("/assets/about/bg.jpeg")`,
      }}
    >
      {/* Left content (text and Contact Us button) */}
      <div className="w-full lg:w-[45%] flex flex-col items-start  pl-6 lg:pl-32 justify-center h-full text-white py-10">
        <div className="relative">
          <SectionHeading heading={"Our Story"} />
          <div className="text-lg lg:text-[28px] text-start leading-[50px] tracking-widest font-light my-4">
            Turning Ambitions into <br /> Reality with Expertise <br /> Across
            Borders
          </div>
        </div>
        <Link
          to={"/contact"}
          className="cursor-pointer bg-primary w-fit hover:bg-white hover:text-dark my-6 text-white flex justify-start items-center rounded-lg border border-white"
        >
          <button className="text-lg pl-5 py-1 rounded-l-lg">Contact Us</button>
          <button className="flex justify-center pl-3 pr-3 py-1 h-full items-center">
            <FaArrowRight />
          </button>
        </Link>
      </div>

      {/* Right content (Download button) */}
      <DownloadBtn className="absolute bottom-10 right-10 lg:right-32" />
    </div>
  );
};

export default AboutHeroSection;
