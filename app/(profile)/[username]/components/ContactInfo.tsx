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
import Round from "@/app/(landing)/components/round";



const ContactInfo =  () => {


  return (
    <FeatureBox
      height="auto"
      width="auto"
      paddingX="20px"
      paddingY="24px"
      background="bg-gradient-to-l from-orange-500/10 to-pink-500/10 xs:bg-none"
      style={{
        overflow:"hidden",
          display:"flex",
          flexDirection:"column",
          gap:"20px"
          
      }}
    >

<Round className="hidden xs:block absolute -left-[6rem] -top-[4rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[150px] rounded-full " />
      
      
      <div className="flex flex-col gap-5 ">
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


 
      <div
        className="flex flex-col gap-5 overflow-y-scroll"
        
      >
        <div className="text-white text-lg font-semibold font-manrope">
          Other links
        </div>
        <div
          className="flex flex-col gap-2 xs:overflow-auto max-h-[268px] "
        >
          <ProfileLink/>
          <ProfileLink/>
          <ProfileLink/> 
          <ProfileLink/>
          <ProfileLink/>
          <ProfileLink/> 
          <ProfileLink/>
          <ProfileLink/>
          <ProfileLink/> 
          
          

        </div>
        <div className="hidden xs:block absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-orange-500/[.2] rounded-br-[23px] rounded-bl-[23px]"></div>
      </div>
    </FeatureBox>
  );
};

export default ContactInfo;