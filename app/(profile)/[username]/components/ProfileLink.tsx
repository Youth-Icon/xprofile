import React, { CSSProperties } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import { Star, ExternalLink, Plus, Github,Linkedin,Twitter,Instagram,Youtube,X } from "lucide-react";
import { Icons } from "@/components/icons";
import Image from "next/image";


const ProfileLink = () => {


  return (
    <div>
        <div className="w-[310px] h-14 px-3 py-2 bg-white bg-opacity-5 rounded-xl justify-start items-center gap-2.5 inline-flex">
  <ExternalLink/>
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
    <div className="self-stretch text-white text-base font-semibold font-manrope">Personal Website</div>
    <div className="self-stretch text-slate-300 text-opacity-60 text-xs font-medium font-['Manrope']">https://hello.faizan.me</div>
  </div>
  <div className="w-8 h-8 p-1.5 justify-center items-center flex">
    <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
  </div>
</div>


    </div>

  );
};

export default ProfileLink;
