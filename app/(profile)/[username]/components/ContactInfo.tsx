"use client"
import React, { CSSProperties } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import {
  Star,
  ExternalLink,
  Plus,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  X,
} from "lucide-react";
import { Icons } from "@/components/icons";
import Image from "next/image";
import ProfileLink from "./ProfileLink";

const ContactInfo = () => {

  return (
    <FeatureBox
      height="450px"
      width="350px"
      paddingX="20px"
      paddingY="24px"
      style={{
        background:
          "linear-gradient(to top, rgba(233, 30, 99, 0.1),rgba(70, 6, 6, 0.1))",
          display:"flex",
          flexDirection:"column",
          gap:"20px"
          
      }}
    >
      <div className="flex flex-col gap-5">
        <div className="text-white text-lg font-semibold font-manrope ">
          Reach me At
        </div>
        <div className="w-full flex justify-between">
          <Github size={30} />
          <Linkedin />
          <Twitter />
          <Youtube />
          <X />
          <Instagram />
        </div>
      </div>

      <div className="w-[348px] h-[72px] bg-gradient-to-b from-[#221116] to-orange-950 "> </div>

      <div className="flex flex-col gap-5">
        <div className="text-white text-lg font-semibold font-manrope">
          Other links
        </div>
           <div
        className="flex flex-col gap-2 overflow-y-scroll max-h-[255px] relative"
      >
          <ProfileLink />
          <ProfileLink />
          <ProfileLink />
          <ProfileLink />
          <ProfileLink />
          <ProfileLink />
          <ProfileLink />
          <ProfileLink />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-orange-500/[.2] rounded-br-[23px] rounded-bl-[23px]"></div>
        
      </div>
    </FeatureBox>
  );
};

export default ContactInfo;
