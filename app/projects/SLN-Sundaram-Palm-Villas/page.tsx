import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

const siteUrl = "https://aarnainfradevelopers.com";
const pageUrl = `${siteUrl}/projects/SLN-Sundaram-Palm-Villas`;

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
  title:
    "SLN Sundaram Palm Villas — 4 BHK Ultra Premium Villas in Bongloor, Hyderabad | Aarna Infra",
  description:
    "Buy 4 BHK ultra premium villas at SLN Sundaram Palm Villas, Padmavathi Nagar, Bongloor near ORR Exit 12, Hyderabad. 40 exclusive villas with 150–300 sq.yds plots and 2,595–4,335 sq.ft. construction. 100% Vastu compliant, clubhouse, swimming pool, home theatre, 2-car parking. Near TCS Adibatla, Foxconn & RGIA. Bank loan available. Book a site visit.",
  keywords: [
    // Head terms
    "villas for sale in Hyderabad",
    "luxury villas Hyderabad",
    "premium villas Hyderabad",
    "4 BHK villas Hyderabad",
    "ultra premium villas Hyderabad",
    "gated community villas Hyderabad",
    "villas in Bongloor",
    "villas Padmavathi Nagar",
    "villas near ORR Exit 12",
    "villas near TCS Adibatla",
    "villas near Ramoji Film City",

    // Project
    "SLN Sundaram Palm Villas",
    "SLN Sundaram Palm Villas Bongloor",
    "SLN Sundaram Palm Villas Hyderabad",
    "SLN Sundaram Palm Villas Padmavathi Nagar",
    "SLN Sundaram Palm Villas price",
    "SLN Sundaram Palm Villas 4 BHK",
    "SLN Sundaram Palm Villas layout",
    "SLN Sundaram villas 40 units",
    "SLN Sundaram villas 2595 sqft",
    "SLN Sundaram villas 4335 sqft",
    "SLN Sundaram Palm Villas home theatre",

    // Location long-tail
    "villas near Foxconn Hyderabad",
    "villas near Tata Boeing Aerospace",
    "villas near E-City Fab City",
    "villas near RGIA Airport",
    "villas near Adibatla tech corridor",
    "villas near Kallem Jaga Reddy Function Hall",

    // Buyer intent
    "buy 4 BHK villa in Hyderabad",
    "villa buying guide Hyderabad",
    "luxury villa investment Hyderabad",
    "villa vs apartment Hyderabad",
    "gated villa community Hyderabad",
    "Vastu compliant villas Hyderabad",
    "villas near airport under 30 minutes",
    "villa with home theatre Hyderabad",

    // Brand
    "Aarna Infra Developers",
    "Aarna Infra villas Hyderabad",
    "Aarna Infra SLN Sundaram",
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
  alternates: { canonical: pageUrl },
  openGraph: {
    title:
      "SLN Sundaram Palm Villas — 4 BHK Ultra Premium Villas in Bongloor | Aarna Infra",
    description:
      "40 exclusive 4 BHK villas on 150–300 sq.yds plots with 2,595–4,335 sq.ft. construction. 100% Vastu compliant, clubhouse, swimming pool, home theatre. Near TCS Adibatla, ORR Exit 12 & RGIA.",
    url: pageUrl,
    siteName: "Aarna Infra Developers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/assets/img/projects/villas/SLN-Sundaram-1.jpg`,
        width: 1200,
        height: 630,
        alt: "SLN Sundaram Palm Villas in Padmavathi Nagar, Bongloor — Aarna Infra Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SLN Sundaram Palm Villas — 4 BHK Villas in Bongloor | Aarna Infra",
    description:
      "40 ultra premium 4 BHK villas. 150–300 sq.yds plots, 2,595–4,335 sq.ft. construction. Vastu compliant, clubhouse, home theatre. Near TCS Adibatla & RGIA.",
    images: [`${siteUrl}/assets/img/projects/villas/SLN-Sundaram-1.jpg`],
    site: "@Aarnainfradev",
  },
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-touch-icon.png",
  },
  verification: {
    google: "iBwMBa3KwGOiLtlJxVgpLHHA4TTXxanwvcLxn1DjVf8",
  },
};

/* ============================================================
   STATIC DATA
   ============================================================ */
