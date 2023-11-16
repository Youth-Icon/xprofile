import React from "react";
import { Nav} from './components/Nav'
import Footer from "./components/footer";
import { Login } from "./components/loginform";
export default function loginPage(){
    return(
        <main className="h-[100vh] w-[100vh]">
            <div className="absolute -z-20 top-0 left-0 w-full h-[96vh] bg-hero-pattern"></div>
            <Nav></Nav>
            <img src="loginbgart.svg" className=" absolute bottom-0 right-0"></img>
            <Login></Login>
            <Footer></Footer>
        </main>
        
    )
}