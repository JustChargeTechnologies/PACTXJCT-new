
import React, { useEffect, useState } from "react";
import NewsDetail_bg from "../../assets/NewsRoom/NewsDetail_bg.webp";
import '../../../public/styles/slider.css'
import { useParams } from "react-router-dom";

const NewsDetail = () => {
    const [SingleNews, setSingleNews] = useState(null); // Initialize as null
    const { id } = useParams();
  
    useEffect(() => {
      const fetchSingleNews = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_BASE_URL}/getnews/${id}`);
          if (response.status === 200) {
            const data = await response.json();
            setSingleNews(data);
          } else {
            console.error("Error fetching single news data:", response.status);
          }
        } catch (error) {
          console.error("Error fetching single news data:", error);
        }
      };
      fetchSingleNews();
    }, [id]);
  
    if (!SingleNews) {
      return <div>Loading...</div>; 
    }
  
    return (
      <div>
        <div
          style={{ backgroundImage: `url(${NewsDetail_bg})` }}
          className=" flex justify-center items-center  h-auto text-white relative bg-cover bg-center bg-no-repeat w-full"
        >
          <div className="flex nunito-sans flex-col justify-center items-center py-10 w-[93%] md:w-[79%]">
            <div className="flex justify-center items-center pb-6">
              <div className="min-w-[76px] border-1 border-white h-0  mr-4"></div>
              <div className="text-[11px] md:text-[14px] font-[600] text-[#E3F5FF]">
                NEWSROOM
              </div>
              <div className="min-w-[76px] border-1 border-white h-0  ml-4"></div>
            </div>
            <div className="text-center text-[24px] md:text-[40px] leading-[100%] py-3 pb-8 font-[800]  text-[#E3F5FF]">
              {SingleNews.title || "News Title"}
            </div>
            <img src={SingleNews.images[0].imageUrl} loading="lazy" alt="" />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="nunito-sans h-full flex flex-col gap-[16px] mb-[30px] md:mb-[40px] pt-[24px] w-[93%] md:w-[78%]">
            <div className="leading-[24px] font-[400] tracking-wider flex flex-col gap-[16px]">
              {SingleNews.images[0].paragraph || "No description available."}
            </div>
            {Array.isArray(SingleNews.images) ? (
              SingleNews.images.slice(1).map((item, index) => (
                <div key={index} className="flex flex-col gap-0 mt-3">
                  <div className="flex flex-col gap-0 rounded-lg bg-white">
                    <div
                      className="h-auto bg-cover bg-no-repeat mb-[30px]"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    >
                      <img
                        src={item.imageUrl}
                        alt={`Slide ${index + 1}`}
                        className="h-auto w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-[16px] text-black leading-[24px] font-[400] flex flex-col gap-[10px] tracking-wider">
                      {item.paragraph.split("\n").map((sentence, i) => (
                        <p key={i}>{sentence.trim() && `${sentence.trim()}.`}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No images available</div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default NewsDetail;
