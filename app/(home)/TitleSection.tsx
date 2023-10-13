import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function TitleSection() {
    return (
        <div className="md:my-44 mx-1">
            <div className="text-center mt-32 px-1">
                <h1 className="md:text-7xl py-10 text-4xl my-2 md:px-[17%] font-semibold h-max mt-14 mx-auto bg-gradient-to-r dark:from-slate-500 from-black dark:via-slate-200 dark:to-slate-500 to-black/50 bg-clip-text text-[rgba(0,0,0,0)]">The One Link for Everything</h1>
                <p className=" text-sm md:text-lg leading-6 mb-20 md:px-[22%] dark:text-[rgba(209,213,219,1)] text-gray-900 mx-auto">Everything you&apos;re, in one simple link in bio you&apos;ll need to showcase your all socials & portfolio in one place</p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 px-4 justify-center items-center">
                <div className="flex w-full md:w-max">
                    <div className="dark:bg-[rgba(255,255,255,0.94)] bg-black/5 md:text-base font-medium pl-4 border-none outline-none md:pr-0 md:pl-6 py-3 md:py-3 rounded-s-lg dark:text-slate-900">
                        xprofile.me/
                    </div>
                    <input placeholder="username" className="dark:bg-[rgba(255,255,255,0.94)] bg-black/5 outline-none border-none font-medium md:pr-6 md:py-3 rounded-e-lg dark:text-slate-900 w-full" />
                </div>

                <Button variant={'outline'} className={cn("px-6 md:px-6 md:py-3 w-full md:w-max py-4 md:text-base dark:border-slate-600 border-black/40 shadow-sm rounded-full my-auto h-full font-normal")}>
                    Claim Your XProfile
                </Button>
            </div>
        </div>
    )
}