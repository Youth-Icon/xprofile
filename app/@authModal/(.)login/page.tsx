"use client"

import { Button, buttonVariants } from '@/components/ui/button'
import { UserAuthForm } from '@/components/use-auth-form'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { FC } from 'react'
import CloseModel from './components/CloseModel'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div className='absolute top-1/2 left-1/2 h-56 -translate-x-1/2 -translate-y-1/2 z-10 p-10 bg-transparent backdrop-blur-xl border rounded-xl overflow-hidden max-w-lg'>
        <div className='absolute top-2 right-2'>
            <CloseModel />
        </div>
        <div className='flex flex-col space-y-2 w-full'>
            <UserAuthForm />
        </div>
    </div>
}

export default page