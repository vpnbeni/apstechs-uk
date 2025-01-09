import React from "react";
import { FaDownload } from "react-icons/fa";

const SectionTwo = () => {
  return (
    <div className="w-full bg-[#001c38] flex flex-col items-center font-light">
      <div className="text-center text-xl text-white px-4 lg:px-[20%] py-10">
        Established in 2009, we are a privately-owned independent connection
        provider that specialises in providing turnkey high voltage solutions to
        a wide range of markets nationwide, including commercial, industrial,
        renewable, new connections and rail.
      </div>
      <div
        className={`w-fit bg-primary text-lightBlue mb-6 rounded-full p-4 border hover:text-dark hover:bg-white cursor-pointer `}
      >
        <FaDownload />
      </div>
    </div>
  );
};

export default SectionTwo;
