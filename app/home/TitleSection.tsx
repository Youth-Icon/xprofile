import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function TitleSection() {
    return (
        <div className="md:my-44">
            <div className="text-center mt-32 px-1">
                <h1 className="md:text-7xl  py-10 text-6xl my-2 md:px-[17%] font-semibold h-max mt-14 mx-auto bg-gradient-to-r bg-gradient-radial from-slate-400 via-slate-600 to-slate-400  dark:from-slate-500 dark:via-slate-200 dark:to-slate-500 bg-clip-text text-[rgba(0,0,0,0)]">The One Link for Everything</h1>
                <p className=" text-xl md:text-lg leading-8 mb-20 md:px-[22%] text-[rgba(209,213,219,1)] mx-auto">Everything you&apos;re, in one simple link in bio you&apos;ll need to showcase your all socials & portfolio in one place</p>
            </div>
            <div className="flex gap-3 md:px-20 px-0  justify-center">
                <div className="flex">
                    <div className="bg-[rgba(255,255,255,0.94)] md:text-base font-medium  md:pl-6 md:py-3 rounded-s-lg dark:text-slate-900">
                        xlink.io/
                    </div>
                    <input placeholder="yourusername" className="bg-[rgba(255,255,255,0.94)] outline-none font-medium md:pr-6 md:py-3 rounded-e-lg dark:text-slate-900" />
                </div>

                <Button variant={'outline'} className={cn("md:px-6 md:py-3  md:text-base w-max border-slate-600 rounded-full my-auto h-full font-thin")}>
                    Claim Your XLink
                </Button>
            </div>
        </div>
    )
}