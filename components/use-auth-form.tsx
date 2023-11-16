"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "./ui/button"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useToast } from "@/components/ui/use-toast"


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      await signIn("github", { callbackUrl: "/" })

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
      })
    } finally {
      setIsLoading(false)
    }

  }

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    try {
      await signIn("google", { callbackUrl: "/" })

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
      })
    } finally {
      setIsLoading(false)
    }

  }

  return (
    <div className={cn("grid gap-6 text-center", className)} {...props}>
      <h1 className=" text-2xl">Sign up</h1>
      <p className=" text-gray-500">Let&#39;s get started woth crafting your profile</p>

      <Button variant="outline" className=" border cursor-pointer" onClick={handleGoogleLogin} size={"xxl"} type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Continue with Google
      </Button>
      <Button variant="outline" className=" bg-white cursor-pointer text-black" onClick={handleLogin} size={"xxl"} type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Continue with Github
      </Button>
      
      <p>Already have an accout? <a href="#" className=" text-orange-600">Log in</a></p>
    </div>
  )
}