import React, { useEffect } from "react";
import SectionHeading from "../../components/common/heading/SectionHeading";

const DesignAndSupply = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div className="bg-primaryText w-full pt-[96px] md:py-32 ">
      <div className="font-sans max-w-4xl mx-auto p-4 md:p-20 bg-white">
        {/* Project Overview */}
        <section className="bg-gradient-to-r bg-white text-black pb-10">
          <h1 className="text-2xl md:text-5xl tracking-wider font-light mb-4">
            Case Study: Design and Supply of 33kV Containerised Switchroom
          </h1>
          <p className="text-base md:text-lg text-justify">
            The project involved the design, manufacturing, and supply of a 33kV
            containerised switchroom, ensuring quality, safety, and
            functionality. This bespoke solution was developed to meet the
            highest standards of quality, safety, and functionality, fulfilling
            the critical role of supporting the client’s electrical distribution
            infrastructure.
          </p>
          <img
            src="/assets/case-study/Design&Supply/img1.jpg"
            className="w-full h-[300px] md:h-[490px] object-cover my-10"
            alt="Design and Supply Switchroom"
          />
        </section>

        {/* Client Requirement */}
        <section className="py-10">
          <div className="mb-5">
            <SectionHeading
              heading={"Client Requirement"}
              clasName={"bg-secondary text-white text-sm"}
            />
          </div>
          <ul className="list-disc pl-6 text-base md:text-lg">
            <li>
              A durable and efficient 33kV containerised switchroom for diverse
              environmental conditions while ensuring operational safety and
              ease of maintenance.
            </li>
            <li>
              An LVAC panel and battery system to enhance operational efficiency
              and reliability.
            </li>
          </ul>
        </section>

        {/* APSTECHS Solutions */}
        <section className="py-10 bg-white">
          <div className="mb-5">
            <SectionHeading
              heading={"APSTECHS Solutions"}
              clasName={"bg-secondary text-white text-sm"}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">
                Custom-Engineered Containerised Switchroom
              </h3>
              <p className="text-justify">
                Optimised performance, durability, and operational efficiency,
                designed and constructed to meet stringent industry standards.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">
                Advanced Safety Features
              </h3>
              <p className="text-justify">
                Incorporated advanced safety features, ensuring personnel and
                equipment protection.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-10">
          <div className="mb-5">
            <SectionHeading
              heading={"Technical Specifications"}
              clasName={"bg-secondary text-white text-sm"}
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border p-2 text-left">Specification</th>
                  <th className="border p-2 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Battery Charger</td>
                  <td className="border p-2">
                    110VDC/25A FLOAT CUM BOOST CHARGER WITH A-MODEL
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Battery Type</td>
                  <td className="border p-2">
                    110V/100AH VRLA Battery of 55 cells
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Input</td>
                  <td className="border p-2">
                    3-phase input 415V AC ±10%, Frequency 50Hz ± 5%
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Output</td>
                  <td className="border p-2">110V, 25A DC</td>
                </tr>
                <tr>
                  <td className="border p-2">LVAC Panel</td>
                  <td className="border p-2">
                    415V, 4000A, Type Tested Assembly (TTA), Schneider Blokset
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Project Scope and Delivery */}
        <section className="py-10 bg-white">
          <div className="mb-5">
            <SectionHeading
              heading={"Project Scope and Delivery"}
              clasName={"bg-secondary text-white text-sm"}
            />
          </div>
          <ol className="list-decimal pl-6 text-base md:text-lg">
            <li className="mb-2">
              Development of detailed, project-specific designs to address
              unique operational requirements.
            </li>
            <li className="mb-2">
              Integration of advanced engineering solutions to enhance safety,
              reliability, and functionality.
            </li>
            <li className="mb-2">
              Fabrication of the switchroom container using premium-grade
              materials to ensure robustness and longevity.
            </li>
            <li className="mb-2">
              Delivery of the fully completed containerised switchroom, ready
              for installation and commissioning at the client’s site.
            </li>
            <li className="mb-2">
              Comprehensive documentation, including as-built drawings,
              operation manuals, and compliance certificates.
            </li>
          </ol>
        </section>

        {/* Key Findings and Outcomes */}
        <section className="py-10 text-justify">
          <div className="mb-5">
            <SectionHeading
              heading={"Key Findings and Outcomes"}
              clasName={"bg-secondary text-white text-sm"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">Durability</h3>
              <p>
                The containerised switchroom was designed to endure harsh
                environmental conditions, ensuring reliable operation in a
                variety of challenging settings.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">Flexibility</h3>
              <p>
                Customisable internal layouts and equipment configurations to
                meet specific project requirements.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">Sustainability</h3>
              <p>
                Energy-efficient solutions implemented to minimise environmental
                impact.
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-10 bg-gradient-to-r bg-white text-black text-justify">
          <div className="mb-5">
            <SectionHeading
              heading={"Results"}
              clasName={"bg-secondary text-white text-sm"}
            />
          </div>
          <div className="flex flex-col gap-5">
            {/* Text Section */}
            <div>
              <p>
                The delivered containerised switchroom provided the client with
                a highly reliable, efficient, and durable solution that aligned
                perfectly with their operational needs. The seamless integration
                of advanced engineering solutions and high-quality materials
                ensured an infrastructure component capable of delivering
                long-term value and performance.
              </p>
            </div>
            {/* Image Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* <div className="bg-gray-200 border rounded-lg aspect-video flex items-center overflow-hidden">
                <img
                  src="/assets/case-study/Design&Supply/img2.jpg"
                  className="w-full h-full object-cover"
                  alt="Result Image 1"
                />
              </div> */}
              <div className="bg-gray-200 border rounded-lg aspect-video flex items-center overflow-hidden">
                <img
                  src="/assets/case-study/Design&Supply/img3.jpg"
                  className="w-full h-full object-cover"
                  alt="Result Image 2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <footer className="py-10 text-black text-justify">
          <div className="mb-5">
            <SectionHeading
              heading={"Conclusion"}
              clasName={"bg-secondary text-white text-sm"}
            />
          </div>
          <p>
            APSTECHS demonstrated its expertise in delivering cutting-edge
            solutions to client requirements. This project exemplifies our
            commitment to engineering excellence, quality assurance, and
            customer satisfaction. By providing an innovative and robust
            containerised switchroom, APSTECHS has further solidified its
            position as a trusted partner in the electrical distribution sector.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DesignAndSupply;
