"use client";
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import React from 'react'
import {
    Form,
    FormControl,
    FormField,
} from "@/components/ui/form"
import { useRouter } from 'next/navigation'
import { ExternalLink } from 'lucide-react';

const usernameSchema = z.object({
    username: z
        .string()
        .min(1, {
            message: "Username must be at least 1 character long.",
        })
        .max(30, {
            message: "Username must not be longer than 30 characters.",
        })
        .regex(/^[a-zA-Z0-9]+$/, {
            message: "Spaces and special characters are not allowed.",
        }),
})

type UsernameValues = z.infer<typeof usernameSchema>

const CTAbtn = ({
    session,
}: any) => {
    const router = useRouter()

    const form = useForm<UsernameValues>({
        resolver: zodResolver(usernameSchema),
        mode: "onChange",
    })

    function onSubmit(data: UsernameValues) {
        router.push("/create?username=" + data.username)
    }

    // Completed Form ?
    const isProfile = session?.user?.completedProfile;
    return (
        <>
            <div>
                {isProfile ? (
                    // Stylish Navigate to your Profile Button
                    <Button
                        className='mt-10 border bg-white/10 backdrop-blur-3xl hover:bg-white/5'
                        size={'xxl'}
                        onClick={() => router.push("/" + session?.user?.username)}
                    >
                        <div className="flex py-5 justify-center items-center space-x-3">
                            <Image src={session?.user?.image} width={10} height={10} alt="User Profile" className="rounded-full w-8 h-8" />
                            <span className="flex gap-2 font-manrope text-neutral-400 text-lg">
                                Go to your Profile
                                <ExternalLink />
                            </span>
                        </div>
                    </Button>
                ) : (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col md:gap-4 mt-4 md:mt-12 md:flex-row md:items-center'>
                            <div className="flex md:flex-row ">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormControl>
                                            <input className="rounded-l-[12px] p-4 border-t mr-0 border-b border-l bg-transparent lowercas" placeholder={"username"} {...field} />
                                        </FormControl>
                                    )}
                                />
                                <p className="md:px-4 rounded-r-[12px] bg-neutral-400 bg-opacity-30 backdrop-blur-3xl font-manrope text-neutral-400 p-4">.xprofile.me</p>
                            </div>
                            <Button type='submit' className="mt-4 md:mt-0 h-15 hover:shadow-md hover:shadow-[#FF5400]/20 bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] hover:bg-gradient-to-r hover:from-[#FF5400] hover:via-[#FF0054] hover:to-[#FF0054] rounded-xl text-white bg-transparent text-md font-bold font-manrope p-4 px-5 whitespace-nowrap md:self-start">CLAIM NOW ✨</Button>
                        </form>
                    </Form>
                )}
            </div>
        </>
    )
}

export default CTAbtn;
