import React from "react";
import Round from "./round";
import { Icons } from "@/components/icons";

const JoinSection = () => {
  return (
    <div className="w-full pb-[10%] px-4 mt-5 h-[350px] md:h-[500px] lgx:h-[564px] flex justify-center items-center bg-grid-bg bg-center bg-cover">
      <div className="w-full md:w-[600px] relative text-center flex flex-col justify-center items-center md:gap-8">
      <Round className='absolute w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full ' />

        <div className="h-20 lg:flex gap-2">
          <div className="text-[2rem] md:text-[3rem] font-bold font-manrope bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text">
          Join the
          </div>
          <div className="text-white font-medium text-[2rem] md:text-[3rem] font-manrope ">
          Community
          </div>
        </div>
        <div className="w-full mx-4 mt-10 md:w-[636px] text-neutral-400 text-lg md:text-xl font-medium font-manrope">
        Join the conversation in our community groups. Share ideas, thoughts,
    feedback and help us grow this unique network. You&apos;ll find us on the
    usual channels below.
        </div>

<div className=" w-auto xs:w-[80%] md:w-[600px] h-16 flex justify-center items-center gap-5 xs:gap-8 md:gap-12 pt-12">
<a href="https://discord.gg/vUHMxPvege">
  <Icons.discord className="w-[40px] h-[40px] relative"/>
</a>
<a href="https://twitter.com/imayouthicon">
  <Icons.twitter2  className="w-[40px] h-[40px] relative"/>
</a>
<a href="https://github.com/Youth-Icon/xprofile">
  <Icons.gitHub  className="w-[35px] h-[35px] relative  text-white"/>
</a>

</div>
    </div>
     </div>
  );
};

export default JoinSection;