const images = [
  {
    src: "/assets/img/projects/villas/SLN-Sundaram-1.jpg",
    alt: "SLN Sundaram Palm Villas Bongloor — villa elevation view",
  },
  {
    src: "/assets/img/projects/villas/SLN-Sundaram-2.jpg",
    alt: "SLN Sundaram Palm Villas Hyderabad — gated community entrance",
  },
  {
    src: "/assets/img/projects/villas/SLN-Sundaram-3.jpg",
    alt: "SLN Sundaram Palm Villas 4 BHK ultra premium villas",
  },
  {
    src: "/assets/img/projects/villas/SLN-Sundaram-4.jpg",
    alt: "SLN Sundaram Palm Villas Padmavathi Nagar — clubhouse & amenities",
  },
  {
    src: "/assets/img/projects/villas/SLN-Sundaram-5.jpg",
    alt: "SLN Sundaram Palm Villas layout Bongloor ORR Exit 12",
  },
];

const summary = [
  { label: "Location", value: "Padmavathi Nagar, Bongloor ORR Exit No-12" },
  { label: "Landmark", value: "Near TCS Adibatla" },
  {
    label: "Project Type",
    value: "4 BHK Ultra Premium Villas",
  },
  { label: "Total Villas", value: "40" },
  { label: "Plot Sizes", value: "150 – 300 Sq. Yds." },
  { label: "Construction Size", value: "2,595 – 4,335 Sq. Ft." },
  { label: "Bank Loan", value: "Available" },
];

const villaConfigs = [
  {
    badge: "4 BHK · Compact",
    plotSize: "150 – 200 Sq. Yds.",
    builtUp: "2,595 sq. ft.",
    description:
      "Smartly designed 4 BHK villas for families seeking premium living in a compact, Vastu-compliant footprint.",
  },
  {
    badge: "4 BHK · Signature",
    plotSize: "220 – 300 Sq. Yds.",
    builtUp: "4,335 sq. ft.",
    description:
      "Expansive 4 BHK villas with generous living spaces, two-car parking, and home theatre — the ultimate in luxury.",
  },
];

const amenities = [
  { icon: "🕉", label: "100% Vastu Compliant" },
  { icon: "🏛", label: "Club House" },
  { icon: "🅿", label: "Ample Parking Space" },
  { icon: "🌧", label: "Rainwater Harvesting" },
  { icon: "🎠", label: "Children Play Area" },
  { icon: "♻", label: "Sewage Treatment Plant" },
  { icon: "🗑", label: "Waste Disposal Area" },
  { icon: "🚗", label: "Two Car Parkings" },
  { icon: "🏊", label: "Swimming Pool" },
  { icon: "🎬", label: "Home Theatre" },
];

const highlights = [
  { icon: "🏢", label: "TCS & Tata Sikorsky — 5 Min" },
  { icon: "🎬", label: "Ramoji Film City — 15 Min" },
  { icon: "💻", label: "E-City / Fab City — 15 Min" },
  { icon: "🏭", label: "Foxconn Manufacturing — 10 Min" },
  { icon: "✈", label: "International Airport (RGIA) — 20 Min" },
  { icon: "🚀", label: "Tata Boeing Aerospace — 10 Min" },
];

const stats = [
  { value: "40", label: "Exclusive Villas" },
  { value: "150–300", label: "Sq. Yds. Plots" },
  { value: "2,595–4,335", label: "Sq. Ft. Built-Up" },
  { value: "4 BHK", label: "Ultra Premium" },
];

