"use client"
import { GetUserData } from "@/backend/GetUserData";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

function random(){
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < Math.floor(Math.random() * 5)) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
async function getUser(userName: string) {

    try {
      const data = await GetUserData({ user: userName });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
async function related(username:string) {
    const relatedNames: string[] = [];
    for (let i = 0; i < 10; i++) {
        const name = username + random();
        if (!(await getUser(name)) && !relatedNames.includes(name)) {
            relatedNames.push(name);
        }
    }
    return relatedNames;
}
export default function TitleSection() {
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [user, setUser] = useState<string>(localStorage.getItem("username_slug") || "")
    const [choices, setchoices] = useState<Array<any>>([])
    const [namescheck, setNamecheck] = useState<any>(false)
    
    const Claim = async () => {
        setErrorMessage("")
        setNamecheck(false)
        try {
            if (await getUser(user)) {
                setErrorMessage("This user exists. Please choose  another username")
                setNamecheck(true)
                const names = await related(user)
                if(names.length >0){
                    setchoices(names);
                    setNamecheck(true)
                }
            }else if(user == ""){
                setErrorMessage("Please enter a username")
            }else if(/[A-Z]/.test(user)){
                setErrorMessage("Invalid slug. Only lower case letters are allowed");
              }else if(/\s/.test(user)){
                setErrorMessage("The slug cannot have a space. ")
              }else if(await getUser(user)){
                setErrorMessage("This slug is taken Please choose another slug")
              }else if(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(user)){
                setErrorMessage("Special charecters are not allowed")
              }
              else {
                localStorage.setItem('username_slug', user);
                document.getElementById("btnclick")?.click()
            }
        } catch (error) {
            setErrorMessage("An error has occured. Please try again later.")
            console.log(error)
        }
        
    }
    const mapChoices = () => {
        if (choices.length > 0) {
            return choices.map((item: any) => (
                <p onClick={()=>{setUser(item); setchoices([])}} className="hover:underline">{item}</p>
            ))
        }
        return null;
    }
    return (
        <div className="flex flex-col items-center w-full mx-1 md:my-44">
            <a href={"/create"} className=" hidden" id="btnclick">clickme!</a>
            <div className="w-full px-1 mt-32 text-center">
                <h1 className="md:text-7xl py-10 text-4xl my-2 md:px-[17%] font-semibold h-max mt-14 mx-auto bg-gradient-to-r dark:from-slate-500 from-black dark:via-slate-200 dark:to-slate-500 to-black/50 bg-clip-text text-[rgba(0,0,0,0)]">The One Link for Everything</h1>
                <p className=" text-sm md:text-lg leading-6 mb-20 md:px-[22%] dark:text-[rgba(209,213,219,1)] text-gray-900 mx-auto">Everything you&apos;re, in one simple link in bio you&apos;ll need to showcase your all socials & portfolio in one place</p>
            </div>

            <div className="flex flex-col items-center justify-center w-4/5 gap-3 px-4 md:flex-row">
                <div className="flex justify-center w-full md:w-max">
                    <div className="dark:bg-[rgba(255,255,255,0.94)] bg-black/5 md:text-base font-medium pl-4 border-none outline-none md:pr-0 md:pl-6 py-3 md:py-3 rounded-s-lg dark:text-slate-900">
                        xprofile.me/
                    </div>
                    <input value={user} onChange={(e)=>{setUser(e.target.value)}} placeholder="username" className="dark:bg-[rgba(255,255,255,0.94)] bg-black/5 outline-none border-none font-medium md:pr-6 md:py-3 rounded-e-lg dark:text-slate-900 w-full" />
                </div>

                <Button onClick={Claim} variant={'outline'} className={cn("px-6 md:px-6 md:py-3 w-full md:w-max py-4 md:text-base dark:border-slate-600 border-black/40 shadow-sm rounded-full my-auto h-full font-normal")}>
                    Claim Your XProfile
                </Button>
            </div>
            {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
            {namescheck ?(<p>Available related names:</p>):(<></>)}
            <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 my-8 ml-5 mr-5 text-center">
              {mapChoices()}

            </div>
        </div>
    )
}

