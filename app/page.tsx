import Image from 'next/image'
import { ModeToggle } from '@/components/toggle-btn'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
export default function Home() {
  return (
    <>
      <main className='flex flex-col'>
        <Nav />
        <div className='flex flex-col items-center justify-center min-h-screen py-2 '>
          <p className="scroll-m-20 hover:text-green-500 text-3xl font-semibold tracking-tight">
            <Link href='https://x.hellofaizan.me'>
              Under construction 🚧
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}
