import React from "react";
import Card from "../common/card/Card";

const CaseStudyCards = () => {
  const data = [
    {
      name: "Design and Supply of 33kV Containerised Switchroom",
      description:
        "Delivered a bespoke 33kV containerised switchroom, ensuring operational efficiency, reliability, and safety in diverse environmental conditions.",
      image: "/assets/case-study/card/DesignandSupply.jpg",
      link: "/case-studies/design&supply",
    },
    {
      name: "LVAC Panel and Battery System Integration",
      description:
        "Integrated advanced LVAC panels and battery systems compliant with IEC 61439 standards to enhance operational efficiency and reliability.",
      image: "/assets/case-study/card/LVAC.jpg",
      link: "/case-studies/design&supply",
    },
    {
      name: "Custom-Engineered Containerised Solutions",
      description:
        "Developed and delivered custom-engineered containerised solutions tailored to meet stringent industry and client-specific requirements.",
      image: "/assets/case-study/card/Custom-Engineered.jpg",
      link: "/case-studies/design&supply",
    },
    {
      name: "Advanced Safety Features Implementation",
      description:
        "Integrated advanced safety features in switchrooms to ensure protection for personnel and equipment, adhering to industry safety standards.",
      image: "/assets/case-study/card/AdvancedSafety.jpg",
      link: "/case-studies/design&supply",
    },
    {
      name: "Energy-Efficient Infrastructure Design",
      description:
        "Designed and implemented energy-efficient infrastructure solutions to reduce environmental impact while maintaining performance.",
      image: "/assets/case-study/card/Energy-Efficient.jpg",
      link: "/case-studies/design&supply",
    },
    {
      name: "Power System Optimization Studies",
      description:
        "Conducted in-depth power system studies to optimize electrical infrastructure, ensuring reliability and long-term performance.",
      image: "/assets/case-study/card/PowerSystem.jpg",
      link: "/case-studies/design&supply",
    },
  ];

  return (
    <div>
      <div className="grid grid-flow-row gap-10  grid-cols-3 w-full px-[10%] py-10  lg:pb-20 items-center ">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Card
                name={item.name}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudyCards;
