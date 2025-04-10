import React from "react";
import Help_bg from "../../assets/Help.webp";
import '../../../public/styles/slider.css'
import HelpForm from "../HelpForm";

const HelpDetail = () => {
  return (
    <div
      className="h-auto relative bg-cover bg-center bg-no-repeat w-full flex justify-center items-center"
      style={{ backgroundImage: `url(${Help_bg})` }}
    >
      <div className="text-white w-[85%] md:w-[80%] nunito-font flex flex-col gap-[10px] md:gap-[22px] my-[45px]">
        <div className="flex items-center text-[14px] text-[#E3F5FF]">
          <div>GET HELP</div>
          <div className="w-[48px] md:w-[76px] border-1 h-0  ml-4"></div>
        </div>
        <div className="font-[800] text-[24px] md:text-[40px] ">Get Help</div>
        <div className="text-[#FFF3E4] text-[14px] md:text-[16px] ">🌟 Reach Out: Your Support Network Awaits 🌟</div>
        <div className="text-[#FFF3E4] text-[14px] md:text-[16px]">Times can get tough, but remember – you're never alone on this journey. If you're in need of assistance, a helping hand is just a call or message away. We're here to listen, to understand, and to support you every step of the way.</div>
        <div className="text-[#FFF3E4] text-[14px] md:text-[16px]">
          <div>🌍 You Matter: Your well-being matters to us. We're dedicated to helping you overcome challenges and find a way forward.</div>
          <div>🤝 Connect with Care: Reach out to us – your needs, concerns, and dreams matter. We're here to work together and find solutions.</div>
          <div>🙏 Compassionate Support: Our team is ready to listen without judgment, offer guidance, and provide the help you need to navigate tough times.</div>
        </div>
        <div className="text-[#FFF3E4] text-[14px] md:text-[16px]">
          <div>🌈 Why Seek Help? 🌈</div>
          <div>Strength in Unity: Asking for help is a sign of courage, and by reaching out, you're joining a community that cares.</div>
          <div>Empowerment: By seeking assistance, you take control of your situation and work towards a brighter future.</div>
          <div>Confidentiality: Your privacy is of utmost importance to us. Your conversations with us are kept confidential.</div>
          <div>Hope and Healing: Together, we can explore options, find solutions, and bring hope back into your life.</div>
        </div>
        <div className="text-[#FFF3E4] text-[14px] md:text-[16px]">Remember, you don't have to face challenges alone. You have a team of caring individuals ready to stand by you, to listen, and to offer a helping hand. We're here to help you navigate through difficulties and find your path to a better tomorrow.</div>
        <div><HelpForm role="Help"/></div>
      </div>
    </div>
  );
};

export default HelpDetail;
