import { Button } from "@/components/ui/button";

export default function Contributors(){
    return(
        <div className=" my-20 md:my-40 text-center">
            <h3 className="font-semibold text-3xl ">Join thousands of inspiring creatives</h3>
            <img src="/creators.svg" className="w-max mx-auto mt-10" alt="creators" />
            <div className="text-center mt-10">
                <Button variant={'default'} className="text-lg">Explore the most Popular X-Profiles
                    <svg className="mt-1 ml-2 font-bold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l14 0"></path>
                        <path d="M13 18l6 -6"></path>
                        <path d="M13 6l6 6"></path>
                    </svg>
                </Button>
            </div>
        </div>
    )
}