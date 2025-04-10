import React from "react";
import "../../public/styles/slider.css";

import vision1 from "../assets/Vision1.png";
import About_bg from "../assets/About/About_bg.png";
import sign from "../assets/About/Sign.png";
import WhyPact from "../components/About/WhyPact";
import Programs from "../components/About/Programs";
import FounderProfile from "../components/About/FounderProfile";

const About = () => {
  return (
    <div>
      <div className="relative md:mt-[99px] mt-[74px] bg-cover bg-center bg-no-repeat w-full">
        <div
          style={{ backgroundImage: `url(${About_bg})` }}
          className="bg-green-pattern relative w-full min-h-[390px] md:min-h-[555px]"
        ></div>
        <div
          style={{ backgroundImage: `url(${vision1})` }}
          className="bg-paper-pattern relative w-full min-h-[2681px] md:min-h-[1950px] bg-cover bg-center bg-no-repeat "
        >
          {" "}
          <div className="bg-[#F2FFE199] min-h-[3060px] md:min-h-[1970px]"></div>
        </div>
        <div className="flex flex-col items-center justify-center w-full min-h-[3200px] md:min-h-[1894px]   absolute top-0">
          <div className="min-h-[164px] w-[79%] flex justify-center items-center flex-col nunito-font ">
            <div className="text-[11px] md:text-[14px] flex justify-center md:pt-12 items-center font-[600] md:leading-[28px] text-[#6E6E6E] ">
              <div className="w-[48px] md:w-[76px] border-1  h-0  mr-4"></div>
              <div>ABOUT US</div>
              <div className="w-[48px] md:w-[76px] border-1 h-0  ml-4"></div>
            </div>
            <div className="flex flex-col justify-end items-end">
              <div className="font-[800] text-center text-[24px] md:text-[56px] py-3 md:leading-[50px] ">
                Finding{" "}
                <span className="margarine-font text-white font-[400] text-[24px] md:text-[64px]">
                  inspiration
                </span>{" "}
                in every turn
              </div>
              <div>
                <img
                  className="mt-[-15px] mr-[60px] md:mr-[0] w-[90px] md:w-full h-[9px] md:mt-[-11px]"
                  src={sign}
                  alt=""
                />
              </div>
            </div>
          </div>
          <iframe
            className="w-[85%] md:w-[78%] min-h-[296px] md:min-h-[680px] rounded-2xl md:pt-12"
            src="https://www.youtube.com/embed/5FEqRnyrLbw"
            title="Your one thought can impact a million lives!"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <WhyPact />
          <Programs />
        </div>
        <FounderProfile />
      </div>
    </div>
  );
};

export default About;
