"use client"
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { NavLinks } from "./NavLinks";
import MobileNav from "./MobileNav";

const LandingNav = ({ className, children }: any) => {
    const [scrolling, setScrolling] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolling(isScrolled);
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

             // Check if window is defined before adding event listeners
             if (typeof window !== 'undefined') {
                window.addEventListener("scroll", handleScroll);
                window.addEventListener("resize", handleResize);
            }
    
            return () => {
                // Check if window is defined before removing event listeners
                if (typeof window !== 'undefined') {
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("resize", handleResize);
                }
            };
    }, []);



    // Add a state to track the menu button animation
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Toggle mobile menu visibility and animate the menu button
    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full">
            <div
                className={cn(
                    "flex w-full z-50 justify-between px-8 sm:px-8 md:px-16 lg:px-32 py-3 bg-transparent items-center h-[68px] fixed top-0 transition-all duration-200",
                    scrolling
                        ? "border-[0.5px] bg-gray-500 bg-opacity-25 backdrop-blur-md"
                        : "bg-transparent",
                    className
                )}
            >
                {/* Logo */}
                <div className="flex justify-start items-center space-x-3">
                    <div className="text-2xl font-extrabold whitespace-nowrap">YI / XProfile</div>
                    {windowWidth >= 860 && <NavLinks />}
                </div>
                {/* Nav */}
                {windowWidth <= 860 ? (
                    // Render hamburger menu for screens below 860px
                    <div className="flex items-center">
                        <button
                            className={cn(
                                "text-gray-300 hover:text-gray-200 focus:outline-none",
                                {
                                    'open': isMenuOpen, // Apply the "open" class when the menu is open
                                }
                            )}
                            onClick={toggleMobileMenu}
                        >
    <span className={`block w-6 h-px bg-current mb-2 transition-transform transform origin-center ${isMenuOpen ? 'rotate-45 translate-y-[0.29rem]' : 'rotate-0'}`}></span>
    <span className={`block w-6 h-px bg-current mb-2 transition-transform transform origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[0.29rem]' : 'rotate-0'}`}></span>
                        </button>
                        {showMobileMenu && (
                            <MobileNav onClose={toggleMobileMenu}/>
                        )}
                    </div>
                ) : (
                    // Render regular navigation for screens above 860px
                    <div className="flex flex-row justify-center items-center space-x-3">
                        <Link
                            href={"/about"}
                            className={cn(
                                "px-2 py-8 pr-4 text-gray-300 hover:text-gray-200 whitespace-nowrap",
                                buttonVariants({ variant: "ghost" })
                            )}
                        >
                            About Us
                        </Link>
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LandingNav;