import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

const siteUrl = "https://aarnainfradevelopers.com";
const pageUrl = `${siteUrl}/projects/Green-Meadows`;

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
  title:
    "Green Meadows — Open Plots in Balanagar Town | Aarna Infra Developers",
  description:
    "Buy MUDA (DTCP) & TG RERA approved luxury villa open plots at Green Meadows, Balanagar Town near Shadnagar. 200–1000 sq.yds plots just 300m from RRR and 200m from NH-44. 80' & 60' CC roads, underground drainage, 24/7 security, bank loan available. Price from ₹18,999/sq.yd. Book a site visit.",
  keywords: [
    // Head terms
    "open plots in Balanagar Town",
    "plots for sale Balanagar",
    "villa plots Balanagar",
    "plots near Shadnagar",
    "land for sale Balanagar",
    "residential plots Balanagar",
    "plots near RRR Shadnagar",
    "plots near NH-44",
    "real estate Balanagar",

    // Approvals
    "MUDA approved plots Balanagar",
    "DTCP approved plots Balanagar",
    "TG RERA approved plots",
    "RERA plots Balanagar",
    "MUDA plots Shadnagar",
    "Green Meadows DTCP LP/GP/204883/0017/2024",
    "Green Meadows RERA P01400008728",

    // Project
    "Green Meadows plots",
    "Green Meadows Balanagar",
    "Green Meadows Aarna Infra",
    "Green Meadows Shadnagar price",
    "Green Meadows layout Balanagar",
    "Green Meadows open plots",

    // Price
    "Green Meadows plot price 18999",
    "plots at 18999 per sq yard",
    "cheap plots near Shadnagar",
    "budget plots near RRR",

    // Location long-tail
    "plots near Balanagar railway station",
    "plots near Geetanjali College",
    "plots near Geetanjali High School",
    "plots near MRO Office Balanagar",
    "plots near Police Station Balanagar",
    "plots near Govt Hospital Balanagar",
    "plots near Hill Park Restaurant",
    "plots near Silver Spoon Restaurant",

    // Buyer intent
    "best plots to invest in Balanagar",
    "plot buying guide Balanagar",
    "invest in open plots near Shadnagar",
    "plot price Balanagar 2025",
    "200 to 1000 sq yards plots Balanagar",
    "80 feet road plots Balanagar",
    "mortgage plots with registration Balanagar",

    // Brand
    "Aarna Infra Developers",
    "Aarna Infra plots Balanagar",
    "Aarna Infra Green Meadows",
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
      "Green Meadows — MUDA & TG RERA Approved Open Plots in Balanagar | Aarna Infra Developers",
    description:
      "200–1000 sq.yds villa plots at Green Meadows, Balanagar Town — 300m from RRR, 200m from NH-44. 80' & 60' CC roads, underground drainage, bank loan available.",
    url: pageUrl,
    siteName: "Aarna Infra Developers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/assets/img/projects/openplots/Green-Meadows-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Green Meadows open plots Balanagar Town — Aarna Infra Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Green Meadows — Open Plots in Balanagar Town | Aarna Infra Developers",
    description:
      "MUDA & TG RERA approved villa plots, 300m from RRR & 200m from NH-44. From ₹18,999/sq.yd. Bank loan available.",
    images: [`${siteUrl}/assets/img/projects/openplots/Green-Meadows-1.jpg`],
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
    src: "/assets/img/projects/openplots/Green-Meadows-1.jpg",
    alt: "Green Meadows open plots Balanagar Town — entrance arch view",
  },
  {
    src: "/assets/img/projects/openplots/Green-Meadows-2.jpg",
    alt: "Green Meadows villa plots Balanagar — 80 feet CC road",
  },
  {
    src: "/assets/img/projects/openplots/Green-Meadows-3.jpg",
    alt: "Green Meadows MUDA approved plots near RRR Shadnagar",
  },
  {
    src: "/assets/img/projects/openplots/Green-Meadows-4.jpg",
    alt: "Green Meadows RERA approved plots Balanagar — landscaped park",
  },
  {
    src: "/assets/img/projects/openplots/Green-Meadows-5.jpg",
    alt: "Green Meadows open plots layout Balanagar — Aarna Infra Developers",
  },
];

