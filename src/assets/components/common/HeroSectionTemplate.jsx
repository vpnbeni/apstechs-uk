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
      className="w-full relative flex h-[400px] lg:h-[500px] bg-cover bg-bottom"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="w-[90%] lg:w-[70%] mx-auto flex flex-col items-start justify-center text-white py-10">
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div className={`relative ${isVisible ? "opacity-100 transition-opacity duration-700 ease-in" : "opacity-0"}`}>
          <div className="text-lg w-full lg:w-2/3 lg:text-[20px] text-start leading-[40px] tracking-widest font-light my-4">
            <span className="font-bold text-[32px]">{heading}</span> <br />
            <span className="mt-4">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTemplate;
