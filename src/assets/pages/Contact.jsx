import React from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactMap from "../components/contact/ContactMap";
import GoogleMaps from "../components/contact/GoogleMaps";

const Contact = () => {
  return (
    <div className="pt-[96px] w-full overflow-x-hidden">
      <ContactHero />
      <ContactMap />
      <GoogleMaps />
    </div>
  );
};

export default Contact;
