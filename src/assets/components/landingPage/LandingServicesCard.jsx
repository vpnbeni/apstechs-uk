import React from "react";
import { FaArrowRight } from "react-icons/fa";

const LandingServicesCard = () => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen text-center">
      <h1 className="w-fit bg-secondary px-3 tracking-[.25em]  text-white text-lg mt-10 py-[-1px]">
        SERVICES
      </h1>
      <div className=" text-3xl font-light my-4">
        We've Been Transforming Ideas into Reality for Over a Decade.
      </div>

      <div className="flex justify-between w-full px-[10%] py-10  lg:pb-20 items-center ">
        {/* design */}
        <div className="border bg-[#EBEFF2] relative flex flex-col px-12 items-center justify-between w-[326px]  h-[630px] border-primary rounded-lg p-6 font-light">
          <div className="flex flex-col items-center text-center gap-6">
            <img
              src="/assets/landingPage/service/computer-worker.png"
              alt=""
              className="w-[70px] h-[70px]"
            />
            <div className="text-primaryText font-semibold text-lg">Design</div>
          </div>
          <div className="">
            <div className="leading-[1.8em] text-[17px]">
              Our in-house design team holds over 100 years of combined
              experience, equipping us to assist with any aspect of your
              project.
            </div>
            <div className="leading-[1.8em] my-4 text-[17px]">
              From feasibility assessments and utility searches to a full
              turnkey design and build service, we have you covered.
            </div>
          </div>
          <div className="flex  border border-primary  rounded-lg text-primaryText items-center justify-center">
            <div className=" px-6 cursor-pointer hover:bg-primaryText hover:text-white py-2 border-r  border-primary rounded-l-lg ">
              Read More
            </div>
            <span className="px-4 py-2  rounded-r-lg">
              <FaArrowRight />
            </span>
          </div>
        </div>
        {/* Project Build */}
        <div className="border bg-[#EBEFF2] relative flex flex-col items-center justify-between w-[326px]  h-[630px] border-primary rounded-lg p-6 font-light">
          <div className="flex flex-col items-center text-center gap-6">
            <img
              src="/assets/landingPage/service/electrical-engineer.png"
              alt=""
              className="w-[70px] h-[70px]"
            />
            <div className="text-primaryText font-semibold text-lg">
              Project Build
            </div>
          </div>
          <div className="leading-[1.8em] ">
            As a NERS accredited ICP, we work with all UK DNOs on contestable
            projects up to 132kV. Our comprehensive range of solutions extends
            to private network owners, encompassing the replacement of existing
            assets, network expansion, installation of additional equipment and
            substations, as well as private wire connections from renewable
            energy generators to demand users
          </div>
          <div className="flex  border border-primary  rounded-lg text-primaryText items-center justify-center">
            <div className=" px-6 cursor-pointer hover:bg-primaryText hover:text-white py-2 border-r  border-primary rounded-l-lg ">
              Read More
            </div>
            <span className="px-4 py-2  rounded-r-lg">
              <FaArrowRight />
            </span>
          </div>
        </div>
        {/* Operations and Maintenance */}
        <div className="border bg-[#EBEFF2] relative flex flex-col items-center justify-between w-[326px]  h-[630px] border-primary rounded-lg p-6 font-light">
          <div className="flex flex-col items-center text-center gap-6">
            <img
              src="/assets/landingPage/service/electrical-mechanic.png"
              alt=""
              className="w-[70px] h-[70px]"
            />
            <div className="text-primaryText font-semibold text-lg">
              Operations and Maintenance
            </div>
          </div>
          <div className="leading-[1.8em] ">
            Owning and maintaining HV equipment can be a challenging and costly
            responsibility, which is why we create flexible tailored maintenance
            plans to suit your business needs. From planned preventative
            maintenance and non-intrusive inspections to emergency callouts, we
            are here for you 24 hours a day, 7 days a week, 365 days a year
          </div>
          <div className="flex  border border-primary  rounded-lg text-primaryText items-center justify-center">
            <div className=" px-6 cursor-pointer hover:bg-primaryText hover:text-white py-2 border-r  border-primary rounded-l-lg ">
              Read More
            </div>
            <span className="px-4 py-2  rounded-r-lg">
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingServicesCard;