const summary = [
  { label: "Location", value: "Near Shadnagar, Balanagar" },
  { label: "Landmark", value: "Beside RRR (Shadnagar)" },
  { label: "Project Type", value: "Villa Open Plots" },
  { label: "Approval", value: "DTCP (MUDA) & RERA" },
  { label: "DTCP No.", value: "LP/GP/204883/0017/2024" },
  { label: "RERA No.", value: "P01400008728" },
  { label: "Plot Sizes", value: "200 – 1000 Sq. Yds." },
  { label: "Road Sizes", value: "80' & 60' Feet Roads" },
  { label: "Price", value: "From ₹18,999 / Sq. Yd." },
  { label: "Bank Loan", value: "Available" },
];

const amenities = [
  { icon: "🚪", label: "Entrance Arch with Compound Wall" },
  { icon: "🛣", label: "80' & 60' Feet CC Roads" },
  { icon: "🚰", label: "Underground Drainage" },
  { icon: "💧", label: "Water Connection for Each Plot" },
  { icon: "📛", label: "Plot with Name Board" },
  { icon: "🌿", label: "Avenue Plantations" },
  { icon: "⚡", label: "Electricity with LED Lights" },
  { icon: "🎠", label: "Park with Children's Play Area" },
  { icon: "🚶", label: "Walking Track with Landscaping" },
  { icon: "🛡", label: "24/7 Security" },
  { icon: "👣", label: "Footpaths" },
  { icon: "🌧", label: "Rainwater Harvesting Pits" },
];

const highlights = [
  { icon: "🚔", label: "Police Station — Walking Distance" },
  { icon: "🏥", label: "Govt. Hospital — Nearby" },
  { icon: "🏫", label: "Boys High School — Adjacent" },
  { icon: "🎓", label: "Govt Jr. College — Nearby" },
  { icon: "👩‍🎓", label: "Girls School & College — Adjacent" },
  { icon: "🍽", label: "Silver Spoon Restaurant — Nearby" },
  { icon: "🍦", label: "Baskin-Robbins — Close" },
  { icon: "🏞", label: "Hill Park Restaurant — Adjacent" },
  { icon: "📮", label: "Post Office — Walking Distance" },
  { icon: "🏫", label: "Geetanjali High School — Nearby" },
  { icon: "🏛", label: "MRO Office — Adjacent" },
  { icon: "🚉", label: "Railway Station — Close Proximity" },
  { icon: "🏢", label: "Geetanjali College — Nearby" },
  { icon: "🛤", label: "RRR & NH-44 — 300 Meters" },
];

const stats = [
  { value: "200–1000", label: "Sq. Yds. Plot Sizes" },
  { value: "MUDA", label: "& TG RERA Approved" },
  { value: "₹18,999", label: "Per Sq. Yard From" },
  { value: "80'/60'", label: "Feet CC Roads" },
];

