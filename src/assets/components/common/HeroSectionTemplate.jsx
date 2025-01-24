import React, { useEffect, useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import SectionHeading from "./heading/SectionHeading";

const HeroSectionTemplate = ({ heading, description, bg }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div
      className="w-full relative flex h-[400px] "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="w-[70%] mx-auto flex flex-col items-start  justify-center text-white py-10">
        <div className="absolute inset-0 bg-black bg-opacity-25 "></div>
        <div className="relative">
          <div className="text-lg w-1/2  lg:text-[28px] text-start leading-[40px]  tracking-widest font-light my-4">
            <span className="font-bold text-[32px] ">{heading}</span> <br />
            <span className=" mt-4">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTemplate;
