import React from "react";
import Heading_bg from "../../assets/Contact/Heading_bg.png";
import "../../../public/styles/slider.css";

const Heading = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Heading_bg})` }}
      className="md:mt-[99px] mt-[74px] min-h-[613px] h-auto relative bg-cover bg-center bg-no-repeat w-full flex justify-center pb-4"
    >
      <div className="w-[80%]">
        <div className=" text-[14px] flex flex-col  nunito-font items-center gap-[20px] my-[38px] md:my-[45px]">
          <div className="flex items-center text-[12px] md:text-[16px] text-[#6E6E6E] ">
            <div className="w-[48px] md:w-[76px] border-1 h-0  mr-4"></div>
            <div>Keep in touch!</div>
            <div className="w-[48px] md:w-[76px] border-1 h-0  ml-4"></div>
          </div>
          <div className="font-[800] text-[24px] md:text-[56px]">
            Let us connect for <span className=" text-[#8EC641]">better</span>{" "}
            tomorrow
          </div>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-md lg:min-w-md ">
              <h2 className="text-lg font-semibold text-gray-900">LOCATION</h2>
              <hr className="my-2 border-gray-400" />

              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">Mission Office:</h3>
                <p className="text-gray-700">
                  F1, Jasmine Plaza <br />
                  Pirazona, Moira <br />
                  Bardez, Goa <br />
                  India 403507
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">
                  Registered Address:
                </h3>
                <p className="text-gray-700">
                  No 5043, Level 4, Third Floor of Tower 5 <br />
                  Block-1, PRESTIGE GARDEN BAY <br />
                  Yelahanka, Bangalore <br />
                  Karnataka 560064
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-md lg:min-w-md ">
              <h2 className="text-lg font-semibold text-gray-900">MOB NO.</h2>
              <hr className="my-2 border-gray-400" />

              <div className="mt-4">
                <h3 className=" text-gray-800">+91 99888 13222</h3>
                <h2 className="text-lg font-semibold text-gray-900 mt-4">
                  EMAIL
                </h2>
              </div>
              <p className="text-gray-700 mt-4">mission@pactfoundation.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
