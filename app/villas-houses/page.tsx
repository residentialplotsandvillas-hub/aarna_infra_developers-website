import type { Metadata } from "next";
import VillasHousesClient from "./VillasHousesClient";

const siteUrl = "https://aarnainfradevelopers.com";
const pageUrl = `${siteUrl}/villas-houses.html`;
const logoUrl = `${siteUrl}/assets/img/Logo.jpg`;
const projectUrl = `${siteUrl}/projects/SLN-Sundaram-Palm-Villas.html`;

export const metadata: Metadata = {
  title:
    "Villas for Sale in Hyderabad | Luxury Villas & Gated Communities — Aarna Infra",
  description:
    "Explore villas for sale in Hyderabad with Aarna Infra Developers. View SLN Sundaram Palm Villas in Bonguluru, luxury villas, gated community villas and independent houses across Tellapur, Mokila and Shamshabad. Enquire for project details and site visits.",
  keywords: [
    // Head terms
    "villas for sale in Hyderabad",
    "villas for sale Hyderabad",
    "villas in Hyderabad",
    "luxury villas in Hyderabad",
    "luxury villas Hyderabad",
    "premium villas Hyderabad",
    "gated community villas in Hyderabad",
    "gated community villas",
    "independent houses in Hyderabad",
    "houses for sale in Hyderabad",
    "houses for sale Hyderabad",
    "villa plots in Hyderabad",
    "villa plots",
    "residential villas Hyderabad",
    "premium homes Hyderabad",

    // Buyer intent
    "buy villa in Hyderabad",
    "buy house in Hyderabad",
    "villa investment Hyderabad",
    "property investment in Hyderabad",
    "villa vs independent house Hyderabad",
    "independent house buying Hyderabad",
    "best villas in Hyderabad",
    "gated community villas benefits",
    "villas near Financial District Hyderabad",
    "villas near ORR Hyderabad",
    "villas near Gachibowli",
    "RERA registered villas Hyderabad",
    "villa maintenance charges Hyderabad",

    // Location long-tail
    "villas in Bonguluru",
    "villas in Padmavathi Nagar",
    "villas in Shamshabad",
    "villas in Tellapur",
    "villas in Mokila",
    "villas in Kollur",
    "villas in Kompally",
    "villas in Bowrampet",
    "villas in Rajendra Nagar",
    "villas in Budvel",
    "villas in Attapur",

    // Project-specific
    "SLN Sundaram Palm Villas",
    "SLN Sundaram Palm Villas Bonguluru",
    "SLN Sundaram Palm Villas Hyderabad",
    "SLN Sundaram Palm Villas Padmavathi Nagar",

    // Documentation / trust
    "villa documents verification Hyderabad",
    "villa approvals Hyderabad",
    "villa construction quality Hyderabad",
    "gated community amenities Hyderabad",

    // Brand
    "Aarna Infra Developers",
    "Aarna Infra villas Hyderabad",
    "Aarna Infra Developers villas",
    "real estate Hyderabad",
  ],
  authors: [{ name: "Aarna Infra Developers" }],
  creator: "Aarna Infra Developers",
  publisher: "Aarna Infra Developers",
  category: "Real Estate",
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
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Villas for Sale in Hyderabad | Luxury Villas & Gated Communities — Aarna Infra",
    description:
      "Discover exclusive villas and houses for sale in Hyderabad with Aarna Infra Developers. Premium residential properties, gated communities and SLN Sundaram Palm Villas in Bonguluru.",
    url: pageUrl,
    siteName: "Aarna Infra Developers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: "Aarna Infra Developers villas in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Villas for Sale in Hyderabad | Aarna Infra Developers",
    description:
      "Explore luxury villas, gated community homes and independent houses in Hyderabad, including SLN Sundaram Palm Villas in Bonguluru.",
    images: [logoUrl],
    site: "@Aarnainfradev",
    creator: "@Aarnainfradev",
  },
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-touch-icon.png",
  },
};

