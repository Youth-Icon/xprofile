"use client";

import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/backend/firebase";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Page() {
  const { user, loading } = useAuth();
  useEffect(() => {
    if (user) {
      redirect("/create");
    }
  }, [user]);
  return (
    <div className="mt-20 m-10">
      <Button variant={"outline"} onClick={signInWithGoogle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" icon icon-tabler icon-tabler-brand-google"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
        </svg>
      </Button>
    </div>
  );
}
