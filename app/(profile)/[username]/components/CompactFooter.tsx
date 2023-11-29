import Round from "@/app/(landing)/components/round";
import { Icons } from "@/components/icons";
import React from "react";

const CompactFooter = () => {
  return (
    <div className="h-[175px] px-12 flex flex-col items-center border-t-[1px] border-t-stone-300 border-opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-600/25 from-0% to-black to-70%">
      <div className="w-full flex justify-between mx-auto items-center text-center">
        <div className="flex gap-2 items-center py-10">
          <h1 className="flex flex-col font-extrabold text-[rgb(255,84,0)] text-[22px] text-center md:text-center lg:text-left">
            YI
          </h1>
          <div className=" text-slate-300 text-opacity-60 text-sm font-medium font-manrope">
            © 2023 youthicon, org{" "}
          </div>
        </div>
        <div className="w-[171px] justify-center items-center gap-3 inline-flex">
          <a href="https://l.hellofaizan.me/discord">
            <Icons.discord className="w-6 h-6 relative" />
          </a>
          <div className="w-px h-6 bg-neutral-400 bg-opacity-50" />
          <a href="https://twitter.com/imayouthicon">
            <Icons.twitter2 className="w-6 h-6 relative" />
          </a>
          <div className="w-px h-6 bg-neutral-400 bg-opacity-50" />
          <div className="w-6 h-6 p-[3px] justify-center items-center flex">
            <a href="https://github.com/Youth-Icon/xprofile">
              <Icons.linkedin className="w-[18px] h-[18px] relative flex-col justify-start items-start flex" />
            </a>
          </div>
          <div className="w-px h-6 bg-neutral-400 bg-opacity-50" />
          <a href="https://github.com/Youth-Icon/xprofile">
            <Icons.telegram className="w-[18px] h-[18px] relative flex-col justify-start items-start flex" />
          </a>
        </div>
      </div>

      <div className="w-full h-[0px] border-[0.5px] border-stone-300 border-opacity-20"></div>

        <div className="flex flex-col xs:flex-row h-full justify-between w-full xs:items-center">
            <a className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white transition-all duration-200">Home</a>
            <a className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white transition-all duration-200">Showcase</a>
            <a className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white transition-all duration-200">Projects</a>
            <a className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white transition-all duration-200">Documentation</a>
            <a className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white transition-all duration-200">Community</a>
            <a className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white transition-all duration-200">Help Center</a>
        </div>
    </div>
  );
};

export default CompactFooter;
