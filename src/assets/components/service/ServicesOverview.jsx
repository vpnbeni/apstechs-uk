import { useState } from "react"
import { Link } from "react-router-dom"

export default function HVLVPlantDesign() {
  const [activeTab, setActiveTab] = useState("overview")

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
            <h2 className="text-white text-lg font-medium tracking-wider">HV AND LV PLANT DESIGN</h2>
          </div>

          <h1 className="text-4xl md:text-5xl font-medium leading-tight max-w-4xl mx-auto mb-8">
            Comprehensive HV and LV Plant Design Services
          </h1>

          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-12">
            At APSTECHS, we excel in providing comprehensive HV (High Voltage) and LV (Low Voltage) plant design
            services, spanning from 11kV to 220kV. Our expertise covers the entire spectrum of substation design,
            offering tailored solutions for primary, secondary, and civil requirements, from initial concept to final
            commissioning.
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
                  activeTab === tab ? "bg-secondary text-white" : "bg-white/10 text-white hover:bg-white/20"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tabContent[tab].title}
              </button>
            ))}
          </div>

          <div className="bg-white/5 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">{tabContent[activeTab].title}</h3>
            <p className="text-white/90 mb-8">{tabContent[activeTab].description}</p>
            <ul className="grid md:grid-cols-2 gap-4">
              {tabContent[activeTab].items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
          <h3 className="text-2xl font-semibold mb-12 text-center">Benefits of Our HV and LV Plant Design Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
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
          <h3 className="text-2xl font-semibold mb-12 text-center">Our HV and LV Plant Design Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 rounded-lg bg-white/5 h-full">
                  <div className="text-secondary text-4xl font-bold mb-4">{index + 1}</div>
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
          <h3 className="text-3xl font-medium mb-6">Optimize Your Power Systems with APSTECHS</h3>
          <p className="text-lg text-white/90 mb-8">
            Through our comprehensive HV and LV plant design services, we help clients develop robust, efficient, and
            future-ready substations that support reliable power distribution and enhance grid stability.
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
  )
}

const tabContent = {
  overview: {
    title: "Overview",
    description:
      "Our HV and LV plant design services cover a wide range of solutions to ensure optimal performance, reliability, and compliance of electrical networks.",
    items: [
      "High Voltage (HV) Design",
      "Low Voltage (LV) Design",
      "Substation Design Solutions",
      "Primary System Design",
      "Secondary System Design",
      "Civil Design Requirements",
      "Concept to Commissioning Support",
    ],
  },
  hv: {
    title: "High Voltage (HV) Design",
    description:
      "We specialize in designing HV systems ranging from 11kV to 220kV, ensuring optimal performance, reliability, and safety.",
    items: [
      "Equipment selection",
      "Layout planning",
      "Insulation coordination",
      "Protection system design",
      "Switchgear design",
      "Transformer specification",
      "Busbar system design",
      "Grounding and lightning protection",
    ],
  },
  lv: {
    title: "Low Voltage (LV) Design",
    description: "Our LV design services encompass the design of distribution systems operating at voltages below 1kV.",
    items: [
      "LV switchgear design",
      "Distribution panel layout",
      "Busbar system design",
      "Cable network planning",
      "Power factor correction",
      "Harmonic mitigation",
      "Energy efficiency optimization",
      "Compliance with safety standards",
    ],
  },
  substation: {
    title: "Substation Design Solutions",
    description:
      "From greenfield developments to upgrades and expansions, we provide end-to-end substation design solutions.",
    items: [
      "Site layout optimization",
      "Equipment specification",
      "Protection and control systems",
      "SCADA integration",
      "Auxiliary power systems",
      "Environmental impact assessment",
      "Noise reduction measures",
      "Fire protection systems",
    ],
  },
  primary: {
    title: "Primary System Design",
    description:
      "We design the primary components of substations to ensure reliable power distribution and protection against electrical faults.",
    items: [
      "Transformer specification",
      "Circuit breaker selection",
      "Disconnect switch design",
      "Lightning arrestor placement",
      "Busbar system optimization",
      "Insulation coordination",
      "Earthing system design",
      "Power flow analysis",
    ],
  },
  secondary: {
    title: "Secondary System Design",
    description:
      "Our secondary system design services cover the design of control, protection, and monitoring systems within substations.",
    items: [
      "Relay panel design",
      "Control cabinet layout",
      "SCADA system integration",
      "Communication network design",
      "Metering and instrumentation",
      "Alarm and event logging systems",
      "Cybersecurity measures",
      "Remote monitoring solutions",
    ],
  },
  civil: {
    title: "Civil Design Requirements",
    description: "We offer civil engineering services tailored to the unique requirements of substation projects.",
    items: [
      "Site layout planning",
      "Foundation design",
      "Structural analysis",
      "Grounding system design",
      "Cable trenches and ducts",
      "Oil containment systems",
      "Access roads and fencing",
      "Environmental compliance measures",
    ],
  },
  commissioning: {
    title: "Concept to Commissioning Support",
    description:
      "From conceptualization to commissioning, we provide comprehensive support throughout the project lifecycle.",
    items: [
      "Feasibility studies",
      "Detailed engineering",
      "Procurement support",
      "Construction supervision",
      "Testing and commissioning",
      "Documentation and manuals",
      "Training and knowledge transfer",
      "Post-commissioning support",
    ],
  },
}

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Optimized Performance",
    description: "Enhance power distribution efficiency and reliability through tailored design solutions.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Enhanced Safety",
    description:
      "Implement robust safety measures and comply with industry standards to protect personnel and equipment.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Regulatory Compliance",
    description: "Ensure adherence to local and international standards for HV and LV plant design.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Cost-Effective Solutions",
    description: "Optimize design and equipment selection to reduce capital and operational costs.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Scalability",
    description: "Design systems that can accommodate future growth and technological advancements.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Integrated Approach",
    description: "Seamlessly combine HV, LV, and civil design aspects for a cohesive and efficient plant layout.",
  },
]

const processSteps = [
  {
    title: "Requirements Analysis",
    description: "Gather and analyze client requirements, site conditions, and regulatory standards.",
  },
  {
    title: "Conceptual Design",
    description: "Develop initial design concepts, including equipment selection and layout planning.",
  },
  {
    title: "Detailed Engineering",
    description: "Create comprehensive design documentation, including electrical schematics and civil drawings.",
  },
  {
    title: "Review and Optimization",
    description:
      "Conduct design reviews, perform simulations, and optimize the design for performance and cost-effectiveness.",
  },
]

