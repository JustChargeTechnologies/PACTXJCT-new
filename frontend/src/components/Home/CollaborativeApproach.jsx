import "../../../public/styles/slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/Home/image1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vision1 from "../../assets/Vision1.png";

const CollaborativeApproach = () => {
  const images = [
    { src: image1, width: 257.13 },
    { src: image1, width: 257.13 },
    { src: image1, width: 257.13 },
    { src: image1, width: 257.13 },
    { src: image1, width: 257.13 },
    { src: image1, width: 257.13 },
  ];

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerPadding: "0px",
  };
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${vision1})` }}
    >
      <div className=" h-auto w-full ">
        <div className="bg-[#EDF8FFB2]  h-auto  w-full">
          <div className="upper nunito-font flex justify-center items-center px-[20px] md:px-0 py-[30px] md:py-0">
            <div className="max-w-[1280px] mt-7 min-h-[170px] flex flex-col justify-center items-center">
              <h2 className="font-semibold  text-[14px] flex items-center leading-[28px] text-[#6E6E6E] ">
                <div className="min-w-[76px] border-1 h-0  mr-4"></div>
                <div className="text-center">OUR COLLABORATIVE APPROACH</div>
                <div className="min-w-[76px] border-1 h-0  ml-4"></div>
              </h2>
              <div className="text-[40px] mt-3 leading-[50px] font-extrabold">
                Our approach is modeled around bringing{" "}
                <span className="text-[#8EC641] margarine-font">
                  change at all levels
                </span>
              </div>
              <div className="text-[#6E6E6E] leading-[26px] mt-5 font-normal ">
                The Pact Foundation firmly believes that creating lasting change
                requires a united effort. We collaborate with government bodies,
                industries, communities, and other non-profit organizations to
                amplify our impact. By fostering partnerships, we maximize our
                reach, share knowledge, and collectively work towards common
                goals.
              </div>
            </div>
          </div>
          <div className="lower mt-9">
            <div className="slider-container overflow-hidden p-0 m-0 min-h-[220px] md:min-h-[240px]">
              <Slider {...settings}>
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="flex gap-4 "
                    style={{ width: img.width }}
                  >
                    <img
                      src={img.src}
                      alt={`Slide ${index + 1}`}
                      style={{ width: "100%", borderRadius: "10px" }}
                      className="ml-16 md:ml-0"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborativeApproach;
