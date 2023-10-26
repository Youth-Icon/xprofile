import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthContextProvider } from "./context/AuthContext";

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
    <html lang="en">
      <meta property="og:image" content="/public/ogImage.jpeg" />
      <meta name="twitter:image" content="/public/ogImage.jpeg" />
      <body className=" dark:bg-gradient-to-r dark:from-black dark:via-[rgb(18,27,44)] dark:to-black bg-gradient-to-b from-white to-[#DCDCDC]">
        <AuthContextProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <main>
              {children}
            </main>
          </ThemeProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
