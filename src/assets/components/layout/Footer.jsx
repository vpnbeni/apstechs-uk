import React from "react";
import SectionHeading from "../common/heading/SectionHeading";
import { MdMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-between items-start lg:px-[13%] my-4 gap-10 lg:my-16">
      <div className="flex flex-col gap-4  lg:w-[35%]">
        <div className="bg-white relative text-5xl  rounded-b-lg ">
          <span className="text-secondary font-medium  ">APS</span>
          <span className="font-medium  text-primaryText">TECHS</span>
        </div>
        <div className="text-[16px] ">
          Empowering Sustainable Solutions for Tomorrow’s Energy Needs
        </div>

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
      <div className="w-[65%] flex justify-end ">
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
            {/* Address */}
            <div className="flex flex-col gap-4">
              <span className="font-medium text-xl mr-2">
                Office Locations:
              </span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
