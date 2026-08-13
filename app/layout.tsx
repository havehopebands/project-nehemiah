import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hopeineachmoment.com"),
  title: "Hope In Each Moment",
  description: "Wear Hope. Share Hope.",

  openGraph: {
    title: "Hope In Each Moment",
    description: "Wear Hope. Share Hope. Find Hope.",
    url: "https://hopeineachmoment.com",
    siteName: "Hope In Each Moment",
    images: [
      {
        url: "/images/banner-og.png",
        width: 1200,
        height: 630,
        alt: "Hope In Each Moment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <PageTransition>
    {children}
  </PageTransition>
  <Analytics />
</body>
    </html>
  );
}
