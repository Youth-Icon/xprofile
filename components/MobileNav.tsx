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
    <div className="fixed h-screen top-0 left-0 w-full backdrop-blur-md bg-black bg-opacity-95 shadow-md py-[48px] px-4 space-y-4">
     <div className="flex gap-2 justify-center items-center mb-[5%]">
     <div className="flex justify-center items-center space-x-3">
                    <div className="text-2xl font-extrabold whitespace-nowrap">YI / XProfile</div>
                    </div>
   
     </div>

<NavDropDown/>
<div className="flex flex-col justify-end w-full items-center">
<div onClick={onClose} className="flex  justify-center w-[40px] h-[40px] absolute top-5 right-5 bg-white bg-opacity-5 rounded-[34px] border border-stone-300 border-opacity-20 items-center text-center">
    <X width={20}  style={{opacity:"60"}}/>
    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] rounded-[34px] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
</div>
</div>
</div>

  );
};

export default MobileNav;
