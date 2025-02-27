import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigationLinks = [
    { name: "Service", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Privacy Policy", path: "/privacy-policy" }
  ];

  const secondColumnLinks = [
    { name: "Case Studies", path: "/case-studies" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Contact us", path: "/contact" }
  ];

  return (
    <div className="flex relative w-full flex-col lg:flex-row justify-between items-start px-4 sm:px-8 lg:px-[13%] my-8 lg:my-16 gap-10">
      <div className="flex flex-col gap-4 w-full lg:w-[35%]">
        <div className="bg-white relative text-4xl sm:text-5xl rounded-b-lg">
          <span className="text-secondary font-medium">APS</span>
          <span className="font-medium text-[#063374]">TECHS</span>
        </div>
        <div className="text-[14px] sm:text-[16px]">
          Empowering Sustainable Solutions for Tomorrow's Energy Needs
        </div>
        <div
          onClick={() => window.open("/assets/pdf/APSTECHSDesignCatalogue.pdf")}
          className="bottom-8 px-4 py-1 border-primary w-fit rounded-full p-4 border hover:text-dark hover:bg-white cursor-pointer"
        >
          APS brochure
        </div>

        <div>
          <span className="font-medium mr-2">Tel:</span>
          <a href="tel:+44 3300431870" className="text-blue-500 underline">
            +44 3300431870
          </a>
        </div>
        <div>
          <span className="font-medium mr-2">Whatsapp:</span>
          <a
            href="https://wa.me/447429924413"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            +44 7429 924413
          </a>
        </div>

        <div>
          <span className="font-medium mr-2">Email:</span>
          <a
            href="mailto:info@apstechs.co.uk"
            className="text-blue-500 underline"
          >
            info@apstechs.co.uk
          </a>
        </div>
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
      <div className="w-full lg:w-[65%] flex justify-start lg:justify-end">
        <div className="flex justify-center items-start gap-6 sm:gap-10">
          <div className="flex flex-col gap-4 sm:gap-6">
            {navigationLinks.map((item, index) => (
              <div
                className="font-medium text-sm sm:text-base cursor-pointer hover:text-blue-600 transition-colors"
                key={index}
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-start gap-4 sm:gap-6">
            {secondColumnLinks.map((item, index) => (
              <div
                className="font-medium text-sm sm:text-base cursor-pointer hover:text-blue-600 transition-colors"
                key={index}
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col gap-4">
              <span className="font-medium text-lg sm:text-xl mr-2">
                Office Locations:
              </span>
              <div className="text-sm sm:text-base">
                <span className="font-[500]">United Kingdom:</span> Suite-12,
                1st Floor, Cautrac Services Office Great Horkesley, Colchester
                CO6 4EJ
              </div>
              <div className="text-sm sm:text-base">
                <span className="font-[500]">India: </span> 10/58, First Floor,
                Industrial Area Kirti Nagar, New Delhi-110015
              </div>
              <div className="text-sm sm:text-base">
                <span className="font-[500]">Uzbekistan: </span> Mukimi street
                178, Tashkent city, Uzbekistan, 100012
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
