import React from 'react'
import { UserAuthForm } from '@/components/use-auth-form'
import { getServerAuthSession } from "@/backend/auth";
import { redirect } from 'next/navigation';

const page = async ({ }) => {
    const session = await getServerAuthSession();

    if (session) {
        // redirect to url got from query
        redirect("/")
    }
    return (
        <>
            <div className='flex flex-col space-y-4 justify-center items-center h-screen'>
                <UserAuthForm />
            </div>
        </>
    )
}

export default page