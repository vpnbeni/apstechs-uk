import { RxArrowRight, RxArrowTopRight } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Card = ({ name, description, image, link }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(link)}
      className="shadow-md border-b-2 w-full group relative flex flex-col items-start justify-start overflow-hidden h-[428px] border-[#6796DF] font-light"
    >
      <div className="flex w-full flex-col items-start text-start">
        <img
          src={image}
          alt={name}
          className="w-full h-[230px] overflow-hidden group-hover:scale-105 duration-700"
        />
      </div>
      <div className="px-4 pt-6 flex flex-col items-start justify-between">
        <div className="text-black group-hover:text-[#6796DF] font-semibold text-lg">
          {name}
        </div>
        <div className="text-start text-[17px] line-clamp-3 overflow-hidden">
          {description}
        </div>
        <div className="flex text-[#6796DF] group-hover:tracking-wider duration-700 items-center justify-center">
          <div className="pr-2 uppercase font-semibold text-sm cursor-pointer py-2">
            Read More
          </div>
          <span className="rounded-r-lg">
            <RxArrowRight className="group-hover:hidden block" />
            <RxArrowTopRight className="group-hover:block hidden" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
