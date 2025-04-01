import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";

const bodyFont = Sour_Gummy({
  variable: "--body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CDC 110 Portfolio",
  description: "Gabe Serna's Early Childhood Development Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} bg-yellow-200 antialiased`}>
        {/* <SidebarProvider> */}
        <Navbar />
        <Image
          src="/baby.png"
          alt="smiling baby"
          width={400}
          height={400}
          className="mx-auto"
        />
        <div
          style={{
            backgroundImage: `url("tile background.png")`,
            backgroundSize: "800px 800px",
          }}
          className="image-curve relative flex h-screen -translate-y-16 bg-white pb-20 sm:p-20"
        >
          <div className="absolute left-1/2 flex h-[calc(100vh+6rem)] w-[calc(100vw-10rem)] -translate-x-1/2 -translate-y-24 bg-white pb-20 sm:p-20">
            <main className="row-start-2 flex flex-col items-center gap-6 pt-20 sm:items-start">
              {children}
            </main>
          </div>
        </div>
        {/* </SidebarProvider> */}
      </body>
    </html>
  );
}
