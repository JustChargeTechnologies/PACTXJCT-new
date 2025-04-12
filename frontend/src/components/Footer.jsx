import React, { useState } from "react";
import Facebook from "../assets/Footer/Facebook.png";
import Insta from "../assets/Footer/Insta.png";
import Twitter from "../assets/Footer/Twitter.png";
import Youtube from "../assets/Footer/Youtube.png";
import "../../public/styles/slider.css";

const Footer = () => {
  const [Email, Setemail] = useState("");
  return (
    <div className="bg-[#231F20] w-full flex justify-center items-center">
      <div className="w-[80%] min-h-[222px]  text-white my-8">
        <div className="flex flex-wrap justify-between items-center gap-0 md:gap-8">
          <div className="max-w-[378px] min-h-[189px] order-2 md:order-1">
            <h3 className="nunito-sans font-bold text-[20px] md:mt-[-16px] leading-[30px]">
              Get connected
            </h3>
            <p className="nunito-sans font-medium text-[14px] leading-[26px] mt-4">
              <p>Join the conversation on social, and stay</p>
              <p>connected with our latest events and partners</p>
              <p>around the world.</p>
            </p>
            <div className=" flex gap-4 mt-4">
              <a href="https://www.facebook.com/pactforyou" target="blank" className="h-[31.28px] w-[30.34px]">
                <img src={Facebook} loading="lazy" alt="" />
              </a>
              <a href="https://www.instagram.com/pactforyou/" target="blank" className="h-[31.28px] w-[30.34px]">
                <img src={Insta} loading="lazy" alt="" />
              </a>
              <a href="https://twitter.com/pactforyou" target="blank" className="h-[31.28px] w-[30.34px]">
                <img src={Twitter} loading="lazy" alt="" />
              </a>
              <a href="https://www.youtube.com/@pactforyou" target="blank" className="h-[31.28px] w-[30.34px]">
                <img src={Youtube} loading="lazy" alt="" />
              </a>
            </div>
          </div>
          <div className="max-w-[378px] min-h-[189px] order-1 md:order-2">
            <h3 className="nunito-sans font-bold text-[20px] leading-[30px] md:mt-[-16px]">
              Support
            </h3>
            <div className="mt-4">
              <p className="nunito-sans font-medium text-[14px] leading-[26px] ">
                Terms & Conditions
              </p>
              <p className="nunito-sans font-medium text-[14px] leading-[26px] ">
                Privacy Policy
              </p>
              <p className="nunito-sans font-medium text-[14px] leading-[26px] ">
                Disclaimer
              </p>
              <p className="nunito-sans font-medium text-[14px] leading-[26px] ">
                Donation Refund Policy
              </p>
            </div>
          </div>
          <div className="max-w-[378px] min-h-[189px] order-3">
            <h3 className="nunito-sans font-bold text-[20px] mt-4 md:mt-0 leading-[30px]">
              Stay informed
            </h3>
            <p className="nunito-sans font-medium text-[14px] leading-[26px] mt-4">
              Subscribe to our newsletter to receive updates of latest news and
              events.
            </p>
            <div className="  mt-8">
              <div className="flex flex-col flex-wrap gap-4 ">
              <input
                value={Email}
                onChange={(e)=>{Setemail(e.target.value)}}
                className="bg-white text-black h-11  text-[18px] p-3"
                type="text"
                placeholder="Email"
              />
              <button className="text-black bg-white w-30 py-2 rounded-md  nunito-sans text-[18.26px]">
                {" "}
                Submit
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
