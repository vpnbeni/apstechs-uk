import React, { useEffect, useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative flex flex-col items-start justify-center px-4 lg:px-[20%] min-h-screen max-h-screen bg-cover bg-no-repeat bg-center min-w-full max-w-full"
      style={{ backgroundImage: `url('/assets/landingPage/bg4.jpeg')` }}
    >
      {/* Dark Filter */}
      <div className="absolute inset-0 bg-black bg-opacity-15 "></div>

      {/* Content */} 
      <div
        className={`relative z-[1000] transition-all duration-1000 delay-500 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-48"
        }`}
      >
        <div
          className={`relative text-[#f0f0f0] leading-10 text-3xl font-light text-start w-1/2`}
        >
          <span className="font-semibold text-white">
            Welcome to APSTECHS, <br />
          </span>
          Design and Engineering Solutions For Power Sector.
        </div>
        <div className="cursor-pointer bg-primary w-fit hover:bg-white hover:text-dark my-6 text-white flex justify-start items-center rounded-lg border border-white">
          <button className="text-lg pl-5 py-1 rounded-l-lg">Contact Us</button>
          <button className="flex justify-center pl-3 pr-3 py-1 h-full items-center">
            <FaArrowRight />
          </button>
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
  );
};

export default HeroSection;
