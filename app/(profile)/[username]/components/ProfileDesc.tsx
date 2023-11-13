import React, { CSSProperties } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import { Star, ExternalLink, Plus } from "lucide-react";
import { Icons } from "@/components/icons";
import Image from "next/image";

interface ProjectProps {
  style?: CSSProperties;
}

const ProfileDesc: React.FC<ProjectProps> = ({ style }) => {


  return (
      <FeatureBox
        height="160px"
        width="350px"
        paddingY="24px"
        paddingX="20px"
        style={{
        marginBottom:"32px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(to left, rgba(70, 6, 6, 0.1), rgba(233, 30, 99, 0.1))",
        }}
      >
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
