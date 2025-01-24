import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionHeading from "../common/heading/SectionHeading";
import { FaArrowRight } from "react-icons/fa";

const JobSwiper = () => {
  const swiperRef = useRef(null); // Reference for the Swiper instance
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index

  const data = [
    {
      title: "PROJECT ENGINEER",
      type: "PROJECTS",
      place: "Central England",
      description:
        "As a member of the Project Delivery team, you will contribute to substation and infrastructure projects, renewable energy initiatives, contestable connections, and private network installations. Your responsibilities will include the installation of high and low voltage electrical equipment.",
    },
    {
      title: "HSQE ADVISOR",
      type: "HSQE",
      place: "Central England",
      description:
        "As a HSQE Advisor, you will play a pivotal role in promoting a robust health, safety, quality, and environmental culture across our organisation. You will ensure compliance with all relevant legislation, internal policies, and best practices, fostering a proactive approach to HSQE issues.",
    },
    {
      title: "PROJECT ENGINEER",
      type: "OPERATIONS AND MAINTENANCE",
      place: "Inverness",
      description:
        "We are seeking a Project Engineer to join our Operations and Maintenance team in Inverness. This position involves overseeing and managing all aspects of high voltage operations and maintenance projects, from planning to execution and completion, including undertaking HV switching at 11kV or 33kV and managing small remedial works.",
    },
    {
      title: "PROJECT ENGINEER",
      type: "OPERATIONS AND MAINTENANCE",
      place: "Central Scotland",
      description:
        "We are seeking a Project Engineer to join our Operations and Maintenance team in Central Scotland. This position involves overseeing and managing all aspects of high voltage operations and maintenance projects, from planning to execution and completion, including undertaking HV switching at 11kV or 33kV and managing small remedial works.",
    },
    {
      title: "TECHNICIAN",
      type: "OPERATIONS AND MAINTENANCE",
      place: "Central Scotland",
      description:
        "We are seeking a Technician to join our Operations & Maintenance team. You will play a crucial role in inspecting and maintaining HV and LV assets under ongoing maintenance agreements, as well as working on installation jobs across various sites, including wind (onshore and offshore), solar, AD, and battery storage.",
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
                  <div className="text-start leading-7 font-light my-4">
                    {item.description}
                  </div>
                </div>
                <div className="flex w-fit mt-10 border border-white rounded-lg text-white items-center justify-center">
                  <div className="px-4 cursor-pointer font-light text-[14px] hover:bg-white hover:text-primaryText py-2 border-r border-white rounded-l-lg">
                    Apply Now
                  </div>
                  <span className="px-4 py-2 rounded-r-lg">
                    <FaArrowRight />
                  </span>
                </div>
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
