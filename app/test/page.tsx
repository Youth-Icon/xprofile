"use client"
import { Dropdown } from "@/components/dropdown";
import { useState } from "react";
export default function test(){
    const [option, setopt] = useState([])
    const dropdownOptions = [
        { name: 'Option 1', icon: 'devicon-androidstudio-plain', iconStyle: 'text-red-500'},
        { name: 'Option 2', icon: 'devicon-adonisjs-original', iconStyle: 'text-black'},
        { name: 'Option 3' },
        { name: 'option', icon: 'devicon-androidstudio-plain', iconStyle: 'text-red-500'}
        // Add more options as needed
      ];
    return(
        <div className="w-1/2">
            <h1>Test</h1>
            <Dropdown options={dropdownOptions} selectedOption={option} setSelectedOption={setopt}></Dropdown> 
        </div>
        
    )
}