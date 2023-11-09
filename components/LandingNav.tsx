import React from 'react'
import { getServerAuthSession } from "@/backend/auth";
import User from './user';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import Link from 'next/link';

const LandingNav = async ({ className }: any) => {
    const session = await getServerAuthSession();

    return (
        <div>
            <div className={cn(
                'flex z-10 justify-between px-24 py-4 bg-transparent items-center',
                className,
            )}>
                {/* Logo */}
                <div className='flex justify-start items-center'>
                    <Link href={"/"}>
                        Logo
                    </Link>
                </div>
                {/* Nav */}
                <div className='flex justify-end items-center space-x-4'>
                    {session ?
                        <User user={session.user} /> :
                        <div className=''>
                            <Link href={"/login"} className={cn(
                                "px-2 py-8 pr-4",
                                buttonVariants({ variant: "outline" }),
                            )}>
                                Sign In
                            </Link>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default LandingNav
