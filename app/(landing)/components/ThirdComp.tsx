import React from 'react';
import Round from './round';

const ThirdComp = () => {
    return (
        <div className='relative w-full'>
            <Round className="hidden md:block absolute top-0 right-0 md:right-56 h-[200px] md:h-[400px] w-full md:w-[380px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[50px] md:blur-[150px] rounded-full" />
        </div>
    );
}

export default ThirdComp;
