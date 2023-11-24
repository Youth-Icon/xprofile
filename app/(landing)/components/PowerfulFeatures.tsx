import React from "react";
import Round from "./round";

const PowerfulFeatures = () => {
  return (
    <div className="w-full px-4 mt-5 h-[300px] flex justify-center items-center">
      <div className="w-full md:w-[600px] relative text-center flex flex-col justify-center items-center md:gap-8">
        <Round className='hidden md:block absolute w-[400px] ml-[37.25rem] mt-[-25rem] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full z-10' />

        <div className="pb-8">
          <div className="text-[2rem] md:text-[3rem] font-bold font-manrope bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text">
            Powerful features
          </div>
          <div className="text-white font-medium text-[2rem] md:text-[3rem] font-manrope ">
            for developers like you
          </div>
        </div>
        <div className="w-full mx-4 md:w-[636px] text-neutral-400 text-lg md:text-xl font-medium font-manrope">
          xProfile is more than just a link to your bio. We&apos;ve built a comprehensive range of powerful features that elevate your professional profile.
        </div>
      </div>
    </div>
  );
};

export default PowerfulFeatures;
