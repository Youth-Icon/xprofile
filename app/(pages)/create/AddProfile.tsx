"use client";

import React from 'react'
import { Button } from "@/app/components/ui/button";
import { Check, X, Plus, Twitter, ArrowRight, ArrowLeft, Instagram, Linkedin, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
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

import { useForm, useFieldArray } from "react-hook-form";
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
import { Progress } from "@/app/components/ui/progress"
import { deployProfile } from '@/backend/deployProfile';

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
      name: "",
      username: searchParams?.get("u") || "",
      email: session?.user?.email as string || "",
      portfolio: "",
      github: "",
      avatar: session?.user?.image as string || "https://cdn.discordapp.com/attachments/1065518726855807067/1168414184501952603/depositphotos_245815634-stock-illustration-person-gray-photo-placeholder-man.png?ex=6551ad81&is=653f3881&hm=21fda0259b916c8148051e85b39ac58b94965d50950c93e18c21cb5eb20b09b8&",
      about: "",
      color: "#9fff5b",
      tags: [],
      location: "",
      // socials: [
      //   { type: "", handle: "", clicks: 0 },
      // ],
      // projects: [{ tags: [], title: "", description: "", webURL: "", repoLink: "", language: "", upVote: 0 }],
      links: [{ title: "", url: "" }]
    },

  });


  const { setValue } = form;

  async function handleSubmit(data: z.infer<typeof formSchema>) {
    if (formStep < 2) {
      return
    } else {
      // console.log(JSON.stringify(data, null, 2));
      alert(JSON.stringify(data, null, 2));
      deployProfile(data)
    }
  }

  const { fields, append, remove } = useFieldArray({
    name: "links",
    control: form.control,
  })

  const progress = formStep + 1

  // console.log(form.getValues());
  // console.log(form.formState.errors);

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

        <Card className="w-[350px] min-h-[550px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in few clicks</CardDescription>
            <Progress value={progress * 33.3} max={100} />

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

                  {/* About */}
                  <FormField
                    control={form.control}
                    name="about"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>About Yourself</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe you and your passion in short" {...field} />
                        </FormControl>
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
                  {fields.map((field, index) => (
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
                              </Button> </div>
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
                              <Input {...field} placeholder="Your URL" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant={'outline'}
                    size="sm"
                    className="mt-2"
                    onClick={() => append({ title: "", url: "" })}
                  >
                    Add URL
                  </Button>
                </div>

                {/* Step 4 */}
                <div className={cn(
                  "space-y-4",
                  formStep === 3 ? "block" : "hidden"
                )}>

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
                        form.trigger(["name", "github", "location"])
                        const name = form.getValues("name")
                        const github = form.getValues("github")
                        const location = form.getValues("location")
                        // const about = form.getValues("about")
                        if (name && github && location) {
                          setFormStep(1)
                        }
                      }}>Next <ArrowRight /></Button>
                      : formStep === 1 ? <Button onClick={() => {
                        form.trigger(["tags", "about"])
                        const about = form.getValues("about")
                        const tags = form.getValues("tags")
                        if (tags && about) {
                          setFormStep(2)
                        } else {
                          return
                        }
                      }}>Next <ArrowRight /></Button>
                        : formStep === 2 ? <Button type='submit'>Submit</Button>
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