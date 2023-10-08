import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mark Bhaiya",
  description:
    "X Profile is an Open Source that allows you to showcase your profile in a unique way.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col bg-slate-100 dark:bg-zinc-900">
      {children}
    </main>
  );
}
