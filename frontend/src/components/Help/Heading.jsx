import React from 'react'
import Vision1 from "../../assets/Vision1.png";
import '../../../public/styles/slider.css'

const Heading = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Vision1})` }}
      className="md:mt-[99px] mt-[74px] h-auto relative bg-cover bg-center bg-no-repeat w-full "
    >
      <div className="flex justify-center items-center bg-white/50">
      <div className="w-[80%] text-[14px] flex flex-col justify-center nunito-font items-center gap-[20px] my-[38px] md:my-[75px]">
        <div className="flex items-center text-[12px] md:text-[16px] text-[#6E6E6E] ">
          <div className="w-[48px] md:w-[76px] border-1 h-0  mr-4"></div>
          <div>GET HELP</div>
          <div className="w-[48px] md:w-[76px] border-1 h-0  ml-4"></div>
        </div>
        <div className="font-[800] text-[24px] md:text-[56px]">By <span className=" text-[#8EC641]">YOUR</span> side!</div>
      </div>
      </div>
    </div>
  )
}

export default Heading