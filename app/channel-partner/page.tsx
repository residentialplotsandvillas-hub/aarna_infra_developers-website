
import type { Metadata } from "next";
import ChannelPartnerClient from "./ChannelPartnerClient";

const siteUrl = "https://aarnainfradevelopers.com";
const canonicalUrl = `${siteUrl}/channel-partner.html`;
const logo = `${siteUrl}/assets/img/Logo.jpg`;

export const metadata: Metadata = {
  title: "Channel Partner Program | Aarna Infra Developers",
  description:
    "Join Aarna Infra Developers as a Channel Partner in Hyderabad. Earn attractive commissions by promoting premium real estate projects. Register now for exclusive partnership benefits.",
  keywords: [
    "channel partner",
    "real estate partnership",
    "property dealer registration",
    "channel partner program Hyderabad",
    "real estate agent partnership",
    "Aarna Infra channel partner",
    "property consultant registration",
    "earn commission real estate",
    "RERA registered agents",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Channel Partner Program | Aarna Infra Developers",
    description:
      "Join Aarna Infra Developers as a Channel Partner in Hyderabad and explore real estate partnership opportunities.",
    url: canonicalUrl,
    siteName: "Aarna Infra Developers",
    type: "website",
    locale: "en_IN",
    images: [{ url: logo, width: 1200, height: 630, alt: "Aarna Infra Developers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Channel Partner Program | Aarna Infra Developers",
    description:
      "Register as a Channel Partner with Aarna Infra Developers in Hyderabad.",
    images: [logo],
    site: "@Aarnainfradev",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Aarna Infra Developers",
  url: siteUrl,
  logo,
  image: logo,
  telephone: "+91-9959354255",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Premnagar, Khairtabad",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500004",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9959354255",
    contactType: "Customer Support",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Telugu"],
  },
  sameAs: [
    "https://www.facebook.com/aarnainfradevelopers",
    "https://twitter.com/Aarnainfradev",
    "https://www.instagram.com/aarnainfradevelopers/",
    "https://www.youtube.com/@aarnainfradevelopers",
    "https://www.linkedin.com/in/aarnainfra-developers-29ab30200",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Channel Partner",
      item: canonicalUrl,
    },
  ],
};

export default function ChannelPartnerPage() {
  const schemas = [organizationSchema, breadcrumbSchema];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
      <ChannelPartnerClient />
    </>
  );
}
