import React, { CSSProperties } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import { Star, ExternalLink, Plus, ArrowUpRight } from "lucide-react";
import { Icons } from "@/components/icons";
import Image from "next/image";
import Round from "@/app/(landing)/components/round";



const Discover = () => {


  return (
    <div className=" w-full mt-14 pb-5">
        <Round className="hidden xs:block absolute right-[9rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full " />
        <Round className="hidden xs:block absolute -left-[4rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full " />

        <div className=" h-[0px] border border-stone-300 border-opacity-20"></div>

        <div className=" w-full bg-grid-bg bg-center bg-cover flex flex-col items-center">
          <div className=" mt-8 mb-8 flex flex-col sm:flex-row gap-2 items center justify-center">
            <div className="flex gap-2">
            <div className="text-white font-medium text-[28px]">Discover</div>
            <div className="text-[28px] font-bold font-manrope bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text">
              Developers
            </div>
            </div>

            <div className="text-white font-medium text-[28px] ">
              with Shared Interests
            </div>

          </div>
          {/*  height="362px" width="426px"> */}
          <div className="flex flex-col md:flex-row gap-5 ">
            <div className="hidden px-3 w-[300px] h-[200px] lgx:block xs:h-[362px] xs:w-[426px]">
            <FeatureBox height="100%" width="100%"></FeatureBox>
            </div>
            <div className="px-3 w-[300px] h-[200px] xs:h-[362px] xs:w-[426px]">
            <FeatureBox height="100%" width="100%"></FeatureBox>
            </div>
            <div className="px-3  w-[300px] h-[200px] xs:h-[362px] xs:w-[426px]">
            <FeatureBox height="100%" width="100%"></FeatureBox>
            </div>
          </div>

          <div className="w-[145px] h-[50px] mt-[4.75rem] px-5 py-4 bg-neutral-100 bg-opacity-75 rounded-lg backdrop-blur-[32px] justify-center items-center gap-1.5 inline-flex cursor-pointer hover:bg-white transition-all duration-300">
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
