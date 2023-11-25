import React, { CSSProperties } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import { Star, ExternalLink, Plus } from "lucide-react";
import { Icons } from "@/components/icons";
import Image from "next/image";
import Round from "@/app/(landing)/components/round";

interface ProjectProps {
  style?: CSSProperties;
}

const ProfileInfo: React.FC<ProjectProps> = ({ style }) => {


  return (
      <FeatureBox
        height="462px"
        width="350px"
        paddingX="24px"
        paddingY="24px"
        style={{ 
        marginBottom:"32px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        overflow:"hidden"
        // background:
        //   "linear-gradient(to left, rgba(70, 6, 6, 0.1), rgba(233, 30, 99, 0.1))",
      }}
      >
        <Round className="absolute -left-[7rem] top-[8rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[150px] rounded-full " />
        <div className="mb-[2.25rem]">
        <Image src="/tyler-pic.jpeg" alt="default profile picture"  width={160} height={160} style={{borderRadius:"100px", border:"1px"}}/>
        {/* TODO get emoji from server */}
        <FeatureBox width="34px" height="34px" style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"22px",marginTop:"-45px", marginLeft:"auto" }}>👌</FeatureBox>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className="mb-[30px]">
            <div className="text-center text-white text-2xl font-semibold font-manrope ">John Doe</div>
                <div className="w-36 text-center text-slate-300 text-opacity-60 text-base font-light font-manrope flex gap-1">
                <div>@johndoe</div>
                <div>·</div>
                <div>he/him</div>
            </div>
            </div>

            <div className="flex gap-[32px] mb-[30px]">
                <div className="flex flex-col gap-4 w-[132px] justify-center text-center">
                    <div className="text-center text-neutral-100 text-lg font-semibold font-manrope">12</div>
                    <div className="text-center text-slate-300 text-opacity-60 text-base font-normal font-manrope">Followers</div>
                </div>

                <div className="flex flex-col gap-4 w-[132px] justify-center text-center">
                <div className="text-center text-neutral-100 text-lg font-semibold font-manrope">32</div>
                <div className="text-center text-slate-300 text-opacity-60 text-base font-normal font-manrope">Following</div>
                </div>
            </div>
            <div className="flex justify-between gap-[16px]">
            <div className="w-[143px] h-9 px-4 py-3 bg-neutral-100 bg-opacity-75 rounded-lg backdrop-blur-[32px] justify-center items-center gap-1.5 inline-flex cursor-pointer hover:bg-opacity-100 transition-all duration-300">
            
              <div className="text-center text-neutral-800 text-base font-semibold font-manrope leading-none">
                Follow
              </div>
            </div>
            <div className="w-[143px] h-9 px-4 py-3 bg-white bg-opacity-5 rounded-lg backdrop-blur-[32px] justify-center items-center gap-1.5 inline-flex cursor-pointer hover:bg-neutral-400 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-center text-neutral-100 text-opacity-75 text-base font-semibold font-manrope leading-none">
                Message
              </div>
            </div>
          </div>
        </div>

      </FeatureBox>
  );
};


export default ProfileInfo;
