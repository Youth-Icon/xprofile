import React from 'react'
import { getServerAuthSession } from "@/backend/auth";
import User from './user';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { NavLinks } from './NavLinks';

const LandingNav = async ({ className }: any) => {
    const session = await getServerAuthSession();

    return (
        <div className='w-full'>
            <div className={cn(
                'flex z-10 justify-between px-32 py-3 bg-transparent items-center h-20',
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
                    <div className='flex justify-end items-center space-x-4'>
                        {session ?
                            <User user={session.user} /> :
                            <div className=''>
                                <Link href={"/login"} className={cn(
                                    "px-2 py-8 pr-4 font-ubuntu font-bold text-transparent",
                                    buttonVariants({ variant: "default" }),
                                )}>
                                    Get Started
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingNav
