import React from "react";
import Round from "./round";

const Proudly = () => {
  return (
    <div className="w-full px-4 mt-5 mb-5 flex justify-center items-center">
      <div className="w-full md:w-[600px] relative text-center flex flex-col justify-center items-center md:gap-8">
      <Round className='absolute w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full ' />

        <div className="h-20 flex gap-2" >
          <div className="text-[2rem] md:text-[3rem] font-bold font-manrope bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text">
          Proudly
          </div>
          <div className="text-white font-medium text-[2rem] md:text-[3rem] font-manrope ">
          open source
          </div>
        </div>
        <div className="w-full mx-4 md:w-[636px] text-neutral-400 text-lg md:text-xl font-medium font-manrope">
        Our source code is available on GitHub - feel free to read, review, or contribute to it however you want!
        </div>
      </div>
    </div>
  );
};

export default Proudly;