const faqs = [
  {
    q: "Where is Green Meadows located?",
    a: "Green Meadows is located in Balanagar Town near Shadnagar, Telangana — just 300 meters from the Regional Ring Road (RRR) and 200 meters from NH-44. The project is walkable to the police station, government hospital, schools, colleges, and MRO office.",
  },
  {
    q: "Is Green Meadows MUDA & RERA approved?",
    a: "Yes. Green Meadows is approved by DTCP (MUDA) under LP No. LP/GP/204883/0017/2024 and by TG RERA under Registration No. P01400008728. Both approvals ensure full legal compliance and buyer protection.",
  },
  {
    q: "What plot sizes are available at Green Meadows?",
    a: "Green Meadows offers plots ranging from 200 to 1000 square yards, ideal for building villas, second homes, or long-term land investment. Road widths of 80 and 60 feet ensure excellent accessibility.",
  },
  {
    q: "What is the price of plots at Green Meadows?",
    a: "Plots at Green Meadows start from ₹18,999 per square yard. Final pricing may vary based on plot size, road width, and availability. Please contact our team to confirm current pricing and offers.",
  },
  {
    q: "Is bank loan available for Green Meadows plots?",
    a: "Yes, bank loans are available for plots at Green Meadows. Phase-1 offers mortgage plots with on-spot registration facility, making the buying process smooth and hassle-free.",
  },
  {
    q: "What amenities does Green Meadows offer?",
    a: "Green Meadows offers an entrance arch with compound wall, 80' & 60' feet CC roads, underground drainage, water connection for each plot, plot name boards, avenue plantations, LED street lights, a park with children's play area, walking track with landscaping, 24/7 security, footpaths, and rainwater harvesting pits.",
  },
  {
    q: "How far is Green Meadows from Hyderabad and the airport?",
    a: "Green Meadows is located in Balanagar Town near Shadnagar, approximately 60 minutes from HITEC City and about 40–45 minutes from Rajiv Gandhi International Airport (RGIA). It has direct access to NH-44 and the Regional Ring Road (RRR).",
  },
  {
    q: "Can NRIs buy plots at Green Meadows?",
    a: "Yes, NRIs can purchase plots at Green Meadows subject to applicable FEMA and RBI regulations. Our team can guide you through the process with proper legal assistance and Power of Attorney arrangements if required.",
  },
  {
    q: "How do I book a site visit to Green Meadows?",
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
    project: "Green Meadows",
    name: formData.get("inputName"),
    mobile: formData.get("inputMobile"),
    visitDate: formData.get("visitDate"),
    visitTime: formData.get("visitTime"),
    message: formData.get("textMessage"),
    submittedAt: new Date().toISOString(),
  };
  // TODO: Save to CRM / DB / send email
  console.log("Site Visit Lead:", payload);
  redirect("/thank-you");
}

