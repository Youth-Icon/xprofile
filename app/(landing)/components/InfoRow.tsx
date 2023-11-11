import React from "react";
import FeatureBox from "./FeatureBox";
import {GitFork, Github, Heart} from "lucide-react"


const InfoRow = () => {
  return (
    <div className="w-full pt-8 flex items-center">
      <div className="flex justify-between mx-auto w-[1200px] h-[188px] gap-3 items-center top-[12px]">
        <FeatureBox height="188px" width="380px" paddingX="24px" paddingY="28px">
          <div className="grow shrink basis-0 self-stretch relative">
            <div className="w-[332px] left-0 top-[66px] absolute text-slate-300 text-opacity-60 text-base font-medium font-manrope">
              Show your support by giving us a star on GitHub. Your appreciation
              drives our dedication to open-source excellence.
            </div>
            <div className="w-[332px] h-[42px] left-0 top-0 absolute justify-start items-center gap-4 inline-flex">
              <div className="w-[42px] h-[42px] p-[9px] bg-orange-600 bg-opacity-10 rounded-[46px] border border-stone-300 border-opacity-5 justify-center items-center flex">
               
                <Github/>
              </div>
              <div className="w-60 text-slate-300 text-[18px] font-weight-600 font-manrope">
                Star us on GitHub
              </div>
            </div>
          </div>
        </FeatureBox>

        <FeatureBox height="188px" width="380px" paddingX="24px" paddingY="28px">
          <div className="grow shrink basis-0 self-stretch relative">
            <div className="w-[332px] left-0 top-[66px] absolute text-slate-300 text-opacity-60 text-base font-medium font-manrope">
            Fork the project on GitHub to create your unique version. Customize it to suit your unique needs and preferences.
            </div>
            <div className="w-[332px] h-[42px] left-0 top-0 absolute justify-start items-center gap-4 inline-flex">
              <div className="w-[42px] h-[42px] p-[9px] bg-orange-600 bg-opacity-10 rounded-[46px] border border-stone-300 border-opacity-5 justify-center items-center flex">
                <GitFork/>
              </div>
              <div className="w-60 text-slate-300 text-[18px] font-weight-600 font-manrope">
              Make it your Own
              </div>
            </div>
          </div>
        </FeatureBox>
        <FeatureBox height="188px" width="380px" paddingX="24px" paddingY="28px">
          <div className="grow shrink basis-0 self-stretch relative">
            <div className="w-[332px] left-0 top-[66px] absolute text-slate-300 text-opacity-60 text-base font-medium font-manrope">
            Consider sponsoring our project to support its growth and sustainability. Help us continue our open-source journey.
            </div>
            <div className="w-[332px] h-[42px] left-0 top-0 absolute justify-start items-center gap-4 inline-flex">
              <div className="w-[42px] h-[42px] p-[9px] bg-orange-600 bg-opacity-10 rounded-[46px] border border-stone-300 border-opacity-5 justify-center items-center flex">
                <Heart/>
              </div>
              <div className="w-60 text-slate-300 text-[18px] font-weight-600 font-manrope">
              Sponsor this Project
              </div>
            </div>
          </div>
        </FeatureBox>
      </div>
    </div>
  );
};

export default InfoRow;
