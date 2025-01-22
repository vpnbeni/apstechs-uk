import React from "react";

const ContactCTA = () => {
  return (
    <section className="py-16 bg-primaryText text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
        <p className="mt-4">
          Contact us today for tailored HV and LV design solutions.
        </p>
        <button className="mt-6 px-6 py-3 bg-primary rounded-lg text-white hover:bg-primaryText border border-primary hover:border-white">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default ContactCTA;
