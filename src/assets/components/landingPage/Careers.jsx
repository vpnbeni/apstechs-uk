import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import JobSwiper from "../careers/JobSwiper";
import { Link } from "react-router-dom";
import ContactCards from "../careers/ContactCards";
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
const Careers = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div className="w-full flex flex-col lg:flex-row h-auto bg-[#001C38]">
      <div className="w-full lg:w-[45%] flex flex-col items-start pl-8 lg:pl-32 justify-center text-white py-10 px-6">
        <div className="relative">
          <div className="w-[1.3px] h-[95%] bg-[#b4b4b4] mr-8 absolute -left-10">
            <div className="h-20 right-[1px] bg-secondary w-[1.3px] absolute top-[40%]"></div>
          </div>
          <h1 className="w-fit bg-secondary px-3 tracking-[.2em] text-white text-lg lg:text-xl mt-6 py-[-1px]">
            CAREERS
          </h1>
          <div className="text-lg lg:text-[28px] text-start leading-[50px] tracking-widest font-light my-4">
            We’re Looking for New <br /> Talent to Join Our Team. <br /> See All
            Positions and <br /> Submit Your CV.
          </div>
        </div>

        <Link
          to={"/careers"}
          className="flex mt-10 border border-white rounded-lg text-white items-center justify-start"
        >
          <div className="px-6 cursor-pointer hover:bg-white hover:text-black py-2 border-r border-white rounded-l-lg">
            Openings
          </div>
          <span className="px-4 py-2 rounded-r-lg">
            <FaArrowRight />
          </span>
        </Link>
      </div>

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
    </div>
  );
};

export default Careers;
