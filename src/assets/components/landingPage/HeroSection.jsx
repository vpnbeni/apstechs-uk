import React, { useEffect, useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import DownloadBtn from "../common/DownloadBtn";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative flex flex-col items-start justify-center px-4 sm:px-8 lg:px-[20%] min-h-screen max-h-screen bg-cover bg-no-repeat bg-center min-w-full max-w-full"
      style={{ backgroundImage: `url('/assets/landingPage/bg7.png')` }}
    >
      {/* Content */}
      <div
        className={`relative z-10 transition-all duration-1000 delay-500 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-48"
        }`}
      >
        <div className="relative text-[#f0f0f0] leading-8 sm:leading-10 text-xl sm:text-2xl lg:text-3xl font-light text-start w-full sm:w-3/4 lg:w-1/2">
          <span className="font-semibold text-white">
            Welcome to APSTECHS, <br />
          </span>
          Design and Engineering Solutions For Power Sector.
        </div>
        <div className="cursor-pointer bg-primary w-fit hover:bg-white hover:text-dark my-6 text-white flex justify-start items-center rounded-lg border border-white">
          <Link to={"/contact"} className="text-lg pl-5 py-2 rounded-l-lg">
            Contact Us
          </Link>
          <button className="flex justify-center pl-3 pr-3 py-2 h-full items-center">
            <FaArrowRight />
          </button>
        </div>
      </div>
      <DownloadBtn />
    </div>
  );
};

export default HeroSection;
