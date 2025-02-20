import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
  },
  {
    name: "Products",
    link: "/products",
    subItems: [],
  },
  {
    name: "Gallery",
    link: "/gallery",
    subItems: [],
  },
  {
    name: "Case Studies",
    link: "/case-studies",
    subItems: [],
  },
  {
    name: "Services",
    link: "/services",
    subItems: [
      { name: "Plant Engineering", link: "/services/plant-engineering" },
      { name: "Earthing Solution", link: "/services/earthing-solution" },
      // {
      //   name: "Battery Storage Integration",
      //   link: "/services/battery-storage-integration",
      // },
      { name: "Cable Solutions", link: "/services/cable-solution" },
      { name: "Protection Design", link: "/services/protection-design" },
      { name: "Power System Studies", link: "/services/power-system" },
      { name: "Survey", link: "/services/survey" },
    ],
  },
  {
    name: "Careers",
    link: "/careers",
    subItems: [],
  },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      onMouseLeave={() => setActiveTab("")}
      className="w-full h-[96px] fixed z-[1000] top-0 bg-[#f0f8ff] flex justify-between items-center px-5 lg:px-[10%] gap-10 transition-transform duration-300"
    >
      <Link to="/">
        <img className="h-[80px]" src="/assets/header/logo.png" alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
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
                className="absolute z-[1000] left-0 mt-2 w-fit py-3 bg-white border-t-2 border-primary shadow-lg block"
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

      {/* Mobile Navigation */}
      <div className="lg:hidden   ">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 hover:text-gray-900"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {menuOpen && (
          <div className="absolute top-[96px] left-0 w-full bg-white shadow-md z-[999]">
            <ul className="flex flex-col text-gray-700">
              {navItems.map((item, index) => (
                <li key={index} className="border-b">
                  <div className="flex flex-col">
                    <Link
                      to={item.link}
                      className="block px-4 py-3 hover:bg-gray-100 font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item?.subItems?.length > 0 && (
                      <ul className="bg-gray-50">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="px-6 py-2">
                            <Link
                              to={subItem.link}
                              className="block text-sm hover:text-primary"
                              onClick={() => setMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
              <li className="px-4 py-3">
                <Link
                  to={"/contact"}
                  className="cursor-pointer border-2 border-dark rounded-lg px-3 py-1 hover:bg-dark hover:text-white text-dark"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
