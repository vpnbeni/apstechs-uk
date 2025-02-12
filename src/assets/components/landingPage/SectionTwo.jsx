import React from "react";
import { FaDownload } from "react-icons/fa";
import DownloadBtn from "../common/DownloadBtn";

const SectionTwo = () => {
  return (
    <div className="w-full bg-[#001c38] flex flex-col items-center font-light">
      <div className="text-center text-lg sm:text-xl text-white px-4 sm:px-8 lg:px-[20%] py-6 sm:py-10">
      Founded in 2003 by a team of experienced engineers with over two decades in power and infrastructure development in India, Apstechs UK Limited has evolved into a leading technology company in the UK. From an ambitious start-up to a dynamic, fast-growing enterprise, our journey reflects a relentless pursuit of excellence and innovation. With strong financial foundations and deep industry expertise, we continue to push boundaries, delivering solutions that redefine possibilities and set new benchmarks.
      </div>
      <DownloadBtn pdf={"/assets/pdf/APSTECHSDesignCatalogue.pdf"} />
    </div>
  );
};

export default SectionTwo;
