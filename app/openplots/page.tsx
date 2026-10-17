
import type { Metadata } from "next";
import Openplots from "./openplotsClient";

const siteUrl = "https://aarnainfradevelopers.com";
const canonicalUrl = `${siteUrl}/projects.html`;

export const metadata: Metadata = {
  title: "Real Estate Projects in Hyderabad | Aarna Infra Developers",
  description:
    "Explore premium real estate projects in Hyderabad by Aarna Infra Developers. Open plots, luxury apartments, farm lands, and villas in prime locations including Shadnagar, Attapur, Kokapet, and more.",
  keywords: [
    "real estate projects Hyderabad",
    "residential plots Hyderabad",
    "apartments for sale",
    "luxury villas",
    "farm lands",
    "Aarna Infra Developers projects",
    "open plots Shadnagar",
    "apartments Attapur",
    "property investment Hyderabad",
    "gated community plots",
    "HMDA approved plots",
    "DTCP plots",
    "real estate developers Hyderabad",
  ],
  authors: [{ name: "Aarna Infra Developers" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Real Estate Projects in Hyderabad | Aarna Infra Developers",
    description:
      "Explore premium open plots, luxury apartments, farm lands, and villas in prime Hyderabad locations.",
    url: canonicalUrl,
    siteName: "Aarna Infra Developers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/assets/img/Logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Aarna Infra Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Projects in Hyderabad | Aarna Infra Developers",
    description:
      "Explore gated community plots, luxury apartments, farm lands, and premium villas in prime Hyderabad locations.",
    images: [`${siteUrl}/assets/img/Logo.jpg`],
    site: "@Aarnainfradev",
  },
};

const projects = [
  ["Yuva Park", "Yuvapark.html", "Near NRSC, Shadnagar"],
  ["Magadha", "Magadha.html", "Near Maisigandi Temple, Kadthal"],
  [
    "Karthikeya Green County",
    "Karthikeya.html",
    "Beside Bangalore Highway, Jadcherla",
  ],
  ["Golden City", "Golden-City.html", "Near MRO Office, Sadashivpet"],
  ["Golden Terra", "Golden-Terra.html", "Beside Shadnagar Tollgate"],
  [
    "Golden Valley",
    "Golden-Valley.html",
    "Near Microsoft Data Center, Kothur",
  ],
  ["GNR Vasavi Nirvana", "GNR-Vasavi.html", "Attapur"],
  [
    "Myscape Songs Of The Sun",
    "Myscape-Songs-Of-The-Sun.html",
    "Near Financial District, Hyderabad",
  ],
  [
    "Prestige Spring Heights",
    "Prestige-Spring-Heights.html",
    "Budvel, Hyderabad",
  ],
  [
    "Godrej Madison Avenue",
    "Godrej-Madison-Avenue.html",
    "Kokapet, Hyderabad",
  ],
  ["The Prestige City", "The-Prestige-City.html", "Rajendra Nagar, Hyderabad"],
  [
    "SLN Sundaram Palm Villas",
    "SLN-Sundaram.html",
    "Padmavathi Nagar, Bonguluru",
  ],
  ["Oxy Flora", "Oxy-Flora.html", "Near Pharma City, Nednur, Srisailam Highway"],
  [
    "Golden Farm",
    "Golden-Farm.html",
    "Balanagar, Bangalore Highway, Kallepally",
  ],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${siteUrl}/#organization`,
      name: "Aarna Infra Developers",
      description:
        "Real estate developer in Hyderabad offering premium residential plots, apartments, farm lands, and villas.",
      url: siteUrl,
      logo: `${siteUrl}/assets/img/Logo.jpg`,
      image: `${siteUrl}/assets/img/Logo.jpg`,
      telephone: "+91-9959354255",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Premnagar, Khairtabad",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500004",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.385044,
        longitude: 78.486671,
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
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Real Estate Projects in Hyderabad",
      numberOfItems: projects.length,
      itemListElement: projects.map(([name, path, location], index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Residence",
          name,
          url: `${siteUrl}/projects/${path}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: location,
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
        },
      })),
    },
  ],
};

export default function openplots() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Openplots />
    </>
  );
}
