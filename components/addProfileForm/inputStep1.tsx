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
import { Check, X, Plus } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { PickerExample } from "../ColorPicker";
import { useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

interface InputStep1Props {
  data: {
    username: string;
    github: string;
    twitter: string;
    tags: string[];
    color: string;
    description: string;
    location: string;
  };
  setData: (data: {
    username: string;
    github: string;
    twitter: string;
    tags: string[];
    color: string;
    description: string;
    location: string;
  }) => void;
  formStep: number;
  setFormStep: (step: number) => void;
  predefinedTags: any;
}

const InputStep1 = ({
  data,
  setData,
  formStep,
  setFormStep,
  predefinedTags,
}: InputStep1Props) => {
  const [inputTag, setInputTag] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const router = useRouter();

  const removeTag = (tag: any) => {
    const nextTags = data.tags.filter((item: string) => item !== tag);
    setData({ ...data, tags: nextTags });
  };

  const renderInput = () => {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="link"
            type="button"
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
              {predefinedTags.map((tag: any) => (
                <CommandItem
                  key={tag.value}
                  onSelect={(currentValue: any) => {
                    setInputTag(currentValue === inputTag ? "" : currentValue);

                    // Check if the tag is already in data.tags before adding it
                    if (!data.tags.includes(tag.label)) {
                      setData({
                        ...data,
                        tags: [...data.tags, tag.label],
                      });
                    }

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

  return (
    <Card
      className="sm:w-[400px] w-full h-fit mx-2 bg-slate-100 dark:bg-zinc-900 border-gray-600 dark:border-gray-600 fade-in-10 transition-all duration-500"
      style={{
        display: formStep === 1 ? "block" : "none",
      }}
    >
      <CardHeader>
        <CardTitle>Add your profile!</CardTitle>
        <CardDescription>Deploy your profile in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Full Name</Label>
              <Input
                className="bg-slate-200 dark:bg-zinc-950 focus:ring-0"
                id="username"
                placeholder="Your name"
                onChange={(e) => {
                  setData({ ...data, username: e.target.value });
                  setErrorMessage("");
                }}
              />
              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}
            </div>
            <div className="flex flex-row space-x-1 justify-center items-center">
              <span className="px-2 h-[38px] bg-gradient-to-br bg-black rounded-lg flex items-center justify-center">
                <FaGithub size={20} className="text-white" />
              </span>
              <Input
                className="bg-slate-200 dark:bg-zinc-950 focus:ring-0"
                id="github"
                placeholder="Github Username"
                onChange={(e) => setData({ ...data, github: e.target.value })}
              />
            </div>
            <div className="flex flex-row space-x-1 justify-center items-center">
              <span className="px-2 h-[38px] bg-gradient-to-br bg-blue-500 rounded-lg flex items-center justify-center">
                <FaTwitter size={20} className="text-white" />
              </span>
              <Input
                className="bg-slate-200 dark:bg-zinc-950"
                id="twitter"
                placeholder="Twitter Username"
                onChange={(e) => setData({ ...data, twitter: e.target.value })}
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
                      <X size={18} />
                    </button>
                    <p className="text-sm">{tag}</p>
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="color">Banner Color</Label>
              <PickerExample data={data} setData={setData} />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Your Location</Label>
              <Input
                className="bg-slate-200 dark:bg-zinc-950"
                id="location"
                placeholder="State, Country"
                onChange={(e) => setData({ ...data, location: e.target.value })}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">About</Label>
              <Textarea
                className="bg-slate-200 dark:bg-zinc-950"
                id="description"
                placeholder="Tell something about yourself..."
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
          <DialogTrigger asChild>
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
        <Button
          type="button"
          onClick={
            data.username === "Username" || data.username === ""
              ? () => setErrorMessage("Please fill this form first!")
              : () => setFormStep(formStep + 1)
          }
          className="active:scale-90"
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InputStep1;
