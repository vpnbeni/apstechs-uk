import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionHeading from "../common/heading/SectionHeading";

const ProductHeroSection = () => {
  return (
    <div
      className="w-screen relative flex flex-col lg:flex-row h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: `url("/assets/products/bg.jpg")`,
      }}
    >
      {/* Left content (text and Contact Us button) */}
      <div className="w-full lg:w-[65%] flex flex-col items-center  pl-6  justify-center h-full text-white py-10">
        <div className="relative">
          <SectionHeading
            heading={"Our Products"}
            clasName={"bg-secondary text-white  text-[20px]"}
          />
          <div className="text-lg lg:text-[28px] text-start leading-[50px] tracking-widest font-light my-4">
            Powering Innovation with <br /> Advanced Technology <br /> and
            Reliable Solutions
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeroSection;
