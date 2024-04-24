"use client"
import React, { useEffect, useState } from "react";
import Round from "@/app/(landing)/components/round";
import { ArrowUpWideNarrow } from "lucide-react";
const axios = require("axios")
export function Ratings(){
    const [users, setUsers] = useState<number>(0);
    const [discord, setDiscord] = useState<number>(0);
    useEffect(()=>{
        const finalUsers = 100;
        let count = 0;
        
        const interval = setInterval(() => {
            if (count <= finalUsers) {
                setUsers(count);
                count++;
            } else {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    },[])
    useEffect(()=>{
        const url = "https://discord.com/api/v9/invites/vUHMxPvege?with_counts=true&with_expiration=true"
        axios.get(url)
            .then((response: any) => {
                const finalDiscordUsers = response.data.approximate_member_count;
                let count = 0;
                
                const interval = setInterval(() => {
                    if (count <= finalDiscordUsers) {
                        setDiscord(count);
                        count++;
                    } else {
                        clearInterval(interval);
                    }
                }, 100);
                return () => clearInterval(interval);
            })
            .catch((error: any) => {
                console.error(error);
            });
    },[])
    return(
        <section className=" text-white text-xl flex justify-center items-center  rounded w-1/2 h-[50%] absolute bottom-[-25%] shadow-lg bg-gradient-to-l from-orange-500/10 to-pink-500/10 backdrop-blur-md">
            <Round className="hidden xs:block absolute left-[-6rem] top-[-9rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full z-10" />
            <Round className="hidden xs:block absolute right-[-16rem] top-[1rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[150px] rounded-full z-10 " />
            <div className=" text-center w-1/2">
                <h3 className="text-center">Users</h3>
                <div className="flex text-green-500 items-center justify-center">{users.toString()}+ <ArrowUpWideNarrow/></div>
            </div>                
            <div className=" border rotate-90 w-[50px]" />
            <div className=" text-center w-1/2">
                <h3 className="text-center">Discord Server</h3>
                <div className="flex text-green-500 items-center justify-center">{discord.toString()}+ <ArrowUpWideNarrow/></div>
            </div>                
        </section>
    )
}