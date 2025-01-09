import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ParallaxSection = () => {
  return (
    <div
      className="relative h-[100vh] flex items-center justify-start bg-fixed px-[15%] bg-center bg-cover"
      style={{
        backgroundImage: `url('/assets/landingPage/parallax/parallax-bg.jpeg')`,
      }}
    >
      <div className="bg-primaryText  text-white px-8 py-6 rounded-3xl shadow-lg max-w-[450px] text-start">
        <div className="mt-10 ml-10">
          <div className="flex justify-start items-start h-fit">
            <div className="w-full h-fit relative">
              <div className="w-[1.3px] h-[95%] bg-[#b4b4b4] mr-8 absolute -left-8">
                <div className="h-20 right-[1px] bg-secondary w-[1.3px] absolute top-[12%]"></div>
              </div>
              <h1 className="w-fit text-secondary  tracking-[.2em]  text-[20px] py-[-1px]">
                WHY APSTECHS
              </h1>
              <div className="text-lg lg:text-[25px] text-start leading-7  font-light my-4">
                We Recognise That Modern Businesses Have a Responsibility to Do
                More than Just Turn a Profit.
              </div>
              <div className="text-[16px] tracking-wide font-[250] mt-4 leading-[30px]">
                We don't just pay lip service to values like safety,
                development, and the environment - we put these values into
                practice in everything we do.
              </div>
            </div>
          </div>
          <div className="flex w-fit mt-10 border border-white rounded-lg text-white items-center justify-center">
            <div className="px-4 cursor-pointer font-light text-[14px] hover:bg-white    hover:text-primaryText py-2 border-r border-white rounded-l-lg">
              Read More
            </div>
            <span className="px-4 py-2 rounded-r-lg">
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
