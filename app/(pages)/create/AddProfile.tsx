"use client";

import React from 'react'
import { Button } from "@/app/components/ui/button";
import { Check, X, Plus, Twitter, ArrowRight, ArrowLeft } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/app/components/ui/command";
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
} from "@/app/components/ui/alert-dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form"
import { Input } from "@/app/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"

import { useForm } from "react-hook-form";
import { formSchema } from "@/app/validators/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github } from 'lucide-react';
import { Textarea } from '@/app/components/ui/textarea';
import { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

type Input = z.infer<typeof formSchema>;

// get session from props
const AddProfile = (
  props: {
    session: any;
  }
) => {
  // get session from props
  const session = props.session;
  const searchParams = useSearchParams()
  const router = useRouter()

  // get username from slug
  const [formStep, setFormStep] = useState<number>(0);
  // const [inputTag, setInputTag] = useState<string>("");
  // const [open, setOpen] = useState<boolean>(false);
  // const [predefinedTags, setPredefinedTags] = useState<any[]>([]);
  const form = useForm<Input>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: session?.user?.id as string || "",
      name: "",
      username: searchParams?.get("u") || "",
      email: session?.user?.email as string || "",
      portfolio: "",
      github: "",
      avatar: session?.user?.image as string || "https://cdn.discordapp.com/attachments/1065518726855807067/1168414184501952603/depositphotos_245815634-stock-illustration-person-gray-photo-placeholder-man.png?ex=6551ad81&is=653f3881&hm=21fda0259b916c8148051e85b39ac58b94965d50950c93e18c21cb5eb20b09b8&",
      about: "",
      color: "#9fff5b",
      tags: ["Coder", "Designer", "Human"],
      location: "",
      socials: [""],
      projects: [{ tags: [], title: "", description: "", webURL: "", repoLink: "", language: "", upVote: 0 }],
      links: [{ title: "", url: "", clicks: 0 }]
    },

  });

  // const removeTag = (tag: any) => {

  // };

  // const renderInput = () => {
  //   return (
  //     <Popover open={open} onOpenChange={setOpen}>
  //       <PopoverTrigger asChild>
  //         <Button
  //           variant="link"
  //           type="button"
  //           role="combobox"
  //           aria-expanded={open}
  //           className="hover:bg-slate-200 dark:hover:bg-zinc-800 cursor-pointer rounded-full"
  //         >
  //           <Plus size={15} />
  //         </Button>
  //       </PopoverTrigger>
  //       <PopoverContent className="w-[200px] p-0">
  //         <Command>
  //           <CommandInput placeholder="Search tag..." />
  //           <CommandEmpty>No tag found.</CommandEmpty>
  //           <CommandGroup className="bg-slate-200 dark:bg-zinc-950 text-zinc-900 dark:text-slate-100">
  //             {predefinedTags.map((tag: any) => (
  //               <CommandItem
  //                 key={tag.value}
  //                 onSelect={(currentValue: any) => {
  //                   setInputTag(currentValue === inputTag ? "" : currentValue);

  //                   // Check if the tag is already in data.tags before adding it
  //                   // if (!data.tags.includes(tag.label)) {
  //                   //   setData({
  //                   //     ...data,
  //                   //     tags: [...data.tags, tag.label],
  //                   //   });
  //                   // }

  //                   setOpen(false);
  //                 }}
  //               >
  //                 <Check
  //                   className={cn(
  //                     "mr-2 h-4 w-4",
  //                     inputTag === tag.value ? "opacity-100" : "opacity-0"
  //                   )}
  //                 />
  //                 {tag.label}
  //               </CommandItem>
  //             ))}
  //           </CommandGroup>
  //         </Command>
  //       </PopoverContent>
  //     </Popover>
  //   );
  // };

  function onSubmit(data: Input) {
    alert(JSON.stringify(data, null, 4));
  }

  console.log(form.watch())

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in few clicks</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className={cn(
                  "space-y-4",
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
                          <Input placeholder={session ? session.user.name : "Your Name"} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Github */}
                  <FormField
                    control={form.control}
                    name="github"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className='flex justify-start items-center align-middle'>
                            <Github className='w-10 h-10' />
                            <Input placeholder="Your Github Handle" {...field} />
                          </div>
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
                  {/* Location */}
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Location" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Color Picker */}
                  <FormField
                    control={form.control}
                    name="color"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Banner Color</FormLabel>
                        <FormControl>
                          <Input type='color' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* About */}
                  <FormField
                    control={form.control}
                    name="about"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>About</FormLabel>
                        <FormControl>
                          <Textarea placeholder="About you" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Socials */}
                <div className={cn(
                  "space-y-4",
                  formStep === 1 ? "block" : "hidden"
                )}>
                  {/* make multiple input tags for socials                   */}
                  <FormField
                    control={form.control}
                    name="socials"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Socials</FormLabel>
                        <FormControl>
                          <Input placeholder="Twitter" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="socials"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Instagram" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="socials"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="LinkedIn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='flex justify-between'>
                  {
                    formStep === 0 ?
                      <AlertDialog>
                        <AlertDialogTrigger asChild><Button variant="outline">Cancel</Button></AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete your account
                              and remove your data from our servers.
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
                        form.trigger(["name", "github", "location", "about"])
                        const name = form.getValues("name")
                        const github = form.getValues("github")
                        const location = form.getValues("location")
                        const about = form.getValues("about")
                        if (name && github && location && about) {
                          setFormStep(1)
                        }
                      }}>Next <ArrowRight /></Button>
                      : formStep === 1 ? <Button onClick={() => setFormStep(2)}>Next</Button>
                        : formStep === 2 ? <Button>Submit</Button>
                          : null
                  }
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-between">

          </CardFooter>
        </Card>

      </div>
    </>
  )
}

export default AddProfile