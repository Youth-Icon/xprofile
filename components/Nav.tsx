"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { ModeToggle } from '@/components/toggle-btn'
import { Github, Twitter } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

export const Nav = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <div className="flex flex-row">
              <span className="sr-only">Home</span>
              <Image
                src={cn(theme === "dark" ? "/x_white.png" : "/x_black.png")}
                alt="Logo"
                width={40}
                height={40}
                priority
              />
              <Separator orientation="vertical" />
            </div>
          </div>
          {/* <div className="hidden sm:block">
                  <form className="flex items-center w-80">
                    <label htmlFor="simple-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full">
                      <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        id="simple-search"
                        className={`border border-gray text-sm rounded-lg block shadow w-full pl-3 p-2.5  ${theme == "light" ? "bg-white" : "bg-[#0e0e0e]"
                          }  border-gray-600 placeholder-gray-400 ${theme == "dark" ? "text-white" : "text-black"
                          } focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Search by Name or Username..."
                        required
                      ></input>
                    </div>
                  </form>
                </div> */}
          <div className="hidden sm:flex items-center sm:gap-2">
            <ModeToggle />
            <Button variant={"link"} size={"icon"}>
              <Twitter />
            </Button>
            <Button variant={"link"} size={"icon"}>
              <Github />
            </Button>
            <Button variant={"link"} size={"default"}>
              Join Discord
            </Button>
            <Link
              className={`rounded-md bg-[#0e0e0e] text-white hover:bg-gray-600 border border-gray-600 hidden  sm:block px-4 py-2.5 text-sm font-medium shadow`}
              href="https://github.com/hellofaizan/xprofile"
              target="_blank"
              rel="noopener noreferrer"
              title="Add your 𝕏 (Twitter) Profile to this list :)"
            >
              Contribute ⭐
            </Link>
          </div>
        </div >
      </div >
    </div >
  )
}

