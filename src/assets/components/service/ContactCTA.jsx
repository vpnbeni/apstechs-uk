import React from "react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-16 bg-primaryText text-white text-center h-fit">
      <div className=" mx-auto flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
        <div className="mt-4">
          Contact us today for tailored HV and LV design solutions.
        </div>
        <Link
          to={"/contact"}
          className=" w-fit px-6 py-3 bg-primary rounded-lg text-white hover:bg-primaryText border border-primary hover:border-white"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
