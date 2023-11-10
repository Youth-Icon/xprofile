"use client";

import { Button } from '@/components/ui/button'
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import React from 'react'
import {
    Form,
    FormControl,
    FormField,
} from "@/components/ui/form"
import { useRouter } from 'next/navigation'
import { Fira_Sans_Extra_Condensed } from 'next/font/google';

const usernameSchema = z.object({
    username: z
        .string()
        .min(1, {
            message: "Username must be at least 1 character long.",
        })
        .max(30, {
            message: "Username must not be longer than 30 characters.",
        }),
})

type UsernameValues = z.infer<typeof usernameSchema>

const CTAbtn = () => {
    const router = useRouter()

    const form = useForm<UsernameValues>({
        resolver: zodResolver(usernameSchema),
        mode: "onChange",
    })

    function onSubmit(data: UsernameValues) {
        localStorage.setItem("username", data.username.replace(/\s/g, '').replace(/[^a-zA-Z0-9]/g, ''))
        router.push("/create")
    }

    // console.log(form.formState.errors)
    return (
        <>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-2 mt-[68px] justify-center items-center'>
                        <div className="flex rounded-xl">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormControl>
                                        <input className="rounded-l-[12px] p-4 border-t mr-0 border-b border-l bg-transparent lowercas" placeholder={"username"} {...field} />
                                    </FormControl>
                                )}
                            />
                            <p className="px-4 rounded-r-[12px] bg-neutral-400 bg-opacity-30 backdrop-blur-3xl font-manrope text-neutral-400  p-4 ">.xprofile.me</p>
                        </div>
                        <Button type='submit' className="h-15 hover:shadow-md hover:shadow-[#FF5400]/20 bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] hover:bg-gradient-to-r hover:from-[#FF5400] hover:via-[#FF0054] hover:to-[#FF0054] rounded-xl text-white bg-transparent text-md font-bold font-manrope p-4 px-5">CLAIM NOW ✨</Button>
                    </form>
                </Form>
            </div>
        </>
    )
}

export default CTAbtn