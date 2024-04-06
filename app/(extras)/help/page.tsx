import LandingFooter from "@/app/(landing)/components/LandingFooter";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { ChatBot } from "./components/chatbot";
export default function helpCenter(){

    return(
        <main className="relative">

            <Header/>
            <Categories/>
            <LandingFooter/>            
            <ChatBot/>
        </main>
    )
}