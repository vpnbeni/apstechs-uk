import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OurValue = () => {
  return (
    <div className="">
      <div className="w-full bg-[#EBEFF2] flex flex-col lg:flex-row h-fit">
        {/* Left Section (Text) */}
        <div className="w-full lg:w-[60%] flex flex-col items-start px-6 lg:px-28 py-10 lg:py-20">
          <div className="ml-0 lg:ml-10">
            <div className="flex justify-start items-start h-fit">
              <div className="w-full h-fit relative">
                <div className="w-[1.5px] h-[95%] bg-[#b4b4b4] mr-8 absolute -left-8">
                  <div className="h-20 right-[1px] bg-secondary w-[2px] absolute top-[12%]"></div>
                </div>
                <h1 className="w-fit bg-secondary px-3 tracking-[.2em] text-white text-lg py-[-1px]">
                  OUR VALUES
                </h1>
                <div className="text-lg lg:text-[28px] text-start leading-10 tracking-widest font-light my-4">
                  Our Commitment Is Twofold: To Do Right by People and the
                  Planet.
                </div>
                <div className="text-[16px] tracking-wide font-[250] mt-4 leading-[30px]">
                  At APSTECHS, we actively embody values such as safety,
                  sustainability, and community support in everything we do.
                  Recognising the impact our operations have on the world around
                  us, we diligently choose sustainable materials and designs,
                  striving towards a net-zero future through promoting greener
                  energy.
                  <br /> <br />
                  Safety is paramount; we cultivate a culture where every
                  employee is empowered and equipped with the knowledge to work
                  safely and to our high standard.
                  <br /> <br />
                  ​ Beyond environmental responsibility, we extend our support
                  to local communities, contributing both financially and
                  through volunteering with charities that align with our team’s
                  values.
                  <br /> <br />
                </div>
              </div>
            </div>
            <div className="flex w-fit mt-10 border border-primary rounded-lg text-primaryText items-center justify-center">
              <div className="px-4 cursor-pointer font-light text-[14px] hover:bg-primaryText hover:text-white py-2 border-r border-primary rounded-l-lg">
                Sustainability
              </div>
              <span className="px-4 py-2 rounded-r-lg">
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>

        {/* Right Section (Video) */}
        <div className="w-full lg:w-[40%] flex py-10 lg:py-20 lg:pr-20 relative">
          <video
            className="top-0 left-0 w-full h-full object-cover lg:rounded-3xl"
            src="/assets/about/video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#001C38] flex flex-col text-center py-10 lg:py-14">
        <div className="text-white w-full lg:w-1/2 mx-auto text-xl mb-3 font-[500]">
          This comprehensive approach to our values - covering safety,
          environmental care, and community engagement - highlights the
          commitment of APSTECHS to positive impacts on both a global and local
          scale.
        </div>
        <div className="text-[#318C31]">
          These values are what truly set APSTECHS apart from <br /> other
          businesses.
        </div>
      </div>
    </div>
  );
};

export default OurValue;
