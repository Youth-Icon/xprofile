'use client';

import { cn } from '@/lib/utils'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from './ui/button'
import { signOut } from 'next-auth/react';
import {
    ChevronDown, User2, Cloud,
    LifeBuoy,
    LogOut,
} from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



function User({ user }: any) {
    const handleSignOut = () => {
        signOut()
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "px-2 py-8 pr-4"
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
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Explore</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    <Cloud className="mr-2 h-4 w-4" />
                    <span>Docs</span>
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
