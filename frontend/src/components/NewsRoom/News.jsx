import React, { useEffect, useState } from "react";
import NewsBg from "../../assets/NewsRoom/NewsBg.jpg";
import moment from "moment";
import "../../../public/styles/slider.css";
import axios from "axios";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState(null);
  const formatDate = (dateString) => {
    return moment(dateString).format("MMMM D, YYYY");
  };
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/getnews`
        );
        if (response.status === 200) {
          const data = await response.data;
          setNews(data);
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching news all data:", error);
      }
    };
    fetchNews();
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${NewsBg})` }}
      className="bg-cover bg-center bg-no-repeat w-full h-auto flex justify-center items-center"
    >
      <div className="w-[90%] md:w-[79%] bg-white my-[70px] rounded-xl nunito-font">
        <div className="p-[20px] flex flex-col gap-[30px]">
          <div className="flex text-[#6E6E6E] text-[11px] md:text-[14px] font-[600] leading-[28px] capitalize  items-center">
            <div>Trending news</div>
            <div className="min-w-[76px] border-1 border-[#6E6E6E] h-0  ml-4"></div>
          </div>
          {news && news.length > 0 ? (
            news.map((item, indx) => (
              <Link to={`/newsroom/${item._id}`} key={indx} className="image-part flex flex-col md:flex-row gap-5">
                <div>
                  <img
                    className="min-w-[284px] md:min-w-[244px] h-[160px] rounded-xl"
                    src={item.images[0]?.imageUrl || ""}
                    alt={item.title || "News Image"}
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <div className="font-[800] text-[16px] md:text-[20px] leading-[150%] ">
                    {item.title}
                  </div>
                  <div className="text-[#1D2130] text-[11px] md:text-[14px] font-[600] leading-[150%]">
                    {formatDate(`${item.date}`)}
                  </div>
                  <div className="text-[14px] md:text-[16px]">
                  {item.images[0]?.paragraph || ""}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-gray-500 text-center mt-10">
              No News available at the moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
