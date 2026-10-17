
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aarnainfradevelopers.com"),

  title:
    "Open Plots for Sale in Hyderabad | HMDA & RERA Approved | Aarna Infra Developers",

  description:
    "Buy open plots for sale in Hyderabad with HMDA & RERA approvals. Aarna Infra Developers offers premium residential & investment plots in prime locations with clear titles and high appreciation.",

  keywords: [
    "open plots for sale in hyderabad",
    "hmda approved open plots hyderabad",
    "rera approved plots hyderabad",
    "residential plots hyderabad",
    "villa plots hyderabad",
    "investment plots hyderabad",
    "aarna infra developers",
  ],

  authors: [{ name: "Aarna Infra Developers" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://aarnainfradevelopers.com/",
    languages: {
      "en-IN": "https://aarnainfradevelopers.com/",
    },
  },

  openGraph: {
    title: "Open Plots for Sale in Hyderabad | HMDA & RERA Approved",
    description:
      "Explore HMDA & RERA approved open plots for sale in Hyderabad. Secure investment & residential plots by Aarna Infra Developers in prime growth corridors.",
    url: "https://aarnainfradevelopers.com/",
    siteName: "Aarna Infra Developers",
    images: [
      {
        url: "/assets/img/open-plots-hyderabad.jpg",
        alt: "Open Plots for Sale in Hyderabad - Aarna Infra Developers",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Open Plots for Sale in Hyderabad | HMDA & RERA Approved",
    description:
      "Buy HMDA & RERA approved open plots in Hyderabad. Trusted real estate developer offering high-growth investment locations.",
    images: ["/assets/img/open-plots-hyderabad.jpg"],
  },

  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-touch-icon.png",
  },

  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.3850;78.4867",
    ICBM: "17.3850, 78.4867",
    "theme-color": "#2C4964",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
