import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

const DownloadBtn = ({ pdf }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      onClick={() => window.open(pdf)}
      className={`absolute bottom-8 left-[50%]  -tranalate-x-[50%] bg-primary text-lightBlue rounded-full p-4 border hover:text-dark hover:bg-white cursor-pointer transition-all duration-1000 delay-500 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-48"
      }`}
    >
      <FaDownload />  
    </div>
  );
};

export default DownloadBtn;
