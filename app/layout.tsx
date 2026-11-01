import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarMain from "@/components/NavbarMain/NavbarMain";
import FooterBottom from "@/components/FooterBottom/FooterBottom";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Super Noddles",
  description: "Find fresh recipes, community inspiration, and cozy meal ideas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavbarMain />
        <Breadcrumb />
        {children}
        <FooterBottom />
      </body>
    </html>
  );
}
