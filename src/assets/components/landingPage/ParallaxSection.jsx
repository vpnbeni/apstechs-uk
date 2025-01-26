import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const ParallaxSection = ({ url }) => {
  const navigate = useNavigate();
  return (
    <div
      className="relative h-[100vh] flex items-center justify-start bg-fixed px-6 sm:px-[10%] lg:px-[15%] bg-center bg-cover"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className="bg-primaryText text-white px-6 sm:px-8 py-6 sm:py-8 rounded-3xl shadow-lg max-w-full sm:max-w-[450px] text-start">
        <div className="mt-6 sm:mt-10 ml-0 sm:ml-10">
          <div className="flex flex-col sm:flex-row justify-start items-start h-fit">
            <div className="w-full h-fit relative">
              <div className="hidden sm:block w-[1.3px] h-[95%] bg-[#b4b4b4] mr-8 absolute -left-8">
                <div className="h-20 right-[1px] bg-secondary w-[1.3px] absolute top-[12%]"></div>
              </div>
              <h1 className="text-secondary tracking-[.2em] text-[16px] sm:text-[20px] py-[-1px]">
                WHY CHOOSE US
              </h1>
              <div className="text-sm sm:text-lg lg:text-[20px] text-start leading-6 sm:leading-7 line-clamp-3 font-light my-4">
                With a proven track record of excellence and client satisfaction, we ensure the clients' projects are cost-effective, viable, safe, and sustainable.
              </div>
              <div className="text-xs sm:text-[16px] font-light tracking-wide mt-4 leading-[24px] sm:leading-[30px] line-clamp-4">
                <div className="text-start leading-6 sm:leading-7 font-light my-4">
                  We pride ourselves on our quality, reliability, integrity, and confidentiality. Our clients range from power generation utilities, transmission and distribution network operators, energy suppliers, regulatory authorities, and investors, to governments and their agencies, lenders, donors, and other stakeholders—all trusting us to deliver sound technical and financial solutions for their projects both within the UK and internationally. With our knowledge and experience in the industry, we extend our specialised services to enhance the technical, commercial, organisational, safety, and environmental aspects of power generation distribution, and supply projects from the utility sector to wider markets such as electricity distribution network operators, renewables developers, and private network owners. ...
                </div>
              </div>
            </div>
          </div>
          <Link
           to={'/about'}
            className="flex w-fit mt-6 sm:mt-10 border border-white rounded-lg text-white items-center justify-center"
          >
            <div className="px-4 cursor-pointer font-light text-[12px] sm:text-[14px] hover:bg-white hover:text-primaryText py-2 border-r border-white rounded-l-lg">
              Read More
            </div>
            <span className="px-3 sm:px-4 py-2 rounded-r-lg">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
