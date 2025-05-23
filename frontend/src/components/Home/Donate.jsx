import React from "react";
import vision1 from "../../assets/Vision1.png";
import bg from "../../assets/Home/Main.png";
import "../../../public/styles/slider.css";
import { Link } from "react-router-dom";


const Donate = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${vision1})` }}
    >
      <div className=" bg-[#FFF5E999] h-auto w-full flex justify-center items-center   py-10">
        <div className="w-[85%] md:w-[79%] min-h-[300px] object-contain  rounded-3xl max-auto"
        style={{ backgroundImage: `url(${bg})` }}>
          <div className="flex flex-col px-2 py-5 md:px-15 md:py-10 justify-center items-center">
            <h2 className="text-[#231F20] font-bold text-[27.18px] md:text-[40px] leading-[50px] text-center">Join hands in the journey</h2>
            <p className=" text-[14px] md:text-[20px] leading-[26px] nunito-sans text-center mt-6">
              You are essential to this transformative journey. Together, we can
              create a world where education knows no boundaries, where women
              have a voice, and where youth thrive. Join us in our pursuit of a
              brighter, more inclusive, and more equitable future for all.
            </p>
            <h1 className="margarine-regular text-[38px] md:text-[56px] text-white leading-[100%] pt-4 md:pt-0 text-center mt-3">Be a part of the change. Together, let's Empower Tomorrow!</h1>
            <Link to="/supportus" className=" nunito-sans text-white bg-black px-5 py-3 mt-4 mb-4">Donate now</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Donate;
