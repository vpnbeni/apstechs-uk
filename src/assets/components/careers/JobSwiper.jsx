import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionHeading from "../common/heading/SectionHeading";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobSwiper = () => {
  const swiperRef = useRef(null); // Reference for the Swiper instance
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index

  const data = [
    {
      title: "POWER SYSTEM ENGINEER",
      type: "PROJECTS",
      place: "Delhi, India",
      description:
        "Power System Engineer with expertise in modeling single-line diagrams in Digsilent Powerfactory, PSCAD, and PSS/E. Skilled in conducting power system studies, including load flow analysis, short circuit studies, motor starting analysis, voltage stability, harmonic analysis, and transient stability assessments. Experienced in transmission capability evaluation, voltage constraints, and filter design.",
    },
    {
      title: "PROTECTION AND CONTROL ENGINEER",
      type: "PROJECT",
      place: "Delhi, India",
      description:
        "As a Protection and Control Engineer, you will be responsible for designing, implementing, and testing protection and control systems for power networks. Your role will involve ensuring the reliability and safety of substations, transmission, and distribution systems. You will work on relay coordination, SCADA integration, and fault analysis to optimize system performance and minimize downtime.",
    },
    {
      title: "GRADUATE ENGINEER TRAINEE ",
      type: "OPERATIONS AND MAINTENANCE",
      place: "England",
      description:
        "As a Graduate Engineer Trainee in Operations and Maintenance, you will gain hands-on experience in monitoring, troubleshooting, and maintaining electrical and mechanical systems. You will assist in routine inspections, performance analysis, and the implementation of maintenance strategies to ensure optimal system reliability and efficiency. This role provides a strong foundation for developing technical expertise and problem-solving skills in a dynamic operational environment.",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active index
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Get Swiper instance
        className="job-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-start  items-start h-fit rounded-lg border p-[32px] pt-[64px] max-w-[420px] mx-auto">
              <div className="w-full h-fit relative">
                <h1 className="w-fit text-secondary tracking-[.2em] text-[20px] py-[-1px]">
                  <SectionHeading heading={item.title} />
                </h1>
                <div className="text-sm text-start font-light mt-4">
                  {item.type}
                </div>
                <div className="text-sm text-[#b4b4b4] text-start font-light mb-4">
                  {item.place}
                </div>
                <div className="text-[16px] font-light tracking-wide mt-4 leading-[30px]">
                  <div className="text-start leading-7 font-light my-4 ">
                    {item.description}
                  </div>
                </div>
                <Link
                  to={"/apply"}
                  className="flex w-fit mt-10 border border-white rounded-lg text-white items-center justify-center"
                >
                  <div className="px-4 cursor-pointer font-light text-[14px] hover:bg-white hover:text-primaryText py-2 border-r border-white rounded-l-lg">
                    Apply Now
                  </div>
                  <span className="px-4 py-2 rounded-r-lg">
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {data.map((_, index) => (
          <div className={`bg-gray-300 relative  rounded-full w-3 h-3`}>
            <div
              key={index}
              className={`w-[9px] h-[9px] absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] rounded-full ${
                activeIndex === index ? "bg-primaryText" : "bg-gray-300"
              } transition-all duration-300`}
              onClick={() => swiperRef.current?.slideTo(index)} // Navigate to the selected slide
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSwiper;
