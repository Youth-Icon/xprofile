"use client"

import { FC } from 'react'
import { UserAuthForm } from '@/components/use-auth-form'
import { signOut } from "next-auth/react"
import { Button } from '@/components/ui/button'

const page: FC = ({ }) => {
    return (
        <>
            <div className='flex flex-col space-y-4 justify-center items-center h-screen'>
                <UserAuthForm />
                <Button onClick={() => signOut()} variant="outline" size={"xxl"} type="button">
                    Sign Out
                </Button>
            </div>
        </>
    )
}

export default page