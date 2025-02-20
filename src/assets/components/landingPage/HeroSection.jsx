import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [prevBg, setPrevBg] = useState(null);
  const backgrounds = ["/bg/bg1.jpg", "/bg/bg2.jpg", "/bg/bg3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevBg(currentBg); // Store the previous background
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentBg]);

  return (
    <div className="relative min-h-screen flex items-center justify-end overflow-hidden ">
      {/* Previous Background (Fading Out) */}
      {prevBg !== null && (
        <motion.div
          key={`prev-${prevBg}`}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgrounds[prevBg]})` }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      )}

      {/* Current Background (Fading In) */}
      <motion.div
        key={`current-${currentBg}`}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative text-primaryText bg-opacity-90 bg-white rounded-l-lg font-light px-10 py-10 text-3xl">
        <div className="text-7xl sm:text-5xl">
          <span className="text-secondary font-medium">APS</span>
          <span className="font-medium text-[#063374]">TECHS</span>
        </div>
        Empowering Sustainable Solutions <br /> for Tomorrow's Energy Needs
      </div>
    </div>
  );
};

export default HeroSection;
