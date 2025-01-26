import React from "react";
import SectionHeading from "../common/heading/SectionHeading";
import DownloadBtn from "../common/DownloadBtn";
import JobSwiper from "./JobSwiper";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobOpenings = () => {
  return (
    <div className="bg-primaryText w-full min-h-screen text-white">
      <div className="flex flex-col gap-6 justify-center items-center px-4 md:px-20 lg:px-44 text-center py-10 pb-24 relative">
        <div className="mb-5 w-full flex justify-center items-center">
          <SectionHeading heading={"JOB OPENINGS"} />
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Be Part of Something Big
        </div>
        <div className="leading-8 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
          Our central office is situated in the heart of Downham Market,
          Norfolk, and is complemented by a strategic operational hub in
          Birmingham. With our engineers and technicians strategically stationed
          from Birmingham to Glasgow and across the regions of Hertfordshire to
          Norfolk, the opportunity for a rewarding career that feels like home
          is never too distant. ​
        </div>
        <div className="leading-8 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
          We are constantly on the lookout for talented individuals to join our
          team. <br /> Discover below whether your ideal career opportunity is
          on the horizon.
        </div>
        <DownloadBtn />
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Job Swiper Section */}
        <div className="w-full lg:w-1/2 p-4 md:p-10 lg:p-32">
          <JobSwiper />
        </div>

        {/* CV Section */}
        <div className="w-full lg:w-1/2 p-4 md:p-10 lg:p-32 flex flex-col justify-center">
          <div className="flex flex-col gap-6 justify-center w-full max-w-sm mx-auto lg:max-w-md p-6 bg-white rounded-lg text-primaryText">
            <div className="text-2xl sm:text-3xl font-bold">
              Didn't find what you were looking for?
            </div>
            <div className="text-2xl sm:text-3xl font-bold">
              Send us your CV
            </div>
            <Link
              to={"/apply"}
              className="flex w-fit mt-10 border border-primaryText rounded-lg text-primaryText items-center justify-center"
            >
              <div className="px-4 cursor-pointer font-light text-sm sm:text-base lg:text-lg hover:bg-primaryText hover:text-white py-2 border-r border-primaryText rounded-l-lg">
                Apply Now
              </div>
              <span className="px-4 py-2 rounded-r-lg">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpenings;
