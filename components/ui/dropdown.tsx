"use client"
import React, { useState } from 'react';
import "devicon/devicon.min.css"
import { Icons } from '../icons';
import { X, ChevronDown, ChevronUp} from 'lucide-react';
interface Option {
    name: string;
    icon?: string;
    iconStyle?: string;
    selectedOption: object;
  }
  
interface DropdownProps {
    options: Option[];
    selectedOption: Option[];
    setSelectedOption: React.Dispatch<React.SetStateAction<Option[]>>;
    
}
export function Dropdown({options, selectedOption, setSelectedOption}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option:Option) => {
    if(selectedOption.some((opt) => opt.name === option.name)){
      setSelectedOption(selectedOption.filter((opt) => opt.name !== option.name));

    }else{
      setSelectedOption([...selectedOption, option]);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative w-auto">
      <section className={`flex flex-wrap gap-2  w-full bg-gray-50 rounded-md ${selectedOption.length !== 0 && 'mb-3'}`}>
          {selectedOption.map((opt, index) => (
          <div key={index} className='cursor-pointer flex mx-1 bg-gray-100 p-1 justify-center items-center rounded-full group hover:bg-gray-300' onClick={() => selectOption(opt)}>
              <X className=' w-4 invisible text-black group-hover:visible'></X>
              {opt.icon?(
                <i className={`${opt.icon} ${opt.iconStyle} mr-5`}/>
              ):(<></>)}
            <p className=' text-sm text-black group-hover:text-black'>{opt.name}</p>
          </div>
        ))}
      </section>
      <button
        type="button"
        onClick={toggleDropdown}
        className=" relative bg-gray-200 text-gray-800 cursor-pointer font-semibold py-2 px-4 rounded inline-flex items-center w-full overflow-y-scroll"
      >
        <p>Select an option</p>

        
        
       {isOpen?(
        <ChevronDown className="h-full ml-2 cursor-pointer right-0 absolute"
          />
       ):(
        <ChevronUp className="h-full ml-2 cursor-pointer right-0 absolute"
          />
       )}

      </button>
      {isOpen && (
        <ul className="absolute z-10 py-2 w-full bg-white border rounded-lg shadow-l text-black">
          {options.map((option, index) => (
            <li
              key={index}
              className="cursor-pointer py-2 px-4 hover:bg-gray-200 flex"
              onClick={() => selectOption(option)}
            >
              {selectedOption.find((selectedOpt) => (selectedOpt.name === option.name)) ?(
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              
              
              ):(<></>)}
              {option.name}
              {option.icon ?(
                <i className={`${option.icon} ${option.iconStyle} ml-5`}/>
              ):(
                <></>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
