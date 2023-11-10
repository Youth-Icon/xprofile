
import React from 'react'
import { getServerAuthSession } from "@/backend/auth";
import LandingNav from '@/components/LandingNav';
import Image from "next/legacy/image";
import HeroSection from './components/HeroSection';

export default async function page() {
  const session = await getServerAuthSession();
  // console.log(session)
  return (
    <>
      <div className='main min-h-screen'>
        {/* cover backgound image */}
        <HeroSection />
      </div>
    </>
  )
}

