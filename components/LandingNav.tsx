import React from 'react'
import { getServerAuthSession } from "@/backend/auth";
import User from './user';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import Link from 'next/link';

const LandingNav = async () => {
    const session = await getServerAuthSession();

    return (
        <div>
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
    )
}

export default LandingNav
