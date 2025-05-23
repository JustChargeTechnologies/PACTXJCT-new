import React from "react";
import Vision2 from "../../assets/Vision2.png";
import vision1 from "../../assets/Vision1.png";
import "../../../public/styles/slider.css";

const Vision = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${vision1})` }}
    >
      <div className=" h-auto w-full ">
        <div className="bg-[#FFF5E999]  h-auto ">
          <div className="flex justify-center items-center">
            <div className="w-[93%] xl:w-[88%] 2xl:w-[79%] flex flex-wrap justify-center md:justify-between items-center mx-auto">
              <div className="left-section max-w-[621px] min-h-[372px]  md:mt-[-25px] mt-10">
                <div className="flex flex-col ">
                  <h3 className="text-[#6E6E6E] text-[12px] flex items-center md:text-[14px] font-[500] pb-3">
                    <div>OUR VISION</div>
                    <div className="min-w-[76px] border-1 h-0  ml-4"></div>
                  </h3>
                  <p className=" nunito-sans font-[800] text-[32.14px] md:text-[40px] leading-[40px] md:leading-[50px]">
                    Let us come together
                  </p>
                  <p className="nunito-sans font-[800] text-[32.14px] md:text-[40px] leading-[40px] md:leading-[30px]">
                    to make a{" "}
                    <span className=" italic font-[900] text-[#2282B4]">
                      difference
                    </span>
                  </p>
                  <p className="nunito-sans font-[400]  text-[11px] md:text-[15px] leading-[25px]  mt-6 text-[#6E6E6E]">
                    At the heart of our vision lies a world where every child
                    has equal access to education, where women are empowered
                    with opportunities, and where the youth is skilled and
                    equipped to shape their future. We envision a society where
                    education is a catalyst for progress and prosperity,
                    breaking barriers of poverty and ignorance
                  </p>
                  <p className="nunito-sans text-[11px] md:text-[15px] leading-[25px]  mt-3 text-[#6E6E6E]">
                    At the heart of our vision lies a world where every child
                    has equal access to education, where women are empowered
                    with opportunities, and where the youth is skilled and
                    equipped to shape their future. We envision a society where
                    education is a catalyst for progress and prosperity,
                    breaking barriers of poverty and ignorance
                  </p>
                </div>
              </div>
              <div className=" right-section max-w-[621px] min-h-[350px] md:mt-6 md:min-h-[372px]">
                <img
                  src={Vision2}
                  loading="lazy"
                  alt="vision"
                  className="w-[580px] h-[350px] md:h-[440px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
