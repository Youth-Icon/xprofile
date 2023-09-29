"use client"

import type { Metadata } from "next";
import AddProfile from "./AddProfile";
import {useEffect} from 'react';
import { useUserAuth } from "../context/AuthContext";
import { redirect } from "next/navigation";
import { Loader } from "lucide-react";

export const metadata: Metadata = {
  title: "X Profile | Add Profile",
  description:
    "X Profile is an Open Source that allows you to showcase your profile in a unique way.",
};

export default function Page() {
  const {user,loading}=useUserAuth();  
  useEffect(() => {
    console.log(user)
    if(!loading){
      if (!user) {
        redirect('/login')
      }
    }
  }, [user, loading])

  return loading ? <Loader/> : user? <AddProfile /> : redirect('/login');
}
