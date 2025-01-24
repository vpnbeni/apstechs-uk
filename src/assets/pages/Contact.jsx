import React from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactMap from "../components/contact/ContactMap";
import GoogleMaps from "../components/contact/GoogleMaps";

const Contact = () => {
  return (
    <div className="pt-[96px]">
      <ContactHero />
      <ContactMap />
      <GoogleMaps />
    </div>
  );
};

export default Contact;
