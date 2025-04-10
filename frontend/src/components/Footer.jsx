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
      <div className="w-[80%] min-h-[252px]  text-white my-8">
        <div className="flex flex-wrap justify-between items-center gap-8">
          <div className="max-w-[378px] min-h-[189px] order-2 md:order-1">
            <h3 className="nunito-font font-bold text-[22.89px]  leading-[41.96px]">
              Get connected
            </h3>
            <p className="nunito-font font-medium text-[19.07px] leading-[38.96px] mt-4">
              Join the conversation on social, and stay connected with our
              latest events and partners around the world.
            </p>
            <div className=" flex gap-4 mt-4">
              <a href="https://www.facebook.com/pactforyou" target="blank" className="h-[31.28px] w-[30.34px]">
                <img src={Facebook} alt="" />
              </a>
              <a href="https://www.instagram.com/pactforyou/" target="blank" className="h-[31.28px] w-[30.34px]">
                <img src={Insta} alt="" />
              </a>
              <a href="https://twitter.com/pactforyou" target="blank" className="h-[31.28px] w-[30.34px]">
                <img src={Twitter} alt="" />
              </a>
              <a href="https://www.youtube.com/@pactforyou" target="blank" className="h-[31.28px] w-[30.34px]">
                <img src={Youtube} alt="" />
              </a>
            </div>
          </div>
          <div className="max-w-[378px] min-h-[189px] order-1 md:order-2">
            <h3 className="nunito-font font-bold text-[22.89px] leading-[41.96px]">
              Support
            </h3>
            <div className="mt-4">
              <p className="nunito-font font-medium text-[19.07px] leading-[38.96px] ">
                Terms & Conditions
              </p>
              <p className="nunito-font font-medium text-[19.07px] leading-[38.96px] ">
                Privacy Policy
              </p>
              <p className="nunito-font font-medium text-[19.07px] leading-[38.96px] ">
                Disclaimer
              </p>
              <p className="nunito-font font-medium text-[19.07px] leading-[38.96px] ">
                Donation Refund Policy
              </p>
            </div>
          </div>
          <div className="max-w-[378px] min-h-[189px] order-3">
            <h3 className="nunito-font font-bold text-[22.89px] leading-[41.96px]">
              Stay informed
            </h3>
            <p className="nunito-font font-medium text-[19.07px] leading-[38.96px] mt-4">
              Subscribe to our newsletter to receive updates of latest news and
              events.
            </p>
            <div className=" flex flex-wrap  mt-8">
              <input
                value={Email}
                onChange={(e)=>{Setemail(e.target.value)}}
                className="border-2 border-amber-500 h-13 w-70 text-[18px] p-3"
                type="text"
                placeholder="E-mail Address"
              />
              <button className="text-[#F7941D] mt-4 md:mt-0 font-bold nunito-font text-[18.26px] pl-1 md:pl-3">
                {" "}
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
