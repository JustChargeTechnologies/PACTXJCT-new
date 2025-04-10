import React from "react";
import Vision1 from "../../assets/Vision1.png";
import "../../../public/styles/slider.css";

const Heading = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Vision1})` }}
      className="md:mt-[99px] mt-[74px] h-auto  relative bg-cover bg-center bg-no-repeat w-full "
    >
      <div className="flex justify-center items-center bg-white/50">
        <div className="w-[80%] text-[14px] flex flex-col justify-center nunito-font items-center gap-[20px] my-[38px] md:my-[75px]">
          <div className="flex items-center text-[12px] md:text-[16px] text-[#6E6E6E] ">
            <div className="w-[48px] md:w-[76px] border-1 h-0  mr-4"></div>
            <div>OUR VOLUNTEERS</div>
            <div className="w-[48px] md:w-[76px] border-1 h-0  ml-4"></div>
          </div>
          <div className="font-[800] text-[24px] md:text-[56px]">
          Our volunteers are our <span className=" text-[#8EC641]">heroes</span> 
          </div>
          <div className="flex flex-col gap-4">
            <div className=" text-[14px] md:text-[16px] ">
              🌟 Join PACT Foundation: Be the Change, 🌟
            </div>
            <div className=" text-[14px] md:text-[16px]">
              Are you ready to make a difference? The PACT Foundation invites
              you to be part of our transformative journey, bringing positive
              change to communities through our diverse projects. With your
              passion and dedication, we can create a brighter, empowered future
              for all.
            </div>
            <div className="text-[14px] md:text-[16px]">
              <div>
                <div>
                  🌍 Diverse Opportunities: From education initiatives that
                  reshape young minds to sanitation projects that improve lives,
                  our range of projects has a place for every skill and
                  interest.
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
                  organizing events, or spreading awareness, your unique
                  strengths have a place here.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
