import Link from "next/link";
import React from "react";
export function Nav() {
    return (
        <nav className=" w-screen flex justify-between p-2 px-4 items-center bg-transparent">
            <Link className=" text-2xl" href={"/"} ><span className="text-orange-600">X</span>Profile</Link>
            <Link href={"/help"} target="_blank">
                <span className=" text-gray-600 cursor-pointer hover:text-orange-600">Need help?</span>
            </Link>
        </nav>
    )
}