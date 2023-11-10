import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import { SessionProvider } from "next-auth/react";
import localFont from '@next/font/local'

const inter = Inter({ subsets: ["latin"] });
const Ununtu = localFont({
  src: [
    {
      path: "../public/fonts/Ubuntu-Bold.ttf",
      weight: "bold",
    },
    {
      path: "../public/fonts/Ubuntu-Medium.ttf",
      weight: "normal",
    }
  ],
  variable: '--font-ubuntu'
});
const Manrope = localFont({
  src: [
    {
      path: "../public/fonts/Manrope-Bold.ttf",
      weight: "bold",
    },
    {
      path: "../public/fonts/Manrope-Medium.ttf",
      weight: "normal",
    }
  ],
  variable: '--font-manrope'
});


export const metadata: Metadata = {
  title: "X Profile | Showcase your profile in a unique way",
  description:
    "X Profile is an Open Source that allows you to showcase your profile in a unique way.",
};

export default function RootLayout({
  children,
  authModal
}: {
  children: React.ReactNode;
  authModal: React.ReactNode
}) {
  return (
    <html lang="en" className={`${Ununtu.variable} ${Manrope.variable} font-sans`}>
      <meta property="og:image" content="/public/ogImage.jpeg" />
      <meta name="twitter:image" content="/public/ogImage.jpeg" />
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <body className="flex flex-col bg-black">
            {authModal}
            {children}
            <Toaster />
          </body>
        </ThemeProvider>
      </body>
    </html>
  );
}
