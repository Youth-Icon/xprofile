import React from "react";
import Link from "next/link";
import NavDropDown from "@/app/(landing)/components/NavDropDown";
import {X} from "lucide-react"
import { Icons } from "./icons";

interface MobileNavProps {
    onClose: () => void;
  }

  const MobileNav: React.FC<MobileNavProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full backdrop-blur-md bg-black bg-opacity-95 shadow-md pt-[48px] px-4 space-y-4">
     <div className="flex gap-2 justify-center items-center mb-[48px]">
     <div className="flex justify-center items-center space-x-3">
                    <div className="text-2xl font-extrabold whitespace-nowrap">YI / XProfile</div>
                    </div>
   
     </div>

<NavDropDown/>
<div className="flex flex-col justify-end w-full items-center">
<div onClick={onClose} className="flex mt-[75px] justify-center w-[60px] h-[60px] relative bg-white bg-opacity-5 rounded-[34px] border border-stone-300 border-opacity-20 items-center text-center">
    <X width={40} height={40} style={{opacity:"60"}}/>
</div>
</div>
</div>

  );
};

export default MobileNav;
