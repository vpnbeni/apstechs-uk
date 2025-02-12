import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

const SectionTwo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="w-full bg-[#001c38] flex flex-col items-center font-light">
      <div className="text-center text-lg sm:text-xl text-white px-4 sm:px-8 lg:px-[20%] py-6 sm:py-10">
        Founded in 2003 by a team of experienced engineers with over two decades
        in power and infrastructure development in India, Apstechs UK Limited
        has evolved into a leading technology company in the UK. From an
        ambitious start-up to a dynamic, fast-growing enterprise, our journey
        reflects a relentless pursuit of excellence and innovation. With strong
        financial foundations and deep industry expertise, we continue to push
        boundaries, delivering solutions that redefine possibilities and
        set new benchmarks.
      </div>

      <div
        onClick={() => window.open("/assets/pdf/APSTECHSDesignCatalogue.pdf")}
        className={`absolute bottom-8  px-4 py-1 bg-primary text-lightBlue rounded-full p-4 border hover:text-dark hover:bg-white cursor-pointer transition-all duration-1000 delay-500 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-48"
        }`}
      >
        APS brochure
      </div>
    </div>
  );
};

export default SectionTwo;
