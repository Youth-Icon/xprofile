import type { Metadata } from "next";
import Dashboard from "./dashboard";

export const metadata: Metadata = {
  title: "Dashboard | X Profile",
  description:
    "X Profile is an Open Source that allows you to showcase your profile in a unique way.",
};

export default function Page() {
  return <Dashboard />;
}
