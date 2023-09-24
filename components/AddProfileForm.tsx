"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Check, X, Plus, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ScrollContainer from "react-indiana-drag-scroll";
import Link from "next/link";
import Image from "next/image";
import { deployProfile } from "@/backend/deployProfile";
import { useRouter } from "next/navigation";

const predefinedTags = [
  {
    value: "coder",
    label: "🖥️Coder",
  },
  {
    value: "gamer",
    label: "🎮Gamer",
  },
  {
    value: "designer",
    label: "🎨Designer",
  },
  {
    value: "photographer",
    label: "📷Photographer",
  },
  {
    value: "musician",
    label: "🎵Musician",
  },
  {
    value: "pirate",
    label: "🏴‍☠️Pirate",
  },
  {
    value: "waffle",
    label: "🧇Waffle",
  },
];

const AddProfileForm = () => {
  const [data, setData] = useState<any>({
    username: "Username",
    github: "identicon",
    twitter: "tweethandle",
    description: "this is a description",
    color: "#00FFFF",
    tags: [predefinedTags[0].label, predefinedTags[1].label],
  });
  const [inputTag, setInputTag] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const removeTag = (tag: any) => {
    const nextTags = data.tags.filter((item: string) => item !== tag);
    setData({ ...data, tags: nextTags });
  };

  const router = useRouter();

  const renderInput = () => {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="link"
            role="combobox"
            aria-expanded={open}
            className="hover:bg-slate-200 dark:hover:bg-zinc-800 cursor-pointer rounded-full"
          >
            <Plus size={15} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search tag..." />
            <CommandEmpty>No tag found.</CommandEmpty>
            <CommandGroup className="bg-slate-200 dark:bg-zinc-950 text-zinc-900 dark:text-slate-100">
              {predefinedTags.map((tag) => (
                <CommandItem
                  key={tag.value}
                  onSelect={(currentValue) => {
                    setInputTag(currentValue === inputTag ? "" : currentValue);
                    setData({
                      ...data,
                      tags: [
                        ...data.tags,
                        tag.label === inputTag ? "" : tag.label,
                      ],
                    });
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      inputTag === tag.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {tag.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    );
  };

  const handleDeploy = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("github", data.github);
    formData.append("twitter", data.twitter);
    formData.append("description", data.description);
    formData.append("color", data.color);
    data.tags.forEach((tag: string) => {
      formData.append("tags", tag);
    });

    try {
      await deployProfile(formData);
      router.replace("/explore");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 w-full">
      <section className="lg:flex-1 flex items-center justify-center">
        <Card className="w-[400px] bg-slate-100 dark:bg-zinc-900 border-gray-600 dark:border-gray-600">
          <CardHeader>
            <CardTitle>Add your profile!</CardTitle>
            <CardDescription>Deploy your profile in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    className="bg-slate-200 dark:bg-zinc-950 focus:ring-0"
                    id="username"
                    placeholder="Your name"
                    onChange={(e) =>
                      setData({ ...data, username: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="github">Github</Label>
                  <Input
                    className="bg-slate-200 dark:bg-zinc-950"
                    id="github"
                    placeholder="Name of your github account"
                    onChange={(e) =>
                      setData({ ...data, github: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input
                    className="bg-slate-200 dark:bg-zinc-950"
                    id="twitter"
                    placeholder="Name of twitter account"
                    onChange={(e) =>
                      setData({ ...data, twitter: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <div className="flex flex-row gap-2 flex-wrap">
                    {renderInput()}
                    {data.tags.map((tag: string) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="flex items-center justify-between px-3 py-1"
                      >
                        <button
                          className="mr-1 text-red-500 rounded-full flex items-center justify-center"
                          onClick={() => removeTag(tag)}
                        >
                          <X size={15} />
                        </button>
                        <p className="text-sm">{tag}</p>
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="color">Banner Color</Label>
                  <Input
                    className="bg-slate-200 dark:bg-zinc-950"
                    id="color"
                    placeholder="Color in hex (e.g. #00FFFF)"
                    onChange={(e) =>
                      setData({ ...data, color: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    className="bg-slate-200 dark:bg-zinc-950"
                    id="description"
                    placeholder="Account description"
                    onChange={(e) =>
                      setData({ ...data, description: e.target.value })
                    }
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Dialog>
              <DialogTrigger>
                <Button variant={"outline"}>Cancel</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                  <DialogDescription>
                    Your data will be lost. Are you sure you want to discard
                    creating your profile?
                  </DialogDescription>
                  <DialogDescription>
                    <Button
                      onClick={() => router.replace("/")}
                      variant={"link"}
                      className="my-2 hover:bg-red-500"
                    >
                      Discard
                    </Button>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Button onClick={handleDeploy} className="active:scale-90">
              Deploy
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="lg:flex-1 flex items-center justify-center">
        <div className="w-[350px] shadow h-auto overflow-hidden border border-gray-700 hover:border-gray-600 rounded-xl">
          <div className="bg-white dark:bg-[#080808] rounded-lg shadow-lg">
            <div className="flex flex-col">
              <div
                className="h-20 md:h-24"
                style={{ backgroundColor: data.color }}
              ></div>

              <div className="flex space-x-2 mb-2">
                <Image
                  src={"https://avatars.githubusercontent.com/" + data.github}
                  alt={data.github}
                  width={100}
                  height={100}
                  className="object-cover rounded-full ml-2 md:ml-4 -mt-8 border-4 border-white dark:border-black text-white dark:text-gray-300"
                />
                <div className="flex flex-col w-full">
                  <div className="flex items-baseline gap-1">
                    <p className="font-bold text-lg md:text-xl">
                      {data.username}
                    </p>
                    <Link
                      href={"https://twitter.com/" + data.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono italic text-black dark:text-gray-300 text-sm hover:text-blue-400 cursor-pointer"
                    >
                      @{data.twitter}
                    </Link>
                  </div>

                  <ScrollContainer className="cursor-grab active:cursor-grabbing flex flex-row gap-2 my-2">
                    {data.tags.map((tag: string) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="flex items-center justify-between px-2 py-0.5"
                      >
                        <p className="text-sm whitespace-nowrap">{tag}</p>
                      </Badge>
                    ))}
                  </ScrollContainer>
                </div>
              </div>
              <div className="mx-4 md:mx-5 text-base overflow-hidden min-h-[48px] text-ellipsis line-clamp-none md:line-clamp-2 md:active:line-clamp-3 cursor-pointer">
                {data.description}
              </div>

              {/* Follow on github and on twitter button 2 in column */}
              <div className="grid grid-cols-2 gap-2 md:gap-3 text-center justify-between mt-2 mb-4 mx-4 md:mx-5">
                <Link
                  href={"https://github.com/" + data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center justify-center gap-2 col-span-1 py-2 text-sm font-medium bg-white border border-gray-700 text-black hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 rounded focus:outline-none focus:ring"
                >
                  Follow on <Github size={20} />
                </Link>
                <Link
                  href={"https://x.com/" + data.username}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-1 py-2 text-sm font-medium bg-white border border-gray-700 text-black hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 rounded focus:outline-none focus:ring"
                >
                  Follow on 𝕏
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProfileForm;
