import React from "react";
import "../../../public/styles/slider.css";
import above_bg from "../../assets/SupportUs/Donate_above.webp";
import Payment from "./Payment";


const Donate = () => {
  return (
    <div>
      <div
        className="relative md:mt-[100px] mt-[72px] text-white flex  justify-center  h-[230px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${above_bg})` }}
      >
        <div className="w-[93%] md:w-[79%] nunito-font">
          <div className="flex mt-12 justify-center items-center">
            <div className="border-1 border-white w-[100px] mr-11"></div>
            <div>Let’s make a difference</div>
            <div className="border-1 border-white w-[100px] ml-11"></div>
          </div>
          <div className="text-center text-[52px] mt-6 margarine-font">
            Your support makes a difference for children
          </div>
        </div>
      </div>
      <Payment/>
    </div>
  );
};

export default Donate;
