import React from "react";

const ContactHero = () => {
  return (
    <div
      className="w-full relative flex h-[400px] lg:h-[500px]"
      style={{
        backgroundImage: `url('/assets/contact/contact.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-start justify-center text-white py-10 px-5 sm:px-10">
        <div className="relative z-10 w-2/3">
          <div className="text-lg sm:text-xl lg:text-[28px] text-start leading-[40px] tracking-widest font-light mb-4">
            <div className=" font-bold text-[32px] sm:text-[36px]">
              Contact Us
            </div>{" "}
            <br />
            <div className="">We’re Just a Message Away</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
