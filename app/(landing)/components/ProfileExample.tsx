import React from 'react'
import Image from 'next/image'
import { Icons } from '@/components/icons';

const ProfileExample = () => {
    return (
        <div className='mt-8 md:mt-24  overflow-hidden'>
            <div className="max-w-screen-md mx-5 rounded-3xl border p-2 md:p-4 flex-shrink-0 bg-neutral-500/10 text-stone-400 bg-opacity-30 backdrop-blur-3xl border-t border-b border-l">
                <div className="flex md:flex-row gap-2 md:gap-4 mb-2 px-1">
                    <Icons.boxlogo/>
                    <span className="place-self-end self-end font-medium text-sm md:text-xl">XProfile</span>
                </div>
                <div className="w-full">
                    <Image
                        src="/main.svg"
                        alt='Image'
                        width={0}
                        height={0}
                        sizes="100vw"
                        className='drop-shadow-lg'
                        style={{ width: '100%', height: 'auto' }} // optional
                    />
                </div>
            </div>
        </div>
    );
}

export default ProfileExample;
