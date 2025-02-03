import React from "react";

const TeamPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-10 px-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to APSTECHS</h1>
        <p className="mt-4 text-lg">
          Delivering Cost-Effective, Safe, and Sustainable Power Solutions
        </p>
      </header>

      {/* About Section */}
      <section className="py-10 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
        <p className="leading-relaxed max-w-4xl mx-auto">
          We at APSTECHS offer Design & Advisory Solutions for efficient and
          effective utilisation of power sector resources. Our services ensure
          maximum business and operational success for our clients. With a
          proven track record of delivering customised, cost-effective, safe,
          sustainable, and viable projects, we provide technical and financial
          solutions tailored to customer goals and regulatory requirements.
        </p>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-10 bg-gray-100 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Sanjeev Kumar */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-32 w-32 bg-gray-300 rounded-full mx-auto mb-4">
              {/* Image placeholder */}
            </div>
            <h3 className="text-xl font-semibold">Sanjeev Kumar</h3>
            <p className="text-blue-600 font-medium">CEO, APS GROUP</p>
            <p className="mt-4 text-sm leading-relaxed">
              Sanjeev brings 20 years of experience in electrical and
              construction industries, spearheading Hydro Electric plant
              upgrades and automation. His leadership expands the APS Group's
              capabilities in the UK.
            </p>
          </div>

          {/* Azad Panwar */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-32 w-32 bg-gray-300 rounded-full mx-auto mb-4">
              {/* Image placeholder */}
            </div>
            <h3 className="text-xl font-semibold">Azad Panwar</h3>
            <p className="text-blue-600 font-medium">MD, APSTECHS</p>
            <p className="mt-4 text-sm leading-relaxed">
              Azad has extensive experience managing major projects in the
              electrical and power industries across the UK and Europe. His
              expertise ensures cost-effective and reliable solutions for
              clients.
            </p>
          </div>

          {/* Krishna R Pokala */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-32 w-32 bg-gray-300 rounded-full mx-auto mb-4">
              {/* Image placeholder */}
            </div>
            <h3 className="text-xl font-semibold">Krishna R Pokala</h3>
            <p className="text-blue-600 font-medium">BDM, APSTECHS</p>
            <p className="mt-4 text-sm leading-relaxed">
              Krishna's decade-long experience in sales, IT, EV solutions, and
              product development drives APSTECHS' growth in sustainable and
              innovative solutions. He also co-founded CHARGEMATE PVT Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="leading-relaxed">
            With a proven track record of excellence, we ensure our clients'
            projects are cost-effective, viable, safe, and sustainable. Our
            clients range from power generation utilities to regulatory
            authorities, investors, and governments, trusting us to deliver
            sound technical and financial solutions both in the UK and
            internationally.
          </p>
          <p className="mt-6">
            Explore our website to learn more or contact us directly for further
            details.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TeamPage;
