import React from 'react'
import { Nav } from './components/Nav'
import Image from 'next/image'
import { CreateProfile } from '@/components/create-profile'
import { getServerAuthSession } from '@/backend/auth'

const page = async () => {
  const session = await getServerAuthSession()
  return (
    <main className="min-h-screen min-w-full">
      <div className="absolute -z-20 top-0 left-0 w-full h-[96vh] bg-hero-pattern"></div>
      <Nav />
      <div className='absolute top-1/2 left-1/2 w-1/2  -translate-x-1/2 -translate-y-1/2 z-10 p-5 bg-transparent backdrop-blur-xl border rounded-xl overflow-hidden md:max-w-lg max-w-full' style={{ position: 'fixed' }}>
        <CreateProfile session={session} />
      </div>
      <Image alt='bg' width={600} height={600} src="loginbgart.svg" priority className="absolute bottom-0 right-0"></Image>
    </main>
  )
}

export default page