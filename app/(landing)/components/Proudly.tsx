import React from "react";
import Round from "./round";

const Proudly = () => {
  return (
    <div className="w-full h-[380px] flex justify-center items-center">
    <div className="w-[600px] h-80 relative text-center flex flex-col justify-center items-center">
    <Round className='absolute w-[400px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full ' />
    <div className="h-20 flex gap-2">
      <div className="text-white font-medium text-5xl ">
        Proudly
      </div>
      <div className="text-5xl font-bold font-Manrope bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text">
        Open-source
      </div>
    </div>

<div className="w-[636px] text-neutral-400 text-lg font-medium font-Manrope">
Our source code is available on GitHub - feel free to read, review, or contribute to it however you want!
</div>
</div>
</div>
  );
};

export default Proudly;