import React from "react";

const SectionHeading = ({ heading, clasName }) => {
  return (
    <h1
      className={`w-fit font-[500] px-3 py-[-1px] tracking-[.25em] uppercase text-center ${
        clasName ? clasName : "bg-secondary text-white  text-[16px] "
      }`}
    >
      {heading}
    </h1>
  );
};

export default SectionHeading;
