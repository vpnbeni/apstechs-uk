import React from "react";

const GoogleMaps = () => {
  return (
    <div className="w-full flex justify-center items-center gap-8">
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4919.707839147074!2d0.8708008974948586!3d51.93661803765623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d90402c8225fe3%3A0xaf9329f4e5f7a049!2sCautrac!5e0!3m2!1sen!2sin!4v1737645546492!5m2!1sen!2sin"
        height="400"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3970689674456!2d77.14089507550135!3d28.647827275656436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03b403173e55%3A0x416867d6c278ca28!2sAPS%20Hydro%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1739290448841!5m2!1sen!2sin"
        style={{ border: 0 }}
        className="w-full"
        height="400"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.5336059974957!2d69.21323317605508!3d41.297253971311385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bca872d740f%3A0xe23a9be4023e2841!2sMukimi%20Street%20178%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sin!4v1739290596337!5m2!1sen!2sin"
        style={{ border: 0 }}
        className="w-full"
        height="400"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
