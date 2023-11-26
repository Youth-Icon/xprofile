import React from 'react';
import CTAbtn from './CTAbtn';
import { getServerAuthSession } from '@/backend/auth';

const TopComponent = async ({ }) => {
    const session = await getServerAuthSession();
    return (
        <div className="mt-[8.5rem] flex justify-center items-center bg-cover bg-no-repeat">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center flex flex-col w-full h-full text-4xl xs:text-6xl lg:text-[76px]">
                    <div className="text-white font-bold font-manrope leading-tight">One Link with</div>
                    <div className="bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text font-bold font-manrope ">Superpowers</div>
                </div>
                <div className='flex flex-col space-y-3 justify-center items-center'>
                    <div className="text-center max-w-3xl text-stone-400  text-[14px] xs:text-base px-4 sm:text-lg lg:text-[24px] mt-4 sm:mt-6 lg:mt-12 font-medium font-manrope leading-snug">XProfile is an open-source app that provides a one-link portfolio for showcasing your projects, skills, social links, and more.</div>
                    <CTAbtn session={session} />
                </div>
            </div>
        </div>
    );
};

export default TopComponent;