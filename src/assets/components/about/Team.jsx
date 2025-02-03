import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper"; // Corrected import here
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import SectionHeading from "../common/heading/SectionHeading";

const teamData = [
  {
    name: "Sanjeev Kumar",
    designation: "CEO APS GROUP",
    moreDetails:
      "Sanjeev brings 20 years of experience in electrical and construction industries, spearheading Hydro Electric plant upgrades and automation. His leadership expands the APS Group's capabilities in the UK.",
    image: "/assets/team/SanjeevKumar.jpg",
  },
  {
    name: "Azad Panwar",
    designation: "MD, APSTECHS",
    moreDetails:
      "Azad has extensive experience managing major projects in the electrical and power industries across the UK and Europe. His expertise ensures cost-effective and reliable solutions for clients.",
    image: "/assets/team/AzadPanwar.jpg",
  },
  {
    name: "Krishna R Pokala",
    designation: "BDM, APSTECHS",
    moreDetails:
      "Krishna's decade-long experience in sales, IT, EV solutions, and product development drives APSTECHS' growth in sustainable and innovative solutions. He also co-founded CHARGEMATE PVT Ltd.",
    image: "/assets/team/KrishnaRPokala.jpg",
  },
];

const TeamCard = ({ name, designation, image, moreDetails }) => {
  return (
    <div className="relative group overflow-hidden h-[500px] lg:h-[400px]">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:blur-sm transition duration-500"
      />
      <div className="absolute text-center inset-0 flex flex-col items-center justify-center gap-5 px-4 lg:px-10 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition duration-700">
        <div className="">
          <h3 className="text-white text-lg font-bold mb-2 animate-fade-up">
            {name}
          </h3>
          <p className="text-gray-300 text-sm animate-fade-up delay-150">
            {designation}
          </p>
        </div>
        <p className="text-gray-300 text-sm animate-fade-up delay-150 text-center">
          {moreDetails}
        </p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="py-10 px-5 bg-gray-100">
      <div className="mb-5 w-full flex justify-center items-center">
        <SectionHeading heading={"Meet Our Team"} />
      </div>
      <div className="text-center w-[90%] mx-auto lg:w-[80%] my-2 lg:my-5">
        We at APSTECHS offer Design & Advisory Solutions for efficient and
        effective utilisation of power sector resources. Our services ensure
        maximum business and operational success for our clients. With a proven
        track record of delivering customised, cost-effective, safe,
        sustainable, and viable projects, we provide technical and financial
        solutions tailored to customer goals and regulatory requirements.
      </div>
      <div className="relative w-full lg:w-[80%] mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".next-btn", // Custom class for next button
            prevEl: ".prev-btn", // Custom class for prev button
          }}
          pagination={false}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full !py-10"
        >
          {teamData.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamCard
                name={member.name}
                moreDetails={member.moreDetails}
                designation={member.designation}
                image={member.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <div className="next-btn cursor-pointer absolute right-0 top-[50%] transform -translate-y-[50%] text-primaryText">
          <TfiAngleRight size={35} />
        </div>
        <div className="prev-btn cursor-pointer absolute left-0 top-[50%] transform -translate-y-[50%] text-primaryText">
          <TfiAngleLeft size={35} />
        </div>
      </div>
    </div>
  );
};

export default Team;
