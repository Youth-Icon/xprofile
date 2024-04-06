"use client"
import React, { useEffect, useRef, useState } from "react";

export function Search() {
    const [placeholder, setPlaceholder] = useState<string>('')

    useEffect(() => {
        const str = "How may I help you today?";
        const letters = Array.from(str);

        const addLetterWithDelay = (index:number) => {
            if (index < letters.length) {
                setTimeout(() => {
                    setPlaceholder(prevPlaceholder => prevPlaceholder + letters[index]);
                    addLetterWithDelay(index + 1);
                }, 1000); // Delay of 1 second
            }
        };

        addLetterWithDelay(0); // Start adding letters from index 0
    }, []);
    const clickPoint = useRef<HTMLDivElement>(null);

    const handleFocus = () => {
        if (clickPoint.current) {
            clickPoint.current.style.display = "none";
        }
    };

    const handleBlur = () => {
        if (clickPoint.current) {
            clickPoint.current.style.display = "block";
        }
    };

    return (
        <div className="flex items-center justify-center relative  w-screen mt-5">
            <div className="relative w-1/2">
                <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                    <svg className="w-5 h-5 text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 w-full text-white bg-gray-500 rounded-lg border border-gray-600 focus:pl-3"
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
        </div>

    );
}

