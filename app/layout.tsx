import type { Metadata, Viewport } from "next";
import {
  Instrument_Sans,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";

import Providers from "@/providers";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import {
  bio,
  contactOptions,
  email,
  keywords,
  location,
  logo,
  metaTitle,
  name,
  ogImage,
  siteUrl,
  title,
  titleAccent,
  twitterHandle,
} from "@/constants/data";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: metaTitle,
    template: `%s — ${name}`,
  },
  description: bio,
  applicationName: logo,
  authors: [{ name, url: siteUrl }],
  creator: name,
  publisher: name,
  category: "technology",
  keywords: [...keywords],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/image.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: logo,
    title: metaTitle,
    description: bio,
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: bio,
    creator: twitterHandle,
    site: twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": location,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  url: siteUrl,
  image: `${siteUrl}${ogImage.url}`,
  email,
  jobTitle: `${title} & ${titleAccent}`,
  worksFor: {
    "@type": "Organization",
    name: "Omaza",
    url: "https://omaza.in",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
  sameAs: [
    contactOptions.GitHub,
    contactOptions.LinkedIn,
    contactOptions["Twitter(X)"],
    contactOptions.BlueSky,
  ],
  knowsAbout: [...keywords],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Header />
          {children}
          <div className="fixed bottom-0 left-0 right-0 h-28 md:h-32 bg-linear-to-b from-transparent to-background z-50 pointer-events-none" />
        </Providers>
      </body>
    </html>
  );
}
