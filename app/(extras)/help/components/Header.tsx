import React from 'react'
import Link from 'next/link'
import { Search } from './Search'
import LandingNav from '@/components/LandingNav'

export function Header() {
    return (
        <header className='flex items-center justify-center h-[50vh]'>
            <LandingNav/>
            <div className="absolute -z-20 top-0 left-0 w-full h-[50vh] bg-hero-pattern" />
            <div className=" inset-0 flex flex-col items-center justify-center text-white text-center">
                <Link href={"/"} className="text-6xl"><span className="text-orange-600">X</span>Profile</Link>
                <h1 className='text-3xl'>Help Center</h1>            
                <Search />
            </div>                    

        </header>
    )
}
