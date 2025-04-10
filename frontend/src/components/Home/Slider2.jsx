import React, { useState } from "react";
import caroselUP from "../../assets/caroselUP.png";
import bgSlider from "../../assets/bgSlider.png";
import "../../../public/styles/slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaYoutubeSquare } from "react-icons/fa";

const Slider2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative md:mt-[90px] mt-[72px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgSlider})` }}
    >
      <div className="h-auto md:max-h-[632px] w-full bg-[#F7941DCC]  py-8 flex flex-col md:flex-row justify-center md:justify-around  items-center text-white z-30">
        <div className="left-section flex-1 flex flex-col justify-center px-4 md:px-30">
          <h2 className="font-nunito font-bold text-[32.61px] leading-[120%] tracking-[0] md:text-[56px]">
            <p>Inspiring change</p>
            <span
              className="margarine-font bg-white text-[#2282B4] px-4 py-2 rounded-full inline-block text-center mt-2"
              style={{ transform: "rotate(-1.13deg)" }}
            >
              enriching lives
            </span>
          </h2>
          <p className="font-nunito  text-[13px] md:text-[17px]  md:w-[601px] md:h-[216px] mt-6">
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
            {/* Buttons */}
            <div className="flex flex-row my-3 w-[10.94rem] md:w-[301px] h-[1.98rem] gap-[1.09rem] ">
              <a className="bg-white text-black w-[50%] flex justify-center items-center shadow-md font-nunito font-semibold text-[9.32px] md:text-[15px] leading-[100%] tracking-[0%] text-right">
                What We Do
              </a>
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center gap-2 w-[50%] text-white "
              >
                <span className="flex items-center justify-center rounded-md ">
                  <FaYoutubeSquare className="bg-amber-500 text-white w-6 h-6" />
                </span>
                Play Video
              </button>
            </div>

            {/* Modal */}
            {isOpen && (
              <div className="fixed inset-0  bg-black/10 backdrop-blur-lg flex items-center justify-center z-50 ">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden  min-w-[70%]  relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-lg border border-gray-400"
                  >
                    ✖
                  </button>

                  {/* Video */}
                  <iframe
                    className="w-full h-[550px]"
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
        <div className="right-section flex-1 flex justify-center md:mr-27 mt-4">
          <Carousel
            autoPlay
            interval={3000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            stopOnHover={true}
            className="md:w-[100%] w-[90%] mx-auto pb-5"
          >
            <div className="w-full h-[300px] md:h-[500px]">
              <img
                src={caroselUP}
                className="w-full h-full object-cover object-center rounded-lg"
                alt="Slide 1"
              />
            </div>
            <div className="w-full h-[300px] md:h-[500px]">
              <img
                src={caroselUP}
                className="w-full h-full object-cover object-center rounded-lg"
                alt="Slide 2"
              />
            </div>
            <div className="w-full h-[300px] md:h-[500px]">
              <img
                src={caroselUP}
                className="w-full h-full object-cover object-center rounded-lg"
                alt="Slide 3"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
