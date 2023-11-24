import React from 'react'
import LandingNav from '@/components/LandingNav';
import Round from './round';
import TopComponent from './TopComponent';
import SecondComponent from './ProfileExample';
import ThirdComp from './ThirdComp';
import LoginLink from '@/components/LoginLink';
import PowerfulFeatures from './PowerfulFeatures';
import LargeInfoBox from './LargeInfoBox';

const HeroSection = () => {
    return (
        <>
            <div className="min-h-screen relative overflow-hidden rounded-lg">
                <div className='flex flex-col'>
                    <LandingNav><LoginLink/></LandingNav>
                    <div className="flex justify-center items-center flex-col">
                        <TopComponent />
                        <SecondComponent />
                        <ThirdComp />
                        <PowerfulFeatures />
                        <LargeInfoBox />
                    </div>
                    {/* Pattern at top */}
                    <div className="absolute -z-20 top-0 left-0 w-full h-[96vh] bg-hero-pattern" />

                    {/* Orange Circle Background */}
                    <Round className='hidden md:block absolute top-[420px] -left-56 w-[400px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[150px] rounded-full ' />
                    <Round className='absolute top-48 -right-56 w-[400px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full ' />
                    <Round className='hidden md:block absolute top-[700px] -right-24 w-[400px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[150px] rounded-full ' />
                    <Round className='absolute top-[1500px] -left-10 w-[400px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full ' />

                </div>
            </div>
        </>
    )
}

export default HeroSection