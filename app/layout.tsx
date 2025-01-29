import type { Metadata } from "next";
import { Bayon, Crimson_Pro } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