const faqs = [
  {
    q: "Where can I find villas for sale in Hyderabad?",
    a: "You can explore residential project listings on the Aarna Infra Developers website and contact the team to ask about current availability, locations, pricing and property specifications.",
  },
  {
    q: "What should I check before buying a luxury villa?",
    a: "Review the location, property specifications, total cost, relevant approvals, title documents, available amenities and maintenance terms. Obtain independent legal verification before purchasing.",
  },
  {
    q: "Are independent houses and gated community villas different?",
    a: "Independent houses and gated community villas can differ in layout, shared facilities, security arrangements, maintenance and community rules. Compare the actual features and terms of each property before deciding.",
  },
  {
    q: "How can I enquire about SLN Sundaram Palm Villas?",
    a: "Use the project card on this page or contact Aarna Infra Developers at 9959354255 to request project information. Confirm current availability and pricing directly with the project representative.",
  },
  {
    q: "How do I choose between a villa and an independent house in Hyderabad?",
    a: "Compare location, plot size, built-up area, privacy, shared amenities, maintenance charges and community rules. Villas in gated communities often include shared facilities and security, while independent houses may offer more customisation but fewer shared amenities.",
  },
  {
    q: "Are villa prices in Hyderabad negotiable?",
    a: "Negotiability varies by project, developer and market conditions. Buyers should compare multiple projects, review the total cost including registration and maintenance charges, and negotiate based on current market context rather than assuming fixed pricing.",
  },
  {
    q: "Can NRIs buy villas in Hyderabad?",
    a: "Yes, NRIs can purchase residential villas in India subject to applicable FEMA and RBI regulations. Documentation, payment and registration should be handled carefully, ideally with legal guidance and proper Power of Attorney arrangements where required.",
  },
  {
    q: "How do I schedule a site visit for a villa project?",
    a: "Contact Aarna Infra Developers at +91 99593 54255 or message us on WhatsApp. Share your preferred project and dates, and our team can help coordinate a site visit.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Organization / Real Estate Agent
    {
      "@type": "RealEstateAgent",
      "@id": `${siteUrl}/#organization`,
      name: "Aarna Infra Developers",
      description:
        "Real estate company in Hyderabad offering premium villas, gated community homes, independent houses, apartments, open plots and farmland options.",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
      image: logoUrl,
      telephone: "+91-9959354255",
      priceRange: "₹₹₹",
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
        latitude: "17.385044",
        longitude: "78.486671",
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

    // 2. WebPage
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: "Villas for Sale in Hyderabad",
      description:
        "Explore villas for sale in Hyderabad including luxury villas, gated community homes and independent houses, with featured project SLN Sundaram Palm Villas in Bonguluru.",
      url: pageUrl,
      inLanguage: "en-IN",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Aarna Infra Developers",
      },
      about: {
        "@type": "Thing",
        name: "Villas and Independent Houses in Hyderabad",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Property buyers and investors in Hyderabad",
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },

    // 3. Breadcrumb
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
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
          item: `${siteUrl}/projects.html`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Villas & Houses",
          item: pageUrl,
        },
      ],
    },

    // 4. ItemList of projects
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#projects`,
      name: "Villas and Houses in Hyderabad",
      numberOfItems: 1,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SingleFamilyResidence",
            name: "SLN Sundaram Palm Villas",
            description:
              "Villa project listed in Padmavathi Nagar, Bonguluru, Telangana, offered through Aarna Infra Developers.",
            url: projectUrl,
            image: `${siteUrl}/assets/img/ongoing-projects/SLN-Sundaram-Palm-Villas.jpg`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Padmavathi Nagar, Bonguluru",
              addressRegion: "Telangana",
              addressCountry: "IN",
            },
          },
        },
      ],
    },

    // 5. FAQPage
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ],
};

export default function VillasHousesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <VillasHousesClient />
    </>
  );
}