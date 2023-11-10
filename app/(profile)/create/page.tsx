import React from 'react'
import { getServerAuthSession } from "@/backend/auth";
import { redirect } from 'next/navigation';

const Page = async () => {
    const session = await getServerAuthSession()

    if (!session) {
        redirect("/login")
    }

    return (
        <div>Hey it&apos;s Protected Route 👋</div>
    )
}

export default Page