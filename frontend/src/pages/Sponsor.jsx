import React, { useEffect, useState } from "react";
import sponsor_bg from "../assets/SupportUs/Sponsor_bg2.webp";

import "../../public/styles/slider.css";
import SponsorAbout from "../components/SponsorAbout";
import { useParams } from "react-router-dom";

const Sponsor = () => {
  const [sponsor, setSponsor] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleNews = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/getSponsor/${id}`
        );
        if (response.status === 200) {
          const data = await response.json();
          setSponsor(data);
        } else {
          console.error("Error fetching single news data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching single news data:", error);
      }
    };
    fetchSingleNews();
  }, [id]);

  if (!sponsor) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${sponsor_bg})` }}
        className="md:mt-[99px] flex justify-center items-center mt-[74px] h-auto text-white relative bg-cover bg-center bg-no-repeat w-full"
      >
        <div className="w-[93%] md:w-[79%]">
          <div className="flex my-6 md:my-18 nunito-font  flex-wrap justify-center md:justify-normal">
            <div className="min-w-[337px] min-h-[204px] md:mt-[50px] md:min-w-[256px] md:min-h-[186.36px] ">
              {sponsor.imgUrl && sponsor.imgUrl.url ? (
                <img
                  src={sponsor.imgUrl.url}
                  className="object-cover bg-center bg-no-repeat w-[337px] h-[204px] md:w-[256px] md:h-[186.36px]"
                  alt="sponsor_img"
                />
              ) : (
                <div className="w-[337px] h-[204px] md:w-[256px] md:h-[186.36px] bg-gray-200 flex items-center justify-center">
                  Loading...
                </div>
              )}
            </div>
            <div className="md:pl-10 mt-8 md:mt-0 max-w-[495px]">
              <div className="flex  items-center">
                <h1>SPONSOR A SCHOOL</h1>
                <div className="border-1 border-white w-[80px] ml-5"></div>
              </div>
              <div className="mt-2">
                <div className=" margarine-font text-[22px] md:text-[48px] ">
                  {sponsor.title}
                </div>
              </div>
              <div className="mt-4 md:10 ">{sponsor.about}</div>
            </div>
          </div>
        </div>
      </div>
      <SponsorAbout description={sponsor.description} images={sponsor.images} />
    </div>
  );
};

export default Sponsor;
