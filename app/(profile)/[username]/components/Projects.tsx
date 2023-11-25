import React, { CSSProperties } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import { Bell, Upload } from "lucide-react";
import Image from 'next/image';
import Project from "./Project";
import Round from "@/app/(landing)/components/round";


const Projects = () => {
  

  return (
    <div className="">
      <div className="flex ">

      <Project displayType="project" style={{overflow:"hidden", borderRadius:"24px", marginRight:"32px"}}>
      <Round className="absolute left-[-6rem] top-[-9rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full " />
      </Project>
      <Project displayType="project" style={{ overflow:"hidden", borderRadius:"24px"}}>
        <Round className="absolute left-[8rem] top-[1rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[150px] rounded-full " />
        </Project>


      </div>
      <div className="flex  my-[32px]">
      <Project displayType="add" style={{background: "linear-gradient(to right, rgba(70, 6, 6, 0.1), rgba(233, 30, 99, 0.1))", borderRadius:"30px", marginRight:"32px"}}></Project>
      <Project displayType="blank"></Project>
      </div>
    </div>
  );
};

export default Projects;


