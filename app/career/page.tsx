import type { Metadata } from "next";
import CareerClient from "./CareerClient";

const siteUrl = "https://aarnainfradevelopers.com";
const pageUrl = `${siteUrl}/career.html`;
const logoUrl = `${siteUrl}/assets/img/Logo.jpg`;

export const metadata: Metadata = {
  title:
    "Careers at Aarna Infra Developers | Real Estate Jobs in Hyderabad",
  description:
    "Explore career opportunities at Aarna Infra Developers — real estate jobs in Hyderabad for sales, marketing, site coordination, channel partnerships and operations. Apply online and grow with our team.",
  keywords: [
    // Head terms
    "careers at Aarna Infra Developers",
    "real estate jobs in Hyderabad",
    "real estate careers Hyderabad",
    "jobs in real estate Hyderabad",
    "property company jobs Hyderabad",
    "Aarna Infra careers",
    "Aarna Infra jobs",
    "Aarna Infra Developers hiring",

    // Roles
    "real estate sales executive jobs Hyderabad",
    "property sales jobs Hyderabad",
    "real estate marketing jobs Hyderabad",
    "site coordinator jobs Hyderabad",
    "channel partner manager jobs Hyderabad",
    "real estate operations jobs Hyderabad",
    "customer support jobs real estate Hyderabad",
    "business development jobs real estate Hyderabad",

    // Intent
    "fresher real estate jobs Hyderabad",
    "experienced real estate jobs Hyderabad",
    "walk in interviews real estate Hyderabad",
    "real estate job openings near me",
    "real estate company hiring in Hyderabad",
    "plot sales executive jobs Hyderabad",
    "villa sales jobs Hyderabad",
    "apartment sales jobs Hyderabad",
    "high paying real estate jobs Hyderabad",

    // Locations
    "real estate jobs in Madhapur",
    "real estate jobs in Gachibowli",
    "real estate jobs in HITEC City",
    "real estate jobs in Banjara Hills",
    "real estate jobs near Madhapur Hyderabad",

    // Brand
    "Aarna Infra Developers careers",
    "work at Aarna Infra",
    "Aarna Infra job openings",
  ],
  authors: [{ name: "Aarna Infra Developers" }],
  creator: "Aarna Infra Developers",
  publisher: "Aarna Infra Developers",
  category: "Careers",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Careers at Aarna Infra Developers | Real Estate Jobs in Hyderabad",
    description:
      "Explore career opportunities at Aarna Infra Developers — sales, marketing, site coordination and more. Apply online.",
    url: pageUrl,
    siteName: "Aarna Infra Developers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: "Aarna Infra Developers careers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Aarna Infra Developers | Hyderabad",
    description:
      "Explore real estate career opportunities at Aarna Infra Developers in Hyderabad.",
    images: [logoUrl],
    site: "@Aarnainfradev",
    creator: "@Aarnainfradev",
  },
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-touch-icon.png",
  },
};

export default function CareerPage() {
  return <CareerClient />;
}