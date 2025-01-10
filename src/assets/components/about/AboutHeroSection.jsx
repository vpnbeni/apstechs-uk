import React, { useEffect, useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const AboutHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
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
          <h1 className="w-fit bg-secondary px-3 tracking-[.2em] text-white text-lg mt-6 py-1">
            Our Story
          </h1>
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

export default AboutHeroSection;
