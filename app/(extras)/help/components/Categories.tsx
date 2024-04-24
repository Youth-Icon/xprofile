"use client"
import React, { useState } from "react";
import { LayoutGrid, Table2 } from "lucide-react";
import { Category } from "./category";

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
                        className={view === 'layout' ? " bg-slate-400 text-black rounded transition-colors" : " cursor-pointer"}
                    />
                    {/* Table view icon */}
                    <Table2
                        onClick={() => handleViewChange('grid')}
                        size={30}
                        className={view === 'grid' ? " bg-slate-400 text-black rounded transition-colors" : " cursor-pointer"}
                    />
                </div>
            </nav>

            {/* Content section */}
            <div className={view === 'layout' ?"grid sm:grid-cols-2 grid-cols-3 gap-4 mt-5": " space-y-4 mt-5"}>
                <Category title="Account Support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <Category title="Account Support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <Category title="Account Support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <Category title="Account Support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <Category title="Account Support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <Category title="Account Support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <Category title="Account Support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <Category title="Account Support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <Category title="Account Support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            </div>
        </section>
    );
}

