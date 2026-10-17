
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

const canonicalUrl = "https://aarnainfradevelopers.com/contact.html";

export const metadata: Metadata = {
  title: "Contact Us | Aarna Infra Developers - Hyderabad",
  description:
    "Contact Aarna Infra Developers for premium residential plots, apartments, and real estate projects in Hyderabad. Call 9959354255 or visit our office.",
  keywords: [
    "contact Aarna Infra",
    "real estate contact Hyderabad",
    "property developers contact",
    "open plots inquiry",
    "apartment inquiry Hyderabad",
    "land purchase contact",
    "real estate office Hyderabad",
    "property investment contact",
  ],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Contact Us | Aarna Infra Developers - Hyderabad",
    description:
      "Contact Aarna Infra Developers for premium residential plots, apartments, and real estate projects in Hyderabad.",
    url: canonicalUrl,
    siteName: "Aarna Infra Developers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://aarnainfradevelopers.com/assets/img/Logo.jpg",
        width: 1200,
        height: 630,
        alt: "Aarna Infra Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Aarna Infra Developers - Hyderabad",
    description:
      "Contact Aarna Infra Developers for real estate inquiries in Hyderabad.",
    images: ["https://aarnainfradevelopers.com/assets/img/Logo.jpg"],
    site: "@Aarnainfradev",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      name: "Aarna Infra Developers",
      url: "https://aarnainfradevelopers.com",
      logo: "https://aarnainfradevelopers.com/assets/img/Logo.jpg",
      image: "https://aarnainfradevelopers.com/assets/img/Logo.jpg",
      telephone: "+91-9959354255",
      email: "info@aarnainfradevelopers.com",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Premnagar, Khairtabad",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500004",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9959354255",
          contactType: "Customer Service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Telugu"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-7337317289",
          contactType: "Sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Telugu"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/aarnainfradevelopers",
        "https://twitter.com/Aarnainfradev",
        "https://www.instagram.com/aarnainfradevelopers/",
        "https://www.youtube.com/@aarnainfradevelopers",
        "https://www.linkedin.com/in/aarnainfra-developers-29ab30200",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://aarnainfradevelopers.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "ContactPage",
      name: "Contact Us",
      description:
        "Contact Aarna Infra Developers for real estate inquiries in Hyderabad.",
      url: canonicalUrl,
      inLanguage: "en-IN",
      isPartOf: {
        "@type": "WebSite",
        name: "Aarna Infra Developers",
        url: "https://aarnainfradevelopers.com",
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <ContactClient />
    </>
  );
}
