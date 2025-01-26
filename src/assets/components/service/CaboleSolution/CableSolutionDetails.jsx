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
  return (
    <div className="bg-[#001529] min-h-screen">
      {/* Cable System Design Section */}
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
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          </div>

          {/* Service Banner */}
          <div className="bg-[#4CAF50] py-2 px-6 inline-block mx-auto mb-8">
            <h2 className="text-white text-lg font-medium tracking-wider">
              CABLE SYSTEM DESIGN
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 text-white">
            <p className="text-lg text-white/90">
              Expanding our reach beyond the UK and India, APSTECHS now offers
              comprehensive cable system design services for clients worldwide,
              covering a wide range of voltages from low voltage to extra high
              voltage. Leveraging advanced software tools such as CREATER and
              CYMCAP, we ensure precise and efficient designs tailored to meet
              the unique requirements of each project.
            </p>

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
                        className="w-6 h-6 text-[#4CAF50] flex-shrink-0 mt-1"
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
                        className="w-6 h-6 text-[#4CAF50] flex-shrink-0 mt-1"
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
          <div className="bg-[#4CAF50] py-2 px-6 inline-block mx-auto mb-8">
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
