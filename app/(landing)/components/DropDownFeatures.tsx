"use client";
import React, { useState } from 'react';
import {ChevronDown, Briefcase, Award, UserSquare2, Settings2, MessageSquare, LayoutGrid} from 'lucide-react';

type DropdownProps = {
  id: number;
  icon: React.ReactNode;
  triggerText: string;
  content: React.ReactNode;
};

const DropDownFeatures: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<number | null>(1);

  const toggleDropdown = (dropdownId: number) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const renderDropdown = ({ id, icon, triggerText, content }: DropdownProps) => {
    return (
      <div className="w-full mlg:w-80" key={id}>
        {/* Dropdown Trigger */}
        <div
          className="flex items-center justify-between gap-4 pb-[1.5rem] cursor-pointer"
          onClick={() => toggleDropdown(id)}
        >
          <div className="flex gap-4">
            {/* Trigger Icon */}
            {icon}
            {/* Trigger Text */}
            <div className="text-[14px] xs:text-lg font-semibold font-manrope text-slate-300  hover:text-slate-100 transition-colors duration-300 ease-in-out">{triggerText}</div>
          </div>
          {/* Trigger Arrow Icon */}
          <ChevronDown className={` w-6 h-6 ${activeDropdown === id ? 'rotate-180' : ''} `} />
        </div>
        {/* Dropdown Content */}
        {activeDropdown === id && (
          <div className="py-3 placeholder:gap-4">{content}</div>
        )}
        <div className="w-full mlg:w-80 h-[0px] border-[0.8px] border-stone-100 border-opacity-20"></div>
      </div>
      
    );
  };

  const dropdowns: DropdownProps[] = [
    {
      id: 1,
      icon: <Briefcase />,
      triggerText: 'Add Showcase Projects',
      content: (
        <>
          <div className="pb-6">You can add 3 projects on your showcase page.</div>
          <div className="w-[117px] h-[38px] px-4 py-2 bg-white rounded-3xl justify-center items-center gap-1 inline-flex cursor-pointer  hover:bg-slate-200  transition-colors duration-300 ease-in-out">
            <div className="text-center text-black text-base font-medium font-manrope">Learn more</div>
          </div>
          
        </>
      ),
    },
    {
        id: 2,
        icon: <Award />,
        triggerText: 'Claim your subdomain',
        content: (
          <>
            <div className="pb-6">You can add 3 projects on your showcase page.</div>
            <div className="w-[117px] h-[38px] px-4 py-2 bg-white rounded-3xl justify-center items-center gap-1 inline-flex cursor-pointer  hover:bg-slate-200  transition-colors duration-300 ease-in-out">
              <div className="text-center text-black text-base font-medium font-manrope">Learn more</div>
            </div>
            
          </>
        ),
      },
      {
        id: 3,
        icon: <UserSquare2 />,
        triggerText: 'Social profile integration',
        content: (
          <>
            <div className="pb-6">You can add 3 projects on your showcase page.</div>
            <div className="w-[117px] h-[38px] px-4 py-2 bg-white rounded-3xl justify-center items-center gap-1 inline-flex cursor-pointer  hover:bg-slate-200  transition-colors duration-300 ease-in-out">
              <div className="text-center text-black text-base font-medium font-manrope">Learn more</div>
            </div>
            
          </>
        ),
      },
      {
        id: 4,
        icon: <Settings2 />,
        triggerText: 'Personalize your profile',
        content: (
          <>
            <div className="pb-6">You can add 3 projects on your showcase page.</div>
            <div className="w-[117px] h-[38px] px-4 py-2 bg-white rounded-3xl justify-center items-center gap-1 inline-flex cursor-pointer  hover:bg-slate-200  transition-colors duration-300 ease-in-out">
              <div className="text-center text-black text-base font-medium font-manrope">Learn more</div>
            </div>
            
          </>
        ),
      },
      {
        id: 5,
        icon: <MessageSquare />,
        triggerText: 'Send/Receive messages',
        content: (
          <>
            <div className="pb-6">You can add 3 projects on your showcase page.</div>
            <div className="w-[117px] h-[38px] px-4 py-2 bg-white rounded-3xl justify-center items-center gap-1 inline-flex cursor-pointer  hover:bg-slate-200  transition-colors duration-300 ease-in-out">
              <div className="text-center text-black text-base font-medium font-manrope">Learn more</div>
            </div>
            
          </>
        ),
      },
      {
        id: 6,
        icon: <LayoutGrid />,
        triggerText: 'Profile themes',
        content: (
          <>
            <div className="pb-6">You can add 3 projects on your showcase page.</div>
            <div className="w-[117px] h-[38px] px-4 py-2 bg-white rounded-3xl justify-center items-center gap-1 inline-flex cursor-pointer  hover:bg-slate-200  transition-colors duration-300 ease-in-out">
              <div className="text-center text-black text-base font-medium font-manrope">Learn more</div>
            </div>
            
          </>
        ),
      },
  ];

  return (
    <div className="flex flex-col items-start gap-5">
      {dropdowns.map((dropdown) => renderDropdown(dropdown))}
      
    </div>
  );
};

export default DropDownFeatures;