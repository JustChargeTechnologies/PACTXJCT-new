import React from "react";
import Heading_bg from "../../assets/NewsRoom/HeadingBg.webp";
import '../../../public/styles/slider.css'

const Heading = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Heading_bg})` }}
      className=" flex justify-center items-center  min-h-[300px] md:min-h-[300px] text-white relative bg-cover bg-center bg-no-repeat w-full"
    >
      <div className="flex nunito-sans flex-col justify-center items-center">
        <div className="flex justify-center items-center pb-6">
          <div className="min-w-[76px] border-1 border-white h-0  mr-4"></div>
          <div className="text-[11px] md:text-[14px] font-[600] text-[#E3F5FF]">NEWSROOM</div>
          <div className="min-w-[76px] border-1 border-white h-0  ml-4"></div>
        </div>
        <div className="text-center text-[24px] md:text-[50px] font-[800] text-[#E3F5FF] leading-[100%]">
            <div>Stories, videos, news and info from</div>
            <div className="text-[26px] md:text-[56px] text-white italic ">PACT Foundation</div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
