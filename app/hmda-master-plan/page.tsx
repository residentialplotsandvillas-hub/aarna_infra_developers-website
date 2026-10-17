import type { Metadata } from "next";
import HmdaMasterPlanClient from "./HmdaMasterPlanClient";

const siteUrl = "https://aarnainfradevelopers.com";
const pageUrl = `${siteUrl}/hmda-master-plan.html`;
const logoUrl = `${siteUrl}/assets/img/Logo.jpg`;

export const metadata: Metadata = {
  title:
    "HMDA Master Plan 2031 Maps Hyderabad | Download Area-Wise Maps",
  description:
    "Browse HMDA Master Plan 2031 maps for 30+ mandals in Hyderabad — Shamshabad, Kothur, Maheshwaram, Ibrahimpatnam, Hayathnagar, Ghatkesar, Medchal, Patancheruvu, Sangareddy, Shankarpalli, Moinabad, Yacharam and more. Check land-use zones before buying plots.",
  keywords: [
    // Core / head terms
    "HMDA master plan",
    "HMDA master plan 2031",
    "HMDA master plan 2031 Hyderabad",
    "HMDA master plan maps",
    "Hyderabad master plan",
    "Hyderabad master plan 2031",
    "HMDA 2031",
    "HMDA zones",
    "HMDA land use plan",
    "HMDA land use map Hyderabad",
    "HMDA layout plan",
    "HMDA approved areas",
    "HMDA map download",
    "HMDA master plan PDF",
    "urban planning Hyderabad",
    "metropolitan development Hyderabad",
    "Hyderabad Metropolitan Development Authority",

    // Land-use / buyer-intent terms
    "HMDA master plan land use classification",
    "how to check HMDA master plan",
    "HMDA master plan vs layout approval",
    "is HMDA master plan enough to buy plot",
    "HMDA master plan plot buying",
    "HMDA approved plots in Hyderabad",
    "HMDA master plan 2031 plot investment",

    // Area-wise long-tail keywords (matches directory)
    "HMDA master plan 2031 Shamshabad",
    "HMDA master plan 2031 Kothur",
    "HMDA master plan 2031 Kothuru",
    "HMDA master plan 2031 Maheshwaram",
    "HMDA master plan 2031 Ibrahimpatnam",
    "HMDA master plan 2031 Hayathnagar",
    "HMDA master plan 2031 Ghatkesar",
    "HMDA master plan 2031 Medchal Qutubullapur",
    "HMDA master plan 2031 Patancheruvu",
    "HMDA master plan 2031 Sangareddy",
    "HMDA master plan 2031 Shankarpalli",
    "HMDA master plan 2031 Moinabad",
    "HMDA master plan 2031 Yacharam",
    "HMDA master plan 2031 Chevella",
    "HMDA master plan 2031 Bibinagar",
    "HMDA master plan 2031 Bommalaramaram",
    "HMDA master plan 2031 Buvanagiri",
    "HMDA master plan 2031 Choutuppal",
    "HMDA master plan 2031 Faruqnagar",
    "HMDA master plan 2031 Hatnura",
    "HMDA master plan 2031 Jinnawaram",
    "HMDA master plan 2031 Kandukur",
    "HMDA master plan 2031 Kisara",
    "HMDA master plan 2031 Mulug",
    "HMDA master plan 2031 Narsapur",
    "HMDA master plan 2031 Pochampalli",
    "HMDA master plan 2031 Shahbad",
    "HMDA master plan 2031 Shahmirpet",
    "HMDA master plan 2031 Shivampet",
    "HMDA master plan 2031 Tupran",
    "HMDA master plan 2031 Wargal",

    // Nearby / related search terms
    "Shamshabad master plan",
    "Ghatkesar development plan",
    "Kothur HMDA master plan",
    "Maheshwaram master plan 2031",
    "Ibrahimpatnam master plan Hyderabad",
    "Shankarpalli master plan",
    "Moinabad master plan",
    "Yacharam master plan",
    "Patancheru master plan",
    "Medchal master plan",
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
      "HMDA Master Plan 2031 Maps Hyderabad | Download Area-Wise Maps",
    description:
      "View HMDA Master Plan 2031 maps for 30+ mandals in Hyderabad — Shamshabad, Kothur, Maheshwaram, Ibrahimpatnam, Ghatkesar, Medchal, Patancheruvu and more.",
    url: pageUrl,
    siteName: "Aarna Infra Developers",
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: "HMDA Master Plan 2031 Maps — Aarna Infra Developers",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "HMDA Master Plan 2031 Maps Hyderabad | Aarna Infra Developers",
    description:
      "Browse HMDA Master Plan 2031 maps for 30+ mandals across the Hyderabad Metropolitan Region.",
    images: [logoUrl],
    site: "@Aarnainfradev",
    creator: "@Aarnainfradev",
  },
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-touch-icon.png",
  },
  other: {
    "google-site-verification":
      "iBwMBa3KwGOiLtlJxVgpLHHA4TTXxanwvcLxn1DjVf8",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Aarna Infra Developers",
  url: siteUrl,
  logo: logoUrl,
  image: logoUrl,
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${siteUrl}/services.html`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "HMDA Master Plan 2031",
      item: pageUrl,
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "HMDA Master Plan 2031 Maps Hyderabad",
  description:
    "HMDA Master Plan 2031 maps for 30+ mandals across the Hyderabad Metropolitan Development Authority region, including Shamshabad, Kothur, Maheshwaram, Ibrahimpatnam, Hayathnagar, Ghatkesar, Medchal, Patancheruvu, Sangareddy, Shankarpalli, Moinabad and Yacharam.",
  url: pageUrl,
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "Aarna Infra Developers",
    url: siteUrl,
  },
  about: {
    "@type": "Thing",
    name: "HMDA Master Plan 2031",
    description:
      "Land-use master plan prepared by the Hyderabad Metropolitan Development Authority for the Hyderabad Metropolitan Region.",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Property buyers and investors in Hyderabad",
  },
  publisher: {
    "@type": "Organization",
    name: "Aarna Infra Developers",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the HMDA Master Plan 2031?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The HMDA Master Plan 2031 is a land-use plan prepared by the Hyderabad Metropolitan Development Authority for the Hyderabad Metropolitan Region. It shows designated land uses such as residential, commercial, industrial, agricultural, green belt and open spaces for the plan horizon year 2031. The maps are useful for checking land-use classification and planning context for specific areas and villages.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I download HMDA Master Plan 2031 maps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can browse the list of areas on this page and open the available master plan map for each area. For official verification, buyers should cross-check details with the HMDA authorities or the official HMDA website before making any property decision.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas are covered in the HMDA Master Plan 2031 maps on this page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This page includes maps for Bibinagar, Bommalaramaram, Buvanagiri, Chevella, Choutuppal, Faruqnagar, Ghatkesar, Hatnura, Hayathnagar, Ibrahimpatnam, Jinnawaram FPLU, Kandukur, Kisara, Kothuru, Maheshwaram, Moinabad, Mulug, Medchal Qutubullapur, Narsapur, Patancheruvu, Pochampalli, Sangareddy, Shahbad, Shahmirpet, Shamshabad, Shankarpalli, Shivampet, Tupran, Wargal and Yacharam.",
      },
    },
    {
      "@type": "Question",
      name: "How do I check the land-use zone of a plot in the HMDA Master Plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Identify the mandal or area, open the corresponding master plan map, and locate the survey number or village boundary. The map uses colors and codes to represent land uses. For accurate interpretation of the zoning, approach the HMDA authorities or a qualified planning consultant, since map reading can be technical.",
      },
    },
    {
      "@type": "Question",
      name: "Is the HMDA Master Plan map enough to buy a plot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The master plan is a planning reference, not a substitute for checking title documents, layout approvals, encumbrance certificates and other property-specific records. Buyers should always verify the layout approval, LP number, title chain and registration details before purchasing a plot.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between HMDA Master Plan and HMDA layout approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The master plan shows land-use zoning for the region and indicates how areas are planned for development. Layout approval is a separate process where a specific plotted development is reviewed and sanctioned. Both are relevant but serve different purposes. Buyers should check both for the specific property.",
      },
    },
    {
      "@type": "Question",
      name: "Are the HMDA Master Plan 2031 maps on this page official?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The maps are shared for general reference. For any legal, construction or investment decision, verify the current land-use status with the HMDA authorities or the official HMDA portal, as plan details can be updated over time.",
      },
    },
    {
      "@type": "Question",
      name: "Can the HMDA Master Plan change?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Master plans can be revised, and land-use designations may change through official amendment processes. Buyers should confirm the latest status of any specific land parcel before making a decision.",
      },
    },
    {
      "@type": "Question",
      name: "Which HMDA Master Plan 2031 areas are popular for plots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Areas such as Shamshabad, Kothur, Maheshwaram, Ibrahimpatnam, Hayathnagar, Yacharam, Shankarpalli and Moinabad are frequently discussed in the context of plot purchases. Buyers should check the specific plot's approvals, zoning and documentation before proceeding.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact Aarna Infra Developers for help with HMDA plots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can call +91 99593 54255, message us on WhatsApp, or use the contact page on our website. Our team can help coordinate project information and site visits for HMDA-approved plots in and around Hyderabad.",
      },
    },
  ],
};

const masterPlanAreas = [
  "Bibinagar",
  "Bommalaramaram",
  "Buvanagiri",
  "Chevella",
  "Choutuppal",
  "Faruqnagar",
  "Ghatkesar",
  "Hatnura",
  "Hayathnagar",
  "Ibrahimpatnam",
  "Jinnawaram FPLU",
  "Kandukur",
  "Kisara",
  "Kothuru",
  "Maheshwaram",
  "Moinabad",
  "Mulug",
  "Medchal Qutubullapur",
  "Narsapur",
  "Patancheruvu",
  "Pochampalli",
  "Sangareddy",
  "Shahbad",
  "Shahmirpet",
  "Shamshabad",
  "Shankarpalli",
  "Shivampet",
  "Tupran",
  "Wargal",
  "Yacharam",
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "HMDA Master Plan 2031 Maps — Area Directory",
  description:
    "Directory of HMDA Master Plan 2031 maps by mandal and area across the Hyderabad Metropolitan Region.",
  numberOfItems: masterPlanAreas.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: masterPlanAreas.map((area, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: `HMDA Master Plan 2031 — ${area}`,
    url: pageUrl,
  })),
};

export default function HmdaMasterPlanPage() {
  const schemas = [
    organizationSchema,
    breadcrumbSchema,
    webPageSchema,
    faqSchema,
    itemListSchema,
  ];

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
      <HmdaMasterPlanClient />
    </>
  );
}