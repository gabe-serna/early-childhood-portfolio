import type { Metadata } from "next";
import { Bayon, Crimson_Pro } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const titleFont = Bayon({
  weight: "400",
  variable: "--title",
  subsets: ["latin"],
});

const bodyFont = Crimson_Pro({
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
      <body
        className={`${titleFont.variable} ${bodyFont.variable} antialiased`}
      >
        <SidebarProvider>
          <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
            <AppSidebar />
            <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
              <SidebarTrigger />
              {children}
            </main>
            <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/file.svg"
                  alt="File icon"
                  width={16}
                  height={16}
                />
                Learn
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                Examples
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
                Go to nextjs.org →
              </a>
            </footer>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