const faqs = [
  {
    q: "Where is SLN Sundaram Palm Villas located?",
    a: "SLN Sundaram Palm Villas is located in Padmavathi Nagar, Bongloor near ORR Exit No-12, Hyderabad. The project is 5 minutes from TCS Adibatla and Tata Sikorsky, 10 minutes from Foxconn and Tata Boeing Aerospace, 15 minutes from Ramoji Film City and E-City / Fab City, and 20 minutes from Rajiv Gandhi International Airport.",
  },
  {
    q: "What type of villas does SLN Sundaram Palm Villas offer?",
    a: "SLN Sundaram Palm Villas offers 4 BHK ultra premium villas in a gated community of 40 exclusive units. Plot sizes range from 150 to 300 square yards, with construction sizes from 2,595 to 4,335 square feet — designed for luxury, comfort, and 100% Vastu compliance.",
  },
  {
    q: "How many villas are there in SLN Sundaram Palm Villas?",
    a: "SLN Sundaram Palm Villas is a boutique gated community of 40 exclusive 4 BHK villas — offering privacy, exclusivity, and a close-knit community feel that larger projects cannot match.",
  },
  {
    q: "What amenities are available at SLN Sundaram Palm Villas?",
    a: "The project offers a clubhouse, swimming pool, home theatre, children's play area, ample parking, two car parkings per villa, rainwater harvesting, sewage treatment plant, waste disposal area, and 100% Vastu-compliant design.",
  },
  {
    q: "Is bank loan available for SLN Sundaram Palm Villas?",
    a: "Yes, bank loans are available for villas at SLN Sundaram Palm Villas. Our team can assist you with the documentation required for loan processing with leading banks.",
  },
  {
    q: "Are the villas Vastu compliant?",
    a: "Yes, the villas at SLN Sundaram Palm Villas are designed to be 100% Vastu compliant — ensuring positive energy flow and alignment with traditional architectural principles.",
  },
  {
    q: "How far is SLN Sundaram Palm Villas from the airport?",
    a: "SLN Sundaram Palm Villas is approximately 20 minutes from Rajiv Gandhi International Airport (RGIA) — making it an ideal choice for frequent flyers and NRI investors.",
  },
  {
    q: "How do I book a site visit to SLN Sundaram Palm Villas?",
    a: "Call us at +91 99593 54255, message on WhatsApp, or fill the site visit form on this page. Our team will coordinate your visit at your preferred date and time.",
  },
];

/* ============================================================
   SERVER ACTIONS (Forms)
   ============================================================ */
async function submitSiteVisit(formData: FormData) {
  "use server";
  const payload = {
    type: "site_visit",
    project: "SLN Sundaram Palm Villas",
    name: formData.get("inputName"),
    mobile: formData.get("inputMobile"),
    visitDate: formData.get("visitDate"),
    visitTime: formData.get("visitTime"),
    message: formData.get("textMessage"),
    submittedAt: new Date().toISOString(),
  };
  // TODO: Save to CRM / DB / send email
  console.log("Site Visit Lead:", payload);
  redirect("/thank-you?type=site_visit");
}

async function submitBrochure(formData: FormData) {
  "use server";
  const payload = {
    type: "brochure",
    project: "SLN Sundaram Palm Villas",
    name: formData.get("brochure-name"),
    email: formData.get("brochure-email"),
    phone: formData.get("brochure-phone"),
    submittedAt: new Date().toISOString(),
  };
  console.log("Brochure Download:", payload);
  redirect("/thank-you?type=brochure");
}

async function submitEnquiry(formData: FormData) {
  "use server";
  const payload = {
    type: "enquiry",
    project: formData.get("customProjectNameEnquire"),
    name: formData.get("customFullNameEnquire"),
    email: formData.get("customEmailIdEnquire"),
    phone: formData.get("customMobileNumberEnquire"),
    message: formData.get("customMessageEnquire"),
    submittedAt: new Date().toISOString(),
  };
  console.log("Enquiry:", payload);
  redirect("/thank-you?type=enquiry");
}

/* ============================================================
   SMALL HELPERS
   ============================================================ */
function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const timeSlots = Array.from({ length: 25 }, (_, i) => {
  const total = 360 + i * 30; // 06:00 → 18:00
  const h = Math.floor(total / 60);
  const m = total % 60;
  const suffix = h < 12 ? "AM" : "PM";
  const hh = ((h + 11) % 12) + 1;
  return {
    value: `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`,
    label: `${String(hh).padStart(2, "0")}:${String(m).padStart(2, "0")} ${suffix}`,
  };
});

/* ============================================================
   PAGE COMPONENT
   ============================================================ */
