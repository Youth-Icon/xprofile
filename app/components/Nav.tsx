"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/app/components/toggle-btn";
import { Menu, GitForkIcon, StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Separator } from "@/app/components/ui/separator"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { useRouter } from "next/navigation";
import { FaDiscord } from "react-icons/fa";

export const Nav = () => {
  const { theme, setTheme } = useTheme();
  const [forksAndStars, setForksAndStars] = React.useState([0, 0]);
  useEffect(() => {
    async function fetchForksAndStars() {
      const res = await fetch(
        `https://api.github.com/repos/hellofaizan/xprofile`
      );
      const { forks_count, stargazers_count } = await res.json();
      setForksAndStars((prev) => [forks_count, stargazers_count]);
    }
    fetchForksAndStars();
  }, []);
  const router = useRouter();
  return (
    <div className="bg-transparent backdrop-blur-sm sm:px-6 lg:px-12 z-20 fixed top-0 w-full">
      <div className="flex h-16 items-center justify-between grid-cols-2">
        <div className="md:flex md:items-center md:gap-12 col-span-1">
          <div
            className="flex flex-row hover:cursor-pointer mx-2"
            onClick={() => router.replace("/")}
          >
            <span className="sr-only">Home</span>
            <svg width="40" height="40" viewBox="0 0 55 53" fill="none" strokeWidth="2.75" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.35587" y="2.08487" width="52.0653" height="48.8112" stroke="currentColor" strokeWidth="2.71173" />
              <path stroke="currentColor" fill="currentColor" strokeWidth="1" d="M34.7813 39.1532H28.464L22.8063 30.0938L17.2527 39.1532H11.8032L20.151 26.4146L12.0635 14.0577H18.3287L23.3443 22.1799L28.3078 14.0577H33.6879L25.9476 25.7551L34.7813 39.1532ZM37.4469 39.1532V33.6343H43.0006V39.1532H37.4469Z"/>
            </svg>            
          </div>
        </div>

        <div className="hidden sm:flex sm:gap-2 col-span-1">
          <Button className={cn("border hover:bg-zinc-200 border-zinc-400")} variant={'outline'} >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 icon icon-tabler icon-tabler-git-fork" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2"></path>
              <path d="M12 12l0 4"></path>
            </svg>
            {forksAndStars[0] || 0}
          </Button>
          <Button className={cn("border hover:bg-zinc-200 border-zinc-400")} variant={'outline'} ><svg xmlns="http://www.w3.org/2000/svg" className="w-6 icon icon-tabler icon-tabler-star" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
          </svg> {forksAndStars[1] || 0}</Button>
          <ModeToggle />
          <Button
            variant={"outline"}
            className={cn("border hover:bg-zinc-200 border-zinc-400")}
            size={"icon"}
          >
            <Link href={"https://discord.gg/vUHMxPvege"}>
              <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="40" fill="none" stroke="currentColor" width="24" viewBox="0 0 640 512"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" /></svg>
            </Link>
          </Button>
          <Link
            href="https://github.com/hellofaizan/xprofile"
            target="_blank"
            rel="noopener noreferrer"
            title="Add your 𝕏 (Twitter) Profile to this list :)" >
            <Button
              className={cn("border hover:bg-zinc-200 border-zinc-400")}
              variant={"outline"} >
              Contribute ⭐
            </Button>
          </Link>
        </div>

        <div className="flex mx-2 space-x-2 sm:hidden">
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button className="flex sm:hidden" variant={"link"} size={"icon"}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="dark:bg-[#121212] dark:text-white">
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
