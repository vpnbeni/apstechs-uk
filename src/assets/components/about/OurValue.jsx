"use client";

import { useState } from "react";

const OurValue = () => {
  const [activeTab, setActiveTab] = useState("TRUST");

  const tabsData = {
    TRUST: [
      {
        letter: "T",
        title: "Transparency",
        value:
          "We commit to openness and transparency in our communication and processes, ensuring our clients and partners are always well-informed.",
        tagline: "Clear communication, strong partnerships.",
      },
      {
        letter: "R",
        title: "Reliability",
        value:
          "Our clients can count on us for dependable service, consistently delivering on our promises with precision and quality.",
        tagline: "Reliability that builds confidence.",
      },
      {
        letter: "U",
        title: "Unwavering Commitment",
        value:
          "We are dedicated to meeting the needs of our clients, ensuring long-term success through our relentless focus on delivering exceptional value.",
        tagline: "Dedicated to your success.",
      },
      {
        letter: "S",
        title: "Sustainability",
        value:
          "We integrate sustainable practices into every facet of our design and consultancy work, striving to create solutions that benefit both the environment and future generations.",
        tagline: "Sustainably powering the future.",
      },
      {
        letter: "T",
        title: "Teamwork",
        value:
          "We believe that teamwork is the cornerstone of our success—collaborating internally and externally to achieve the best results for our clients.",
        tagline: "Achieving greatness together.",
      },
    ],
    IMPACT: [
      {
        letter: "I",
        title: "Innovation",
        value:
          "We embrace creative thinking and forward-thinking solutions to ensure we stay ahead in a rapidly evolving industry.",
        tagline: "Innovation at the heart of our designs.",
      },
      {
        letter: "M",
        title: "Mutual Respect",
        value:
          "We value and respect every individual, fostering an inclusive work environment and building strong, respectful relationships with our clients and partners.",
        tagline: "Respect that drives collaboration.",
      },
      {
        letter: "P",
        title: "Professionalism",
        value:
          "We uphold the highest standards of professionalism, ensuring that all our work meets or exceeds industry standards and expectations.",
        tagline: "Professionalism in every project.",
      },
      {
        letter: "A",
        title: "Accountability",
        value:
          "We take ownership of our work, ensuring that every decision and action we take is in the best interest of our clients and stakeholders.",
        tagline: "Accountability at every stage.",
      },
      {
        letter: "C",
        title: "Customer-Focused",
        value:
          "Our clients are the central focus of everything we do. We aim to exceed expectations by understanding their needs and delivering tailored solutions.",
        tagline: "Your needs, our focus.",
      },
      {
        letter: "T",
        title: "Timeliness",
        value:
          "We understand the value of time and always strive to deliver our projects on schedule, ensuring efficiency and minimising delays.",
        tagline: "Delivering on time, every time.",
      },
    ],
    EXCEL: [
      {
        letter: "E",
        title: "Excellence",
        value:
          "We pursue the highest standard of quality in everything we do, from design to delivery, ensuring that our work stands out as the best in the industry.",
        tagline: "Striving for excellence at every step.",
      },
      {
        letter: "X",
        title: "Xcellence in Innovation",
        value:
          "We foster a culture of innovation, where new ideas are encouraged and implemented to enhance efficiency and effectiveness.",
        tagline: "Innovating solutions for a changing world.",
      },
      {
        letter: "C",
        title: "Collaboration",
        value:
          "We believe in the power of working together—internally and with clients—to ensure the best outcomes through collective expertise and shared goals.",
        tagline: "Teamwork that delivers success.",
      },
      {
        letter: "E",
        title: "Ethical Integrity",
        value:
          "We operate with unwavering ethics, maintaining transparency and integrity in all of our dealings, fostering trust with clients and partners.",
        tagline: "Building trust through integrity.",
      },
      {
        letter: "L",
        title: "Leadership",
        value:
          "We aim to lead by example, inspiring others through our commitment to innovation, sustainability, and customer success.",
        tagline: "Leading the way with vision and purpose.",
      },
    ],
  };

  return (
    <div className="w-full bg-[#EBEFF2] flex flex-col lg:flex-row h-fit">
      {/* Left Section (Text) */}
      <div className="w-full lg:w-[60%] flex flex-col items-start px-6 lg:px-28 py-10 lg:py-20">
        <div className="ml-0 lg:ml-10">
          <h1 className="w-fit bg-secondary mb-4 px-3 tracking-[.2em] text-white text-lg py-[-1px]">
            OUR VALUES
          </h1>
          <div className="text-base ">
            At APSTECHS, our core values—EXCEL, TRUST, and IMPACT—shape
            everything we do. We strive for excellence through innovation,
            collaboration, and integrity while building trust through
            transparency, reliability, and sustainability. With a focus on
            impact, we drive innovation, professionalism, and customer success,
            delivering high-quality, sustainable solutions.
          </div>
          <div className="flex space-x-4 mt-8">
            {Object.keys(tabsData).map((tab) => (
              <button
                key={tab}
                className={`text-lg font-semibold lg:text-[28px] tracking-widest  ${
                  activeTab === tab
                    ? "text-primary border-b-2 border-secondary"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="">
            {tabsData[activeTab].map((item, index) => (
              <div key={index} className="mt-4">
                <h2 className="text-xl font-semibold">
                  {item.letter} – {item.title}
                </h2>
                <p className="text-[16px] tracking-wide font-[250] leading-[30px]">
                  {item.value}
                </p>
                <p className="italic text-primaryText">{item.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section (Video) */}
      <div className="w-full lg:w-[40%] flex py-10 lg:py-20 lg:pr-20 relative">
        <video
          className="top-0 left-0 w-full h-full object-cover lg:rounded-3xl"
          src="/assets/about/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <style jsx>{`
        .custom-scrollbar {
          max-height: 500px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #318c31 #f0f0f0;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f0f0f0;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #318c31;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default OurValue;
