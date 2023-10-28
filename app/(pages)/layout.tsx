import { Nav } from "@/app/components/Nav";
import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "X Profile | Showcase your profile in a unique way",
  description:
    "X Profile is an Open Source that allows you to showcase your profile in a unique way.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
