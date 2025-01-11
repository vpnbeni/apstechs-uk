import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col lg:w-[55%]">
        <div className="text-[25px] ">Energy and System Technical Limited</div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-6 ">
            {["Service", "About", "Careers", "Privacy Policy"].map(
              (item, index) => {
                return (
                  <div className="" key={index}>
                    {item}
                  </div>
                );
              }
            )}
          </div>
          <div className="flex flex-col gap-6 ">
            {["Case Studies", "Sustainability", "Contact us"].map(
              (item, index) => {
                return (
                  <div className="" key={index}>
                    {item}
                  </div>
                );
              }
            )}
          </div>
          <div className="flex flex-col gap-6 ">
            {[
              { name: "Tel", value: "+91 9898566589" },
              { name: "Email", value: "abc@gmail.com " },
              {
                name: "Address",
                value:
                  "Suite-12, 1st floor, Cautrac Serviced Offices, The Causeway, Great Horkesley, Colchester CO6 4EJ, United Kingdom",
              },
              { name: "Linkedin", value: "" },
            ].map((item, index) => {
              return (
                <div className="" key={index}>
                  {item.name}
                  {item.value !== "" && <>{item.value}</>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
