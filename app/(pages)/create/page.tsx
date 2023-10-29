import type { Metadata } from "next";
import AddProfile from "./AddProfile";
import { getServerAuthSession } from "../../../backend/auth";
import { env } from "@/env.mjs";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "X Profile | Add Profile",
  description:
    "X Profile is an Open Source that allows you to showcase your profile in a unique way.",
};

export default async function Page() {
  const session = await getServerAuthSession();

// redirect to login if not logged in
if (!session) {
  redirect(env.NEXTAUTH_URL + "/api/auth/signin?callbackUrl=/create");
} else {
  return <AddProfile session={session} />;
}
}
