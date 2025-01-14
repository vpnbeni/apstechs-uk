import React from "react";

const SectionHeading = ({ heading }) => {
  return (
    <h1 className="w-fit font-[500] bg-secondary px-3 tracking-[.25em]  text-white text-lg py-[-1px] uppercase">
      {heading}
    </h1>
  );
};

export default SectionHeading;
