import React, { CSSProperties } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import { Star, ExternalLink, Plus } from "lucide-react";
import { Icons } from "@/components/icons";
import Image from "next/image";
import Round from "@/app/(landing)/components/round";

interface ProjectProps {
  style?: CSSProperties;
}

const ProfileDesc: React.FC<ProjectProps> = ({ style }) => {


  return (
      <FeatureBox
        height="auto"
        width="auto"
        paddingY="24px"
        paddingX="20px"
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          overflow:"hidden"
        }}
      >
        <Round className="absolute -left-[7rem] -top-[7rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[150px] rounded-full " />
        <div className=" w-full pb-2 text-white text-lg font-semibold font-manrope">
          Full Stack Developer
        </div>
        <div className=" w-full text-slate-300 text-opacity-60 text-base font-medium font-manrope">
          Full-Time Open-Sourcerer. Focuses on Swift & JavaScript. Makes macOS
          apps, CLI tools, npm packages.
        </div>
      </FeatureBox>

  );
};

export default ProfileDesc;
