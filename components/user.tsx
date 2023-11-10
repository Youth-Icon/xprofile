'use client';

import { cn } from '@/lib/utils'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from './ui/button'
import { signOut } from 'next-auth/react';
import {
    ChevronDown, User2,
    LogOut,
    Crown,
    Globe2,
} from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function User({ user }: any) {
    const handleSignOut = () => {
        signOut()
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "px-2 py-7 pr-4"
                )}>
                    <div className='flex justify-center items-center'>
                        <ChevronDown />
                        <Avatar>
                            <AvatarImage src={user.image} />
                            <AvatarFallback>DP</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                    <div className="flex items-center">
                        <Avatar>
                            <AvatarImage src={user.image} />
                            <AvatarFallback>DP</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="ml-2">{user.name}</span>
                            <span className="ml-2 text-xs text-gray-400">{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <User2 className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Globe2 className="mr-2 h-4 w-4" />
                    <span>Explore</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    <Crown className="mr-2 h-4 w-4" />
                    <span>Premium</span>
                    <DropdownMenuShortcut>
                        <span className="text-xs text-gray-400 animate-pulse">◉</span>
                    </DropdownMenuShortcut>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span onClick={handleSignOut}>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default User
