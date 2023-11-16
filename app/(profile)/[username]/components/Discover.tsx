import React, { CSSProperties } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import { Star, ExternalLink, Plus, ArrowUpRight } from "lucide-react";
import { Icons } from "@/components/icons";
import Image from "next/image";
import Round from "@/app/(landing)/components/round";



const Discover = () => {


  return (
    <div className=" w-full mt-14 pb-5">
        <Round className="absolute right-[9rem] w-[400px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full " />
        <Round className="absolute -left-[4rem] w-[400px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full " />

        <div className=" h-[0px] border border-stone-300 border-opacity-20"></div>

        <div className="h-[655px] w-full bg-grid-bg bg-center bg-cover flex flex-col items-center">
          <div className="h-20 mt-8 flex gap-2 items center justify-center">
            <div className="text-white font-medium text-[28px]">Discover</div>
            <div className="text-[28px] font-bold font-manrope bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text">
              Developers
            </div>
            <div className="text-white font-medium text-[28px] ">
              with Shared Interests
            </div>
          </div>

          <div className="flex gap-5">
            <FeatureBox height="362px" width="426px"></FeatureBox>
            <FeatureBox height="362px" width="426px"></FeatureBox>
            <FeatureBox height="362px" width="426px"></FeatureBox>
          </div>

          <div className="w-[145px] h-[50px] mt-[4.75rem] px-5 py-4 bg-neutral-100 bg-opacity-75 rounded-lg backdrop-blur-[32px] justify-center items-center gap-1.5 inline-flex">
            <div className="text-center text-red-950 text-m font-semibold font-manrope leading-none">
              See more
            </div>
            <ArrowUpRight color="#450a0a"/>
          </div>


        </div>
      </div>

  );
};


export default Discover;
