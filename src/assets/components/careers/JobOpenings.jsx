import React, { useState } from "react";
import SectionHeading from "../common/heading/SectionHeading";
import DownloadBtn from "../common/DownloadBtn";
import JobSwiper from "./JobSwiper";
import ContactCards from "./ContactCards";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const data = {
  "United Kingdom": [
    {
      title: "POWER SYSTEM ENGINEER",
      type: "PROJECTS",
      place: "Colchester, England",  
      description:
        "Power System Engineer with expertise in modelling single-line diagrams in Digsilent Powerfactory, PSCAD, and PSS/E. Skilled in conducting power system studies, including load flow analysis, short circuit studies, motor starting analysis, voltage stability, harmonic analysis, and transient stability assessments. Experienced in transmission capability evaluation, voltage constraints, and filter design.",
    },
    {
      title: "PROTECTION AND CONTROL ENGINEER",
      type: "PROJECT",
      place: "Colchester, England",
      description:
        "As a Protection and Control Engineer, you will be responsible for designing, implementing, and testing protection and control systems for power networks. Your role will involve ensuring the reliability and safety of substations, transmission, and distribution systems. You will work on relay coordination, SCADA integration, and fault analysis to optimize system performance and minimise downtime.",
    },
    {
      title: "GRADUATE ENGINEER TRAINEE ",
      type: "OPERATIONS AND MAINTENANCE",
      place: "Colchester, England",
      description:
        "As a Graduate Engineer Trainee in Operations and Maintenance, you will gain hands-on experience in monitoring, troubleshooting, and maintaining electrical and mechanical systems. You will assist in routine inspections, performance analysis, and the implementation of maintenance strategies to ensure optimal system reliability and efficiency. This role provides a strong foundation for developing technical expertise and problem-solving skills in a dynamic operational environment.",
    },
  ],
  India: [
    {
      title: "POWER SYSTEM ENGINEER",
      type: "PROJECTS",
      place: "New Delhi, India",
      description:
        "Power System Engineer with expertise in modelling single-line diagrams in Digsilent Powerfactory, PSCAD, and PSS/E. Skilled in conducting power system studies, including load flow analysis, short circuit studies, motor starting analysis, voltage stability, harmonic analysis, and transient stability assessments. Experienced in transmission capability evaluation, voltage constraints, and filter design.",
    },
    {
      title: "PROTECTION AND CONTROL ENGINEER",
      type: "PROJECT",
      place: "New Delhi, India",
      description:
        "As a Protection and Control Engineer, you will be responsible for designing, implementing, and testing protection and control systems for power networks. Your role will involve ensuring the reliability and safety of substations, transmission, and distribution systems. You will work on relay coordination, SCADA integration, and fault analysis to optimize system performance and minimise downtime.",
    },
    {
      title: "GRADUATE ENGINEER TRAINEE ",
      type: "OPERATIONS AND MAINTENANCE",
      place: "New Delhi, India",
      description:
        "As a Graduate Engineer Trainee in Operations and Maintenance, you will gain hands-on experience in monitoring, troubleshooting, and maintaining electrical and mechanical systems. You will assist in routine inspections, performance analysis, and the implementation of maintenance strategies to ensure optimal system reliability and efficiency. This role provides a strong foundation for developing technical expertise and problem-solving skills in a dynamic operational environment.",
    },
  ],
  Uzbekistan: [
    {
      title: "POWER SYSTEM ENGINEER",
      type: "PROJECTS",
      place: "Tashkent, Uzbekistan",
      description:
        "Power System Engineer with expertise in modelling single-line diagrams in Digsilent Powerfactory, PSCAD, and PSS/E. Skilled in conducting power system studies, including load flow analysis, short circuit studies, motor starting analysis, voltage stability, harmonic analysis, and transient stability assessments. Experienced in transmission capability evaluation, voltage constraints, and filter design.",
    },
    {
      title: "PROTECTION AND CONTROL ENGINEER",
      type: "PROJECT",
      place: "Tashkent, Uzbekistan",
      description:
        "As a Protection and Control Engineer, you will be responsible for designing, implementing, and testing protection and control systems for power networks. Your role will involve ensuring the reliability and safety of substations, transmission, and distribution systems. You will work on relay coordination, SCADA integration, and fault analysis to optimize system performance and minimise downtime.",
    },
    {
      title: "GRADUATE ENGINEER TRAINEE ",
      type: "OPERATIONS AND MAINTENANCE",
      place: "Tashkent, Uzbekistan",
      description:
        "As a Graduate Engineer Trainee in Operations and Maintenance, you will gain hands-on experience in monitoring, troubleshooting, and maintaining electrical and mechanical systems. You will assist in routine inspections, performance analysis, and the implementation of maintenance strategies to ensure optimal system reliability and efficiency. This role provides a strong foundation for developing technical expertise and problem-solving skills in a dynamic operational environment.",
    },
  ],
};

const JobOpenings = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div className="bg-primaryText w-full min-h-screen text-white">
      <div className="flex flex-col gap-6 justify-center items-center px-4 md:px-20 lg:px-44 text-center py-10 pb-24 relative">
        <div className="mb-5 w-full flex justify-center items-center">
          <SectionHeading heading={"JOB OPENINGS"} />
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
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
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4 md:p-10 lg:p-32">
          {selectedCountry ? (
            <div className="w-full">
              <button
                className="text-white text-lg font-medium mb-10 flex items-center gap-2 hover:text-gray-300 transition-colors"
                onClick={() => setSelectedCountry(null)}
              >
                <FaArrowLeft />
                <span>Choose Country</span>
              </button>
              <JobSwiper data={data[selectedCountry]} />
            </div>
          ) : (
            <ContactCards onSelect={(country) => setSelectedCountry(country)} />
          )}
        </div>

        <div className="w-full lg:w-1/2 p-4 md:p-10 lg:p-32 flex flex-col justify-center">
          <div className="flex flex-col gap-6 justify-center w-full max-w-sm mx-auto lg:max-w-md p-6 bg-white rounded-lg text-primaryText">
            <div className="text-2xl sm:text-3xl font-medium">
              Didn't find what you were looking for?
            </div>
            <div className="text-2xl sm:text-3xl font-medium">
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
