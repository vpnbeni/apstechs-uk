import React from "react";

const CoreValues = () => {
  const values = [
    {
      title: "Responsibility and Reliability",
      description: "We take ownership and deliver dependable solutions.",
    },
    {
      title: "Innovation",
      description: "Pioneering advancements for optimal performance.",
    },
    {
      title: "Integrity",
      description: "We adhere to the highest ethical standards.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">
          Our Core Values
        </h2>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 h-[170px]"
            >
              <h3 className="text-xl font-bold text-primaryText">{value.title}</h3>
              <p className="text-gray-700 mt-2">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
