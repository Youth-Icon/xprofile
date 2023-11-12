"use client"
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { NavLinks } from './NavLinks';

const LandingNav = ({ className, children }: any) => {
    
    const [scrolling, setScrolling] = useState(false);
  

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            console.log('isScrolled:', isScrolled);
            setScrolling(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="w-full ">
            <div className={cn(
                'flex w-full z-50 justify-between px-32 py-3 bg-transparent items-center h-[68px] fixed top-0 transition-all duration-300',
                scrolling ? 'border-[0.5px] bg-gray-500 bg-opacity-25 backdrop-blur-md' : 'bg-transparent',
                className,
            )}>
                {/* Logo */}
                <div className='flex justify-start items-center space-x-3'>
                    <div className='text-2xl font-extrabold'>YI / XProfile</div>
                    <NavLinks />
                </div>
                {/* Nav */}
                <div className='flex flex-row justify-center items-center space-x-3'>
                    <Link href={"/about"} className={cn(
                        "px-2 py-8 pr-4 text-gray-300 hover:text-gray-200",
                        buttonVariants({ variant: "ghost" }),
                    )}>
                        About Us
                    </Link>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LandingNav;
