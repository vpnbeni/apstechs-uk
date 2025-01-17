import React from "react";

const SectionHeading = ({ heading, clasName }) => {
  return (
    <h1
      className={`w-fit font-[500]  px-3 tracking-[.25em]   py-[-1px] uppercase ${
        clasName ? clasName : "bg-secondary text-white  text-lg"
      }`}
    >
      {heading}
    </h1>
  );
};

export default SectionHeading;
