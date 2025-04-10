import React from "react";
import vision1 from "../../assets/Vision1.png";
import About_bg from "../../assets/About/About_bg.png";
import linkdin from "../../assets/About/Linkdin.png";
import twitter from "../../assets/About/Twitter.png";
import founderPic from "../../assets/About/FounderPic.png";
import "../../../public/styles/slider.css";

const FounderProfile = () => {
  return (
    <div id="founder"
      className="h-auto min-h-[975px]    bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${vision1})` }}
    >
      <div className="bg-[#e8f6fdb2]  min-h-[1700px]  md:min-h-[999px] flex justify-center items-center  w-full">
        <div
          className="min-h-[856px]  rounded-2xl w-[90%] md:w-[79%]"
          style={{ backgroundImage: `url(${About_bg})` }}
        >
          <div className="flex py-6 px-4  gap-[25px] flex-col md:flex-row md:my-[43px] md:mx-[60px] nunito-font justify-center ">
            <div className="block  md:hidden">
              <div className="text-white flex items-center">
                <div className="text-[14px] md:text-[20px] font-[600]  leading-[28px] ">
                  FOUNDER
                </div>
                <div className="border-[0.7px] ml-3 w-[40px] md:w-[59.26px] h-0"></div>
              </div>
              <div className="text-[25px] md:text-[40px]  font-[800] text-white leading-[50px]">
                Dr Ashwin Fernandes
              </div>
            </div>
            <div className="left order-2 md:order-1 w-full flex flex-col gap-[18px] md:gap-[24px]  max-w-[716px]">
              <div className="hidden md:flex md:flex-col">
                <div className="text-white flex items-center">
                  <div className="text-[20px] font-[600]  leading-[28px] ">
                    FOUNDER
                  </div>
                  <div className="border-[0.7px] ml-3 w-[40px] md:w-[59.26px] h-0"></div>
                </div>
                <div className="text-[40px] font-[800] text-white md:mt-[18px] leading-[50px]">
                  Dr Ashwin Fernandes
                </div>
              </div>
              <div className=" text-[15px] md:text-[18px] leading-[26px] font-[400] flex flex-col gap-[12px]">
                <div>
                  Dr Ashwin Jerome Fernandes is shaping education in India in a
                  unique and powerful way. He goes beyond the usual role of a
                  change-maker, embodying both visionary education and dedicated
                  philanthropy.
                </div>
                <div>
                  As Regional Director for UK-based education group – QS
                  Quacquarelli Symonds for Africa, Middle East, and South Asia,
                  Ashwin Fernandes leads a transformation that's anything but
                  ordinary. His influence reaches beyond education, diving deep
                  into excellence and innovation, creating a legacy that extends
                  far beyond classrooms.
                </div>
                <div>
                  As a philanthropist, Ashwin Fernandes creates a space where
                  education opens doors to a brighter future. He brings together
                  students' dreams, governments' goals, and academics' pursuits,
                  forming a mosaic of learning that echoes globally.
                </div>
                <div>
                  His most impactful work lies within the pages of "India’s
                  Knowledge Supremacy: The New Dawn," a book that explores
                  India's educational journey. Unveiled by Shri Dharmendra
                  Pradhan, Hon’ble Union Minister of Education for India, this
                  book marks a significant moment in the education discussion.
                </div>
                <div>
                  In academic circles, Ashwin Fernandes shines as a leading
                  voice. His insights on university rankings, education, and
                  higher learning echo through important conferences and events.
                  A respected panelist, he sparks conversations that challenge
                  norms, shaping the future of education.
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ashwinfern/"
                  target="blank"
                  className="h-[44px] w-[44px] bg-white rounded-full flex justify-center items-center"
                >
                  <img
                    className="w-[24px] h-[24.5px]"
                    src={linkdin}
                    alt="linkdin"
                  />
                </a>
                <a
                  href="https://twitter.com/ashwinjf"
                  target="blank"
                  className="h-[44px] w-[44px] bg-white rounded-full flex justify-center items-center"
                >
                  <img
                    className="w-[24px] h-[24.5px]"
                    src={twitter}
                    alt="twitter"
                  />
                </a>
              </div>
              <a
                className="text-white bg-black py-[16px] w-[190px] whitespace-nowrap px-[32px]"
                target="blank"
                href="https://pactfoundation.org/wp-content/uploads/2023/10/f79554_d6ff9e5fbebe45fdb37d1ae24c5f09c0.pdf"
              >
                Download Profile
              </a>
            </div>
            <div className="right order-1 md:order-2   w-full max-w-[348px]">
              <div className=" flex items-center justify-center md:pl-[40px] ">
                <img
                  className="w-[323px] grayscale-[80%] h-[340px] md:h-[680px] md:min-w-[338px] object-cover object-[center_7%] aspect-[3/4] bg-no-repeat rounded-xl"
                  src={founderPic}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderProfile;
