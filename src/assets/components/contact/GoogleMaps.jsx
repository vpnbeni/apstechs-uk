import React from "react";

const GoogleMaps = () => {
  return (
    <div >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4919.707839147074!2d0.8708008974948586!3d51.93661803765623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d90402c8225fe3%3A0xaf9329f4e5f7a049!2sCautrac!5e0!3m2!1sen!2sin!4v1737645546492!5m2!1sen!2sin"
        width="1920"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
