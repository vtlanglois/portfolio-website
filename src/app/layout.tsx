import type { Metadata } from "next";
import { Geist_Mono, Inter, Merriweather } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";
import ThemeProvider from "@/components/ThemeProvider";
import SkipToMainContentJumpLink from "@/components/SkipToMainContentJumpLink";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">{`
          try {
            const theme = localStorage.getItem('theme') || 'system'
            const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            
            if (theme === 'dark' || (theme === 'system' && systemDark)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          } catch (e) {}
        `}</Script>
      </head>
      <body
        className={`${geistMono.variable} ${inter.variable} ${merriweather.variable} bg-primary-200 antialiased dark:bg-black`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SkipToMainContentJumpLink />
          <Header />
          <div className="mt-4 lg:mt-8">
            <Wrapper>
              <main id="main">{children}</main>
            </Wrapper>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
