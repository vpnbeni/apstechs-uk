import { useState } from "react";
const tabContent = {
  cableSizing: {
    title: "Cable Sizing Calculation",
    description:
      "We perform cable sizing calculations to ensure optimal conductor selection based on load requirements, voltage drop, and thermal constraints, ensuring safety and efficiency.",
    items: [
      "Load current and voltage drop calculation",
      "Short circuit withstand capacity analysis",
      "Thermal and ampacity considerations",
      "Derating factor assessment (temperature, grouping, soil resistivity)",
      "Selection of appropriate insulation and conductor material",
      "Earthing and shielding considerations",
      "Compliance with IEC 60287, NEC, and IEEE standards",
      "Optimization for energy efficiency and cost-effectiveness",
    ],
  },
  cablePulling: {
    title: "Cable Pulling Calculation",
    description:
      "We conduct cable pulling calculations to ensure safe and efficient installation, minimizing mechanical stress and preventing damage during cable laying.",
    items: [
      "Tension and sidewall pressure analysis",
      "Cable route planning and optimization",
      "Bend radius and pulling force calculation",
      "Lubrication and friction coefficient evaluation",
      "Cable tray and conduit sizing",
      "Installation method selection (direct burial, duct, tray, trench)",
      "Thermal impact and cooling considerations",
      "Compliance with IEEE, IEC, and NEC installation standards",
    ],
  },
  cableSupply: {
    title: "Supply of Cable",
    description:
      "We supply high-quality cables for power, control, and communication applications, ensuring reliability, durability, and compliance with industry standards.",
    items: [
      "LV, MV, and HV power cables",
      "Control and instrumentation cables",
      "XLPE, PVC, and EPR insulated cables",
      "Copper and aluminum conductor cables",
      "Armored and unarmored cables",
      "Fire-resistant and flame-retardant cables",
      "Underground and overhead transmission cables",
      "Custom-length cable supply with necessary accessories",
    ],
  },
};

const civilServices = [
  "Initial site planning layout drawings & support",
  "Detailed site layouts, elevations & electrical clearance drawings",
  "Substation foundation and design analysis for all types of equipment, including structural calculations and rebar detailing",
  "Full 3D modelling and rendering for a comprehensive representation of the project's final outcome",
  "Implementation of Building Information Modelling (BIM) for enhanced project visualisation and coordination.",
];

const electricalServices = [
  "HV/LV cable calculations",
  "Protection coordination load flow and fault level assessments",
  "G5/5 harmonics assessment and P28 studies",
  "Earthing design, calculations, and testing",
  "Protection block diagrams",
  "Lightning protection risk assessment",
  "Detailed schematics, wiring diagrams and cable schedules",
];

export default function CableSolutionDetails() {
  const [activeTab, setActiveTab] = useState("cableSizing");

  return (
    <div className="bg-[#001529] min-h-screen">
      {/* Cable System Design Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-8xl mx-auto">
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
          </div>

          {/* Service Banner */}
          <div className="bg-secondary py-2 px-6 inline-block mx-auto mb-8">
            <h2 className="text-white text-lg font-medium tracking-wider">
              CABLE SYSTEM DESIGN
            </h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-8 text-white">
            <p className="text-lg text-white/90">
              Expanding our reach beyond the UK and India, APSTECHS now offers
              comprehensive cable system design services for clients worldwide,
              covering a wide range of voltages from low voltage to extra high
              voltage. Leveraging advanced software tools such as CREATER and
              CYMCAP, we ensure precise and efficient designs tailored to meet
              the unique requirements of each project.
            </p>
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
            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">
                  Civil Design Services
                </h3>
                <ul className="space-y-4">
                  {civilServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-sebg-secondary flex-shrink-0 mt-1"
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
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">
                  Electrical Design Services
                </h3>
                <ul className="space-y-4">
                  {electricalServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-sebg-secondary flex-shrink-0 mt-1"
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
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <button className="mt-12 px-6 py-3 text-white border border-white rounded hover:bg-white hover:text-[#001529] transition-colors">
            Get in touch with our team
          </button>
        </div>
      </section>

      {/* Project Delivery Section */}
      <section className="py-16 px-4 text-center border-t border-white/10">
        <div className="max-w-6xl mx-auto">
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
                <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-7H4a2 2 0 0 0-2 2v17Z" />
                <path d="M15 8V1" />
                <path d="M8 12h8" />
                <path d="M8 16h8" />
              </svg>
            </div>
          </div>

          {/* Service Banner */}
          <div className="bg-secondary py-2 px-6 inline-block mx-auto mb-8">
            <h2 className="text-white text-lg font-medium tracking-wider">
              PROJECT DELIVERY
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 text-white">
            <h3 className="text-3xl md:text-4xl font-medium leading-tight">
              We Believe That Every Project Is Unique and Requires a Tailored
              Approach to Deliver a Customised Solution That Meets the Specific
              Needs of Each Client.
            </h3>
            <p className="text-lg text-white/90">
              At every stage of the project, safety is at the heart of
              everything we do. Our direct employment of engineers and
              technicians ensures a high level of engineering standards and
              provides continuity throughout the project, allowing for seamless
              delivery. With over a decade of experience, we have provided the
              electrical infrastructure for a wide variety of industries,
              including pharmaceutical, rail, Formula 1, NHS, wind and solar
              farms, as well as many more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
