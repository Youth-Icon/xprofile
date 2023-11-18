"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Code, LucideWorkflow, User } from "lucide-react"
import { Separator } from "./ui/separator"


interface CreateProfile extends React.HTMLAttributes<HTMLDivElement> { }

export function CreateProfile({ className, ...props }: CreateProfile) {
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [formStep, setFormStep] = useState<number>(0);

    return (
        <div className={"grid gap-6 text-center z-50"}>
            <h1 className=" text-2xl">Complete your profile</h1>
            {/* Steps to complete your profile */}
            <div className="w-full grid grid-flow-col gap-1 justify-stretch">
                <div className="flex flex-col gap-1 items-center">
                    <p className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center",
                        formStep === 0 ? "bg-[#FF5400]/20 text-[#FF5400]" : "bg-[#8D8D8D]/10 text-white"
                    )}>1</p>
                    <p className={cn(
                        "text-sm",
                        formStep === 0 ? "text-[#FF5400]" : "text-[#8D8D8D]"
                    )}>Profile</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <p className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center",
                        formStep === 1 ? "bg-[#FF5400]/20 text-[#FF5400]" : "bg-[#8D8D8D]/10 text-white"
                    )}>2</p>
                    <p className={cn(
                        "text-sm",
                        formStep === 1 ? "text-[#FF5400]" : "text-[#8D8D8D]"
                    )}>Profile</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <p className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center",
                        formStep === 2 ? "bg-[#FF5400]/20 text-[#FF5400]" : "bg-[#8D8D8D]/10 text-white"
                    )}>3</p>
                    <p className={cn(
                        "text-sm",
                        formStep === 2 ? "text-[#FF5400]" : "text-[#8D8D8D]"
                    )}>Profile</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <p className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center",
                        formStep === 3 ? "bg-[#FF5400]/20 text-[#FF5400]" : "bg-[#8D8D8D]/10 text-white"
                    )}>4</p>
                    <p className={cn(
                        "text-sm",
                        formStep === 3 ? "text-[#FF5400]" : "text-[#8D8D8D]"
                    )}>Profile</p>
                </div>
            </div>
            <Separator />
        </div>
    )
}