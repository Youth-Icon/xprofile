import React from "react";
import Round from "./round";

const DiscoverProjects = () => {
  return (
    <div className="w-full px-4 mt-5 h-[300px] flex justify-center items-center">
      <div className="w-full md:w-[600px] relative text-center flex flex-col justify-center items-center md:gap-8">
      <Round className='absolute w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full ' />

        <div >
          <div className="text-[2rem] md:text-[3rem] font-bold font-manrope bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text">
          Discover inspiring
          </div>
          <div className="text-white font-medium text-[2rem] md:text-[3rem] font-manrope ">
          projects and creators
          </div>
        </div>
        <div className="w-full mx-4 md:w-[636px] text-neutral-400 text-lg md:text-xl font-medium font-manrope">
          Discover projects and meet the brilliant minds behind them. Get ready
           to be inspired as we unveil a treasure trove of talent and innovation.
        </div>
      </div>
    </div>
  );
};

export default DiscoverProjects;

