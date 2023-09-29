import type { Metadata } from "next";
import AddProfile from "./AddProfile";

export const metadata: Metadata = {
  title: "X Profile | Add Profile",
  description:
    "X Profile is an Open Source that allows you to showcase your profile in a unique way.",
};

export default function Page() {
  return <AddProfile />;
}
