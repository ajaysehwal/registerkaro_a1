import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Script from "next/script";
import Footer from "@/sections/footer";
import LowerFooter from "@/sections/LowerFooter";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Register Karo",
    template: "Home | Register karo",
  },
  description: "A detailed description of your website, including main keywords and value proposition",
  keywords: ["register", "registerkro", "registerKaro"],
  authors: [{ name: "Ajay Sehwal" }],
  creator: "Your Name or Company",
  publisher: "Ajay Sehwal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Your Website Name",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Website Name",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitter",
    creator: "@yourtwitter",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yourdomain.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer/>
        <LowerFooter/>
      </body>
      <Script id="schema-org" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Your Website Name",
            "url": "https://yourdomain.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://yourdomain.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </Script>
    </html>
  );
}