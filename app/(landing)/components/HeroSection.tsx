import React from 'react'
import Image from "next/image";
import LandingNav from '@/components/LandingNav';

const HeroSection = () => {
    return (
        <>
            <div className="h-screen relative overflow-hidden rounded-lg bg-cover bg-no-repeat bg-[url('/hero-pattern.svg')]">
                <div className='flex'>
                    <LandingNav />
                    <div className="bg-[url('/patterns.svg')]">

                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection