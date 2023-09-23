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
import { Check, ChevronsUpDown } from "lucide-react";
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
import Link from "next/link";
import Image from "next/image";

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
];

const AddProfileForm = () => {
  const [username, setUsername] = useState<string>("Username");
  const [github, setGithub] = useState<string>("identicon");
  const [twitter, setTwitter] = useState<string>("tweethandle");
  const [description, setDescription] = useState<string>(
    "this is a description"
  );
  const [color, setColor] = useState<string>("#00FFFF");
  const [tags, setTags] = useState<string[]>(["furry", "python", "shrek"]);
  const [typing, setTyping] = useState<boolean>(false);
  const [inputTag, setInputTag] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const removeTag = (tag: any) => {
    const nextTags = tags.filter((item) => item !== tag);
    setTags(nextTags);
  };

  const addTag = () => {
    const nextTags = inputTag ? [...tags, inputTag] : tags;
    setTags(nextTags);
    setTyping(false);
    setInputTag("");
  };

  const handleButtonClick = () => {
    setTyping(true);
  };

  const renderInput = () => {
    if (typing) {
      return (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="link"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between rounded-full"
            >
              {inputTag
                ? predefinedTags.find((tag) => tag.value === inputTag)?.label
                : "Select tag..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
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
                      setInputTag(
                        currentValue === inputTag ? "" : currentValue
                      );
                      setTags([...tags, currentValue]);
                      setOpen(false);
                      setTyping(false);
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
    }

    return (
      <Badge
        variant={"outline"}
        onClick={handleButtonClick}
        className="hover:bg-slate-200 dark:hover:bg-zinc-800 cursor-pointer"
      >
        +
      </Badge>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 md:gap-0 w-full">
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
                    placeholder="Your username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="github">Github</Label>
                  <Input
                    className="bg-slate-200 dark:bg-zinc-950"
                    id="github"
                    placeholder="Name of your github account"
                    onChange={(e) => setGithub(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input
                    className="bg-slate-200 dark:bg-zinc-950"
                    id="twitter"
                    placeholder="Name of twitter account"
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <div className="flex flex-row gap-2 flex-wrap">
                    {renderInput()}
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="flex items-center justify-between px-3 py-1"
                      >
                        <button
                          className="mr-1 text-red-500 rounded-full flex items-center justify-center"
                          onClick={() => removeTag(tag)}
                        >
                          x
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
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    className="bg-slate-200 dark:bg-zinc-950"
                    id="description"
                    placeholder="Account description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button className="active:scale-90">Deploy</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="lg:flex-1 flex items-center justify-center">
        <div className="w-[350px] shadow h-auto overflow-hidden border border-gray-700 hover:border-gray-600 rounded-xl">
          <div className="bg-white dark:bg-[#080808] rounded-lg shadow-lg">
            <div className="flex flex-col">
              <div
                className="h-20 md:h-24"
                style={{ backgroundColor: color }}
              ></div>

              <div className="flex space-x-2">
                <Image
                  src={"https://avatars.githubusercontent.com/" + github}
                  alt={github}
                  width={95}
                  height={95}
                  className="rounded-full ml-2 md:ml-4 -mt-8 border-4 border-white dark:border-black text-white dark:text-gray-300"
                />
                <div className="flex items-baseline gap-1">
                  <p className="mt-2 font-bold text-lg md:text-xl">
                    {username}
                  </p>
                  <Link
                    href={"https://twitter.com/" + twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 font-mono italic text-black dark:text-gray-300 text-sm hover:text-blue-400 cursor-pointer"
                  >
                    @{twitter}
                  </Link>
                </div>
              </div>

              <div className="flex flex-row gap-2 flex-wrap mx-4 md:mx-5 my-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="flex items-center justify-between px-3 py-1"
                  >
                    <p className="text-sm">{tag}</p>
                  </Badge>
                ))}
              </div>
              <div className="mx-4 md:mx-5 text-base overflow-hidden min-h-[48px] text-ellipsis line-clamp-none md:line-clamp-2 md:active:line-clamp-3 cursor-pointer">
                {description}
              </div>

              {/* Follow on github and on twitter button 2 in column */}
              <div className="grid grid-cols-2 gap-2 md:gap-3 text-center justify-between mt-2 mb-4 mx-4 md:mx-5">
                <Link
                  href={"https://github.com/" + github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-1 py-2 text-sm font-medium bg-white border border-gray-700 text-black hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 rounded focus:outline-none focus:ring"
                >
                  Follow on <i className="bi bi-github"></i>
                </Link>
                <Link
                  href={"https://x.com/" + username}
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
