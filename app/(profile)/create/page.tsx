import { FC } from 'react'
import Image from 'next/image'
import { Nav } from './components/Nav'
import { CreateProfile } from '@/components/create-profile'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return (
    <>
      <main className="h-[100vh] w-[100vh]">
        <div className="absolute -z-20 top-0 left-0 w-full h-[96vh] bg-hero-pattern"></div>
        <Nav />
        <div className='absolute top-1/2 left-1/2 w-1/2  -translate-x-1/2 -translate-y-1/2 z-10 p-5 bg-transparent backdrop-blur-xl border rounded-xl overflow-hidden max-w-xl' style={{ position: 'fixed' }}>
          <CreateProfile />
        </div>
        <Image alt='bg' width={600} height={600} src="loginbgart.svg" priority className=" absolute bottom-0 right-0"></Image>
      </main>
    </>
  )
}

export default page