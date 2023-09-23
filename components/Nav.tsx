"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/toggle-btn";
import { Github, Menu, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
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

export const Nav = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between grid-cols-2">
          <div className="md:flex md:items-center md:gap-12 col-span-1">
            <div className="flex flex-row">
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
            <ModeToggle />
            <Button variant={"link"} size={"icon"}>
              <Twitter />
            </Button>
            <Button variant={"link"} size={"icon"}>
              <Github />
            </Button>
            <Button variant={"link"} size={"default"}>
              <Link href={"https://discord.gg/vUHMxPvege"}>Join Discord</Link>
            </Button>
            <Link
              className={`rounded-md bg-[#282828] text-white hover:bg-gray-600 border border-gray-600 hidden  sm:block px-4 py-2.5 text-sm font-medium shadow`}
              href="https://github.com/hellofaizan/xprofile"
              target="_blank"
              rel="noopener noreferrer"
              title="Add your 𝕏 (Twitter) Profile to this list :)"
            >
              Contribute ⭐
            </Link>
          </div>

          <div className="flex space-x-2 sm:hidden">
            <ModeToggle />

            <Sheet>
              <SheetTrigger>
                <Button
                  className="flex sm:hidden"
                  variant={"link"}
                  size={"icon"}
                >
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
    </div>
  );
};
