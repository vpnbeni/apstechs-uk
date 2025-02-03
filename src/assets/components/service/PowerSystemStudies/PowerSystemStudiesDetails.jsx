import { useState } from "react";
import { Link } from "react-router-dom";

export default function PowerSystemStudiesDetails() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-[#001529] text-white">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
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
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1">
              <div className="w-8 h-8 bg-secondary transform rotate-45" />
            </div>
          </div>

          {/* Service Banner */}
          <div className="bg-secondary py-2 px-6 inline-block mx-auto mb-8">
            <h2 className="text-white text-lg font-medium tracking-wider">
              POWER SYSTEM STUDIES
            </h2>
          </div>

          <h1 className="text-4xl md:text-5xl font-medium leading-tight max-w-4xl mx-auto mb-8">
            Comprehensive Power System Analysis for Optimal Performance
          </h1>

          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-12">
            At APSTECHS, we specialise in conducting a wide range of power
            system studies aimed at assessing and optimizing the performance of
            existing power plant designs and systems. Our goal is to enhance
            reliability, increase efficiency, and ensure compliance with
            industry standards and regulations.
          </p>

          <Link
            to={"/contact"}
            className="px-6 py-3 text-white border border-white rounded hover:bg-white hover:text-[#001529] transition-colors"
          >
            Get in touch with our team
          </Link>
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

      {/* Benefits Section */}
      <section className="py-16 px-4 border-t border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-12 text-center">
            Benefits of Our Power System Studies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
              >
                <div className="text-secondary mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-medium mb-3">{benefit.title}</h4>
                <p className="text-white/90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-12 text-center">
            Our Power System Study Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 rounded-lg bg-white/5 h-full">
                  <div className="text-secondary text-4xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-medium mb-3">{step.title}</h4>
                  <p className="text-white/90">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-secondary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-medium mb-6">
            Optimize Your Power Systems with APSTECHS
          </h3>
          <p className="text-lg text-white/90 mb-8">
            Through our comprehensive power system studies, we help clients
            optimize the performance, reliability, and safety of their
            electrical networks, enabling them to achieve their operational and
            regulatory objectives effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-secondary text-white rounded hover:bg-[#45a049] transition-colors">
              Request a Study
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
  overview: {
    title: "Overview",
    description:
      "Our power system studies cover a wide range of analyses to ensure optimal performance, reliability, and compliance of electrical networks.",
    items: [
      "G99 Compliance Studies",
      "P28/P29 Studies",
      "G5/4 - G5/5 Studies",
      "Relay Coordination Studies",
      "Load Flow and Short Circuit Studies",
      "Reactive Power Capability/Voltage Control Stability Studies",
      "Fault Ride Through and Transient Stability Studies",
      "Arc Flash Studies",
    ],
  },
  g99: {
    title: "G99 Compliance Studies",
    description:
      "We conduct G99 compliance studies to ensure that renewable energy generation systems comply with the requirements set forth in the UK Grid Code.",
    items: [
      "Assessment of renewable energy integration impact",
      "Grid stability analysis",
      "Protection coordination evaluation",
      "Voltage regulation studies",
      "Frequency response analysis",
      "Fault ride-through capability assessment",
      "Power quality impact studies",
      "Compliance documentation and reporting",
    ],
  },
  p28p29: {
    title: "P28/P29 Studies",
    description:
      "We perform studies according to P28 and P29 guidelines to assess the planning limits for voltage fluctuations in electrical networks.",
    items: [
      "Voltage variation analysis under different operating conditions",
      "Flicker assessment",
      "Rapid voltage change evaluation",
      "Step voltage change analysis",
      "Voltage unbalance studies",
      "Mitigation strategy development",
      "Compliance verification with regulatory requirements",
      "Recommendations for voltage control improvements",
    ],
  },
  g5: {
    title: "G5/4 - G5/5 Studies",
    description:
      "Our team conducts G5/4 and G5/5 studies to evaluate the harmonic emissions and compliance of power generation and distribution systems.",
    items: [
      "Harmonic distortion analysis",
      "Identification of harmonic sources",
      "Assessment of harmonic limits compliance",
      "Interharmonic analysis",
      "Resonance studies",
      "Filter design and optimization",
      "Mitigation strategy development",
      "Compliance reporting and recommendations",
    ],
  },
  relay: {
    title: "Relay Coordination Studies",
    description:
      "We perform relay coordination studies to optimize the coordination of protective relays within electrical networks.",
    items: [
      "Fault condition analysis",
      "Relay setting calculation and optimization",
      "Time-current curve development",
      "Selectivity and sensitivity assessment",
      "Breaker failure protection coordination",
      "Backup protection evaluation",
      "Arc flash protection coordination",
      "Relay setting implementation support",
    ],
  },
  loadflow: {
    title: "Load Flow and Short Circuit Studies",
    description:
      "We conduct load flow and short circuit studies to analyze the steady-state and dynamic behavior of electrical networks under various operating conditions.",
    items: [
      "Power flow analysis",
      "Voltage profile assessment",
      "Power loss calculation",
      "Contingency analysis",
      "Short circuit current calculation",
      "Equipment rating verification",
      "Power factor correction studies",
      "Network optimization recommendations",
    ],
  },
  reactive: {
    title: "Reactive Power and Voltage Control Studies",
    description:
      "We assess the reactive power capability and voltage control stability of power generation and distribution systems to ensure adequate voltage regulation and stability.",
    items: [
      "Reactive power flow analysis",
      "Voltage stability assessment",
      "Power factor improvement studies",
      "Capacitor bank sizing and placement",
      "Static VAR compensator (SVC) studies",
      "STATCOM performance analysis",
      "Voltage collapse point determination",
      "Reactive power optimization strategies",
    ],
  },
  faultride: {
    title: "Fault Ride Through and Transient Stability Studies",
    description:
      "We perform fault ride-through and transient stability studies to assess the dynamic response of power systems to disturbances.",
    items: [
      "Fault ride-through capability assessment",
      "Critical clearing time determination",
      "Generator stability analysis",
      "System oscillation studies",
      "Load shedding scheme evaluation",
      "Power system stabilizer tuning",
      "HVDC link stability assessment",
      "Recommendations for stability enhancement",
    ],
  },
  arcflash: {
    title: "Arc Flash Studies",
    description:
      "We conduct arc flash studies to assess the potential hazards associated with electrical arcing and provide recommendations for arc flash mitigation and personnel safety.",
    items: [
      "Incident energy calculations",
      "Arc flash boundary determination",
      "Personal protective equipment (PPE) recommendations",
      "Equipment labeling requirements",
      "Arc flash risk assessment",
      "Mitigation strategy development",
      "Safety procedure recommendations",
      "Training program development support",
    ],
  },
};

const benefits = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Enhanced System Performance",
    description:
      "Optimize power flow, reduce losses, and improve overall system efficiency.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Increased Reliability",
    description:
      "Identify and mitigate potential issues to minimize downtime and improve system stability.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Regulatory Compliance",
    description:
      "Ensure adherence to industry standards and regulatory requirements.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Cost Optimization",
    description:
      "Identify opportunities for cost reduction through improved system design and operation.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: "Enhanced Safety",
    description:
      "Improve personnel safety through comprehensive arc flash and protection studies.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Future-Proofing",
    description:
      "Prepare your power system for future expansion and integration of new technologies.",
  },
];

const processSteps = [
  {
    title: "Data Collection",
    description:
      "Gather all relevant system information, including network topology, equipment specifications, and operational data.",
  },
  {
    title: "Modeling & Analysis",
    description:
      "Develop detailed system models and perform comprehensive analysis using advanced software tools.",
  },
  {
    title: "Results Interpretation",
    description:
      "Analyze study results to identify potential issues, optimization opportunities, and compliance gaps.",
  },
  {
    title: "Recommendations",
    description:
      "Provide actionable recommendations for system improvements, including detailed implementation strategies.",
  },
];
