import React from "react"
import Round from "@/app/(landing)/components/round";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
export function Category({title, description}:{title:string, description:string}){
    return(
        <FeatureBox
            width="auto"
            height="auto"
            paddingX="20px"
            paddingY="24px"
            background="bg-gradient-to-l from-orange-500/10 to-pink-500/10 xs:bg-none"
        
            style={{
                overflow:"hidden",
                border: '0',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }}
            >
                <Round className="hidden xs:block absolute left-[-6rem] top-[-9rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full z-10" />
                <Round className="hidden xs:block absolute right-[-16rem] top-[1rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[150px] rounded-full z-10 " />
                
            <div className="mb-[32px] text-white text-center text-lg font-semibold font-manrope">
                <h1 className="text-center text-2xl">{title}</h1>
                <p>{description}</p>
            </div>
            <button type='submit' className="mt-4 w-full md:mt-0 h-15 hover:shadow-md hover:shadow-[#FF5400]/20 cursor-pointer bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] hover:bg-gradient-to-r hover:from-[#FF5400] hover:via-[#FF0054] hover:to-[#FF0054] rounded-xl text-white bg-transparent text-md font-bold font-manrope p-4 px-5 whitespace-nowrap md:self-start">Read More</button>
            
        </FeatureBox> 
    )
}