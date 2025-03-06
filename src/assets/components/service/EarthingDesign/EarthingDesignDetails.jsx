"use client";

import { useState } from "react";
import { FaDownload } from "react-icons/fa";

export default function EarthingDesignDetails() {
  const [activeTab, setActiveTab] = useState("earthingCalculation");

  return (
    <div className="min-h-screen bg-[#001529] text-white">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-6xl mx-auto relative">
          {/* Icon */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1">
              <div className="w-8 h-8 bg-secondary transform rotate-45" />
            </div>
          </div>

          {/* Service Banner */}
          <div className="bg-secondary py-2 px-6 inline-block mx-auto mb-8">
            <h2 className="text-white text-lg font-medium tracking-wider">
              EARTHING DESIGN SERVICES
            </h2>
          </div>

          <h1 className="text-4xl md:text-5xl font-medium leading-tight max-w-4xl mx-auto mb-8">
            Comprehensive Earthing Design Solutions Using Advanced CDEGS
            Software
          </h1>

          <div className="relative flex flex-col items-center justify-center ">
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-12">
              At APSTECHS, we specialise in providing comprehensive earthing
              design services using state-of-the-art software tools such as
              CDEGS. Our expertise extends to both earthing design for various
              applications and the layout and design of earthing systems for
              substation equipment.
            </p>
            <div
              onClick={() =>
                window.open("/assets/pdf/APSTECHSEarthingSolutions.pdf")
              }
              className={`bg-primary w-fit mt-5 text-lightBlue rounded-full p-4 border hover:text-dark hover:bg-white cursor-pointer transition-all duration-1000 delay-500 ease-out transform `}
            >
              <FaDownload />
            </div>
          </div>
        </div>
      </section>
      {/* Tabs Section */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 rounded-full transition-colors ${
                  activeTab === tab
                    ? "bg-secondary text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tabContent[tab].title}
              </button>
            ))}
          </div>

          <div className="bg-white/5 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">
              {tabContent[activeTab].title}
            </h3>
            <p className="text-white/90 mb-8">
              {tabContent[activeTab].description}
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              {tabContent[activeTab].items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="py-16 px-4 bg-white text-primaryText border-t border-priamryText/10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8">
            Standards & Compliance
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-priamryText/10 hover:border-secondary transition-colors"
              >
                <h4 className="text-lg font-medium mb-4">{standard.title}</h4>
                <p className="">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
              >
                <h4 className="text-lg font-medium mb-3">{service.title}</h4>
                <p className="text-white/90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-medium mb-6">
            Partner with APSTECHS for Expert Earthing Design Solutions
          </h3>
          <p className="text-lg text-white/90 mb-8">
            Whether it's for a new substation installation or the upgrade of an
            existing earthing system, we deliver tailored solutions that
            prioritize safety, reliability, and compliance with industry
            standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-secondary text-white rounded hover:bg-[#45a049] transition-colors">
              Request a Consultation
            </button>
            <button className="px-8 py-4 border border-white text-white rounded hover:bg-white hover:text-[#001529] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
const tabContent = {
  earthingCalculation: {
    title: "Earthing Calculation using CDEGS",
    description:
      "We perform advanced earthing system analysis using CDEGS software to ensure safe grounding, minimise step and touch potential hazards, and comply with international standards.",
    items: [
      "Soil resistivity measurement and modelling",
      "Grid resistance and touch/step voltage analysis",
      "Ground potential rise (GPR) assessment",
      "Fault current distribution studies",
      "Design of grounding grids, rods, and mats",
      "Lightning protection system integration",
      "Optimisation of grounding conductor sizing",
      "Compliance with IEEE 80, IEC 60479,BS 7430, and other standards",
    ],
  },
  earthingMaterialSupply: {
    title: "Supply of Earthing Materials",
    description:
      "We supply high-quality earthing materials to ensure the reliability and longevity of grounding systems for substations, transmission lines, and industrial facilities.",
    items: [
      "Copper-bonded grounding rods",
      "Galvanised and copper earthing strips",
      "Grounding conductors and wires",
      "Earthing electrodes and pits",
      "Bentonite and conductive backfill materials",
      "Exothermic welding kits and accessories",
      "Earth pit covers and inspection chambers",
      "Lightning protection system components",
    ],
  },
  fallOfPotentialSurvey: {
    title: "Fall of Potential Survey",
    description:
      "We conduct Fall of Potential surveys to assess the grounding system's efficiency by measuring voltage drops at various points and ensuring compliance with safety standards.",
    items: [
      "Grounding resistance measurement",
      "Step and touch potential analysis",
      "Potential gradient mapping",
      "Assessment of earthing system effectiveness",
      "Identification of system improvement areas",
      "Compliance with IEEE 81, IEC 60364,BS 7430:2011",
    ],
  },
  soilResistivityTest: {
    title: "Soil Resistivity Test",
    description:
      "Our soil resistivity testing helps determine the soil's resistance to electrical currents, essential for designing optimal earthing systems.",
    items: [
      "Four-point method resistivity testing",
      "Wenner method resistivity testing",
      "Analysis of soil resistivity at different depths",
      "Impact of seasonal variation on resistivity",
      "Evaluation of resistivity for grounding grid design",
      "Comprehensive soil resistivity report",
    ],
  },
};

const softwareServices = [
  "Advanced CDEGS software for precise earthing system design",
  "Sophisticated soil resistivity modelling",
  "Fault current distribution analysis",
  "Step and touch voltage calculations",
  "3D modelling and visualisation",
  "Real-time simulation capabilities",
];

const designServices = [
  "Substation equipment earthing layout design",
  "Transformer and switchgear grounding systems",
  "Control panel earthing solutions",
  "Soil resistivity surveys and analysis",
  "Pre and post Fall of Potential (FOP) surveys",
  "Compliance documentation and certification",
];

const standards = [
  {
    title: "ENA TS 41-24",
    description:
      "Comprehensive compliance with industry guidelines for earthing system design and implementation",
  },
  {
    title: "DNO Standards",
    description:
      "Adherence to Distribution Network Operator requirements and specifications",
  },
  {
    title: "International Standards",
    description: "Compliance with global best practices and safety regulations",
  },
];

const additionalServices = [
  {
    title: "Consultation Services",
    description:
      "Expert advice on earthing system design, upgrades, and maintenance",
  },
  {
    title: "Site Surveys",
    description:
      "Comprehensive site analysis and soil resistivity measurements",
  },
  {
    title: "Testing & Verification",
    description:
      "Thorough testing of installed systems to ensure optimal performance",
  },
  {
    title: "Documentation",
    description: "Detailed reports, drawings, and compliance certificates",
  },
  {
    title: "Training",
    description:
      "Knowledge transfer and staff training on earthing system maintenance",
  },
  {
    title: "Maintenance Plans",
    description: "customised maintenance schedules and procedures",
  },
];
