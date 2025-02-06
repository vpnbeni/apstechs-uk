import React from "react";
import { FaDownload } from "react-icons/fa";
import DownloadBtn from "../common/DownloadBtn";

const SectionTwo = () => {
  return (
    <div className="w-full bg-[#001c38] flex flex-col items-center font-light">
      <div className="text-center text-lg sm:text-xl text-white px-4 sm:px-8 lg:px-[20%] py-6 sm:py-10">
        Founded in 2003 by a team of dedicated engineers with over 20 years of
        experience in power and infrastructure development in India, Apstechs UK
        Limited has grown into a leading technology company in the UK. Our
        journey from a visionary start-up to a robust, fast-growing enterprise
        is a testament to our commitment to excellence and innovation. With a
        solid financial foundation and a vast pool of expertise, we now deliver
        solutions that exceed even our founders’ most ambitious aspirations.
      </div>
      <DownloadBtn pdf={"/assets/pdf/APSTECHSDesignCatalogue.pdf"} />
    </div>
  );
};

export default SectionTwo;
