import React, { CSSProperties, ReactNode } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import { Star, ExternalLink, Plus } from "lucide-react";
import { Icons } from "@/components/icons";

interface ProjectProps {
  displayType: "blank" | "project" | "add";
  style?: CSSProperties;
  children?: ReactNode;
  
}

const Project: React.FC<ProjectProps> = ({ displayType, style, children }) => {
  let content;

  switch (displayType) {
    case "blank":
      content = <FeatureBox width="auto" height="auto">{children}</FeatureBox>;
      break;
    case "project":
      content = (
        <FeatureBox
          width="auto"
          height="auto"
          paddingY="20px"
          paddingX="20px"
        >
          {children}
          
          <div className="font-manrope pb-[20px]">Foody App</div>
          <div className="font-manrope pb-[32px]">
            Designed and develop a Food ordering website, with a responsive
            web-app. It’ll allow users to order food online. It’ll allow users
            to order food online.
          </div>
          <div className="flex pb-[32px] justify-between items-center w-full">
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 bg-amber-300 rounded-full" />
              <div className="text-neutral-100 text-opacity-75 text-sm font-medium font-manrope">
                JavaScript
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star size={18}></Star>
              <div>3</div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className=" h-10 px-4 py-3 bg-neutral-100 bg-opacity-75 rounded-lg backdrop-blur-[32px] justify-center items-center gap-1.5 inline-flex cursor-pointer hover:bg-opacity-100 transition-all duration-300">
              <ExternalLink color="rgb(38 38 38)"></ExternalLink>
              <div className="text-center text-neutral-800 text-base font-semibold font-manrope leading-none">
                Live demo
              </div>
            </div>
            <div className=" h-10 px-4 py-3  bg-opacity-75 rounded-lg backdrop-blur-[32px] justify-center items-center gap-1.5 inline-flex cursor-pointer hover:bg-neutral-400 hover:bg-opacity-10 transition-all duration-300">
              <Icons.gitHub className="h-[20px] w-[20px]"></Icons.gitHub>
              <div className="text-center text-neutral-100 text-opacity-75 text-base font-semibold font-manrope leading-none">
                Source code
              </div>
            </div>
          </div>
          
        </FeatureBox>
      );
      break;
    case "add":
      content = (
        <FeatureBox
          width="auto"
          height="auto"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Plus size={50} />
          {/* Overlay for hover effect */}
          <div
            className="absolute inset-0 bg-black opacity-0 hover:opacity-20 hover:bg-neutral-400 cursor-pointer transition-opacity duration-300"
            style={{ borderRadius: "inherit" }}
          ></div>
          <div className="text-center text-slate-300 text-opacity-60 text-2xl font-semibold font-manrope leading-none pt-4">
            Add a Project
          </div>
          {children}
        </FeatureBox>
      );
      break;
    default:
      // Default to blank if the displayType is not recognized
      content = <FeatureBox width="auto" height="auto">{children}</FeatureBox>;
  }

  return <div style={style}>{content}</div>;
};

export default Project;
