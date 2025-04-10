import React from 'react'
import Vision1 from "../../assets/Vision1.png";
import '../../../public/styles/slider.css'
import Co_bg from "../../assets/CorporatePartner/Co_bg.png"

const Heading = () => {
  return (
     <div
          style={{ backgroundImage: `url(${Vision1})` }}
          className="md:mt-[99px] mt-[74px] h-auto relative bg-cover bg-center bg-no-repeat w-full "
        >
          <div className="flex justify-center items-center bg-white/50">
          <div className="w-[80%] text-[14px] nunito-font flex flex-col justify-center  items-center gap-[20px] mt-[38px] md:mt-[70px]">
            <div className="flex items-center text-[12px] md:text-[14px] text-[#6E6E6E] ">
              <div className="w-[48px] md:w-[76px] border-1 h-0  mr-4"></div>
              <div>GET HELP</div>
              <div className="w-[48px] md:w-[76px] border-1 h-0  ml-4"></div>
            </div>
            <div className="font-[800] text-[24px] md:text-[56px]">Corporate  <span className=" text-[#8EC641]">Partnerships</span> </div>
            <div className='font-[400] text-[16px] text-[#6E6E6E] leading-[150%] text-center'>At PACT Foundation, without our corporate partners, we cannot ensure the effective execution of ourprograms aimed at eliminating the cycle of poverty. Our partners are critically vital in marshallingresources and adding uniquevalue that aids our mission.PACT Foundation seeks to create beneficial partnerships with ethical, forward-thinking companiesacross the globe. We believe in the power of corporate involvement in driving change, implementingsustainable practices, and enhancing the quality of life of the less privileged communities</div>
            <img className='mt-[-90px]' src={Co_bg} alt="" />
          </div>
          </div>
        </div>
  )
}

export default Heading