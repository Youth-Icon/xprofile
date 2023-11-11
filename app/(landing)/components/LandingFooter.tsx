import React from "react";

import { Github, X, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const LandingFooter = () => {
  return (
    <div className="w-full h-[480px] relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-600/25 from-0% to-black to-70%">
      <div className="w-full" />
      <div className="w-[302px] h-[187px] left-[120px] top-[100px] absolute">
        <div className="flex items-start gap-2 text-center md:text-center lg:text-left">
          <h1 className="flex flex-col font-extrabold text-[#ff5400] text-[22px] text-center md:text-center lg:text-left">
            YI
          </h1>
          <p className="flex flex-col font-medium text-white text-[22px] text-center md:text-center lg:text-left">
            Youth Icon
          </p>
        </div>

        <div className="w-[171px] h-6 left-0 top-[163px] absolute justify-center items-center gap-3 inline-flex">
          <Github className="w-6 h-6 relative" />
          <div className="w-px h-6 bg-neutral-400 bg-opacity-50" />
          <X className="w-6 h-6 relative" />
          <div className="w-px h-6 bg-neutral-400 bg-opacity-50" />
          <div className="w-6 h-6 p-[3px] justify-center items-center flex">
            <Youtube className="w-[18px] h-[18px] relative flex-col justify-start items-start flex" />
          </div>
          <div className="w-px h-6 bg-neutral-400 bg-opacity-50" />
          <Linkedin className="w-6 h-6 relative"/>
          
        </div>
        <div className="w-[302px] left-0 top-[59px] absolute text-slate-300 text-opacity-60 text-base font-medium font-Manrope">
          Giving developers the power to connect with inspiring developers by
          sharing their projects and skills.
        </div>
      </div>
      <div className="h-[221px] left-[516px] top-[100px] absolute justify-start items-start gap-[68px] inline-flex">
        <div className="pr-[37px] flex-col justify-center items-start gap-6 inline-flex">
          <div className="text-white text-base font-semibold font-Manrope">
            Features
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
              Showcase
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
              Social Links
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
              Personalization
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
              Profile Themes
            </div>
            <div className="w-[113px] text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
              API
            </div>
          </div>
        </div>
        <div className="pr-[68px] pb-[39px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-white text-base font-semibold font-Manrope">
            Resources
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
              Showcases
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
              GitHub
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
              Community
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
              Help Center
            </div>
          </div>
        </div>
        <div className="pr-px pb-[39px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-white text-base font-semibold font-Manrope">
            About Youth Icon
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
              xProfile + Youth Icon
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
              Open-source Software
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
              GitHub
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
              Twitter
            </div>
          </div>
        </div>
        <div className="w-[150px] pr-[102px] pb-[117px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-white text-base font-semibold font-Manrope">
            Legal
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
              Privacy
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
              Terms
            </div>
          </div>
        </div>
      </div>
      <div className="w-[calc(100%-240px)] h-[0px] left-[120px] top-[389px] absolute border border-stone-300 border-opacity-20"></div>
      <div className="left-[122px] top-[417px] absolute text-slate-300 text-opacity-60 text-sm font-medium font-Manrope">
        © 2023 youthicon, org{" "}
      </div>
    </div>
  );
};

export default LandingFooter;
