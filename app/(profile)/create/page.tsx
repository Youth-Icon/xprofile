import React from 'react'
import { getServerAuthSession } from "@/backend/auth";
import { redirect } from 'next/navigation';
import Header from './components/Header';



export default async function page() {
    const session = await getServerAuthSession();
    // console.log(session)

    return (

        <div className='mx-[48px] mt-[24px]'>
        {/* Header Component */}
        <Header/>
        </div>
    );
};