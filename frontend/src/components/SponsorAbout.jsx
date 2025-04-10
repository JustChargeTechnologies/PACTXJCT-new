/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import about_bg from "../assets/Vision1.png";
import "../../public/styles/slider.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";

const SponsorAbout = ({ description, images = [] }) => {

  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 4 },
  };

  const items = images.map((img, i) => (
    <div key={i} className="px-2">
      <img
        src={img.Url}
        alt={`slide-${i}`}
        className="min-h-[142px] min-w-[190px] object-cover rounded-md shadow-md"
      />
    </div>
  ));

  
  const sliderRef = useRef(null);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);

  const [sponsor, setSponsor] = useState({});

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/getSponser`
        );
        if (response.status === 200) {
          const data = await response.data;
          setSponsor(data);
        }
      } catch (error) {
        console.error("Error fetching news all data:", error);
      }
    };
    fetchNews();
  }, []);

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
      const card = sliderRef.current.children[0]; // Get first card
      if (card) {
        sliderRef.current.scrollLeft -= card.offsetWidth * visibleSlides; // Scroll by visible card width
      }
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.children[0]; // Get first card
      if (card) {
        sliderRef.current.scrollLeft += card.offsetWidth * visibleSlides; // Scroll by visible card width
      }
    }
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${about_bg})` }}
        className="flex justify-center items-center h-auto relative bg-cover bg-center bg-no-repeat w-full"
      >
        <div className="bg-white/50 flex justify-center w-full">
          <div className="w-[93%] md:w-[79%]">
            <div className="md:w-[60%]">
              {images.length === 0 ? (
                ""
              ) : (
                <div className=" mx-auto py-10">
                  <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    disableButtonsControls={true}
                    disableDotsControls={false}
                    controlsStrategy="alternate"
                    autoPlay={true}
                    autoPlayInterval={3000}
                    infinite
                  />
                </div>
              )}
              <div className="below nunito-font bg-white my-[15px] mb-[50px] p-[28px] py-[35px] rounded-2xl">
                <div>
                  <div className="text-[20px] font-semibold">
                    More About Government Primary School, Duler
                  </div>
                  <div className="border-1 border-black"></div>
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  {description ? (
                    description
                      .split("\n")
                      .map((para, i) => (
                        <p key={i}>{para.trim() && `${para.trim()}.`}</p>
                      ))
                  ) : (
                    <p>No description available.</p>
                  )}
                </div>
              </div>
            </div>
            <div className="sponsor">
              <div className="flex pt-[50px] mb-[25px] items-center justify-center">
                <div className="border-[0.7px] mr-3 w-[40px] md:w-[59.26px] h-0"></div>
                <div className="text-[14px] md:text-[16px]">
                  SPONSOR A SCHOOL
                </div>
                <div className="border-[0.7px] ml-3 w-[40px] md:w-[59.26px] h-0"></div>
              </div>
              <div className="text-[40px] font-bold flex justify-center mb-8">
                Change a life!
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
                    {Array.isArray(sponsor) && sponsor.length > 0 ? (
                      sponsor.map((item, index) => (
                        <div
                          key={index}
                          className="flex-none"
                          style={
                            window.innerWidth >= 1200
                              ? { width: `${95.5 / visibleSlides}%` }
                              : { width: `${102 / visibleSlides}%` }
                          }
                        >
                          <div className="flex justify-center items-center h-full">
                            <div className="flex flex-col justify-between bg-white w-[280px] shadow-md h-full">
                              <div className="h-[280px] w-[280px] overflow-hidden">
                                <img
                                  src={item.imgUrl?.url || "default-image-path.jpg"}
                                  alt="Project"
                                  className="h-[280px] w-[280px] object-cover"
                                />
                              </div>
                              <div className=" p-4">
                                <h2 className="text-[20px] text-black font-extrabold leading-8 tracking-wide">
                                {item.title}
                                </h2>
                                <div className=" flex items-center mt-4 font-medium">
                                  <div>
                                    <CiLocationOn />
                                  </div>
                                  <div className="ml-2">{item.city} , {item.country}</div>
                                </div>
                                <Link to={`/sponsor/${item._id}`} >
                                  <div className="w-full py-[16px] mt-[35px]  bg-black text-white text-center">
                                  View details
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div>No programs available</div>
                    )}
                  </div>
                </div>

                {/* Custom Navigation Buttons */}
                {sponsor.length > visibleSlides && (
                  <>
                    <button
                      onClick={scrollLeft}
                      className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 bg-green-500 h-[50px] w-[50px] flex items-center justify-center rounded-full shadow-lg"
                    >
                      <MdKeyboardArrowLeft className="text-white text-2xl" />
                    </button>
                    <button
                      onClick={scrollRight}
                      className="absolute right-[-2px] top-1/2 transform -translate-y-1/2 bg-green-500 h-[50px] w-[50px] flex items-center justify-center rounded-full shadow-lg"
                    >
                      <MdKeyboardArrowRight className="text-white text-2xl" />
                    </button>
                  </>
                )}
              </div>
              <div className="flex  items-center justify-center mb-[59px] text-[20px] italic font-bold gap-2 text-blue-800 rounded-md  mt-10 cursor-pointer">
                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Load More
                </button>
                <FaArrowRight className="w-[20px] h-[15px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorAbout;
