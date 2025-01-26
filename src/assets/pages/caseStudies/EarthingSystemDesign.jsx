import React, { useEffect } from "react";
import SectionHeading from "../../components/common/heading/SectionHeading";

const EarthingSystemDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="bg-primaryText w-full pt-[96px] lg:py-32">
      <div className="font-sans w-full md:w-[80%] lg:w-[60%] mx-auto p-6 md:p-20 bg-white">
        {/* Project Overview */}
        <section className="bg-gradient-to-r bg-white text-black pb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-wider font-light mb-4">
            Case Study: Earthing System Design for 50MW Battery Energy Storage
            System
          </h1>
          <p className="text-base md:text-lg">
            The project required the installation of a 50MW Battery Energy
            Storage System (BESS) in Yorkshire. APSTECHS was commissioned to
            perform earthing grid calculations and design to ensure safety and
            compliance with UK standards.
          </p>
          {/* Image Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
            <div className="bg-gray-200 border rounded-lg aspect-video flex items-center overflow-hidden justify-center">
              <img src="/assets/case-study/EarthingSystem/img1.jpg" alt="" />
            </div>
            <div className="bg-gray-200 border rounded-lg aspect-video flex items-center overflow-hidden justify-center">
              <img src="/assets/case-study/EarthingSystem/img2.jpg" alt="" />
            </div>
          </div>
        </section>

        {/* Client Requirement */}
        <section className="py-10">
          <div className="mb-5">
            <SectionHeading
              heading={"Client Requirement"}
              clasName={"bg-secondary text-white text-sm"}
            />
          </div>
          <ul className="list-disc pl-6">
            <li>
              An optimised earthing system design to mitigate safety risks
              associated with high Rise of Earth Potential (ROEP).
            </li>
            <li>
              Compliance with UK standards, including BS EN 50522, ENA TS 41-24,
              and ENA ER S34.
            </li>
          </ul>
        </section>

        {/* APSTECHS Solutions */}
        <section className="py-10 bg-white">
          <div className="mb-5">
            <SectionHeading
              heading={"APSTECHS Design Solutions "}
              clasName={"bg-secondary text-white text-sm"}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">
                Soil Resistivity Analysis
              </h3>
              <p>
                Conducted surveys with advanced equipment and developed a
                multi-layer soil model for accurate design.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">
                Fault Current Analysis
              </h3>
              <p>
                Detailed analysis of fault current levels to ensure safety and
                system performance.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">
                Earthing System Design
              </h3>
              <p>
                Used CDGES software to model and optimise the earthing grid,
                achieving a combined system resistance of 0.11Ω.
              </p>
            </div>
          </div>
          <img
            src="/assets/case-study/EarthingSystem/result1.png"
            className="h-[490px] w-full object-cover my-10"
            alt="Earthing System Overview"
          />
          <img
            src="/assets/case-study/EarthingSystem/result2.png"
            className="h-[490px] w-full object-cover my-10"
            alt="Earthing System Overview"
          />
        </section>

        {/* Results */}
        <section className="py-10">
          <div className="mb-5">
            <SectionHeading
              heading={"Results"}
              clasName={"bg-secondary text-white text-sm"}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">
                Safety and Compliance
              </h3>
              <p>
                The earthing system met all regulatory requirements, ensuring
                effective fault current dissipation.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">Integration</h3>
              <p>
                Successfully integrated the new earthing grid with existing
                infrastructure without disruptions.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">Validation</h3>
              <p>
                On-site fall-of-potential tests validated simulation results
                with high accuracy.
              </p>
            </div>
          </div>
          <img
            src="/assets/case-study/EarthingSystem/result.jpg"
            className="h-[490px] w-full object-cover my-10"
            alt="Earthing System Overview"
          />
        </section>

        {/* Conclusion */}
        <footer className="py-10 text-black">
          <div className="mb-5">
            <SectionHeading
              heading={"Conclusion"}
              clasName={"bg-secondary text-white text-sm"}
            />
          </div>
          <p>
            APSTECHS demonstrated expertise in delivering advanced earthing
            system designs for challenging projects. The robust solution ensured
            safety, compliance, and operational efficiency, solidifying APSTECHS
            as a trusted partner in energy storage projects.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default EarthingSystemDesign;
