import { useState } from "react";
import { FaDownload } from "react-icons/fa";

const tabContent = {
  systemDesign: {
    title: "System Design & Integration",
    description:
      "We provide comprehensive battery storage system design and integration services, ensuring optimal performance and seamless grid connection.",
    items: [
      "Battery system sizing and configuration",
      "Power conversion system design",
      "Grid connection and interface design",
      "Protection and control system integration",
      "Energy management system implementation",
      "Performance modeling and simulation",
      "Thermal management system design",
      "Safety and compliance assessment",
    ],
  },
  gridServices: {
    title: "Grid Services",
    description:
      "Our battery storage solutions enable various grid services to enhance network stability and efficiency.",
    items: [
      "Frequency regulation and response",
      "Voltage support and reactive power control",
      "Peak shaving and load shifting",
      "Grid stabilization services",
      "Black start capability",
      "Renewable energy integration",
      "Demand response management",
      "Microgrid implementation",
    ],
  },
  monitoring: {
    title: "Monitoring & Control",
    description:
      "We implement advanced monitoring and control systems to ensure optimal battery performance and system reliability.",
    items: [
      "Real-time performance monitoring",
      "Battery management system integration",
      "Remote monitoring and diagnostics",
      "Predictive maintenance",
      "System health monitoring",
      "Performance analytics and reporting",
      "Alarm management and notification",
      "Data logging and analysis",
    ],
  },
  consultancy: {
    title: "Technical Consultancy",
    description:
      "Our expert consultancy services help clients make informed decisions about battery storage implementation and optimization.",
    items: [
      "Feasibility studies and site assessment",
      "Technical due diligence",
      "System specification development",
      "Procurement support",
      "Project management",
      "Regulatory compliance guidance",
      "Performance optimization",
      "Training and capacity building",
    ],
  },
};

export default function AboutBatteryService() {
  const [activeTab, setActiveTab] = useState("systemDesign");

  return (
    <div className="bg-[#001529] min-h-screen">
      {/* Battery Storage Integration Section */}
      <section className="py-16 px-4 text-center relative">
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
                <rect x="3" y="2" width="18" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="12" y1="6" x2="12" y2="18" />
                <line x1="8" y1="18" x2="16" y2="18" />
              </svg>
            </div>
          </div>

          {/* Service Banner */}
          <div className="bg-secondary py-2 px-6 inline-block mx-auto mb-8">
            <h2 className="text-white text-lg font-medium tracking-wider">
              BATTERY STORAGE INTEGRATION
            </h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-8 text-white">
            <div className="relative flex flex-col items-center justify-center">
              <p className="text-lg text-white/90">
                APSTECHS delivers comprehensive battery storage integration solutions,
                combining our expertise in power systems with cutting-edge energy
                storage technology. Our services span from initial design to full
                implementation, ensuring optimal performance and reliability for both
                grid-scale and commercial applications. We leverage advanced
                simulation tools and industry best practices to deliver solutions
                that maximize energy efficiency and system longevity.
              </p>
              <div
                onClick={() =>
                  window.open("/assets/pdf/APSTECHSBatteryStorage.pdf")
                }
                className={`bg-primary w-fit mt-5 text-lightBlue rounded-full p-4 border hover:text-dark hover:bg-white cursor-pointer transition-all duration-1000 delay-500 ease-out transform`}
              >
                <FaDownload />
              </div>
            </div>

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
          </div>
        </div>
      </section>

      {/* Project Experience Section */}
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
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
          </div>

          {/* Service Banner */}
          <div className="bg-secondary py-2 px-6 inline-block mx-auto mb-8">
            <h2 className="text-white text-lg font-medium tracking-wider">
              PROJECT EXPERIENCE
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 text-white">
            <h3 className="text-3xl md:text-4xl font-medium leading-tight">
              Delivering Innovative Battery Storage Solutions with a Focus on
              Reliability, Efficiency, and Sustainability
            </h3>
            <p className="text-lg text-white/90">
              Our team brings extensive experience in delivering battery storage
              projects across various scales and applications. From utility-scale
              energy storage systems to commercial and industrial installations,
              we have successfully integrated battery solutions that enhance grid
              stability, enable renewable energy integration, and provide reliable
              backup power. Our track record includes projects in renewable energy
              farms, industrial facilities, and critical infrastructure,
              demonstrating our capability to deliver complex energy storage
              solutions that meet our clients' specific needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