async function submitBrochure(formData: FormData) {
  "use server";
  const payload = {
    type: "brochure",
    project: "Green Meadows",
    name: formData.get("brochure-name"),
    email: formData.get("brochure-email"),
    phone: formData.get("brochure-phone"),
    submittedAt: new Date().toISOString(),
  };
  console.log("Brochure Download:", payload);
  redirect("/thank-you");
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
  redirect("/thank-you");
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
export default function GreenMeadowsPage() {
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
        name: "Open Plots",
        item: `${siteUrl}/openplots`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Green Meadows",
        item: pageUrl,
      },
    ],
  };

  const listingSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: "Green Meadows — Open Plots in Balanagar Town",
    description:
      "MUDA (DTCP) & TG RERA approved luxury villa open plots at Green Meadows, Balanagar Town near Shadnagar. 200–1000 sq.yds plots, 300m from RRR, 200m from NH-44. Price from ₹18,999 per sq.yard.",
    url: pageUrl,
    image: images.map((i) => `${siteUrl}${i.src}`),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Balanagar Town, Near Shadnagar",
      addressLocality: "Balanagar",
      addressRegion: "Telangana",
      postalCode: "509202",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 16.997791,
      longitude: 78.1560015,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      price: "18999",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: 18999,
        priceCurrency: "INR",
        unitText: "Sq. Yard",
      },
      url: pageUrl,
      seller: { "@type": "Organization", name: "Aarna Infra Developers" },
    },
    amenityFeature: amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.label,
      value: true,
    })),
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
    listingSchema,
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
              MUDA &amp; TG RERA Approved · 300m from RRR
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              Green Meadows
              <span className="mt-2 block text-[#800000]">
                Open Plots in Balanagar
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 sm:text-lg">
              Luxury villa open plots at Balanagar Town near Shadnagar — just{" "}
              <strong>300 meters from RRR</strong> and{" "}
              <strong>200 meters from NH-44</strong>. 200–1000 sq.yds plots
              with 80&apos; &amp; 60&apos; CC roads, underground drainage, and
              clear title. Price from{" "}
              <strong className="text-[#800000]">₹18,999 per sq. yard</strong>{" "}
              — with bank loan available.
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
              <Link href="/openplots" className="transition hover:text-[#800000]">
                Open Plots
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#800000]">Green Meadows</span>
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
                  Green Meadows
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Balanagar Town · Near Shadnagar
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
            Green Meadows at a Glance
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
                Luxury Villa Plots in the Heart of Balanagar Town
              </p>
              <p>
                Green Meadows offers MUDA &amp; TG RERA approved luxury villa
                plots in the prime location of <strong>Balanagar Town</strong>.
                Strategically positioned just <strong>300 meters from the
                Regional Ring Road (RRR)</strong> and <strong>200 meters from
                NH-44</strong>, this project provides unmatched connectivity.
              </p>
              <p>
                With bank loan facilities available and clear title, the plots
                range from <strong>200 to 1000 square yards</strong> at{" "}
                <strong>₹18,999 per sq. yard</strong>. The project features
                80&apos; &amp; 60&apos; wide CC roads and is surrounded by
                excellent infrastructure including police station, government
                hospital, schools, colleges, and restaurants.
              </p>
              <p>
                <strong>Phase-1</strong> offers mortgage plots with on-spot
                registration facility, making it an ideal investment for your
                dream villa.
              </p>
              <p className="font-bold text-[#800000]">
                Green Meadows — premium plots, prime location, perfect
                investment.
              </p>
            </div>
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
              Every detail designed for comfort, sustainability, and long-term
              value.
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
              Everything you need within walking distance — schools,
              hospitals, offices, railway station, restaurants, and more.
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
              where Green Meadows is on the map.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Video */}
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
                  src="/assets/img/videos/Green-Meadows.mp4"
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
                src="/assets/img/layouts/Green-Meadows-Layout.jpg"
                alt="Green Meadows open plots layout plan in Balanagar Town"
                className="h-full max-h-[460px] w-full object-contain"
              />
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm lg:col-span-2">
              <div className="border-b border-black/10 px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#800000]">
                Location on Map
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15262.108825359053!2d78.1560015!3d16.997791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbcdacce683bbb%3A0x151cf0c0ee43e3f!2sBalanagar%2C%20Jagammaguda%2C%20Telangana%20509202!5e0!3m2!1sen!2sin!4v1756126041367!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Green Meadows location on map — Balanagar Town, Telangana"
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
              Visit Green Meadows
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Book a Site Visit
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Schedule a personalised visit to experience Green Meadows in
              person. Our team will coordinate your visit at your preferred
              date and time.
            </p>
          </div>

          <div className="grid gap-6 rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:gap-10 lg:p-12">
            <div className="overflow-hidden rounded-2xl bg-black shadow-xl">
              <video autoPlay muted loop className="h-full w-full object-cover">
                <source src="/assets/img/car.mp4" type="video/mp4" />
              </video>
            </div>

            <form action={submitSiteVisit} className="space-y-4">
              <input type="hidden" name="project_name" value="Green Meadows" />

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
                  placeholder="Tell us about your requirements"
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
              Common questions about Green Meadows plots, approvals, amenities
              and site visits.
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
                Ready to Own a Plot at Green Meadows?
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-black/70 sm:text-lg">
                Contact our team to know availability, current pricing, or to
                book a site visit. Prime plots at this landmark Balanagar
                location are moving fast.
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
          <span
            aria-current="page"
            className="rounded-full bg-[#800000] px-5 py-2.5 text-sm font-bold text-white"
          >
            Open Plots
          </span>
          <Link
            href="/farmlands"
            className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
          >
            Farm Lands
          </Link>
          <Link
            href="/villas-houses"
            className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
          >
            Villas &amp; Houses
          </Link>
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
            Fill in your details to receive the Green Meadows brochure.
          </p>
          <form action={submitBrochure} className="mt-5 space-y-3">
            <input type="hidden" name="project" value="Green Meadows" />
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
              defaultValue="Green Meadows"
              className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
            >
              <option value="">Select Project</option>
              {[
                "Green Meadows",
                "Magadha",
                "Golden City",
                "Golden Terra",
                "Yuva Park",
                "Karthikeya Green County",
                "Golden Valley",
                "SLN Sundaram Palm Villas",
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
          aria-label="Enquire about Green Meadows"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFF00] text-sm font-black text-[#800000] shadow-lg transition hover:scale-110"
        >
          ?
        </a>
      </div>
    </main>
  );
}