import React from "react";
import SectionHeading from "../common/heading/SectionHeading";

const Footer = () => {
  return (
    <div className="flex justify-between items-start lg:px-[13%] my-4 lg:my-20">
      <div className="flex flex-col lg:w-[55%]">
        <div className="text-[25px] font-medium mb-8 tracking-widest">
          APSTECHS
        </div>
        <div className="flex justify-center items-start gap-10">
          <div className="flex flex-col gap-6 ">
            {["Service", "About", "Careers", "Privacy Policy"].map(
              (item, index) => {
                return (
                  <div className="font-medium text-nowrap" key={index}>
                    {item}
                  </div>
                );
              }
            )}
          </div>
          <div className="flex flex-col justify-start gap-6 ">
            {["Case Studies", "Sustainability", "Contact us"].map(
              (item, index) => {
                return (
                  <div className="font-medium" key={index}>
                    {item}
                  </div>
                );
              }
            )}
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <span className="font-medium mr-2">Tel:</span>
              <a href="tel:+44 3301184436" className="text-blue-500 underline">
                +44 3301184436
              </a>
            </div>

            {/* Email */}
            <div>
              <span className="font-medium mr-2">Email:</span>
              <a
                href="mailto:info@apstechs.co.uk"
                className="text-blue-500 underline"
              >
                info@apstechs.co.uk
              </a>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-2">
              <span className="font-medium mr-2">Address:</span>
              <div className="">
                <span className="font-[500] ">United Kingdom:</span> Suite-12,
                1st Floor, Cautrac Services Office Great Horkesley, Colchester
                CO6 4EJ
              </div>
              <div className="">
                <span className="font-[500] ">India: </span> 10/58, First Floor,
                Industrial Area Kirti Nagar, New Delhi-110015
              </div>
              <div className="">
                <span className="font-[500] ">Uzbekistan: </span> - Mukimi
                street 178, Tashkent city, Uzbekistan, 100012
              </div>
            </div>

            {/* LinkedIn */}
            <div>
              <span className="font-medium mr-2">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/company/aps-techs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[45%] flex justify-end ">
        <div className="border border-primaryText rounded-lg py-10 px-6 w-fit flex flex-col gap-5">
          <SectionHeading heading={"SUBSCRIBE"} />
          <div className="text-base font-[250] ">
            Sign up to receive APS's latest news and updates
          </div>
          <div className="relative rounded-lg h-[40px] w-[300px] border border-primaryText">
            <div className="cursor-pointer  absolute right-0 rounded-lg bg-primaryText text-white hover:text-primaryText hover:bg-white hover:border  hover:border-primaryText px-4 h-[39px] text-center flex justify-center items-center ">
              Subscribe
            </div>
            <input
              type="email"
              className="rounded-l-lg h-full w-[186px] focus:outline-none text-sm  px-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
