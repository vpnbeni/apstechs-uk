import { useState } from "react";
import { Link } from "react-router-dom";

export default function SurveyDetails() {
  const [activeTab, setActiveTab] = useState("topographical");

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
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1">
              <div className="w-8 h-8 bg-secondary transform rotate-45" />
            </div>
          </div>

          {/* Service Banner */}
          <div className="bg-secondary py-2 px-6 inline-block mx-auto mb-8">
            <h2 className="text-white text-lg font-medium tracking-wider">
              SURVEY SERVICES
            </h2>
          </div>

          <h1 className="text-4xl md:text-5xl font-medium leading-tight max-w-4xl mx-auto mb-8">
            Comprehensive Survey Solutions for Substation Projects
          </h1>

          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-12">
            At APSTECHS, we provide a range of specialized survey services to
            ensure the successful planning, design, and implementation of
            substation projects. Our surveys form the foundation for informed
            decision-making and optimal project outcomes.
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
            Benefits of Our Survey Services
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
            Our Survey Process
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
            Ensure Project Success with APSTECHS Survey Services
          </h3>
          <p className="text-lg text-white/90 mb-8">
            Our comprehensive survey services provide the essential data and
            insights needed for successful substation planning, design, and
            implementation. Let us help you lay the groundwork for your next
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-secondary text-white rounded hover:bg-[#45a049] transition-colors">
              Request a Survey
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
  topographical: {
    title: "Topographical Survey",
    description:
      "Our topographical surveys capture the layout, elevation, and contours of the land to design the substation layout and placement of equipment.",
    items: [
      "Precise land contour mapping",
      "Elevation profiling",
      "Existing structure and feature identification",
      "Digital terrain modeling",
      "3D visualization of the site",
      "Boundary and easement delineation",
      "Vegetation and natural feature mapping",
      "Integration with GIS systems",
    ],
  },
  geotechnical: {
    title: "Geotechnical Survey",
    description:
      "We conduct geotechnical surveys to assess soil properties, including bearing capacity, moisture content, and soil type, to determine the foundation design.",
    items: [
      "Soil boring and sampling",
      "In-situ testing (e.g., SPT, CPT)",
      "Laboratory soil analysis",
      "Bedrock depth determination",
      "Groundwater table assessment",
      "Soil liquefaction potential evaluation",
      "Foundation recommendations",
      "Soil corrosivity assessment",
    ],
  },
  environmental: {
    title: "Environmental Impact Assessment",
    description:
      "Our environmental impact assessments evaluate the potential environmental impacts of the substation and ensure compliance with environmental regulations.",
    items: [
      "Flora and fauna inventory",
      "Wetland delineation",
      "Air quality assessment",
      "Noise level measurement",
      "Water resource impact evaluation",
      "Cultural and historical resource identification",
      "Electromagnetic field (EMF) studies",
      "Mitigation strategy development",
    ],
  },
  hydrological: {
    title: "Hydrological Survey",
    description:
      "We perform hydrological surveys to analyze water table levels and drainage patterns to mitigate flooding risks and ensure proper water management.",
    items: [
      "Surface water mapping",
      "Groundwater level monitoring",
      "Flood risk assessment",
      "Drainage pattern analysis",
      "Watershed delineation",
      "Stormwater runoff modeling",
      "Erosion potential evaluation",
      "Water quality testing",
    ],
  },
  route: {
    title: "Route Survey for Transmission Lines",
    description:
      "Our route surveys map the path for transmission lines connected to the substation, considering terrain, accessibility, and environmental factors.",
    items: [
      "Optimal route selection",
      "Right-of-way assessment",
      "Obstacle identification",
      "Tower spotting",
      "Access road planning",
      "Environmental constraint mapping",
      "Property boundary identification",
      "Line profile creation",
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
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    title: "Accurate Site Assessment",
    description:
      "Obtain precise data for informed decision-making and optimal substation design.",
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Time and Cost Efficiency",
    description:
      "Minimize project delays and unforeseen expenses through comprehensive pre-construction surveys.",
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
    title: "Risk Mitigation",
    description:
      "Identify potential hazards and constraints early in the project lifecycle.",
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
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Regulatory Compliance",
    description:
      "Ensure adherence to local, state, and federal regulations through comprehensive assessments.",
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
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Environmental Stewardship",
    description:
      "Minimize ecological impact through thorough environmental assessments and sustainable planning.",
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
    title: "Long-term Reliability",
    description:
      "Enhance substation longevity and performance through data-driven design and planning.",
  },
];

const processSteps = [
  {
    title: "Initial Consultation",
    description:
      "Discuss project requirements, scope, and objectives to tailor our survey approach.",
  },
  {
    title: "Survey Planning",
    description:
      "Develop a comprehensive survey plan, including methodology, equipment, and timeline.",
  },
  {
    title: "Field Work",
    description:
      "Conduct on-site surveys using state-of-the-art equipment and techniques.",
  },
  {
    title: "Data Analysis",
    description:
      "Process and analyze collected data to generate accurate reports and recommendations.",
  },
];
