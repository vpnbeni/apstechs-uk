import React, { useEffect } from "react";
import SectionHeading from "../../components/common/heading/SectionHeading";

const LoadTestCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="bg-primaryText w-full pt-[96px] md:py-32">
      <div className="font-sans max-w-4xl mx-auto p-4 md:p-20 bg-white">
        {/* Project Overview */}
        <section className="bg-gradient-to-r bg-white text-black pb-10">
          <h1 className="text-2xl md:text-5xl tracking-wider font-light mb-4">
            Case Study: Load Bank Testing for Generator GT1 and Transformer
          </h1>
          <p className="text-base md:text-lg text-justify">
            On October 30, 2024, APSTECHS UK LTD conducted a load bank test on
            Generator GT1 and its associated transformer (TX). The test aimed to
            verify the reliability of the transformer and the accuracy of its
            protection and switchgear systems under real-world conditions. The
            successful testing process demonstrated APSTECHS' commitment to
            engineering excellence and client satisfaction.
          </p>
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
              Ensure Generator GT1 could handle a partial load of 7 MVA at a
              power factor of 0.8.
            </li>
            <li>
              Verify the accuracy of protection systems, including the SuperTAPP
              relay and SCADA system.
            </li>
            <li>
              Confirm the stability and reliability of GT1's operation under
              controlled conditions.
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
              <h3 className="text-xl font-normal mb-2">Testing Parameters</h3>
              <p>
                A systematic approach was implemented to simulate real-world
                operating conditions. The load was gradually increased in 500
                kVA increments until the required 7 MVA load level was achieved.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">Real-Time Monitoring</h3>
              <p>
                The use of SCADA and SuperTAPP relay systems ensured accurate
                load monitoring and minimised discrepancies caused by natural
                losses.
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
                  <td className="border p-2">Required Load</td>
                  <td className="border p-2">7 MVA at 0.8 power factor</td>
                </tr>
                <tr>
                  <td className="border p-2">Duration</td>
                  <td className="border p-2">12 hours</td>
                </tr>
                <tr>
                  <td className="border p-2">Load Increment</td>
                  <td className="border p-2">500 kVA segments</td>
                </tr>
                <tr>
                  <td className="border p-2">Load Achieved</td>
                  <td className="border p-2">7 MVA</td>
                </tr>
                <tr>
                  <td className="border p-2">Power Factor</td>
                  <td className="border p-2">0.8</td>
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
              Gradual load application to achieve stability and avoid surges.
            </li>
            <li className="mb-2">
              Continuous monitoring via SCADA and SuperTAPP relay systems.
            </li>
            <li className="mb-2">
              Detailed testing to confirm protection systems' accuracy.
            </li>
            <li className="mb-2">
              Documentation of load test results and compliance certifications.
            </li>
          </ol>
        </section>

        {/* Key Findings and Outcomes */}
        <section className="py-10">
          <div className="mb-5">
            <SectionHeading
              heading={"Key Findings and Outcomes"}
              clasName={"bg-secondary text-white text-sm"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">Reliability</h3>
              <p>
                The test confirmed GT1's ability to handle the required load,
                ensuring its readiness for operational use.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">Accuracy</h3>
              <p>
                The protection systems, including the SuperTAPP relay and SCADA,
                provided precise real-time data.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-2">Efficiency</h3>
              <p>
                The systematic approach minimised losses and ensured an
                efficient testing process.
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-10 bg-gradient-to-r bg-white text-black text-justify" >
          <div className="mb-5">
            <SectionHeading
              heading={"Results"}
              clasName={"bg-secondary text-white text-sm"}
            />
          </div>
          <p>
            The load bank test validated the generator's reliability, with
            active power recorded at 5.62 MW, reactive power at 4.18 MVAR, and
            current at 368 amps. The successful achievement of the 7 MVA load
            demonstrated the system's robustness and operational readiness.
          </p>
          {/* Image Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="bg-gray-200 border rounded-lg aspect-video flex items-center overflow-hidden">
              <img
                src="/assets/case-study/loadtestcasestudy/Figure1.png"
                className="w-full h-full object-cover"
                alt="Result Image 1"
              />
            </div>
            <div className="bg-gray-200 border rounded-lg aspect-video flex items-center overflow-hidden">
              <img
                src="/assets/case-study/loadtestcasestudy/Figure2.png"
                className="w-full h-full object-cover"
                alt="Result Image 2"
              />
            </div>
          </div>
          <div className="mb-5 pt-10">
            <SectionHeading
              heading={"Load Test Report Result"}
              clasName={"bg-secondary text-white text-sm"}
            />
          </div>

          <img
            src="/assets/case-study/loadtestcasestudy/result1.png"
            className="h-[290px] md:h-[490px] w-full object-contain my-6"
            alt="Power System Image"
          />
          <img
            src="/assets/case-study/loadtestcasestudy/result2.png"
            className="h-[290px] md:h-[490px] w-full object-contain my-6"
            alt="Power System Image"
          />
          <img
            src="/assets/case-study/loadtestcasestudy/result3.png"
            className="h-[290px] md:h-[490px] w-full object-contain my-6"
            alt="Power System Image"
          />
          <img
            src="/assets/case-study/loadtestcasestudy/result4.png"
            className="h-[290px] md:h-[490px] w-full object-contain my-6"
            alt="Power System Image"
          />
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
            APSTECHS showcased its expertise in delivering comprehensive
            solutions, ensuring the client's generator and transformer met all
            operational and safety requirements. The successful test further
            established APSTECHS as a trusted partner in power infrastructure
            solutions.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LoadTestCaseStudy;
