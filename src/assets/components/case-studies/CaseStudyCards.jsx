import React from "react";
import Card from "../common/card/Card";

const CaseStudyCards = () => {
  const data = [
    {
      name: "Design and Supply of 33kV Containerised Switchroom",
      description:
        "Delivered a bespoke 33kV containerised switchroom, ensuring operational efficiency, reliability, and safety in diverse environmental conditions.",
      image: "/assets/case-study/card/DesignandSupply.jpg",
      link: "case-studies/design&supply",
    },
    {
      name: "Earthing System Design for 50MW Battery Energy Storage System",
      description:
        "The project required the installation of a 50MW Battery Energy Storage System (BESS) in Yorkshire.",
      image: "/assets/case-study/EarthingSystem/earthing.jpeg",
      link: "case-studies/earthingsystemdesign",
    },
    {
      name: "Power System Studies - Integration of Client Substation with 132kV Substation",
      description:
        "APSTECHS UK LTD was appointed to carry out comprehensive load flow and short circuit studies for the integration of the Client Substation with the 132kV Substation.",
      image: "/assets/case-study/PowerSystemStudies/img1.jpeg",
      link: "case-studies/powersystemstudies",
    },
    {
      name: "Load Bank Testing for Generator GT1 and Transformer",
      description:
        "Confirm the stability and reliability of GT1's operation under controlled conditions.",
      image: "/assets/case-study/card/LoadBankTesting.jpeg",
      link: "case-studies/loadtestcasestudy",
    },
    {
      name: "Energy-Efficient Infrastructure Design",
      description:
        "Designed and implemented energy-efficient infrastructure solutions to reduce environmental impact while maintaining performance.",
      image: "/assets/case-study/card/Energy-Efficient.jpg",
      link: "case-studies/design&supply",
    },
    {
      name: "Power System Optimization Studies",
      description:
        "Conducted in-depth power system studies to optimize electrical infrastructure, ensuring reliability and long-term performance.",
      image: "/assets/case-study/card/PowerSystem.jpg",
      link: "case-studies/design&supply",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-8 lg:px-[10%] py-10 lg:pb-20 items-center">
        {data.map((item, index) => (
          <div key={index} className="flex justify-center">
            <Card
              name={item.name}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCards;
