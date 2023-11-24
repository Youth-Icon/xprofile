"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "./ui/button"
import { Input } from "./ui/input"
import { TagInput } from "./TagsInput"
import { Textarea } from "./ui/textarea"
import Image from "next/image"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Separator } from "./ui/separator"
import { useForm, useFieldArray } from "react-hook-form";
import { formSchema } from "@/backend/validators/createForm"
import { z } from "zod";
import { Github, Instagram, Linkedin, Twitter, Youtube, ArrowLeft, ArrowRight, Plus, X } from "lucide-react";
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
import { Dropdown } from "./dropdown"

type Input = z.infer<typeof formSchema>;

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
    const [linkOrder, setLinkOrder] = useState<number>(1);
    const [intrests, setIntrests] = useState<string[]>([]);
    const [skills, setSkills] = useState<[]>([]);
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

    const dropdownOptions = [
        { name: 'Option 1', icon: 'devicon-androidstudio-plain' },
        { name: 'Option 2', icon: 'devicon-adonisjs-original' },
        { name: 'Option 3', icon: 'devicon-amazonwebservices-original' },
        { name: 'option', icon: 'devicon-androidstudio-plain' }
        // Add more options as needed
    ];

    const form = useForm<Input>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: session?.user.name || "",
            username: searchParams?.get("username") || "",
            about: "",
            profession: "",
            portfolio: "",
            pronouns: "",
            completedProfile: true,
            socials: socialsFields,
            links: [{ title: "", order: linkOrder, url: "" }],
            skills: [{ title: "", icon: "" }],
            interests: ["XProfile", "Coding"],
            // projects: [{ title: "", description: "", repoLink: "", webURL: "", tags: [], language: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        name: "links",
        control: form.control,
    })


    const getSocialIcon = (socialType: string) => {
        switch (socialType) {
            case "Github":
                return <Github className="w-10 h-10" />;
            case "Twitter":
                return <Twitter className="w-10 h-10" />;
            case "Instagram":
                return <Instagram className="w-10 h-10" />;
            case "Linkedin":
                return <Linkedin className="w-10 h-10" />;
            case "Youtube":
                return <Youtube className="w-10 h-10" />;
            default:
                return null;
        }
    };

    const { setValue } = form;


    async function handleSubmit(data: Input) {
        setIsLoading(true);
        alert(JSON.stringify(data, null, 2));
        console.log(data);
    }
    // form logs
    // console.log(form.getValues());
    console.log(form.formState.errors);

    // async function updateProfile() {
    //     const data = completeProfileForm.getValues();
    //     const isValid = await completeProfileForm.trigger();
    //     if (isValid) {
    //         // axiom post request
    //         const res = await fetch("/api/profile", {
    //             method: "POST",
    //             body: JSON.stringify(data),
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         if (res.ok) {
    //             toast({
    //                 title: "Profile Updated!",
    //                 description: "Your profile has been created successfully",
    //             });
    //             setFormStep(1);
    //         } else {
    //             toast({
    //                 title: "Error",
    //                 description: "Something went wrong",
    //             });
    //         }
    //     }
    // }

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
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>

                    {/* Step 1 */}
                    <div className={cn(
                        "space-y-4 mb-2",
                        formStep === 0 ? "block" : "hidden"
                    )}>
                        {/* Name */}
                        <FormField
                            control={form.control}
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
                            control={form.control}
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
                            control={form.control}
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
                            control={form.control}
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
                            control={form.control}
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
                            control={form.control}
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

                    </div>

                    {/* Step2 - */}
                    <div className={cn(
                        "space-y-4 mb-2",
                        formStep === 1 ? "block" : "hidden"
                    )}>
                        {/* Skills Picker */}
                        {fields.map((field, index) => (
                            <>
                                <div className='space-y-2' key={field.id}>
                                    {/* Skills */}
                                    <FormField
                                        control={form.control}
                                        name={`skills.${index}.title`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Skills</FormLabel>
                                                <FormControl>
                                                    {/* Skills Icon Picker */}
                                                    <Dropdown options={dropdownOptions} selectedOption={skills} setSelectedOption={setSkills} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </>
                        ))}


                        {/* Intrests Picker */}
                        <FormField
                            control={form.control}
                            name="interests"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Interests</FormLabel>
                                    <FormControl>
                                        <TagInput
                                            {...field}
                                            placeholder="Seperate each interest with a comma"
                                            tags={intrests}
                                            className='w-full'
                                            setTags={(newTags) => {
                                                setIntrests(newTags);
                                                setValue("interests", newTags as [string, ...string[]]);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>

                    {/* Step 3 - Links */}
                    <div className={cn(
                        "space-y-4 mb-2",
                        formStep === 2 ? "block" : "hidden"
                    )}>
                        {fields.map((field, index) => (
                            <>
                                <div className='space-y-2' key={field.id}>
                                    {/* <p>Showcase all your links</p> */}
                                    <FormField
                                        control={form.control}
                                        name={`links.${index}.title`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className='flex justify-between'>
                                                    <FormLabel>URL {index + 1}</FormLabel>
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        onClick={() => {
                                                            if (fields.length > 1) {
                                                                remove(index);
                                                            }
                                                        }}
                                                        className={cn("py-1 px-3 h-full hover:bg-transparent")}
                                                    >
                                                        <X size={14} />
                                                    </Button>
                                                </div>
                                                <FormControl>
                                                    <Input {...field} placeholder="URL Title" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name={`links.${index}.url`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input {...field} placeholder="URL" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </>
                        ))}
                        <div className={cn(
                            "w-full py-2 px-2 pl-5 flex gap-3 cursor-pointer",
                            buttonVariants({ variant: "secondary" })
                        )} onClick={() => {
                            setLinkOrder(linkOrder + 1);
                            append({ title: "", order: linkOrder + 1, url: "" });
                        }}>
                            <Plus size={14} />
                            Add another link
                        </div>
                    </div>

                    {/* Step 4 - Socials */}
                    <div className={cn(
                        "space-y-4 mb-2",
                        formStep === 3 ? "block" : "hidden"
                    )}>
                        {/* Socials Picker */}
                        <div className="space-y-5">
                            {socialsFields.map((social, index) => (
                                <div key={index}>
                                    <FormField
                                        control={form.control}
                                        name={`socials.${index}.handle`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <div className="flex justify-start items-center align-middle">
                                                        {getSocialIcon(social.type)}
                                                        <Input
                                                            type="text"
                                                            placeholder={`Your ${social.type} Handle`}
                                                            {...field}
                                                        />
                                                    </div>
                                                </FormControl>
                                                {social.type === 'Github' && form.formState.errors?.socials?.[index]?.handle && (
                                                    <FormMessage>{form.formState.errors?.socials?.[index]?.handle?.message}</FormMessage>
                                                )}
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Close Bitton */}
                    <div className='flex justify-between mt-5'>
                        {
                            formStep === 0 ?
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
                                :
                                <Button onClick={() => setFormStep(formStep - 1)} variant='ghost'><ArrowLeft /> Go Back</Button>
                        }

                        {
                            formStep === 0 ?
                                <Button onClick={() => {
                                    // zod validation
                                    form.trigger(["name", "username", "profession", "pronouns", "about"]);
                                    const name = form.getValues("name")
                                    const username = form.getValues("username")
                                    const profession = form.getValues("profession")
                                    const about = form.getValues("about")
                                    // const portfolio = form.getValues("portfolio")

                                    if (name && username && profession && about) {
                                        setFormStep(1)
                                    }
                                }}>Next <ArrowRight /></Button>
                                : formStep === 1 ? <Button onClick={() => {
                                    const skills = form.getValues("skills")
                                    const interests = form.getValues("interests")
                                    if (skills && interests) {
                                        setFormStep(2)
                                    } else {
                                        form.trigger(["skills", "interests"])
                                        return
                                    }
                                }}>Next <ArrowRight /></Button>
                                    : formStep === 2 ? <Button onClick={() => {
                                        setFormStep(3)
                                    }}>Next <ArrowRight /></Button>
                                        : formStep === 3 ? <Button type='submit'>Submit</Button>
                                            : null
                        }
                    </div>
                </form>
            </Form>
        </div >
    )
}