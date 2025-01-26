import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import DownloadBtn from "../common/DownloadBtn";

const CareersHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div
      className="w-full relative flex h-[500px]"
      style={{
        backgroundImage: `url('/assets/careers/career-bg.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full text-center  flex flex-col items-start  justify-center text-white py-10">
        <div className="absolute inset-0 bg-black bg-opacity-35 "></div>
        <div className="relative w-full ">
          <div className="text-lg w-full  lg:text-[28px] flex flex-col justify-center items-center text-start leading-[40px]  tracking-widest font-light my-4">
            <span className="font-bold text-[44px] text-center">
              We Power Big Ideas
            </span>{" "}
            <br />
            <span className=" ">
              Looking to Spark a New Career with Us?
            </span>
          </div>
        </div>
      </div>
      <DownloadBtn />
    </div>
  );
};

export default CareersHero;
