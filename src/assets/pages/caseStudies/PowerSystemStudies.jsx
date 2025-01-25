import React, { useEffect } from "react";
import SectionHeading from "../../components/common/heading/SectionHeading";

const PowerSystemStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="bg-primaryText w-full py-32">
      <div className="font-sans w-[60%] mx-auto p-20 bg-white">
        {/* Project Overview */}
        <section className="bg-gradient-to-r bg-white text-black pb-10">
          <h1 className="text-5xl tracking-wider font-light mb-4">
            Case Study: Power System Studies - Integration of Client Substation
            with 132kV Substation
          </h1>
          <p className="text-lg">
            APSTECHS UK LTD was appointed to carry out comprehensive load flow
            and short circuit studies for the integration of the Client
            Substation with the 132kV Substation. This project involved an
            in-depth analysis of the Point of Common Coupling (PCC) to ensure
            the electrical system's performance, safety, and reliability. The
            study focused on evaluating the network's behavior under normal and
            fault conditions, ensuring compliance with industry standards.
          </p>
          <img
            src="/assets/case-study/PowerSystemStudies/img2.jpeg"
            className="h-[490px] w-full object-cover my-10"
            alt=""
          />
          {/* <div className="grid grid-cols-2 gap-4 py-10">
            <div className="bg-gray-200 border rounded-lg aspect-video flex items-center overflow-hidden h-[206px] justify-center">
              <img
                src="/assets/case-study/PowerSystemStudies/img1.jpeg"
                alt=""
              />
            </div>
            <div className="bg-gray-200 border rounded-lg aspect-video flex items-center overflow-hidden h-[206px] justify-center">
              <img
                src="/assets/case-study/PowerSystemStudies/img2.jpeg"
                alt=""
              />
            </div>
          </div> */}
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
              Conduct a <strong>load flow analysis</strong> to assess the
              performance of the electrical system under varying voltage
              conditions.
            </li>
            <li>
              Perform a <strong>short circuit current study</strong> to validate
              the ratings and capabilities of the selected equipment under fault
              conditions.
            </li>
            <li>
              Ensure the integration of the Client Substation with the 132kV
              Substation adheres to safety, reliability, and performance
              standards.
            </li>
          </ul>
        </section>

        {/* APSTECHS Solution */}
        <section className="py-10 bg-white">
          <div className="mb-5">
            <SectionHeading
              heading={"APSTECHS Solution"}
              clasName={"bg-secondary text-white text-sm"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">
                Comprehensive Network Modeling
              </h3>
              <p>
                A detailed model of the electrical network was developed using{" "}
                <strong>DigSilent Power Factory</strong> software. The model
                included key components such as transformers, cables,
                switchgear, buses, and feeder lines, along with their
                interactions. The Single Line Diagram (SLD) provided a visual
                representation of the network configuration and simulation
                results.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">
                Steady-State Analysis
              </h3>
              <p>
                Steady-state studies were conducted to evaluate the loading of{" "}
                <strong>Medium Voltage (MV) side cables</strong> and{" "}
                <strong>switchgear</strong> at four distinct voltage levels:
                0.94 p.u., 1.00 p.u., 1.04 p.u., and 1.06 p.u. The analysis
                ensured that the cables and switchgear operated within their
                designed capacities under realistic operational conditions.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">
                Short Circuit Analysis
              </h3>
              <p>
                Short circuit studies were conducted using the{" "}
                <strong>IEC 60909</strong> standard to validate the equipment's
                ability to withstand fault conditions. Key parameters such as
                the initial symmetrical short circuit current (lk”), peak short
                circuit current (lp), and phase-to-earth initial short circuit
                current (LG - lk”) were analyzed to ensure the system's safety
                and reliability.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">
                Performance Validation
              </h3>
              <p>
                The studies confirmed that the selected equipment could handle
                the maximum fault currents experienced at various bus locations.
                The results ensured that the system adhered to safety and
                reliability standards, providing the client with confidence in
                the robustness of their electrical infrastructure.
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
                  <th className="border p-2 text-left">Parameter</th>
                  <th className="border p-2 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Software Used</td>
                  <td className="border p-2">DigSilent Power Factory</td>
                </tr>
                <tr>
                  <td className="border p-2">Voltage Levels</td>
                  <td className="border p-2">
                    0.94 p.u., 1.00 p.u., 1.04 p.u., 1.06 p.u.
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Power Factor</td>
                  <td className="border p-2">0.95</td>
                </tr>
                <tr>
                  <td className="border p-2">Short Circuit Standard</td>
                  <td className="border p-2">IEC 60909</td>
                </tr>
                <tr>
                  <td className="border p-2">Key Components Modeled</td>
                  <td className="border p-2">
                    Transformers, Cables, Switchgear, Buses, Feeder Lines
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <img
            src="/assets/case-study/PowerSystemStudies/result1.png"
            className="h-[490px] w-full object-cover my-10"
            alt="Earthing System Overview"
          />
          <img
            src="/assets/case-study/PowerSystemStudies/result2.png"
            className="h-[490px] w-full object-cover my-10"
            alt="Earthing System Overview"
          />
        </section>

        {/* Results */}
        <section className="py-10 bg-gradient-to-r bg-white text-black">
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
                The <strong>load flow study</strong> confirmed that the loading
                of all selected cables and switchgear was within acceptable
                limits, ensuring optimal performance and safety of the
                electrical system under varying voltage conditions. The analysis
                demonstrated that the system could handle the expected loads
                without exceeding designed capacities.
              </p>
              <p className="mt-4">
                The <strong>short circuit analysis</strong> provided critical
                insights into the maximum fault currents experienced at various
                bus locations. The results confirmed that the selected equipment
                could withstand and manage short circuit conditions effectively,
                adhering to safety and reliability standards. Key findings
                included:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <strong>
                    Initial Symmetrical Short Circuit Current (lk”)
                  </strong>
                  : The instantaneous fault current immediately following the
                  fault was within acceptable limits, ensuring minimal stress on
                  the equipment.
                </li>
                <li>
                  <strong>Peak Short Circuit Current (lp)</strong>: The maximum
                  fault current during the fault condition was evaluated to
                  ensure the equipment could handle thermal and mechanical
                  stresses.
                </li>
                <li>
                  <strong>
                    Phase-to-Earth Initial Short Circuit Current (LG - lk”)
                  </strong>
                  : The initial fault current between a phase and the earth was
                  analyzed to assess the performance of protective devices and
                  grounding systems.
                </li>
              </ul>
            </div>
          </div>
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
            The comprehensive load flow and short circuit studies conducted by
            APSTECHS UK LTD ensured the successful integration of the Client
            Substation with the 132kV Substation. By leveraging advanced
            modeling and simulation tools, the analysis validated the network’s
            performance, safety, and reliability under diverse operational
            scenarios. The findings provided the client with confidence in the
            robustness of their electrical system, ensuring long-term
            operational efficiency and safety.
          </p>
          <p className="mt-4">
            This project exemplifies APSTECHS' commitment to delivering
            high-quality engineering solutions that meet the highest standards
            of safety, reliability, and performance. The successful integration
            of the substation highlights APSTECHS' expertise in power system
            studies and its ability to deliver tailored solutions for complex
            electrical infrastructure projects.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PowerSystemStudies;
