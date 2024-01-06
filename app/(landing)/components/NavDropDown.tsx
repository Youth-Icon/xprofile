"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  Award,
  UserSquare2,
  Settings2,
  MessageSquare,
  LayoutGrid,
} from "lucide-react";
import Link from "next/link";

type DropdownProps = {
  id: number;
  triggerText: string;
  content: React.ReactNode;
};

const DropDownFeatures: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (dropdownId: number) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const renderDropdown = ({ id, triggerText, content }: DropdownProps) => {
    return (
      <div className="w-full" key={id}>
        {/* Dropdown Trigger */}
        <div
          className="flex items-center justify-between gap-4 pb-[0.5rem] cursor-pointer"
          onClick={() => toggleDropdown(id)}
        >
          <div className="flex gap-4">
            {/* Trigger Text */}
            <div className="text-lg font-semibold font-manrope text-slate-300   hover:text-slate-100 transition-colors duration-300 ease-in-out">
              {triggerText}
            </div>
          </div>
          {/* Trigger Arrow Icon */}
          <ChevronDown
            className={` w-6 h-6 ${activeDropdown === id ? "rotate-180" : ""} `}
          />
        </div>
        {/* Dropdown Content */}
        {activeDropdown === id && (
          <div className="py-3 placeholder:gap-4">{content}</div>
        )}
        <div className="w-full h-[0px] mt-3 border-[0.8px] border-stone-100 border-opacity-20"></div>
      </div>
    );
  };

  const dropdowns: DropdownProps[] = [
    {
      id: 1,
      triggerText: "Features",
      content: (
        <>
          <div className="pl-4">
          <div className="flex gap-1  hover:text-slate-300 transition-colors duration-300 ease-in-out">
            <Award/>
            <Link className="pb-4" href={"/"}>Claim your subdomain</Link>
            </div>
            <div className="flex gap-1  hover:text-slate-300 transition-colors duration-300 ease-in-out">
            <UserSquare2/>
            <Link className="pb-4" href={"/"}>Social profile integration</Link>
            </div>
            <div className="flex gap-1  hover:text-slate-300 transition-colors duration-300 ease-in-out">
            <Settings2/>
            <Link className="pb-4" href={"/"}>Personalize your profile</Link>
            </div>
            <div className="flex gap-1  hover:text-slate-300 transition-colors duration-300 ease-in-out">
            <MessageSquare/>
            <Link className="pb-4" href={"/"}>Send/Receive messages</Link>
            </div>
            <div className="flex gap-1  hover:text-slate-100 transition-colors duration-300 ease-in-out">
            <LayoutGrid/>
            <Link className="pb-4" href={"/"}>Profile themes <span className="text-[#C6CFDC99]">(coming soon)</span></Link>
            </div>

          
            
           
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-start gap-2  hover:text-slate-100 transition-colors duration-300 ease-in-out">
      {/* Features Dropdown */}
      {dropdowns.map((dropdown) => renderDropdown(dropdown))}

      {/* Showcase */}
      <div className="w-full">
        <div className="flex items-center justify-between gap-4 pt-2 cursor-pointer">
          <Link className="text-lg font-semibold font-manrope text-slate-300 hover:text-slate-100 transition-colors duration-300 ease-in-out" href={"/"}>Showcase</Link>
        </div>
      </div>
      <div className="w-full h-[0px] mt-3 border-[0.8px] border-stone-100 border-opacity-20"></div>
      {/* Projects */}
      <div className="w-full">
        <div className="flex items-center justify-between gap-4 mt-2 cursor-pointer">
          <Link className="text-lg font-semibold font-manrope text-slate-300  hover:text-slate-100 transition-colors duration-300 ease-in-out" href={"/"}>Projects</Link>
        </div>
      </div>
      <div className="w-full h-[0px] mt-3 border-[0.8px] border-stone-100 border-opacity-20 "></div>
      {/* About Us*/}
      <div className="w-full">
        <div className="flex items-center justify-between gap-4 mt-2 cursor-pointer">

        <Link className="text-lg font-semibold font-manrope text-slate-300  hover:text-slate-100 transition-colors duration-300 ease-in-out" href={"/"}>About Us</Link>
        </div>
      </div>
      <div className="w-full h-[0px] mt-3 border-[0.8px] border-stone-100 border-opacity-20"></div>
      {/* Contact */}
      <div className="w-full">
        <div className="flex items-center justify-between gap-4 mt-2 cursor-pointer">
        <Link className="text-lg font-semibold font-manrope text-slate-300  hover:text-slate-100 transition-colors duration-300 ease-in-out" href={"/"}>Contact</Link>
        </div>
      </div>
      <div className="w-full h-[0px] mt-3 border-[0.8px] border-stone-100 border-opacity-20"></div>
      {/* Get Started */}
      <div className="w-full">
        <div className="flex items-center justify-between gap-4  mt-2 cursor-pointer">
        <Link className="text-lg font-semibold font-manrope text-slate-300  hover:text-slate-100 transition-colors duration-300 ease-in-out" href={"/"}>Getting Started</Link>
        </div>
      </div>
    </div>

  );
};

export default DropDownFeatures;
