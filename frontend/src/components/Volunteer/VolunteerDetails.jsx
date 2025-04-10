import React from "react";
import "../../../public/styles/slider.css";
import HelpForm from "../HelpForm";
import Volunteer_bg1 from '../../assets/Volunteer/Volunteer_bg1.png'
import Volunteer_bg2 from '../../assets/Volunteer/Volunteer_bg2.webp'

const VolunteerDetails = () => {
  return (
    <div
      className="h-auto relative bg-cover bg-center bg-no-repeat w-full flex flex-col justify-center items-center "
      style={{ backgroundImage: `url(${Volunteer_bg1})` }}
    >
      <div className="text-white w-[85%] md:w-[80%] nunito-font flex flex-col gap-[10px] md:gap-[22px] my-[45px]">
        <div className="flex items-center text-[14px] text-[#E3F5FF]">
          <div>Volunteer</div>
          <div className="w-[48px] md:w-[76px] border-1 h-0  ml-4"></div>
        </div>
        <div className="font-[800] text-[24px] md:text-[40px] ">
          Find your inspiration
        </div>
        
        <div className="text-[#FFF3E4] text-[14px] md:text-[16px]">
          <div>🌟 Why Volunteer with PACT Foundation? 🌟</div>
          <div>
          Empowerment: Empower communities with education, improved infrastructure, and a better quality of life.
          </div>
          <div>
          Impact: Be part of real, tangible change that leaves a lasting impact on lives.
          </div>
          <div>
          Connection: Forge meaningful connections with people who share your passion for making a positive difference.
          </div>
          <div>
          Growth: Develop new skills, expand your horizons, and grow as an individual while contributing to a meaningful cause.
          </div>
        </div>
        <div className="text-[#FFF3E4] text-[14px] md:text-[16px]">Ready to create ripples of change? Join us at PACT Foundation and be a driving force for transformation. Your time, energy, and enthusiasm can help us rewrite the future, one project at a time.</div>
        <div className="text-[#FFF3E4] text-[14px] md:text-[16px]">
        📢 Take Action Now! Contact mission@pactfoundation.org or call +91 9988813222 and become a volunteer today. Together, let's shape a world we can all be proud of. 📢
        </div>
        <div>
          <HelpForm role="Volunteer"/>
        </div>
      </div>
      <img className="mt-[-60px]" src={Volunteer_bg2} alt="" />
    </div>
  );
};

export default VolunteerDetails;
