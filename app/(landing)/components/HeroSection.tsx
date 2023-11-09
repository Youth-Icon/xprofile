import React from 'react'
import Image from "next/image";
import LandingNav from '@/components/LandingNav';
import Round from './round';

const HeroSection = () => {
    return (
        <>
            <div className="h-screen relative overflow-hidden rounded-lg bg-cover bg-no-repeat bg-[url('/hero-pattern.svg')]">
                <div className='flex flex-col'>
                    <LandingNav />
                    <div className="bg-[url('/patterns.svg')]">
                        <div className='mt-28 flex justify-center items-center'>
                            <div className="flex flex-col">
                                <div className="text-center flex flex-col w-full h-full">
                                    <span className="text-white text-[95px] font-bold font-manrope">One Link with</span>
                                    <span className="bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text text-8xl font-bold font-manrope -mt-8">Superpowers</span>
                                </div>
                                <div>
                                    <div className="text-center max-w-3xl text-stone-400 text-xl mt-9 font-medium font-manrope">xProfile is an open-source app that provides a one-link portfolio for showcasing your projects, skills, social links, and more.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Orange Circle Background */}
                    <Round className='absolute top-[420px] -left-56 w-[400px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[150px] rounded-full ' />
                    <Round className='absolute top-48 -right-56 w-[400px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full ' />

                </div>
            </div>
        </>
    )
}

export default HeroSection