import React from "react";
export function Nav(){
    return(
        <nav className=" w-screen flex p-2 items-center bg-black">
            <h1 className=" text-2xl" ><span className="text-orange-600">X</span>Profile</h1>
            <span className=" text-gray-600 ml-[80%] cursor-pointer hover:text-orange-600">Need help?</span>
        </nav>
    )
}