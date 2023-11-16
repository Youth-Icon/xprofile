"use client"

import { UserAuthForm } from '@/components/use-auth-form'
import { X } from 'lucide-react'
import { FC, useState} from 'react'


export function LoginComponent() {
    const [login, setlogin] = useState(true)
    return (
        <div>
            {login?(
                <div className='absolute top-1/2 left-1/2 w-1/2  -translate-x-1/2 -translate-y-1/2 z-10 p-10 bg-transparent backdrop-blur-xl border rounded-xl overflow-hidden max-w-lg' style={{position: 'fixed'}}>
                    <X className=' cursor-pointer' onClick={()=>{setlogin(false)}}/>
                    <div className='flex flex-col space-y-2 w-full'>
                        <UserAuthForm />
                    </div>
                        
                </div>
                
            ):(<></>)}
        </div>
    )
}
