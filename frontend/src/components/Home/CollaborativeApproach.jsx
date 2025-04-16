import "../../../public/styles/slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/Home/image1.webp";
import image2 from "../../assets/Home/image2.webp";
import image3 from "../../assets/Home/image3.webp";
import image4 from "../../assets/Home/image4.webp";
import image5 from "../../assets/Home/image5.webp";
import image6 from "../../assets/Home/image6.webp";
import image7 from "../../assets/Home/image7.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vision1 from "../../assets/Vision1.png";
import sign from "../../assets/About/Sign.png";

const CollaborativeApproach = () => {
  const images = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image6 },
    { src: image7 },
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
    appendDots: (dots) => (
      <div style={{ marginTop: "30px" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "3px",
          height: "3px",
          borderRadius: "50%",
          backgroundColor: "gray",
          marginTop:"12px"
        }}
      />
    ),
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${vision1})` }}
    >
      <div className="h-auto w-full">
        <div className="bg-[#EDF8FFB2] h-auto w-full">
          <div className="upper nunito-font flex justify-center items-center px-[20px] md:px-0 py-[30px] md:py-0">
            <div className="max-w-[1280px] mt-7 min-h-[170px] flex flex-col justify-center items-center">
              <h2 className="font-semibold text-[14px] flex items-center leading-[28px] text-[#6E6E6E]">
                <div className="min-w-[76px] border-1 h-0 mr-4"></div>
                <div className="text-center">OUR COLLABORATIVE APPROACH</div>
                <div className="min-w-[76px] border-1 h-0 ml-4"></div>
              </h2>
              <div className="text-[36px] mt-3 leading-[50px] text-center font-bold">
                Our approach is modeled around bringing{" "}
                <span className="text-[#8EC641] italic">change at all levels</span>
              </div>
              <div className="pt-2">
                <img
                  className="relative xl:left-112 w-[120px] md:w-full h-[9px] md:mt-[-11px]"
                  loading="lazy"
                  src={sign}
                  alt=""
                />
              </div>
              <div className="text-[#6E6E6E] leading-[26px] mt-5 font-normal">
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
            <div className="slider-container overflow-hidden p-0 m-0 min-h-[240px] pb-8">
              <Slider {...settings}>
                {images.map((img, index) => (
                  <div key={index}  className="max-w-[236px] xl:max-w-[236px] 2xl:max-w-[276px]">
                    <div className="mr-[30px] 2xl:mr-[50px]">
                      <img
                        src={img.src}
                        alt={`Slide ${index + 1}`}
                        style={{ width: "100%", borderRadius: "10px" }}
                        className="md:ml-33 2xl:ml-40 min-h-[239px] object-cover"
                        loading="lazy"
                      />
                    </div>
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
