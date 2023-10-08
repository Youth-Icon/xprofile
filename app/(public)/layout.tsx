import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

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
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className="flex flex-col bg-slate-100 dark:bg-zinc-900">
        <Nav />
        <div className="p-6">{children}</div>
      </main>
    </ThemeProvider>
  );
}
