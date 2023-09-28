"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/toggle-btn";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
    <div className="bg-[rgba(255,255,255,0.5)] dark:bg-[#18181b82]  backdrop-blur-[5px] sm:px-6 lg:px-8 z-20 fixed top-0 w-full">
      <div className="flex h-16 items-center justify-between grid-cols-2">
        <div className="md:flex md:items-center md:gap-12 col-span-1">
          <div
            className="flex flex-row hover:cursor-pointer"
            onClick={() => router.replace("/")}
          >
            <span className="sr-only">Home</span>
            <Image
              src={cn(theme === "light" ? "/x_black.png" : "/x_white.png")}
              alt="Logo"
              width={40}
              height={40}
              priority
            />
          </div>
        </div>

        <div className="hidden sm:flex sm:gap-2 col-span-1">
          {/* <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row">
              
            </div>
          </div> */}
          <ModeToggle />
          <Button
            variant={"outline"}
            className={cn("border hover:bg-zinc-200 border-zinc-400")}
            size={"icon"}
          >
            <Link href={"https://discord.gg/vUHMxPvege"}><FaDiscord size={24}/></Link>
          </Button>
          <Link
            href="https://github.com/hellofaizan/xprofile"
            target="_blank"
            rel="noopener noreferrer"
            title="Add your 𝕏 (Twitter) Profile to this list :)"
          >
            <Button
              className={cn("border hover:bg-zinc-200 border-zinc-400")}
              variant={"outline"}
            >
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
