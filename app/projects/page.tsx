import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

const siteUrl = "https://aarnainfradevelopers.com";
const pageUrl = `${siteUrl}/projects.html`;
const logoUrl = `${siteUrl}/assets/img/Logo.jpg`;

export const metadata: Metadata = {
  title:
    "Real Estate Projects in Hyderabad & Telangana | Open Plots — Aarna Infra",
  description:
    "Explore real estate projects and open plots near Hyderabad in Shadnagar, Kadthal, Sadashivpet, Jadcherla, Kothur and Balanagar. View Magadha, Golden City, Golden Terra, Green Meadows and more. Enquire for project details, availability and site visits.",
  keywords: [
    // Head terms
    "real estate projects in Hyderabad",
    "real estate projects in Telangana",
    "real estate projects near Hyderabad",
    "open plots for sale near Hyderabad",
    "open plots near Hyderabad",
    "residential plots near Hyderabad",
    "open plots in Hyderabad",
    "projects in Hyderabad",
    "property projects Hyderabad",

    // Location long-tail
    "open plots in Shadnagar",
    "plots in Shadnagar",
    "plots near Kadthal",
    "plots in Sadashivpet",
    "plots in Jadcherla",
    "plots in Balanagar",
    "plots in Kothur",
    "plots near Bangalore Highway",
    "plots near Shadnagar Tollgate",
    "plots near RRR",
    "plots near Regional Ring Road",
    "plots near NRSC",
    "plots near Maisigandi Temple",
    "plots near MRO Office Sadashivpet",
    "plots near JP Dargah",
    "plots near Microsoft Data Center",

    // Project names
    "Magadha project",
    "Magadha plots Kadthal",
    "Golden City plots",
    "Golden City Sadashivpet",
    "Golden Terra plots",
    "Golden Terra Shadnagar",
    "Green Meadows plots",
    "Green Meadows Balanagar",
    "Yuva Park plots",
    "Yuva Park Shadnagar",
    "Karthikeya Green County",
    "Karthikeya Green County Jadcherla",
    "Golden Valley plots",
    "Golden Valley Kothur",

    // Buyer intent
    "HMDA approved plots near Hyderabad",
    "DTCP approved plots near Hyderabad",
    "plots near Hyderabad for investment",
    "plot investment Hyderabad",
    "buy open plots near Hyderabad",
    "residential plots in Telangana",
    "plot documents verification Hyderabad",
    "site visit plots Hyderabad",

    // Brand
    "Aarna Infra Developers",
    "Aarna Infra projects",
    "Aarna Infra open plots",
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
    },
  },
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Real Estate Projects in Hyderabad & Telangana | Open Plots — Aarna Infra",
    description:
      "Explore open plots and real estate project listings near Hyderabad. Contact Aarna Infra Developers for project information, availability and site visits.",
    url: pageUrl,
    siteName: "Aarna Infra Developers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: "Aarna Infra Developers real estate projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Projects in Hyderabad | Aarna Infra Developers",
    description:
      "Explore open plots and real estate project listings near Hyderabad — Shadnagar, Kadthal, Sadashivpet, Jadcherla, Kothur and Balanagar.",
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
    q: "Where can I find open plots near Hyderabad?",
    a: "Explore the project listings on this page for locations including Shadnagar, Kadthal, Sadashivpet, Jadcherla, Kothur and Balanagar. Contact the team to confirm current availability.",
  },
  {
    q: "Which projects are listed near Shadnagar?",
    a: "Yuva Park is listed near NRSC and Shadnagar, Golden Terra is listed beside Shadnagar Tollgate, and Green Meadows is listed in the Balanagar and Shadnagar area. Check each card for its displayed status.",
  },
  {
    q: "Are all listed projects currently available?",
    a: "No. Some project cards are marked sold out. Contact the team to verify the current status of a specific project.",
  },
  {
    q: "What documents should I check before buying a plot?",
    a: "Review title documents, ownership, applicable layout approvals, land use, plot boundaries and registration requirements with a qualified legal professional.",
  },
  {
    q: "How can I enquire about a project?",
    a: "Click Enquire Now, select your preferred project and submit your contact details. You can also call 9959354255 for further information.",
  },
  {
    q: "What is the difference between HMDA and DTCP approved plots?",
    a: "HMDA approvals apply within the Hyderabad Metropolitan Region, while DTCP approvals apply outside HMDA limits. Both indicate that a layout has been reviewed against applicable regulations, but buyers should always verify the approval copy and LP number for the specific project.",
  },
  {
    q: "Do you offer site visits to project locations?",
    a: "Yes. Site visits can be coordinated for listed projects. Contact our team with your preferred dates and locations, and we can help arrange a visit so you can see the project, layout and surroundings in person.",
  },
  {
    q: "Can I get a bank loan for an open plot?",
    a: "Several banks and housing finance companies offer plot loans for approved layouts. Loan eligibility, funding percentage and approval depend on the bank, the project's approvals and the buyer's profile. Confirm loan terms directly with your preferred lender.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${siteUrl}/#organization`,
      name: "Aarna Infra Developers",
      description:
        "Real estate company offering open plots, villas, apartments and farmland options in Hyderabad and nearby locations.",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: logoUrl },
      image: logoUrl,
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
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: "Real Estate Projects in Hyderabad & Telangana",
      description:
        "Explore open plots and real estate project listings across Shadnagar, Kadthal, Sadashivpet, Jadcherla, Kothur and Balanagar.",
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
        name: "Real Estate Projects Near Hyderabad",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Property buyers and investors in Hyderabad",
      },
      publisher: { "@id": `${siteUrl}/#organization` },
    },
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
          item: pageUrl,
        },
      ],
    },
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

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <ProjectsClient/>
    </>
  );
}