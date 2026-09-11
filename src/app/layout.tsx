import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#F7F7F3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nirvanabrowser.com"),
  title: {
    default: "Nirvana Browser — Private. Fast. Beautiful.",
    template: "%s | Nirvana Browser",
  },
  description:
    "An independent, quiet Android browser built from the Firefox open-source codebase. Engineered with GeckoView, uBlock Origin support, Total Cookie Protection, and zero telemetry.",
  keywords: [
    "Nirvana Browser",
    "Private Browser Android",
    "Firefox fork",
    "GeckoView browser",
    "uBlock Origin Android",
    "Calm Computing",
    "Total Cookie Protection",
    "Open Source Browser",
    "Abhiraj Aryan",
  ],
  authors: [{ name: "Abhiraj Aryan", url: "https://github.com/viroaryan" }],
  creator: "Abhiraj Aryan",
  publisher: "Nirvana Browser",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nirvanabrowser.com",
    siteName: "Nirvana Browser",
    title: "Nirvana Browser — Private. Fast. Beautiful.",
    description:
      "A quieter way to browse the web. Independent Android browser built on open-source GeckoView with granular privacy controls and editorial craft.",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 800,
        alt: "Nirvana Browser Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirvana Browser — Private. Fast. Beautiful.",
    description:
      "A quieter way to browse the web. Independent Android browser built on open-source GeckoView with granular privacy controls.",
    images: ["/assets/logo.png"],
    creator: "@viroaryan",
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F7F7F3] text-charcoal font-sans antialiased selection:bg-[#FDE4D2] selection:text-charcoal">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
