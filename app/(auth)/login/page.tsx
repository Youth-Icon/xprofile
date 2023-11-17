import React from 'react'
import { UserAuthForm } from '@/components/use-auth-form'
import { getServerAuthSession } from "@/backend/auth";
import { redirect } from 'next/navigation';
import { Nav} from './components/Nav'
import Footer from "./components/Footer";
import Image from 'next/image';

const page = async ({ }) => {
    const session = await getServerAuthSession();

    if (session) {
        // redirect to url got from query
        redirect("/")
    }
    return (
        
        <main className="h-[100vh] w-[100vh]">
            <div className="absolute -z-20 top-0 left-0 w-full h-[96vh] bg-hero-pattern"></div>
            <Nav></Nav>
            <div className='absolute top-1/2 left-1/2 w-1/2  -translate-x-1/2 -translate-y-1/2 z-10 p-10 bg-transparent backdrop-blur-xl border rounded-xl overflow-hidden max-w-lg' style={{position: 'fixed'}}>
                <div className='absolute top-2 right-2'>
                </div>
                <div className='flex flex-col space-y-2 w-full'>
                    <UserAuthForm />
                </div>
            </div>
            <Image alt='bg' width={600} height={600} src="loginbgart.svg" className=" absolute bottom-0 right-0"></Image>
            <Footer></Footer>
        </main>
           
    )
}

export default page