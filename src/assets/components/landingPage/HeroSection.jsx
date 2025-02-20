import React, { useEffect, useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  const backgrounds = [
    "url('/bg/bg2.jpg')",
    "url('/bg/bg1.jpg')", // Add your second image path here
  ];

  useEffect(() => {
    setIsVisible(true);

    // Background carousel effect
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: backgrounds[currentBg],
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
      className="relative text-primaryText flex flex-col items-start justify-start py-[12%] px-4 sm:px-8 lg:px-[10%] min-h-screen max-h-screen min-w-full max-w-full"
    >
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/bg/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* Content */}
      {/* <div className={`relative bg-white `}>
          <div className="relative text-primaryText leading-8 sm:leading-10 text-xl sm:text-2xl lg:text-3xl font-light text-start w-full sm:w-3/4 lg:w-1/2">
            <span className="font-semibold text-primaryText">
              APSTECHS <br />
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
        </div> */}
      <div
        className="text-primaryText bg-opacity-90 bg-white rounded-l font-light pl-10 absolute top-1/2 right-0 transform  
      -translate-y-1/2 pr-10 py-10 text-3xl"
      >
        {/* <Link to="/">
          <img className="h-[100px]" src="/assets/header/logo.png" alt="Logo" />
        </Link> */}
        <div className=" relative text-7xl sm:text-5xl rounded-b-lg ">
          <span className="text-secondary font-medium  ">APS</span>
          <span className="font-medium text-[#063374] ">TECHS</span>
        </div>
        Empowering Sustainable Solutions <br /> for Tomorrow’s Energy Needs
      </div>
    </div>
  );
};

export default HeroSection;
