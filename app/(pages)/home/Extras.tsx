import { Button } from "@/app/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { cn } from "@/lib/utils";
import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function FExtras() {
    return (
        <div className="grid max-w-screen-xl grid-rows-2 px-4 mx-2 my-20 md:grid-cols-[minmax(410px,1fr)_minmax(0,450px)] md:grid-flow-row md:grid-rows-1">
            <div >
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
            
            <div className="relative w-full h-full max-w-lg md:mt-4 justify-self-center">                    
                <div className="absolute top-[50%] left-[10%] md:left-auto md:right-[30%] w-40 aspect-square border border-slate-500 rounded-3xl backdrop-blur-md dark:bg-[rgba(35,45,60,0.2)] bg-black/0">
                    <h4 className="px-5 py-2 rounded-full left-[-30%] top-[55%] absolute inline text-slate-900 bg-slate-100 ">
                            xprofile.me/hellofaizan
                    </h4>
                    <div>
                        <Avatar className="absolute right-4 top-4">
                            <AvatarImage src="https://github.com/hellofaizan.png"/>
                            <AvatarFallback>HF</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                
                <div className="transform -translate-x-1/2 absolute -z-10 top-[35%] left-[50%] md:left-auto md:right-[20%] md:transform md:translate-x-0  w-40 aspect-square border border-slate-500 rounded-3xl backdrop-blur-md dark:bg-[rgba(35,45,60,0.2)] bg-black/0">
                    <Twitter className="absolute right-4 top-4" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg" />
                </div>
                <div className="absolute -z-20 top-[20%] right-[10%] md:right-[10%] w-40 aspect-square border border-slate-500 rounded-3xl backdrop-blur-md dark:bg-[rgba(35,45,60,0.2)] bg-black/5">
                    <Instagram className="absolute right-4 top-4" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg" />
                </div>
                <div className="hidden md:block absolute -z-30 top-[5%] right-[0%]  w-40 aspect-square border border-slate-500 rounded-3xl backdrop-blur-md dark:bg-[rgba(35,45,60,0.2)] bg-black/10">
                    <Github className="absolute right-4 top-4" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg" />
                </div>
            </div>           
        </div>
    )
}