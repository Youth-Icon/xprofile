import React from 'react'
import Image from "next/legacy/image";
import LandingNav from '@/components/LandingNav';

const HeroSection = () => {
    return (
        <>
            <div className='h-screen'>
                <LandingNav className="z-40" />
                <Image
                className='object-cover object-center w-full h-full -z-10'
                    src="/patterns.svg"
                    alt="Picture of the author"
                    layout="fill"
                />
            </div>
        </>
    )
}

export default HeroSection