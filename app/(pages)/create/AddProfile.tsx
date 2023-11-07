"use client";

import React from 'react'
import { Button } from "@/app/components/ui/button";
import { Check, X, Plus, Twitter, ArrowRight, ArrowLeft, Instagram, Linkedin, Youtube } from "lucide-react";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form"
import { Input } from "@/app/components/ui/input"
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
import { TagInput } from '@/app/components/TagInput';
import { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { GradientPicker } from '@/app/components/ColorPicker';

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
  const [tags, setTags] = useState<string[]>([]);
  const [background, setBackground] = useState('#9fff5b')

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
      socials: [
        { type: "", handle: "", clicks: 0 },
      ],
      projects: [{ tags: [], title: "", description: "", webURL: "", repoLink: "", language: "", upVote: 0 }],
      links: [{ title: "", url: "", clicks: 0 }]
    },

  });


  const { setValue } = form;

  function handleSubmit(data: z.infer<typeof formSchema>) {
    console.log(JSON.stringify(data, null, 2));
  }

  console.log(form.getValues());

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
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">

                {/* Step 1 */}
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
                          <GradientPicker {...field} className='w-full' background={background} setBackground={(background) => {
                            setBackground(background)
                            setValue('color', background)
                          }} />
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

                {/* Step 2 */}
                <div className={cn(
                  "space-y-4",
                  formStep === 1 ? "block" : "hidden"
                )}>
                  <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skills</FormLabel>
                        <FormControl>
                          <TagInput
                            {...field}
                            placeholder="Enter a topic"
                            tags={tags}
                            className='w-full'
                            setTags={(newTags) => {
                              setTags(newTags);
                              setValue("tags", newTags as [string, ...string[]]);
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Just type and press enter to add a new skill
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                </div>

                {/* Step 3 */}
                <div className={
                  cn(
                    "space-y-4",
                    formStep === 2 ? "block" : "hidden"
                  )
                }>
                  {/*Add multiple input fields for links with title and url input and save to an array */}

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