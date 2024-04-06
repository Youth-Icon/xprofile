"use client"
import React, { useState } from "react";
import { LayoutGrid, Table2 } from "lucide-react";
import FeatCard from "@/app/(landing)/components/FeatCard";

export function Categories() {
    const [view, setView] = useState('layout'); // Initialize view state

    // Function to handle view change
    const handleViewChange = (selectedView:string) => {
        setView(selectedView); // Update view state based on user selection
    };

    return (
        <section className="text-white text-2xl py-10 w-full pb-[10%] mt-5 px-[20%] bg-grid-bg bg-center bg-cover overflow-scroll">
            <nav>
                <label>View:</label>
                <div className="flex space-x-5">
                    {/* Layout grid view icon */}
                    <LayoutGrid
                        onClick={() => handleViewChange('layout')}
                        size={30}
                        className={view === 'layout' ? " bg-slate-400 text-black rounded transition-colors" : " cursor-pointer transition-colors"}
                    />
                    {/* Table view icon */}
                    <Table2
                        onClick={() => handleViewChange('grid')}
                        size={30}
                        className={view === 'grid' ? " bg-slate-400 text-black rounded transition-colors" : " cursor-pointer transition-colors"}
                    />
                </div>
            </nav>

            {/* Content section */}
            <div className={view === 'layout' ?"grid grid-cols-3 gap-4 mt-5": " space-y-4 mt-5"}>
                <FeatCard height="auto" width="auto" paddingX="24px" paddingY="32px" className=" backdrop-blur-md">
                    <div className="flex flex-col items-start gap-5 text-center">
                        {/* Container for user information */}
                        <h1 className="text-center text-2xl">Account Support</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className=" h-10 w-full text-neutral-800 px-4 py-3 bg-neutral-100 bg-opacity-75 rounded-lg backdrop-blur-[32px] justify-center items-center gap-1.5 inline-flex cursor-pointer hover:bg-opacity-100 transition-all duration-300">View</button>
                        
                    </div>
                </FeatCard>
                <FeatCard height="auto" width="auto" paddingX="24px" paddingY="32px" className=" backdrop-blur-md">
                    <div className="flex flex-col items-start gap-5 text-center">
                        {/* Container for user information */}
                        <h1 className="text-center text-2xl">Account Support</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className=" h-10 w-full text-neutral-800 px-4 py-3 bg-neutral-100 bg-opacity-75 rounded-lg backdrop-blur-[32px] justify-center items-center gap-1.5 inline-flex cursor-pointer hover:bg-opacity-100 transition-all duration-300">View</button>
                        
                    </div>
                </FeatCard>
                <FeatCard height="auto" width="auto" paddingX="24px" paddingY="32px" className=" backdrop-blur-md">
                    <div className="flex flex-col items-start gap-5 text-center">
                        {/* Container for user information */}
                        <h1 className="text-center text-2xl">Account Support</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className=" h-10 w-full text-neutral-800 px-4 py-3 bg-neutral-100 bg-opacity-75 rounded-lg backdrop-blur-[32px] justify-center items-center gap-1.5 inline-flex cursor-pointer hover:bg-opacity-100 transition-all duration-300">View</button>
                        
                    </div>
                </FeatCard>
                <FeatCard height="auto" width="auto" paddingX="24px" paddingY="32px" className=" backdrop-blur-md">
                    <div className="flex flex-col items-start gap-5 text-center">
                        {/* Container for user information */}
                        <h1 className="text-center text-2xl">Account Support</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className=" h-10 w-full text-neutral-800 px-4 py-3 bg-neutral-100 bg-opacity-75 rounded-lg backdrop-blur-[32px] justify-center items-center gap-1.5 inline-flex cursor-pointer hover:bg-opacity-100 transition-all duration-300">View</button>
                        
                    </div>
                </FeatCard>
                <FeatCard height="auto" width="auto" paddingX="24px" paddingY="32px" className=" backdrop-blur-md">
                    <div className="flex flex-col items-start gap-5 text-center">
                        {/* Container for user information */}
                        <h1 className="text-center text-2xl">Account Support</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className=" h-10 w-full text-neutral-800 px-4 py-3 bg-neutral-100 bg-opacity-75 rounded-lg backdrop-blur-[32px] justify-center items-center gap-1.5 inline-flex cursor-pointer hover:bg-opacity-100 transition-all duration-300">View</button>
                        
                    </div>
                </FeatCard>
                <FeatCard height="auto" width="auto" paddingX="24px" paddingY="32px" className=" backdrop-blur-md">
                    <div className="flex flex-col items-start gap-5 text-center">
                        {/* Container for user information */}
                        <h1 className="text-center text-2xl">Account Support</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className=" h-10 w-full text-neutral-800 px-4 py-3 bg-neutral-100 bg-opacity-75 rounded-lg backdrop-blur-[32px] justify-center items-center gap-1.5 inline-flex cursor-pointer hover:bg-opacity-100 transition-all duration-300">View</button>
                        
                    </div>
                </FeatCard>
                
            </div>
        </section>
    );
}

