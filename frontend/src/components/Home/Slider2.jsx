import React, { useState } from "react";
import caroselUP from "../../assets/caroselUP.png";
import bgSlider from "../../assets/bgSlider.png";
import "../../../public/styles/slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Slider2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative  bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${bgSlider})` }}
    >

      <div className="flex bg-[#F7941DCC] items-center justify-center">
        <div className="w-[93%] xl:w-[88%] 2xl:w-[79%]  h-auto py-3 md:py-8  flex flex-col md:flex-row justify-center md:justify-around  items-center text-white">
        <div className="left-section mt-10 flex-1 flex flex-col justify-center ">
          <h2 className="font-nunito font-[600] text-[32.61px] leading-[120%] tracking-[0] mt-[-30px] md:mt-[-90px] md:text-[54px]">
            <p>Inspiring change</p>
            <span
              className=" margarine-regular bg-white text-[#2282B4] px-4 py-2 md:ml-[-18px] rounded-full inline-block text-center mt-4"

            >
              enriching lives
            </span>
          </h2>
          <p className="nunito-sans  text-[13px] md:text-[16px] font-[400] md:pr-5 md:w-[601px] md:h-[216px] mt-6">
            Welcome to the Pact Foundation, a people's NGO and think tank
            dedicated to creating positive societal change. Our mission is to
            pave the way for a brighter tomorrow by working collaboratively with
            governments, industries, people, and non-profit organizations to
            influence policies that bring about equal and quality education for
            every child. We also strive to empower women and youth by equipping
            them with essential skill training, nurturing their potential, and
            fostering a culture of inclusivity.
          </p>
          <div>

            <div className="flex flex-row  w-[10.94rem] my-3 md:my-0 md:w-[301px] h-[1.98rem] gap-[1.09rem] ">
              <Link to='/about' className="bg-white text-black w-[50%] nunito-sans flex justify-center items-center shadow-md font-nunito font-semibold text-[9.32px] md:text-[16px] leading-[100%] tracking-[0%] text-right">
                What We Do
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center gap-2 w-[50%] text-white "
              >
                <span className="flex items-center justify-center rounded-md ">
                  <FaYoutube className=" bg-white text-amber-500 px-[1px] py-[1px] w-4 h-4" />
                </span>
                Play Video
              </button>
            </div>

            {/* Modal */}
            {isOpen && (
              <div className="fixed inset-0  bg-black/10 backdrop-blur-lg flex items-center justify-center z-50 ">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden  min-w-[70%]  relative">

                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-lg border border-gray-400"
                  >
                    ✖
                  </button>

                  {/* Video */}
                  <iframe
                    className="w-full h-[550px]"
                    loading="lazy"
                    src="https://www.youtube.com/embed/5FEqRnyrLbw?autoplay=1"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="right-section flex-1 flex justify-center mt-4 overflow-hidden">
          <Carousel
            autoPlay
            interval={3000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            stopOnHover={true}

            className="md:w-[100%] w-[98%] mx-auto pb-5 "
          >
            <div className="w-full h-[300px] md:h-[450px] overflow-x-hidden">
              <img
                src={caroselUP}
                className="w-full  h-full object-cover object-center rounded-lg"
                alt="Slide 1"
                loading="lazy"
              />
            </div>
            <div className="w-full h-[300px] md:h-[450px]  overflow-x-hidden">
              <img
                src={caroselUP}
                className="w-full h-full object-cover object-center rounded-lg"
                alt="Slide 2"
                loading="lazy"
              />
            </div>
            <div className="w-full h-[300px] md:h-[450px]  overflow-x-hidden">
              <img
                src={caroselUP}
                className="w-full h-full object-cover object-center rounded-lg"
                alt="Slide 3"
                loading="lazy"
              />
            </div>
          </Carousel>
        </div>
        </div>
      </div>
      </div>

  );
};

export default Slider2;
