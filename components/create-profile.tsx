"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import Image from "next/image"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Separator } from "./ui/separator"
import { useForm, useFieldArray } from "react-hook-form";
import { completeForm, formSchema } from "@/backend/validators/createForm"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";

type Input = z.infer<typeof completeForm>;

interface CreateProfile extends React.HTMLAttributes<HTMLDivElement> { }

export function CreateProfile(props: {
    session: any;
}) {
    const router = useRouter()
    const { session } = props
    const searchParams = useSearchParams()
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [formStep, setFormStep] = useState<number>(0);
    const [intrests, setIntrests] = useState<string[]>([]);
    const [socialsFields] = useState([
        {
            type: "Github",
            handle: "",
            clicks: 0,
        },
        {
            type: "Twitter",
            handle: "",
            clicks: 0,
        },
        {
            type: "Instagram",
            handle: "",
            clicks: 0,
        },
        {
            type: "Linkedin",
            handle: "",
            clicks: 0,
        },
        {
            type: "Youtube",
            handle: "",
            clicks: 0,
        },
    ]);

    const completeProfileForm = useForm<Input>({
        resolver: zodResolver(completeForm),
        defaultValues: {
            name: session?.user.name || "",
            username: searchParams?.get("u") || "",
            about: "",
            profession: "",
            portfolio: "",
            pronouns: "",
            completedProfile: true,
        },
    });

    async function handleSubmit(data: Input) {
        setIsLoading(true);
        // try {
        //     const res = await fetch("/api/profile", {
        //         method: "POST",
        //         body: JSON.stringify(data),
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     });
        //     if (res.ok) {
        //         toast({
        //             title: "Profile created",
        //             description: "Your profile has been created successfully",
        //         });
        //     } else {
        //         toast({
        //             title: "Error",
        //             description: "Something went wrong",
        //         });
        //     }
        // } catch (error) {
        //     toast({
        //         title: "Error",
        //         description: "Something went wrong",
        //     });
        // } finally {
        //     setIsLoading(false);
        // }
        alert(JSON.stringify(data))
    }

    async function updateProfile() {
        const data = completeProfileForm.getValues();
        const isValid = await completeProfileForm.trigger();
        if (isValid) {
            // axiom post request
            const res = await fetch("/api/profile", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (res.ok) {
                toast({
                    title: "Profile Updated!",
                    description: "Your profile has been created successfully",
                });
                setFormStep(1);
            } else {
                toast({
                    title: "Error",
                    description: "Something went wrong",
                });
            }
        }
    }

    return (
        <div className={"grid gap-4 items-center z-50"}>
            <h1 className=" text-xl text-center">Complete your profile</h1>
            {/* Steps to complete your profile */}
            <div className="w-full grid grid-flow-col gap-1 justify-stretch">
                <div className="flex flex-col gap-1 items-center">
                    <p className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        formStep === 0 ? "bg-[#FF5400]/20 text-[#FF5400]" : "bg-[#8D8D8D]/10 text-white"
                    )}>1</p>
                    <p className={cn(
                        "text-xs",
                        formStep === 0 ? "text-[#FF5400]" : "text-[#8D8D8D]"
                    )}>Profile</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <p className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        formStep === 1 ? "bg-[#FF5400]/20 text-[#FF5400]" : "bg-[#8D8D8D]/10 text-white"
                    )}>2</p>
                    <p className={cn(
                        "text-xs",
                        formStep === 1 ? "text-[#FF5400]" : "text-[#8D8D8D]"
                    )}>Profile</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <p className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        formStep === 2 ? "bg-[#FF5400]/20 text-[#FF5400]" : "bg-[#8D8D8D]/10 text-white"
                    )}>3</p>
                    <p className={cn(
                        "text-xs",
                        formStep === 2 ? "text-[#FF5400]" : "text-[#8D8D8D]"
                    )}>Profile</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <p className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        formStep === 3 ? "bg-[#FF5400]/20 text-[#FF5400]" : "bg-[#8D8D8D]/10 text-white"
                    )}>4</p>
                    <p className={cn(
                        "text-xs",
                        formStep === 3 ? "text-[#FF5400]" : "text-[#8D8D8D]"
                    )}>Profile</p>
                </div>
            </div>

            <Separator />
            {/* Form */}
            <Form {...completeProfileForm}>
                <form onSubmit={completeProfileForm.handleSubmit(handleSubmit)}>
                    {/* Step 1 */}
                    <div className={cn(
                        "space-y-4 mb-2",
                        formStep === 0 ? "block" : "hidden"
                    )}>
                        {/* Name */}
                        <FormField
                            control={completeProfileForm.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder={"Your Name"} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Username */}
                        <FormField
                            control={completeProfileForm.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Unique Username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Portfolio */}
                        <FormField
                            control={completeProfileForm.control}
                            name="portfolio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className='flex justify-start gap-1 items-center align-middle'>
                                            <Image
                                                src={"https://icon.horse/icon/" + { ...field }.value + "/256.png"}
                                                alt={"Web Icon of " + { ...field }.value}
                                                width={35}
                                                height={35}
                                                className="rounded-sm"
                                            />
                                            <Input placeholder="yourportfolio.com" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Profession */}
                        <FormField
                            control={completeProfileForm.control}
                            name="profession"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Profession</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Role" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Pronouns */}
                        <FormField
                            control={completeProfileForm.control}
                            name="pronouns"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Pronouns</FormLabel>
                                    <FormControl>
                                        <Input placeholder="he/him || she/her" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Bio */}
                        <FormField
                            control={completeProfileForm.control}
                            name="about"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>About</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Tell us about yourself" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Next Button */}
                        <div className="flex justify-between">
                            <AlertDialog>
                                <AlertDialogTrigger asChild><Button variant="outline">Cancel</Button></AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This will redirect you to the home page and you will lose all your progress.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogAction onClick={() => {
                                            router.push('/')
                                        }}>Continue</AlertDialogAction>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                            <Button
                                className="px-10"
                                type="button"
                                onClick={() => updateProfile()}
                            >
                                Next
                            </Button>
                        </div>

                    </div>
                </form>
            </Form>
        </div>
    )
}