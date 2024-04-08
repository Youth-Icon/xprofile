import React from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import Round from "@/app/(landing)/components/round";
export function Content() {
    return (
        <FeatureBox
            width="auto"
            height="auto"
            paddingX="20px"
            paddingY="24px"
            background="bg-gradient-to-l from-orange-500/10 to-pink-500/10 xs:bg-none"

            style={{
                overflow: "hidden",
                border: '0',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                marginBottom: '15%',
                marginLeft: '10%',
                marginRight: '10%',
                padding: '5%'
            }}
        >
            <Round className="hidden xs:block absolute left-[-6rem] top-[-9rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full z-10" />
            <Round className="hidden xs:block absolute right-[-16rem] top-[1rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[150px] rounded-full z-10 " />
            <div className="text-lg text-white">
                <section className=" w-2/3">
                    <h2 className="text-4xl bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text">About</h2>
                    <p>
                        XProfile is a platform that allows you to create personalized profile pages with links to your various social media accounts, websites, and more. Additionally, it offers a unique feature: the ability to explore profiles based on specific criteria. Whether you want to discover profiles with the most GitHub stars, XProfile makes it easy.
                    </p>
                </section>
                <section className=" w-2/3 mt-[5%]" >
                    <h2 className="text-4xl bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text">Features</h2>
                    <ul className=" list-item">
                        <li><strong>Personalized Profiles</strong>: Create your own profile page with links to your various online presence.</li>
                        <li><strong>Explore Profiles</strong>: Browse and discover profiles that has most GitHub stars</li>
                        <li><strong>Open Source</strong>: Unlike other projects out there, XProfile is an open-source project, meaning it's developed and maintained by a community of contributors.</li>
                    </ul>
                </section>
            </div>
        </FeatureBox>
    )
}