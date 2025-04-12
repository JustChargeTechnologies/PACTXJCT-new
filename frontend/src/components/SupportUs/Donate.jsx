import React, { Suspense } from "react";
import "../../../public/styles/slider.css";
import above_bg from "../../assets/SupportUs/Donate_above.webp";
const Payment = React.lazy(() => import("./Payment"));

const Donate = () => {
  return (
    <div>
      <div
        className="relative md:mt-[100px] mt-[72px] text-white flex  justify-center  h-[230px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${above_bg})` }}
      >
        <div className="w-[93%] md:w-[79%] nunito-sans">
          <div className="flex mt-12 justify-center items-center">
            <div className="border-1 border-white w-[50px] md:w-[100px] mr-5 md:mr-11"></div>
            <div className="text-[11px] md:text-[14px]">
              Let’s make a difference
            </div>
            <div className="border-1 border-white w-[50px] md:w-[100px] ml-5 md:ml-11"></div>
          </div>
          <div className="text-center text-[25px] md:text-[52px] mt-6 margarine-regular">
            Your support makes a difference for children
          </div>
        </div>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Payment />
      </Suspense>
    </div>
  );
};

export default Donate;
