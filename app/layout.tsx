import type { Metadata, Viewport } from "next";
import {
  Instrument_Sans,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";

import Providers from "@/providers";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { name, bio, logo } from "@/constants/data";

import "./globals.css";

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: "400",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: name,
  description: bio,
  authors: [{ name, url: "https://wriddhi.com" }],
  applicationName: logo,
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          [sans.variable, serif.variable, mono.variable],
          sans.className,
          "antialiased selection:text-background selection:bg-primary max-w-screen overflow-x-hidden"
        )}
      >
        <Providers>
          <Header />
          {children}
          <div className="fixed bottom-0 left-0 right-0 h-28 md:h-32 bg-linear-to-b from-transparent to-background z-50" />
        </Providers>
      </body>
    </html>
  );
}
