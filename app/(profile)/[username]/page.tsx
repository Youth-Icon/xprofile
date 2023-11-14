import React from 'react'
import { getServerAuthSession } from "@/backend/auth";
import { redirect } from 'next/navigation';
import Header from './components/Header';
import Projects from './components/Projects';
import FeatureBox from '@/app/(landing)/components/FeatureBox';
import ProfileSidebar from './components/ProfileSidebar';




export default async function page() {
  const session = await getServerAuthSession();
  // console.log(session)

  return (
    <div>
      <div className='mx-[48px] mt-[24px]'>
        {/* Header Component */}
        <Header />
      </div>
      <div className="flex mx-[48px] mt-[32px]">
        <div>
          {/* Header Component */}
          <Projects />
        </div>
        <div>
          <ProfileSidebar />
        </div>
      </div>

    </div>

  )
};