/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState, useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../../public/styles/slider.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { ProjectDataContext } from "../../context/ProjectContext";
import { Link } from "react-router-dom";

const Programs = () => {
  const sliderRef = useRef(null);
  const { project } = useContext(ProjectDataContext);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let slidesToShow = 1; // Default 1 for mobile
      if (width >= 1200) {
        slidesToShow = 4;
      } else if (width >= 900) {
        slidesToShow = 3;
      } else if (width >= 600) {
        slidesToShow = 2;
      }
      setVisibleSlides(slidesToShow);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      setCardWidth(sliderRef.current.offsetWidth / visibleSlides);
    }
  }, [visibleSlides]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.children[0]; 
      if (card) {
        sliderRef.current.scrollLeft -= card.offsetWidth * visibleSlides; // Scroll by visible card width
      }
    }
  };
  
  const scrollRight = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.children[0];
      if (card) {
        sliderRef.current.scrollLeft += card.offsetWidth * visibleSlides; 
      }
    }
  };

  return (
    <div id="projects" className="w-[90%] md:w-[85%] xl:w-[78%] mx-auto nunito-font">
      <div>
        <div className="flex pt-[50px] text-[#6E6E6E] items-center">
          <div className="text-[12px] md:text-[14px]">STAY UPDATED</div>
          <div className="border-[0.7px] ml-3 w-[40px] md:w-[59.26px] h-0 border-[#6E6E6E]"></div>
        </div>
        <div className="font-[800] text-[24px] text-black md:text-[40px] mt-[10px] md:leading-[40px] md:my-[20px]">
          Our running programs
        </div>
        <div className="slider pt-[29px] md:pt-[20px] relative">
          <div className="relative w-full overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out overflow-x-scroll no-scrollbar scroll-smooth"
              style={{
                scrollBehavior: "smooth",
                gap: visibleSlides > 1 ? "16px" : "0px",
              }}
            >
              {Array.isArray(project) && project.length > 0 ? (
                project.map((item, index) => (
                  <Link
                    to={`/about/project/${item._id}`}
                    key={index}
                    className="flex-none"
                    style={window.innerWidth>=1200 ? { width: `${95.5 / visibleSlides}%` }:{ width: `${100 / visibleSlides}%`}}
                  >
                    <div className="flex flex-col justify-between rounded-lg bg-white p-6 shadow-md h-[350px]">
                      <div className="h-[200px] w-full rounded-lg overflow-hidden">
                        <img
                          src={item.projectUrl?.url || ""}
                          alt="Project"
                          className="h-full w-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <h2 className="text-[20px] text-black font-extrabold leading-8 tracking-wide">
                          {item.title || "Untitled"}
                        </h2>
                        <FaArrowRight className="-rotate-45 text-black h-[20px] w-[20px]" />
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div>No programs available</div>
              )}
            </div>
          </div>

          {/* Custom Navigation Buttons */}
          {project.length > visibleSlides && (
            <>
              <button
                onClick={scrollLeft}
                className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-green-500 h-[50px] w-[50px] flex items-center justify-center rounded-full shadow-lg"
              >
                <MdKeyboardArrowLeft className="text-white text-2xl" />
              </button>
              <button
                onClick={scrollRight}
                className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-green-500 h-[50px] w-[50px] flex items-center justify-center rounded-full shadow-lg"
              >
                <MdKeyboardArrowRight className="text-white text-2xl" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programs;
