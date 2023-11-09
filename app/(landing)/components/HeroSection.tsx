import React from 'react'
import Image from "next/image";
import LandingNav from '@/components/LandingNav';

const HeroSection = () => {
    return (
        <>
            <div className='h-screen'>
                <LandingNav />
                <Image
                className='object-cover object-center w-full h-full -z-10'
                    src="/patterns.svg"
                    alt="Picture of the author"
                    width={0}
                    height={500}
                />
            </div>
        </>
    )
}

export default HeroSection