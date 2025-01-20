import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper"; // Corrected import here
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import SectionHeading from "../common/heading/SectionHeading";
import { useNavigate } from "react-router-dom";

const teamData = [
  {
    name: "Sanjeev Kumar",
    designation: "CEO APS GROUP",
    image: "/assets/team/SanjeevKumar.jpg",
  },
  {
    name: "Azad Panwar",
    designation: "MD, APSTECHS",
    image: "/assets/team/AzadPanwar.jpg",
  },
  {
    name: "Krishna R Pokala",
    designation: "BDM, APSTECHS",
    image: "/assets/team/KrishnaRPokala.jpg",
  },
];

const TeamCard = ({ name, designation, image }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/teampage");
      }}
      className="relative group overflow-hidden  h-[500px]"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:blur-sm transition duration-500"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black  bg-opacity-50 transition duration-700">
        <h3 className="text-white text-lg font-bold mb-2 animate-fade-up">
          {name}
        </h3>
        <p className="text-gray-300 text-sm animate-fade-up delay-150">
          {designation}
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
      <div className="relative w-[80%] mx-auto">
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
                designation={member.designation}
                image={member.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <div className="next-btn cursor-pointer absolute -right-14 top-[50%] -translate-y-[50%] text-primaryText">
          <TfiAngleRight size={35} />
        </div>
        <div className="prev-btn cursor-pointer absolute -left-14 top-[50%] -translate-y-[50%] text-primaryText">
          <TfiAngleLeft size={35} />
        </div>
      </div>
    </div>
  );
};

export default Team;
