import React from "react";
import "../../../public/styles/slider.css";
import Volunteer_bg1 from "../../assets/SupportUs/BG_2.webp";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Volnteer = () => {
  return (
    <div
      className="h-auto relative bg-cover bg-center bg-no-repeat w-full flex flex-col justify-center items-center "
      style={{ backgroundImage: `url(${Volunteer_bg1})` }}
    >
      <div className="text-black w-[85%] md:w-[80%] nunito-font flex flex-col gap-[10px] md:gap-[22px] my-[45px]">
        <div className="flex items-center text-[14px] ">
          <div>Volunteer</div>
          <div className="w-[48px] md:w-[76px] border-1 h-0  ml-4"></div>
        </div>
        <div className="font-[800] text-[24px] md:text-[40px] ">
          Find your inspiration
        </div>
        <div className="flex flex-col gap-4">
          <div className=" text-[14px] md:text-[16px] ">
            🌟 Join PACT Foundation: Be the Change, 🌟
          </div>
          <div className=" text-[14px] md:text-[16px]">
            Are you ready to make a difference? The PACT Foundation invites you
            to be part of our transformative journey, bringing positive change
            to communities through our diverse projects. With your passion and
            dedication, we can create a brighter, empowered future for all.
          </div>
          <div className="text-[14px] md:text-[16px]">
            <div>
              <div>
                🌍 Diverse Opportunities: From education initiatives that
                reshape young minds to sanitation projects that improve lives,
                our range of projects has a place for every skill and interest.
              </div>
              <div>
                🤝 Unite for Impact: Join a dynamic community of changemakers,
                collaborate with like-minded individuals, and work together
                towards a common goal – a better world.
              </div>
              <div>
                📚 Empower through Action: Whether you're a teacher, engineer,
                artist, or simply someone with a big heart, your skills can
                light up lives. Your time and effort can shape the future.
              </div>
              <div>
                🌈 Bring Your Passion: Whether it's mentoring, construction,
                organizing events, or spreading awareness, your unique strengths
                have a place here.
              </div>
            </div>
          </div>
        </div>
        <div className=" text-[14px] md:text-[16px] mt-6">
          <div>🌟 Why Volunteer with PACT Foundation? 🌟</div>
          <div>
            Empowerment: Empower communities with education, improved
            infrastructure, and a better quality of life.
          </div>
          <div>
            Impact: Be part of real, tangible change that leaves a lasting
            impact on lives.
          </div>
          <div>
            Connection: Forge meaningful connections with people who share your
            passion for making a positive difference.
          </div>
          <div>
            Growth: Develop new skills, expand your horizons, and grow as an
            individual while contributing to a meaningful cause.
          </div>
        </div>
        <div className=" text-[14px] md:text-[16px]">
          Ready to create ripples of change? Join us at PACT Foundation and be a
          driving force for transformation. Your time, energy, and enthusiasm
          can help us rewrite the future, one project at a time.
        </div>
        <div className=" text-[14px] md:text-[16px]">
          📢 Take Action Now! Contact mission@pactfoundation.org or call +91
          9988813222 and become a volunteer today. Together, let's shape a world
          we can all be proud of. 📢
        </div>
        <Link to={`/volunteer`} className="flex items-center text-[20px] italic font-bold gap-2 text-blue-800 rounded-md  mt-4 cursor-pointer">
          <div>Learn More</div>
          <FaArrowRight className="w-[20px] h-[15px]"/>
        </Link>
      </div>
    </div>
  );
};

export default Volnteer;