export default function SlnSundaramPalmVillasPage() {
  /* ---------- JSON-LD SCHEMAS ---------- */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Aarna Infra Developers",
    url: siteUrl,
    logo: `${siteUrl}/assets/img/Logo.jpg`,
    image: `${siteUrl}/assets/img/Logo.jpg`,
    telephone: "+91-9959354255",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Premnagar, Khairtabad",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500004",
      addressCountry: "IN",
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
        name: "Projects",
        item: `${siteUrl}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Villas & Houses",
        item: `${siteUrl}/villas-houses`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "SLN Sundaram Palm Villas",
        item: pageUrl,
      },
    ],
  };

  const villaSchema = {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    name: "SLN Sundaram Palm Villas",
    description:
      "Boutique gated community of 40 exclusive 4 BHK ultra premium villas at Padmavathi Nagar, Bongloor near ORR Exit 12, Hyderabad. Plot sizes 150–300 sq.yds with 2,595–4,335 sq.ft. built-up area. 100% Vastu compliant with clubhouse, swimming pool & home theatre.",
    url: pageUrl,
    image: images.map((i) => `${siteUrl}${i.src}`),
    numberOfRooms: 4,
    numberOfBathroomsTotal: 4,
    numberOfBedrooms: 4,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Padmavathi Nagar, Bongloor, ORR Exit No-12",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "501510",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.4512076,
      longitude: 78.6847039,
    },
    amenityFeature: amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.label,
      value: true,
    })),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: pageUrl,
      seller: { "@type": "Organization", name: "Aarna Infra Developers" },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const schemas = [
    organizationSchema,
    breadcrumbSchema,
    villaSchema,
    faqSchema,
  ];

  return (
    <main id="top" className="overflow-hidden bg-[#F7F6F2] text-black">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      {/* ============================ HERO ============================ */}
      <section className="relative isolate overflow-hidden pt-16 sm:pt-20 lg:pt-24">
        <div className="absolute -right-24 top-10 -z-10 h-64 w-64 rounded-full border border-[#800000]/10 sm:h-96 sm:w-96" />
        <div className="absolute -left-20 bottom-0 -z-10 h-56 w-56 rounded-full bg-[#FFFF00]/20 blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 lg:pb-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#800000]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#800000] sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#800000]" />
              Aarna Infra Developers
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
              4 BHK Ultra Premium Villas · 100% Vastu Compliant
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              SLN Sundaram Palm Villas
              <span className="mt-2 block text-[#800000]">
                Luxury Villas in Bongloor, Hyderabad
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 sm:text-lg">
              A boutique gated community of{" "}
              <strong>40 exclusive 4 BHK villas</strong> at Padmavathi Nagar,
              Bongloor near ORR Exit 12. Plot sizes{" "}
              <strong>150–300 sq. yds.</strong> with built-up areas of{" "}
              <strong>2,595–4,335 sq. ft.</strong> — fully Vastu compliant,
              with clubhouse, swimming pool, and home theatre. Minutes from
              TCS Adibatla, Foxconn &amp; RGIA.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#site-visit"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#800000] px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
              >
                Book a Site Visit <ArrowIcon />
              </a>

              <a
                href="#brochure-popup"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
              >
                Download Brochure
              </a>
            </div>

            <nav
              aria-label="Breadcrumb"
              className="mt-10 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/50"
            >
              <Link href="/" className="transition hover:text-[#800000]">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/projects" className="transition hover:text-[#800000]">
                Projects
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href="/villas-houses"
                className="transition hover:text-[#800000]"
              >
                Villas &amp; Houses
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#800000]">SLN Sundaram Palm Villas</span>
            </nav>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#FFFF00] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
                fetchPriority="high"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/50 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
                  Featured Project
                </p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">
                  SLN Sundaram Palm Villas
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Padmavathi Nagar · Bongloor · ORR Exit 12
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-2 -z-10 h-28 w-28 rounded-2xl bg-[#FFFF00] sm:-bottom-7 sm:-right-5 sm:h-40 sm:w-40" />
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-[#800000] via-[#FFFF00] to-[#800000]" />
      </section>

      {/* ======================== STATS STRIP ======================== */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl shadow-black/5 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`px-4 py-6 text-center transition hover:bg-[#FFFF00]/20 sm:px-6 sm:py-8 ${
                index !== 0 ? "border-l border-black/10" : ""
              }`}
            >
              <p className="text-xl font-black tracking-tight text-[#800000] sm:text-2xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs font-medium leading-5 text-black/70 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================== CAROUSEL + SUMMARY + DESC ================== */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-12 lg:py-28">
        {/* Image carousel (CSS scroll-snap) */}
        <div>
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
            <div
              className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
              style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
            >
              {images.map((img, i) => (
                <div key={img.src} className="w-full shrink-0 snap-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[480px]"
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
            ← Swipe / scroll to view gallery →
          </p>
        </div>

        {/* Quick summary + description */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
            Quick Summary
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl">
            SLN Sundaram Palm Villas at a Glance
          </h2>

          <ul className="mt-6 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white shadow-sm">
            {summary.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between gap-4 px-5 py-3 text-sm sm:px-6 sm:text-base"
              >
                <strong className="font-bold text-black/70">
                  {item.label}
                </strong>
                <span className="text-right text-black/80">{item.value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-extrabold text-[#800000] sm:text-2xl">
              Project Description
            </h3>
            <div className="mt-4 space-y-4 text-sm leading-7 text-black/80 sm:text-base sm:leading-8">
              <p className="font-bold text-black">
                Ultra Premium 4 BHK Villas in Hyderabad&apos;s Tech Corridor
              </p>
              <p>
                SLN Sundaram Palm Villas offers luxurious{" "}
                <strong>4 BHK villas</strong> with spacious living areas,
                premium amenities, and modern design in the heart of
                Hyderabad&apos;s bustling tech corridor — <strong>Adibatla</strong>.
              </p>
              <p>
                With only <strong>40 exclusive villas</strong> on plot sizes of{" "}
                <strong>150 to 300 square yards</strong> and construction
                areas of <strong>2,595 to 4,335 square feet</strong>, this
                boutique gated community delivers the privacy and exclusivity
                that larger villa projects simply cannot match.
              </p>
              <p>
                Every villa is <strong>100% Vastu compliant</strong> — designed
                for positive energy, natural light, and harmonious living.
                Amenities include a clubhouse, swimming pool, home theatre,
                children&apos;s play area, two-car parking, rainwater
                harvesting, sewage treatment, and dedicated waste disposal.
              </p>
              <p className="font-bold text-[#800000]">
                SLN Sundaram Palm Villas — where luxury meets serenity in
                Hyderabad&apos;s fastest-growing tech corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VILLA CONFIGURATIONS ==================== */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Villa Configurations
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Choose Your 4 BHK Villa
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Two thoughtfully designed formats — each Vastu compliant, with
              premium fittings and generous living spaces for the modern
              family.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {villaConfigs.map((v) => (
              <article
                key={v.badge}
                className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#800000]/30 hover:shadow-xl sm:p-8"
              >
                <span className="inline-block rounded-full bg-[#FFFF00] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#800000]">
                  {v.badge}
                </span>
                <p className="mt-4 text-3xl font-black tracking-tight text-[#800000] sm:text-4xl">
                  {v.builtUp}
                </p>
                <p className="mt-1 text-sm font-bold uppercase tracking-wider text-black/50">
                  Built-up Area
                </p>
                <p className="mt-3 text-sm font-semibold text-black/70">
                  Plot Size: <span className="text-black">{v.plotSize}</span>
                </p>
                <p className="mt-3 text-sm leading-7 text-black/70 sm:text-base">
                  {v.description}
                </p>
                <a
                  href="#site-visit"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#800000] transition hover:gap-2"
                >
                  Enquire about this villa →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== AMENITIES + HIGHLIGHTS ==================== */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Amenities */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Amenities
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl">
              Project Amenities
            </h2>
            <p className="mt-4 text-sm leading-7 text-black/70 sm:text-base">
              Ten premium amenities designed for comfort, sustainability, and a
              truly luxury lifestyle.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {amenities.map((a) => (
                <li
                  key={a.label}
                  className="group flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black/80 shadow-sm transition hover:-translate-y-0.5 hover:border-[#800000]/30 hover:shadow-md"
                >
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFFF00]/30 text-lg"
                  >
                    {a.icon}
                  </span>
                  {a.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Location highlights */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Location
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl">
              Location Highlights
            </h2>
            <p className="mt-4 text-sm leading-7 text-black/70 sm:text-base">
              Bongloor sits at the heart of Hyderabad&apos;s Adibatla tech
              corridor — minutes from TCS, Foxconn, Boeing, and RGIA.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li
                  key={h.label}
                  className="group flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black/80 shadow-sm transition hover:-translate-y-0.5 hover:border-[#800000]/30 hover:shadow-md"
                >
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFFF00]/30 text-lg"
                  >
                    {h.icon}
                  </span>
                  {h.label}
                </li>
              ))}
            </ul>

            <a
              href="#brochure-popup"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#800000] px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
            >
              Download Brochure <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== MEDIA (VIDEO + LAYOUT + MAP) ==================== */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Explore
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Project Video, Layout &amp; Location
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Watch the walkthrough, review the layout plan, and see exactly
              where SLN Sundaram Palm Villas is on the map.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Video (local MP4) */}
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <div className="border-b border-black/10 px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#800000]">
                Project Video
              </div>
              <video
                controls
                className="aspect-video w-full bg-black"
                preload="metadata"
              >
                <source
                  src="/assets/img/videos/SLN-Sundaram.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Layout */}
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <div className="border-b border-black/10 px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#800000]">
                Layout Plan
              </div>
              <img
                src="/assets/img/layouts/SLN-Sundaram Layout.jpg"
                alt="SLN Sundaram Palm Villas layout plan — Bongloor, Hyderabad"
                className="h-full max-h-[460px] w-full object-contain"
              />
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm lg:col-span-2">
              <div className="border-b border-black/10 px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#800000]">
                Location on Map
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d974381.4874056701!2d78.6847039!3d17.4512076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba75cbdb51525%3A0xd0a7154d7f35f1d8!2sSLN%20Sundaram%20Palm%20Villas!5e0!3m2!1sen!2sin!4v1708254141668!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SLN Sundaram Palm Villas location on map — Bongloor, Hyderabad"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SITE VISIT FORM ==================== */}
      <section
        id="site-visit"
        className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Visit SLN Sundaram Palm Villas
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Book a Site Visit
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Schedule a personalised visit to experience SLN Sundaram Palm
              Villas in person. Our team will coordinate your visit at your
              preferred date and time.
            </p>
          </div>

          <div className="grid gap-6 rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:gap-10 lg:p-12">
            <div className="overflow-hidden rounded-2xl bg-black shadow-xl">
              <video autoPlay muted loop className="h-full w-full object-cover">
                <source src="/assets/img/car.mp4" type="video/mp4" />
              </video>
            </div>

            <form action={submitSiteVisit} className="space-y-4">
              <input
                type="hidden"
                name="project_name"
                value="SLN Sundaram Palm Villas"
              />

              <div>
                <label
                  htmlFor="inputName"
                  className="mb-1 block text-xs font-bold uppercase tracking-wider text-black/60"
                >
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  name="inputName"
                  id="inputName"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="inputMobile"
                  className="mb-1 block text-xs font-bold uppercase tracking-wider text-black/60"
                >
                  Mobile Number
                </label>
                <input
                  required
                  type="tel"
                  name="inputMobile"
                  id="inputMobile"
                  placeholder="10-digit mobile number"
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="visitDate"
                    className="mb-1 block text-xs font-bold uppercase tracking-wider text-black/60"
                  >
                    Date
                  </label>
                  <input
                    required
                    type="date"
                    name="visitDate"
                    id="visitDate"
                    className="w-full rounded-xl border border-black/15 bg-white px-3 py-3 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="visitTime"
                    className="mb-1 block text-xs font-bold uppercase tracking-wider text-black/60"
                  >
                    Time
                  </label>
                  <select
                    required
                    name="visitTime"
                    id="visitTime"
                    defaultValue=""
                    className="w-full rounded-xl border border-black/15 bg-white px-3 py-3 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {timeSlots.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="textMessage"
                  className="mb-1 block text-xs font-bold uppercase tracking-wider text-black/60"
                >
                  Message
                </label>
                <textarea
                  required
                  name="textMessage"
                  id="textMessage"
                  rows={3}
                  placeholder="Tell us about your villa requirement (plot size, budget, preferred configuration)"
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#800000] px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
              >
                Send Message <ArrowIcon />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Answers
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Common questions about SLN Sundaram Palm Villas, villa
              configurations, amenities and site visits.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-black/10 bg-white px-5 py-4 sm:px-6 sm:py-5"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-[#800000] marker:hidden">
                  <span>{f.q}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFFF00] text-lg font-black text-[#800000] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-black/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-black/10 bg-white px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#800000]/10 sm:h-96 sm:w-96" />
          <div className="absolute -bottom-28 right-24 h-64 w-64 rounded-full bg-[#FFFF00]/20 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#800000]">
                Aarna Infra Developers
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
                Ready to Own a Villa at SLN Sundaram?
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-black/70 sm:text-lg">
                Contact our team to know availability, current pricing, or to
                book a site visit. Only 40 exclusive villas — reserve yours
                before they&apos;re gone.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="tel:+919959354255"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#800000] px-7 py-3 font-extrabold text-white transition hover:-translate-y-1 hover:bg-black"
              >
                ☎ Call 9959354255
              </a>
              <a
                href="https://wa.me/919959354255"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#800000]/30 bg-white px-7 py-3 font-bold text-[#800000] transition hover:border-[#800000] hover:bg-[#800000] hover:text-white"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CATEGORY NAV ==================== */}
      <nav
        aria-label="Property categories"
        className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 rounded-2xl border border-black/10 bg-white p-5 sm:p-6">
          <Link
            href="/apartments"
            className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
          >
            Apartments
          </Link>
          <Link
            href="/openplots"
            className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
          >
            Open Plots
          </Link>
          <Link
            href="/farmlands"
            className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
          >
            Farm Lands
          </Link>
          <span
            aria-current="page"
            className="rounded-full bg-[#800000] px-5 py-2.5 text-sm font-bold text-white"
          >
            Villas &amp; Houses
          </span>
        </div>
      </nav>

      {/* ==================== BROCHURE POPUP (:target) ==================== */}
      <div
        id="brochure-popup"
        className="fixed inset-0 z-50 hidden items-center justify-center bg-black/60 p-4 target:flex"
      >
        <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
          <a
            href="#top"
            aria-label="Close"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-2xl text-black/50 transition hover:bg-black/5 hover:text-black"
          >
            ×
          </a>
          <h3 className="text-xl font-extrabold text-[#800000]">
            Download Brochure
          </h3>
          <p className="mt-1 text-sm text-black/70">
            Fill in your details to receive the SLN Sundaram Palm Villas
            brochure.
          </p>
          <form action={submitBrochure} className="mt-5 space-y-3">
            <input
              type="hidden"
              name="project"
              value="SLN Sundaram Palm Villas"
            />
            <input
              required
              type="text"
              name="brochure-name"
              placeholder="Full Name"
              className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
            />
            <input
              required
              type="email"
              name="brochure-email"
              placeholder="Email"
              className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
            />
            <input
              required
              type="tel"
              name="brochure-phone"
              placeholder="Mobile"
              className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-[#800000] py-3 font-bold text-white transition hover:bg-black"
            >
              Download
            </button>
          </form>
        </div>
      </div>

      {/* ==================== ENQUIRE POPUP (:target) ==================== */}
      <div
        id="enquire-popup"
        className="fixed inset-0 z-50 hidden items-center justify-center bg-black/60 p-4 target:flex"
      >
        <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
          <a
            href="#top"
            aria-label="Close"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-2xl text-black/50 transition hover:bg-black/5 hover:text-black"
          >
            ×
          </a>
          <h3 className="text-xl font-extrabold text-[#800000]">Enquire Now</h3>
          <p className="mt-1 text-sm text-black/70">
            Fill the form and we&apos;ll get back to you shortly.
          </p>
          <form action={submitEnquiry} className="mt-5 space-y-3">
            <input
              required
              type="text"
              name="customFullNameEnquire"
              placeholder="Full Name"
              className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
            />
            <input
              required
              type="email"
              name="customEmailIdEnquire"
              placeholder="Email"
              className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
            />
            <input
              required
              type="tel"
              name="customMobileNumberEnquire"
              placeholder="Mobile Number"
              className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
            />
            <select
              required
              name="customProjectNameEnquire"
              defaultValue="SLN Sundaram Palm Villas"
              className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
            >
              <option value="">Select Project</option>
              {[
                "SLN Sundaram Palm Villas",
                "The Prestige City",
                "Prestige Spring Heights",
                "Myscape Songs Of The Sun",
                "Magadha",
                "Golden City",
                "Golden Terra",
                "Green Meadows",
                "Oxy Flora",
                "Golden Farm",
              ].map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <textarea
              required
              name="customMessageEnquire"
              placeholder="Your Message"
              rows={3}
              className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-[#800000] py-3 font-bold text-white transition hover:bg-black"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>

      {/* ==================== FLOATING CONTACT ==================== */}
      <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-7 sm:right-6">
        <a
          href="https://wa.me/919959354255"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Aarna Infra Developers on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-sm font-extrabold text-white shadow-lg transition hover:scale-110"
        >
          WA
        </a>
        <a
          href="tel:+919959354255"
          aria-label="Call Aarna Infra Developers"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#800000] text-xl text-white shadow-lg transition hover:scale-110"
        >
          ☎
        </a>
        <a
          href="#enquire-popup"
          aria-label="Enquire about SLN Sundaram Palm Villas"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFF00] text-sm font-black text-[#800000] shadow-lg transition hover:scale-110"
        >
          ?
        </a>
      </div>
    </main>
  );
}