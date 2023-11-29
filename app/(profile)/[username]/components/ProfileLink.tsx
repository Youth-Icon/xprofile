import React, { CSSProperties } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import { Star, ExternalLink, Plus, Github,Linkedin,Twitter,Instagram,Youtube,X } from "lucide-react";
import { Icons } from "@/components/icons";
import Image from "next/image";




const ProfileLink = () => {


  return (
    <div>
        <div className="w-full h-14 px-3 py-2 bg-white bg-opacity-5 rounded-xl justify-start items-center gap-2.5 inline-flex cursor-pointer hover:bg-neutral-400 hover:bg-opacity-20 transition-all duration-300">
<Image width={30} height={30} src="https://icons.duckduckgo.com/ip3/hellofaizan.me.ico" alt={"favicon"} />
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
    <div className="self-stretch text-white font-semibold font-manrope whitespace-nowrap">Personal Website</div>
    <div className="self-stretch text-slate-300 text-opacity-60 text-xs font-medium font-manrope">https://hello.faizan.me</div>
  </div>
  
  <ExternalLink/>
</div>


    </div>

  );
};

export default ProfileLink;
