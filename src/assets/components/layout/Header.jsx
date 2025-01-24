import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    link: "/",
    subItems: [],
  },
  {
    name: "About",
    link: "/about",
    subItems: [],
    // subItems: [
    //   { name: "Meet our team", link: "/about/meet-our-team" },
    //   { name: "Sustainability", link: "/about/sustainability" },
    // ],
  },
  {
    name: "Services",
    link: "/services",
    subItems: [
      { name: "Plant Engineering", link: "/services/plant-engineering" },
      { name: "Cable Solution", link: "/services/cable-solution" },
      { name: "Earthing Solution", link: "/services/earthing-solution" },
      {
        name: "Battery Storage Integration",
        link: "/services/battery-storage-integration",
      },
      { name: "Protection Design", link: "/services/protection-design" },
      { name: "Power System Studies", link: "/services/power-system-studies" },
    ],
  },
  {
    name: "Case Studies",
    link: "/case-studies",
    subItems: [],
  },
  {
    name: "Careers",
    link: "/careers",
    subItems: [
      { name: "Working for APSTECHS", link: "/careers/working-for-apstechs" },
      { name: "Vacancies", link: "/careers/vacancies" },
      { name: "Safety first Culture", link: "/careers/safety-first-culture" },
      {
        name: "Diversity and Inclusion",
        link: "/careers/diversity-and-inclusion",
      },
      { name: "Family first", link: "/careers/family-first" },
      { name: "Charity", link: "/careers/charity" },
      {
        name: "Learning and development",
        link: "/careers/learning-and-development",
      },
    ],
  },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div
      onMouseLeave={() => setActiveTab("")}
      className="w-full h-[96px] fixed z-[1000] top-0 bg-[#f0f8ff] bg-opacity-80 flex justify-between items-center px-[10%] gap-10 transition-transform duration-300"
    >
      <Link to="/">
        <img className="h-[80px]" src="/assets/header/logo.png" alt="Logo" />
      </Link>

      <nav className="hidden lg:flex gap-8">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() =>
              item?.subItems?.length > 0 && setActiveTab(item?.name)
            }
          >
            <Link
              to={item.link}
              className="text-gray-700 text-lg flex gap-1 items-center hover:text-gray-900 font-medium"
            >
              {item.name}
            </Link>

            {item?.subItems?.length > 0 && activeTab === item?.name && (
              <div
                onMouseLeave={() => setActiveTab("")}
                className="absolute z-100 left-0 mt-2 w-fit py-3 bg-white border-t-2 border-primary shadow-lg block"
              >
                <ul className="text-sm text-gray-700">
                  {item?.subItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-2 hover:bg-gray-100 text-nowrap cursor-pointer hover:border-l-4 border-primary"
                    >
                      <Link to={subItem.link}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        <Link
          to={"/contact"}
          className="cursor-pointer border-2 border-dark rounded-lg px-3 hover:bg-dark hover:text-white text-dark"
        >
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Header;
