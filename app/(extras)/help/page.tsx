import LandingFooter from "@/app/(landing)/components/LandingFooter";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
export default function helpCenter(){

    return(
        <main className="relative">

            <Header/>
            <Categories/>
            <LandingFooter/>            
        </main>
    )
}