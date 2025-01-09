import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add event listener on mount, clean up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-[96px] fixed z-[1000] top-0 bg-[#f0f8ff] bg-opacity-80 flex justify-between items-center px-[10%] gap-10 transition-transform duration-300 ${
        isScrolled ? "-translate-y-[96px]" : "translate-y-0"
      }`}
    >
      <img className="h-[80px]" src={"/assets/header/logo.png"} alt="Logo" />
      <div className="w-fit flex justify-center gap-8">
        {[
          { name: "Home", link: "/" },
          { name: "About", link: "/about" },
          { name: "Services", link: "/services" },
          { name: "Case Studies", link: "/case-studies" },
          { name: "Careers", link: "/careers" },
          { name: "Our Services", link: "/our-services" },
        ].map((item, index) => {
          return (
            <a
              href={item.link}
              key={index}
              className="text-dark hover:text-secondary cursor-pointer text-lg font-semibold"
            >
              {item.name}
            </a>
          );
        })}
        <button className="cursor-pointer border-2 border-dark rounded-lg px-3 hover:bg-dark hover:text-white text-dark">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;
