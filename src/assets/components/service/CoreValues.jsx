import React from "react";

const CoreValues = () => {
  const values = [
    {
      title: "Trust",
      description: "We take ownership and deliver dependable solutions.",
    },
    {
      title: " Impact",
      description: "Pioneering advancements for optimal performance.",
    },
    {
      title: "Excel",
      description: "We adhere to the highest ethical standards.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-gray-800 px-4 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">
          Our Core Values
        </h2>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg transition-all transform hover:scale-105 min-h-[170px]"
              role="article"
              aria-labelledby={`core-value-title-${index}`}
              aria-describedby={`core-value-description-${index}`}
            >
              <h3
                id={`core-value-title-${index}`}
                className="text-xl font-bold text-primaryText"
              >
                {value.title}
              </h3>
              <p
                id={`core-value-description-${index}`}
                className="text-gray-700 mt-2"
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
