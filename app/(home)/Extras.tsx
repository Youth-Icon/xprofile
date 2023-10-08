import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";
import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function FExtras() {
    return (
        <div className="md:px-24 grid my-20 md:grid-cols-2 grid-flow-col md:grid-flow-row md:grid-rows-1 grid-rows-2">
            <div className="md:px-10">
                <h2 className="md:text-5xl my-6 md:my-10 text-3xl mt-14 font-semibold h-max mx-auto bg-gradient-to-br dark:from-slate-500 from-black dark:via-slate-200 dark:to-slate-500 to-black/50 bg-clip-text text-[rgba(0,0,0,0)]">
                    Create & Host Your One Page Portfolio Site in less than 5 minutes
                </h2>
                <p className="text-xl md:text-lg leading-8 my-6 md:my-10 dark:text-[rgba(209,213,219,1)] text-gray-900">Craft your unique online presence effortlessly with our intuitive one-page portfolio builder. Showcase your skills, projects, and links in minutes.</p>
                <Link href={"#"}>
                    <Button variant={'outline'} className={cn("dark:border-slate-600 border-black/40 shadow-sm ")} >
                        Create Your XProfile
                    </Button>
                </Link>
            </div>
            <div className="relative mt-16 h-52">
                <div className="absolute top-[50%] md:left-40 left-20 w-40 aspect-square border border-slate-500 rounded-3xl backdrop-blur-md dark:bg-[rgba(35,45,60,0.2)] bg-black/0">
                    <div className="px-5 py-2 rounded-full left-[-60%] top-[55%] absolute inline text-slate-900 bg-slate-100 ">
                        xprofile.me/hellofaizan
                    </div>
                    <div>
                        <Avatar className="absolute right-4 top-4">
                            <AvatarImage src="https://github.com/hellofaizan.png"/>
                            <AvatarFallback>HF</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <div className="absolute -z-10 top-[35%] left-32 md:left-52 w-40 aspect-square border border-slate-500 rounded-3xl backdrop-blur-md dark:bg-[rgba(35,45,60,0.2)] bg-black/0">
                    <Twitter className="absolute right-4 top-4" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg" />
                </div>
                <div className="absolute -z-20 top-[20%] left-44 md:left-64 w-40 aspect-square border border-slate-500 rounded-3xl backdrop-blur-md dark:bg-[rgba(35,45,60,0.2)] bg-black/5">
                    <Instagram className="absolute right-4 top-4" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg" />
                </div>
                <div className="hidden md:block absolute -z-30 top-[5%] left-56 md:left-[304px] w-40 aspect-square border border-slate-500 rounded-3xl backdrop-blur-md dark:bg-[rgba(35,45,60,0.2)] bg-black/10">
                    <Github className="absolute right-4 top-4" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg" />
                </div>
            </div>
        </div>
    )
}