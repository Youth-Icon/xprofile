import React from 'react'
import Link from 'next/link'
import LandingNav from '@/components/LandingNav'
import { Ratings } from './Ratings'

export function Header() {
    return (
        <header className='flex items-center justify-center h-[50vh] relative mb-[15%]'>
            <LandingNav/>
            <div className="absolute -z-20 top-0 left-0 w-full h-[50vh] bg-hero-pattern" />
            <div className=" text-white text-center w-[100vw] absolute">
                <Link href={"/"} className="text-6xl"><span className="text-orange-600">X</span>Profile</Link>
                <h1 className='text-3xl'>About us </h1>            
            </div> 
            <Ratings/>                   

        </header>
    )
}
