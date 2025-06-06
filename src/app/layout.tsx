import type { Metadata } from "next";
import { Geist_Mono, Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
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
        className={`${geistMono.variable} ${inter.variable} ${merriweather.variable} antialiased`}
      >
        <Header />
        <div className="mt-4 lg:mt-8">
          <Wrapper>
            <main>{children}</main>
          </Wrapper>
        </div>
        <Footer />
      </body>
    </html>
  );
}
