import React from "react";
import Round from "./round";

const PowerfulFeatures = () => {
  return (
    <div className="w-full mt-5 h-[300px] flex justify-center items-center">
      <div className="w-[600px] relative text-center flex flex-col justify-center items-center selection:gap-8">
        <Round className='absolute w-[400px] ml-[37.25rem] mt-[-25rem] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full z-10' />

        <div className="pb-8">
        <div className=" text-[3rem] font-bold font-manrope bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text">
            Powerful features
            </div>
          <div className=" text-white font-medium text-[3rem] font-manrope ">
            for developers like you
          </div>
          
        </div>
        <div className="w-[636px] text-neutral-400 text-lg font-medium font-manrope">
        xProfile is more than just a link to your bio. We`ve built a comprehensive range of powerful features that elevate your professional profile.
        </div>
      </div>
    </div>
  );
};

export default PowerfulFeatures;
