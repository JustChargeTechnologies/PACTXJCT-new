import React from "react";
import WhatWeDoImg from "../../assets/WhatWeDo2.webp";
import "../../../public/styles/slider.css";
import { FaGraduationCap } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { FaHandFist } from "react-icons/fa6";

const WhatWeDo = () => {
  return (
    <div className=" h-auto w-full ">
      <div className="  h-auto  bg-[#2282B4] pt-8 md:pt-0 flex items-center justify-center">
        <div className="w-[93%] xl:w-[88%] 2xl:w-[80%]">
        <div className="pt-[25px] md:pt-[40px] ">
          <h3 className="text-[#E3F5FF] flex items-center font-normal text-[12px]  md:text-[14px] pb-3">
            <div>WHAT WE DO</div>
            <div className="min-w-[76px] xl:min-w-[315px] border-t border-gray-300 ml-4"></div>
          </h3>
          <p className=" nunito-sans font-extrabold md:mt-3 text-[32.21px] md:text-[40px] text-[#FFFF] leading-[40px] md:leading-[50px] ">
            Changing the future of Goa's socio economic landscape
          </p>
          <p className="font-normal text-[13px] md:text-[16px] leading-[26px] tracking-[0px] nunito-sans text-[#E3F5FF] mt-6 ">
            As a think tank and changemaker, we actively collaborate with
            stakeholders from all walks of life, aiming to forge a path toward
            meaningful societal transformation. Our team of experts, policy
            analysts, and change catalysts work hand-in-hand to:
          </p>
        </div>
        <div className="max-w-[1480px] flex flex-col-reverse md:flex-row flex-wrap justify-center md:justify-between  items-center mx-auto">
          <div className=" left-section max-w-[610px] mb-6 md:mb-0 py-6">
            <img
              src={WhatWeDoImg}
              alt="vision"
              className=" w-[333.8px]  h-[403.47px] md:w-[580px] 2xl:w-3xl md:h-[585px] 2xl:h-[613px] "
              loading="lazy"
            />
          </div>
          <div className="right-section max-w-[621px] p-5 pt-6">
            <div className="flex flex-col">
              <div className=" text-white flex mt-[32px] md:mt-[20px] ">
                <div className="min-w-[22.54px] h-[22.54px]  md:min-w-[38px] md:h-[38px] flex justify-center items-center rounded-md bg-white ">
                  <FaGraduationCap className="inline h-[28px] w-[28px] bg-white text-black " />
                </div>
                <div className="ml-4">
                  <h2 className="text-[20px] md:text-[24px] nunito-sans leading-[100%]  font-bold ">
                    Transform Education
                  </h2>
                  <p className="font-normal text-[13px] md:text-[16px] leading-[160%] mt-[15px] tracking-[0px] nunito-sans  text-[#E3F5FF]">
                    We firmly believe that education is the cornerstone of
                    progress. By collaborating with governments and educational
                    institutions, we advocate for reforms that ensure quality
                    education for every child. We design innovative programs,
                    provide resources, and foster an environment where learning
                    thrives.
                  </p>
                </div>
              </div>
              <div className=" text-white flex mt-[32px] md:mt-[20px] ">
                <div className="min-w-[22.54px] h-[22.54px]  md:min-w-[38px] md:h-[38px] flex justify-center items-center rounded-md bg-white ">
                  <HiUserGroup className="inline h-[28px] w-[28px] bg-white text-black " />
                </div>
                <div className="ml-4">
                  <h2 className="text-[20px] md:text-[24px] nunito-sans leading-[100%] font-bold ">
                    Empower Women
                  </h2>
                  <p className="font-normal text-[13px] md:text-[16px] mt-[15px] leading-[160%] tracking-[0px] nunito-sans  text-[#E3F5FF]">
                    Empowering women is not just a goal; it's a necessity. We
                    strive to create equal opportunities, challenge stereotypes,
                    and break down societal barriers. Our initiatives aim to
                    bolster women's participation in various fields, from the
                    workforce to leadership roles.
                  </p>
                </div>
              </div>
              <div className=" text-white flex mt-[32px] md:mt-[20px] ">
                <div className="min-w-[22.54px] h-[22.54px]  md:min-w-[38px] md:h-[38px] flex justify-center items-center rounded-md bg-white ">
                  <FaHandFist className="inline h-[28px] w-[28px] bg-white text-black " />
                </div>
                <div className="ml-4">
                  <h2 className="text-[20px] md:text-[24px] nunito-sans leading-[100%] font-bold ">
                    Equip the Youth
                  </h2>
                  <p className="font-normal text-[13px] md:text-[16px] mt-[15px] leading-[160%] tracking-[0px] nunito-sans  text-[#E3F5FF]">
                    The potential of our youth is boundless. Through skill
                    training and capacity-building programs, we unleash their
                    talents and enable them to contribute effectively to the
                    growth of our society. By nurturing young minds, we ensure a
                    brighter, more dynamic future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
