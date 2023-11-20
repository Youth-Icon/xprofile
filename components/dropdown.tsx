"use client"
import React, { useState } from 'react';
import "devicon/devicon.min.css"
import { Icons } from './icons';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { X, ChevronDown, ChevronUp, Check } from 'lucide-react';
interface Option {
  name: string;
  icon?: string;
}

interface DropdownProps {
  options: ({
    name: string;
    icon: string;
    iconStyle: string;
} | {
    name: string;
    icon?: string;
    iconStyle?: string;
})[];
  selectedOption: Option[];
  setSelectedOption: any;

}
export function Dropdown({ options, selectedOption, setSelectedOption }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: any) => {
    if (selectedOption.some((opt) => opt.name === option.name)) {
      setSelectedOption(selectedOption.filter((opt) => opt.name !== option.name));

    } else {
      setSelectedOption([...selectedOption, option]);
      console.log(selectedOption);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative w-auto">
      <section className={`flex flex-wrap gap-2 w-full rounded-md ${selectedOption.length !== 0 && 'mb-3'}`}>
        {selectedOption.map((opt, index) => (
          <div key={index} className='transition-all border bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex h-8 items-center text-sm pl-2 rounded-md' onClick={() => selectOption(opt)}>
            {opt.icon ? (
              <i className={`${opt.icon} mr-2`} />
            ) : (<></>)}
            <p className=' text-sm text-white group-hover:text-white'>{opt.name}</p>
            <Button
              type="button"
              variant="ghost"
              className={cn("py-1 px-2 h-full hover:bg-transparent")}
            >
              <X size={14} />
            </Button>
          </div>
        ))}
      </section>
      <button
        type="button"
        onClick={toggleDropdown}
        className="relative text-muted-foreground text-sm border cursor-pointer py-2 px-4 rounded inline-flex items-center w-full overflow-y-scroll"
      >
        <p>Choose the skills</p>
        {isOpen ? (
          <ChevronDown className="h-full mr-2 cursor-pointer right-0 absolute"
          />
        ) : (
          <ChevronUp className="h-full mr-2 cursor-pointer right-0 absolute"
          />
        )}

      </button>
      {isOpen && (
        <ul className="absolute z-10 py-2 w-full bg-black/90 backdrop-blur-3xl border rounded-lg shadow-l text-white">
          {options.map((option, index) => (
            <li
              key={index}
              className="cursor-pointer py-2 px-4 hover:bg-secondary/80 flex items-center justify-start"
              onClick={() => selectOption(option)}
            >
              {selectedOption.find((selectedOpt) => (selectedOpt.name === option.name)) ? (
                <Check className='text-white w-4 h-4' />
              ) : (<></>)}
              {option.icon ? (
                <i className={`${option.icon} ml-3  text-white`} />
              ) : (
                <></>
              )}
              <p className='ml-3'>{option.name}</p>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
