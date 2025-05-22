import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vincent Langlois - Software Engineer",
  description: "Personal website for Vincent Langlois, software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          Header
        </header>
        {children}
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          Footer
        </footer>
      </body>
    </html>
  );
}
