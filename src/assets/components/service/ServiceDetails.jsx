import React from "react";

const ServiceDetails = () => {
  return (
    <section className="py-16 bg-dark text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Detailed Services
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-secondary">
              High Voltage Design
            </h3>
            <p>
              specialised in systems from 11kV to 220kV, we ensure reliability
              and safety in every project.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary">
              Low Voltage Design
            </h3>
            <p>
              LV systems are designed for efficiency and adherence to safety
              standards.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary">
              Substation Design
            </h3>
            <p>
              From greenfield to upgrades, we deliver space-efficient, compliant
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
