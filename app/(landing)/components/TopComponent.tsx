import React from 'react'
import CTAbtn from './CTAbtn'

const TopComponent = ({ }) => {
    return <div className="mt-14 flex justify-center items-center bg-cover bg-no-repeat">
        <div className="flex flex-col">
            <div className="text-center flex flex-col w-full h-full">
                <span className="text-white text-[95px] font-bold font-manrope">One Link with</span>
                <span className="bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text text-8xl font-bold font-manrope -mt-8">Superpowers</span>
            </div>
            <div className='flex flex-col space-y-2 justify-center items-center'>
                <div className="text-center max-w-3xl text-stone-400 text-xl mt-9 font-medium font-manrope">xProfile is an open-source app that provides a one-link portfolio for showcasing your projects, skills, social links, and more.</div>
                <CTAbtn />
            </div>
        </div>
    </div>
}

export default TopComponent