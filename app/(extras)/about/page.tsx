import LandingFooter from "@/app/(landing)/components/LandingFooter";
import { Header } from "./components/Header";
import { Content } from "./components/content";
export default function helpCenter(){

    return(
        <main className="relative">

            <Header/>
            <Content/>
            <LandingFooter/>            
        </main>
    )
}