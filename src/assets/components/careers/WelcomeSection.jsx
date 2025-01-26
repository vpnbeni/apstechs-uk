import React from "react";
import SectionHeading from "../common/heading/SectionHeading";
import { FaArrowRight } from "react-icons/fa";

const WelcomeSection = () => {
  return (
    <div className="w-full h-auto lg:h-[60vh] flex flex-col lg:flex-row">
      {/* Left Side Content */}
      <div className="w-full lg:w-1/2 px-6 lg:px-32 py-8 lg:py-16">
        <div className="mb-5 w-full flex justify-start items-center">
          <SectionHeading heading={"WELCOME TO OUR CAREERS PAGE"} />
        </div>
        <div className="py-4 leading-8 text-sm sm:text-base lg:text-lg">
          Our approach is innovative and unique. We're a collective of
          forward-thinking individuals uniting under a shared purpose - to value
          and elevate our team members as our greatest asset. Our ambition is to
          be recognised as an employer of choice, providing unparalleled
          opportunities for professional growth while fostering a diverse and
          inclusive workforce.
        </div>
        <div className="flex w-fit mt-10 border border-primary rounded-lg text-primaryText items-center justify-center">
          <div className="px-4 cursor-pointer font-light text-[14px] sm:text-base lg:text-lg hover:bg-primaryText hover:text-white py-2 border-r border-primary rounded-l-lg">
            Discover what sets us apart
          </div>
          <span className="px-4 py-2 rounded-r-lg">
            <FaArrowRight />
          </span>
        </div>
      </div>

      {/* Right Side Image */}
      <div
        className="w-full lg:w-1/2 h-[30vh] sm:h-[40vh] lg:h-full object-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/assets/careers/field.jpg')` }}
      ></div>
    </div>
  );
};

export default WelcomeSection;
