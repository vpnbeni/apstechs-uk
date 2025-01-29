"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProtectionDesignDetails() {
  const [activeTab, setActiveTab] = useState("protectionCoordination");

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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1">
              <div className="w-8 h-8 bg-secondary transform rotate-45" />
            </div>
          </div>

          {/* Service Banner */}
          <div className="bg-secondary py-2 px-6 inline-block mx-auto mb-8">
            <h2 className="text-white text-lg font-medium tracking-wider">
              PROTECTION DESIGN SERVICES
            </h2>
          </div>

          <h1 className="text-4xl md:text-5xl font-medium leading-tight max-w-4xl mx-auto mb-8">
            Advanced Protection Systems for Reliable Power Infrastructure
          </h1>

          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-12">
            Our protection design team is dedicated to ensuring that protection
            systems effectively safeguard assets and ensure uninterrupted power
            supply. We specialize in performing detailed designs of protection
            schemes tailored to our clients' standards and specifications.
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
      {/* Key Features Grid */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Key Protection Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
              >
                <div className="text-secbg-secondary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Protection Services */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">
                Protection Services
              </h3>
              <ul className="space-y-4">
                {protectionServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-secbg-secondary flex-shrink-0 mt-1"
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
                    <span className="text-white/90">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment Protection */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">
                Equipment Protection
              </h3>
              <ul className="space-y-4">
                {equipmentProtection.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-secbg-secondary flex-shrink-0 mt-1"
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
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="py-16 px-4 border-t border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-12 text-center">
            Standards & Compliance
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-white/10 hover:border-secbg-secondary transition-colors"
              >
                <h4 className="text-lg font-medium mb-4">{standard.title}</h4>
                <p className="text-white/90">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-12 text-center">
            Our Protection Design Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 rounded-lg bg-white/5 h-full">
                  <div className="text-secbg-secondary text-4xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-medium mb-3">{step.title}</h4>
                  <p className="text-white/90">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 border-t border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-12 text-center">
            Benefits of Our Protection Design
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
              >
                <h4 className="text-lg font-medium mb-3">{benefit.title}</h4>
                <p className="text-white/90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-medium mb-6">
            Partner with APSTECHS for Advanced Protection Solutions
          </h3>
          <p className="text-lg text-white/90 mb-8">
            Whether it's for new installations, upgrades, or expansions, we
            provide designs that safeguard assets, ensure continuity of supply,
            and enhance the resilience of electrical systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-secondary text-white rounded hover:bg-secondary transition-colors">
              Start Your Project
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
  protectionCoordination: {
    title: "Protection Coordination Studies",
    description:
      "Our protection coordination studies ensure the proper selection and setting of protective devices to minimize equipment damage and improve system reliability.",
    items: [
      "Short circuit and fault analysis",
      "Relay coordination and grading",
      "Time-current characteristic (TCC) curve analysis",
      "Protection scheme optimization",
      "Arc flash hazard analysis",
      "Breaker and fuse coordination",
      "Relay trip sequence evaluation",
      "Compliance with IEEE/IEC protection standards",
    ],
  },
  protectionInterfacing: {
    title: "Protection Interfacing",
    description:
      "We design protection interfacing solutions to ensure seamless communication and operation between different protection devices and systems.",
    items: [
      "Integration of relays and protection devices",
      "Interfacing with switchgear and circuit breakers",
      "Communication protocol implementation (IEC 61850, DNP3, Modbus, etc.)",
      "Logic development for interlocking and tripping",
      "Redundancy and fail-safe mechanism design",
      "Testing and validation of protection schemes",
      "Remote monitoring and control integration",
      "Troubleshooting and system optimization",
    ],
  },
  scadaInterfacing: {
    title: "SCADA Interfacing",
    description:
      "Our SCADA interfacing solutions enable real-time monitoring and control of substations, improving operational efficiency and decision-making.",
    items: [
      "SCADA system integration with protection relays",
      "Communication protocol mapping (IEC 61850, DNP3, Modbus, etc.)",
      "Data acquisition and telemetry configuration",
      "Remote control and automation setup",
      "HMI and graphical display configuration",
      "Event logging and alarm management",
      "Cybersecurity implementation for SCADA systems",
      "Testing and validation of SCADA interfaces",
    ],
  },
  relaySetting: {
    title: "Relay Setting",
    description:
      "We provide precise relay setting calculations to ensure accurate fault detection, system stability, and coordination with upstream and downstream devices.",
    items: [
      "Relay setting calculation based on fault studies",
      "Pickup and time delay adjustments",
      "Primary and secondary injection testing",
      "Distance relay zone setting configuration",
      "Differential relay setting optimization",
      "Directional overcurrent relay coordination",
      "Load encroachment and stability analysis",
      "Relay setting validation and testing",
    ],
  },
};
const keyFeatures = [
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
    title: "Advanced Protection",
    description:
      "State-of-the-art protection schemes utilizing the latest technology and methodologies",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Rapid Response",
    description:
      "Quick fault detection and isolation to minimize system downtime",
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
    title: "System Reliability",
    description:
      "Enhanced system stability and continuous operation under various conditions",
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
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Custom Solutions",
    description:
      "Tailored protection schemes designed to meet specific client requirements",
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    title: "Documentation",
    description:
      "Comprehensive documentation and support throughout the project lifecycle",
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    title: "Compliance",
    description: "Adherence to industry standards and regulatory requirements",
  },
];

const protectionServices = [
  "Customized protection scheme development",
  "Detailed design and analysis",
  "Protection coordination studies",
  "Relay setting calculations",
  "System stability analysis",
  "Fault current calculations",
  "Arc flash studies",
  "Protection system audits",
];

const equipmentProtection = [
  "Transformer protection systems",
  "Generator protection schemes",
  "Switchgear protection",
  "Transmission line protection",
  "Bus protection systems",
  "Motor protection",
  "Distributed generation protection",
  "Battery storage protection",
];

const standards = [
  {
    title: "Industry Standards",
    description:
      "Compliance with IEEE, IEC, and other relevant international standards",
  },
  {
    title: "Grid Codes",
    description: "Adherence to national and regional grid code requirements",
  },
  {
    title: "Safety Regulations",
    description:
      "Implementation of safety standards and protection requirements",
  },
];

const processSteps = [
  {
    title: "Requirements Analysis",
    description:
      "Detailed assessment of protection requirements and system characteristics",
  },
  {
    title: "Design Development",
    description: "Creation of protection schemes and coordination studies",
  },
  {
    title: "Implementation",
    description: "Setting configuration and system integration",
  },
  {
    title: "Testing & Validation",
    description: "Comprehensive testing and performance verification",
  },
];

const benefits = [
  {
    title: "Enhanced Safety",
    description: "Improved protection against electrical faults and hazards",
  },
  {
    title: "Reduced Downtime",
    description:
      "Minimized system interruptions through effective fault isolation",
  },
  {
    title: "Cost Efficiency",
    description:
      "Optimized protection schemes that balance cost and performance",
  },
  {
    title: "Future-Proof Design",
    description: "Scalable solutions that accommodate system growth",
  },
  {
    title: "Expert Support",
    description: "Comprehensive technical support and documentation",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and validation procedures",
  },
];
