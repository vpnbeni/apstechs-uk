import React from "react";

const ContactHero = () => {
  return (
    <div
      className="w-full relative flex h-[400px]"
      style={{
        backgroundImage: `url('/assets/contact/contact.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[70%] mx-auto flex flex-col items-start  justify-center text-white py-10">
        <div className="absolute inset-0 bg-black bg-opacity-25 "></div>
        <div className="relative">
          <div className="text-lg w-1/2  lg:text-[28px] text-start leading-[40px]  tracking-widest font-light my-4">
            <span className="font-bold text-[32px] ">Contact Us</span> <br />
            <span className=" mt-4">
              To get in touch with us, please reach out during our office hours
            </span>
          </div>
        </div>
        <div className="text-base">
          Monday through to Friday <br /> from 8am to 4pm
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
