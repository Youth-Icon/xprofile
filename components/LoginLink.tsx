import React from 'react'
import { getServerAuthSession } from "@/backend/auth";
import User from './user';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import Link from 'next/link';


const LoginLink = async ({ className }: any) => {
    const session = await getServerAuthSession();
    console.log(session);

    return (
        <div className='flex justify-end items-center space-x-4'>
        {session ?
            <User user={session.user} /> :
            <div className=''>
                <Link href={"/signin"} className={cn(
                    "px-2 py-8 pr-4 font-ubuntu font-bold text-transparent",
                    buttonVariants({ variant: "default" }),
                )}>
                    Get Started
                </Link>
            </div>
        }
    </div>
    )
}

export default LoginLink;
