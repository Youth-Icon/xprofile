import BlankCard from "./BlankCard";
import ProfilesExample from "./ProfilesExample";

export default function ProfileCardsLists(){
    return(
        <div className="flex flex-col gap-2 md:gap-4 overflow-hidden">
            <div className="flex w-[200%] gap-2 md:gap-3 flex-nowrap  -translate-x-20 ">
                <ProfilesExample />
                <ProfilesExample />
                <ProfilesExample />
                <ProfilesExample />
                <ProfilesExample />
            </div>
            <div className="flex w-[200%] gap-2 md:gap-3 flex-nowrap -translate-x-[60%]  md:-translate-x-60 ">
                <ProfilesExample />
                <ProfilesExample />
                <BlankCard />
                <ProfilesExample />
                <ProfilesExample />
                <ProfilesExample />
                <ProfilesExample />
            </div>
            <div className="flex w-[200%] md:hidden gap-2 md:gap-3 flex-nowrap  -translate-x-12 ">
                <ProfilesExample />
                <ProfilesExample />
                <ProfilesExample />
                <ProfilesExample />
                <ProfilesExample />
            </div>
        </div>
    )
}