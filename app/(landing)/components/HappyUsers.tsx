import React from "react";
import Round from "./round";

const HappyUsers = () => {
  return (
    <div className="w-full h-[300px] flex justify-center items-center">
    <div className="w-[600px] h-80 relative text-center flex flex-col justify-center items-center">
    <Round className='absolute w-[400px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full ' />
    <div className="h-20 flex gap-2">
      <div className="text-white font-medium text-5xl ">
        Join our
      </div>
      <div className="text-5xl font-bold font-manrope bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text">
        Happy Users
      </div>
    </div>

<div className="w-[636px] text-neutral-400 text-lg font-medium font-manrope">
Don’t take it from us – here’s what our users have to say about xProfile.
</div>
</div>
</div>
  );
};

export default HappyUsers;