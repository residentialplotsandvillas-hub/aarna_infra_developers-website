import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

const siteUrl = "https://aarnainfradevelopers.com";
const pageUrl = `${siteUrl}/projects/Prestige-Spring-Heights`;

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
  title:
    "Prestige Spring Heights — 3 & 4 BHK Apartments in Budvel, Hyderabad | Aarna Infra Developers",
  description:
    "Buy premium 3 BHK & 4 BHK luxury apartments at Prestige Spring Heights, Budvel, Rajendhra Nagar, Hyderabad. 10.59-acre HMDA & RERA approved project (RERA P02400009416) with 4 towers G+34. Swimming pool, gym, tennis court, mini theatre & 24/7 CCTV. Bank loan available. Book a site visit.",
  keywords: [
    // Head terms
    "apartments in Hyderabad",
    "flats for sale Hyderabad",
    "luxury apartments Hyderabad",
    "3 BHK flats Hyderabad",
    "4 BHK flats Hyderabad",
    "premium apartments Hyderabad",
    "apartments for sale Budvel",
    "flats in Rajendhra Nagar",
    "apartments Rajendhra Nagar Hyderabad",

    // Project
    "Prestige Spring Heights",
    "Prestige Spring Heights Hyderabad",
    "Prestige Spring Heights Budvel",
    "Prestige Spring Heights Rajendhra Nagar",
    "Prestige Spring Heights price",
    "Prestige Spring Heights 3 BHK",
    "Prestige Spring Heights 4 BHK",
    "Prestige Spring Heights master plan",
    "Prestige Spring Heights RERA P02400009416",
    "Prestige Spring Heights 10.59 acres",
    "Prestige Spring Heights 4 towers",

    // Approvals
    "HMDA approved apartments Hyderabad",
    "RERA approved apartments Hyderabad",
    "RERA registered flats Rajendhra Nagar",

    // Location long-tail
    "apartments near IT hubs Hyderabad",
    "flats near Budvel",
    "apartments near Rajendhra Nagar schools",
    "flats near healthcare Rajendhra Nagar",
    "apartments near shopping Rajendhra Nagar",
    "flats near transport Budvel",

    // Buyer intent
    "buy flat in Budvel",
    "buy 3 BHK Hyderabad",
    "buy 4 BHK Hyderabad",
    "luxury apartment buying guide Hyderabad",
    "apartment investment Hyderabad",
    "gated community apartments Rajendhra Nagar",
    "best apartments in Budvel",

    // Brand
    "Aarna Infra Developers",
    "Aarna Infra apartments Hyderabad",
    "Aarna Infra Prestige Spring Heights",
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
      "Prestige Spring Heights — 3 & 4 BHK Apartments in Budvel, Hyderabad",
    description:
      "10.59-acre HMDA & RERA approved project with 4 towers (G+34) in Budvel, Rajendhra Nagar. 3 & 4 BHK luxury flats, swimming pool, tennis court, mini theatre. Bank loan available.",
    url: pageUrl,
    siteName: "Aarna Infra Developers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/assets/img/projects/apartments/Prestige-Spring-Heights-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Prestige Spring Heights apartments in Budvel, Hyderabad — Aarna Infra Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Prestige Spring Heights — 3 & 4 BHK Apartments in Budvel | Aarna Infra",
    description:
      "10.59-acre HMDA & RERA approved project. 4 towers, G+34. 3 & 4 BHK. Near IT hubs & schools.",
    images: [
      `${siteUrl}/assets/img/projects/apartments/Prestige-Spring-Heights-1.jpg`,
    ],
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
    src: "/assets/img/projects/apartments/Prestige-Spring-Heights-1.jpg",
    alt: "Prestige Spring Heights apartments Budvel — tower view",
  },
  {
    src: "/assets/img/projects/apartments/Prestige-Spring-Heights-2.jpg",
    alt: "Prestige Spring Heights Hyderabad — clubhouse & amenities",
  },
  {
    src: "/assets/img/projects/apartments/Prestige-Spring-Heights-3.jpg",
    alt: "Prestige Spring Heights 3 & 4 BHK apartments Rajendhra Nagar",
  },
];

const summary = [
  { label: "Location", value: "Budvel, Rajendhra Nagar, Hyderabad" },
  { label: "Project Type", value: "Apartments" },
  { label: "Project Size", value: "10.59 Acres" },
  { label: "Number of Towers", value: "4 Towers" },
  { label: "Floors", value: "G+34" },
  { label: "Flat Sizes", value: "3 BHK & 4 BHK" },
  { label: "Approval", value: "HMDA & RERA" },
  { label: "RERA No.", value: "P02400009416" },
  { label: "Bank Loan", value: "Available" },
];

const amenities = [
  { icon: "🏊", label: "Swimming Pool" },
  { icon: "🏋", label: "Fully Equipped Gym" },
  { icon: "🏃", label: "Jogging Track" },
  { icon: "🧘", label: "Yoga Pavilion" },
  { icon: "🎾", label: "Tennis Court" },
  { icon: "📹", label: "24/7 CCTV Surveillance" },
  { icon: "🏛", label: "Club House" },
  { icon: "🎬", label: "Mini Theater" },
];

const highlights = [
  { icon: "🏢", label: "Close to IT Hubs" },
  { icon: "🏫", label: "Nearby Schools & Colleges" },
  { icon: "🏥", label: "Easy Access to Healthcare" },
  { icon: "🛍", label: "Shopping & Entertainment" },
  { icon: "🚌", label: "Well-Connected Transport" },
  { icon: "🌳", label: "Green Spaces & Recreation" },
];

const stats = [
  { value: "10.59", label: "Acre Project" },
  { value: "4", label: "Towers · G+34" },
  { value: "3 & 4", label: "BHK Flats" },
  { value: "HMDA", label: "& RERA Approved" },
];

const faqs = [
  {
    q: "Where is Prestige Spring Heights located in Hyderabad?",
    a: "Prestige Spring Heights is located in Budvel, Rajendhra Nagar, Hyderabad — a well-connected residential corridor with easy access to IT hubs, schools, colleges, healthcare facilities, shopping, entertainment, and public transport.",
  },
  {
    q: "Is Prestige Spring Heights HMDA and RERA approved?",
    a: "Yes. Prestige Spring Heights is approved by HMDA and RERA (Registration No. P02400009416). Both approvals ensure full legal compliance, transparent pricing, and buyer protection.",
  },
  {
    q: "What BHK configurations are available at Prestige Spring Heights?",
    a: "Prestige Spring Heights offers premium 3 BHK and 4 BHK luxury apartments spread across 4 towers (G+34 floors), set within 10.59 acres of landscaped community space.",
  },
  {
    q: "What is the scale of Prestige Spring Heights?",
    a: "Prestige Spring Heights is a 10.59-acre gated community with 4 residential towers rising up to G+34 floors. The project is designed for luxury and comfort with thoughtfully planned 3 & 4 BHK layouts.",
  },
  {
    q: "What amenities does Prestige Spring Heights offer?",
    a: "Prestige Spring Heights offers a swimming pool, fully equipped gym, jogging track, yoga pavilion, tennis court, 24/7 CCTV surveillance, grand clubhouse, and mini theater — a complete lifestyle destination within the community.",
  },
  {
    q: "Is bank loan available for Prestige Spring Heights?",
    a: "Yes, bank loans are available for apartments at Prestige Spring Heights. Our team can assist you with the documentation required for loan processing with leading banks.",
  },
  {
    q: "Is Prestige Spring Heights good for families?",
    a: "Yes. The project's location in Budvel, Rajendhra Nagar offers proximity to schools, colleges, hospitals, shopping, and entertainment — making it an ideal choice for families and working professionals. Green spaces and recreational areas within the community add to the family-friendly environment.",
  },
  {
    q: "How do I book a site visit to Prestige Spring Heights?",
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
    project: "Prestige Spring Heights",
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
    project: "Prestige Spring Heights",
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
export default function PrestigeSpringHeightsPage() {
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
        name: "Apartments",
        item: `${siteUrl}/apartments`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Prestige Spring Heights",
        item: pageUrl,
      },
    ],
  };

  const apartmentComplexSchema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "Prestige Spring Heights",
    description:
      "10.59-acre HMDA & RERA approved luxury apartment project in Budvel, Rajendhra Nagar, Hyderabad. 4 towers (G+34), 3 BHK & 4 BHK flats. RERA No. P02400009416.",
    url: pageUrl,
    image: images.map((i) => `${siteUrl}${i.src}`),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Budvel, Rajendhra Nagar",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500030",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.316405,
      longitude: 78.386899,
    },
    amenityFeature: amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.label,
      value: true,
    })),
    containsPlace: {
      "@type": "Apartment",
      occupancy: {
        "@type": "QuantitativeValue",
        minValue: 3,
        maxValue: 4,
        unitText: "BHK",
      },
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
    apartmentComplexSchema,
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
              HMDA &amp; RERA Approved · 4 Towers · G+34
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              Prestige Spring Heights
              <span className="mt-2 block text-[#800000]">
                3 &amp; 4 BHK Apartments in Budvel
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 sm:text-lg">
              Premium <strong>3 BHK &amp; 4 BHK apartments</strong> in Budvel,
              Rajendhra Nagar — a 10.59-acre HMDA &amp; RERA approved
              community with <strong>4 towers (G+34)</strong>. Close to IT
              hubs, schools, hospitals, and entertainment. Bank loan available.
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
              <Link href="/apartments" className="transition hover:text-[#800000]">
                Apartments
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#800000]">Prestige Spring Heights</span>
            </nav>
          </div>

          {/* Hero image + brand logo overlay */}
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#FFFF00] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
                fetchPriority="high"
              />

              {/* Project logo badge */}
              <div className="absolute left-5 top-5 flex h-16 items-center rounded-xl border border-white/40 bg-white/90 px-3 shadow-lg backdrop-blur-sm sm:left-7 sm:top-7">
                <img
                  src="/assets/img/logos/Prestige-Spring-Heights.png"
                  alt="Prestige Spring Heights logo"
                  className="h-10 w-auto object-contain"
                />
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/50 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
                  Featured Project
                </p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">
                  Prestige Spring Heights
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Budvel · Rajendhra Nagar
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
            Prestige Spring Heights at a Glance
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
                A 10.59-Acre Landmark Apartment Community in Budvel
              </p>
              <p>
                Prestige Spring Heights offers premium <strong>3 BHK &amp; 4
                BHK apartments</strong> in Budvel, Hyderabad. Designed for
                luxury and comfort, the project includes modern amenities such
                as a clubhouse, swimming pool, gym, jogging track, yoga
                pavilion, tennis court, and 24/7 security.
              </p>
              <p>
                The location provides excellent connectivity to IT hubs,
                educational institutions, and healthcare facilities, making it
                an ideal choice for families and professionals. With{" "}
                <strong>4 towers rising up to G+34 floors</strong> within
                10.59 landscaped acres, it&apos;s a thoughtfully planned
                gated community.
              </p>
              <p className="font-bold text-[#800000]">
                Prestige Spring Heights — where modern living meets serene
                community life.
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
              A curated set of premium amenities for a complete urban lifestyle.
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
              Budvel, Rajendhra Nagar offers excellent connectivity to
              Hyderabad&apos;s key infrastructure and lifestyle hubs.
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

      {/* ==================== MEDIA (VIDEO + MASTER PLAN + MAP) ==================== */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Explore
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Project Video, Master Plan &amp; Location
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Watch the walkthrough, review the master plan, and see exactly
              where Prestige Spring Heights is on the map.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Video (YouTube) */}
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <div className="border-b border-black/10 px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#800000]">
                Project Video
              </div>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/Om1yQiCzwcU"
                  title="Prestige Spring Heights Hyderabad — project video by Aarna Infra Developers"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Master Plan */}
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <div className="border-b border-black/10 px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#800000]">
                Master Plan
              </div>
              <img
                src="/assets/img/layouts/Prestige-Spring-Heights Layout.jpg"
                alt="Prestige Spring Heights master plan — Budvel, Hyderabad"
                className="h-full max-h-[460px] w-full object-contain"
              />
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm lg:col-span-2">
              <div className="border-b border-black/10 px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#800000]">
                Location on Map
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6308.767565443801!2d78.38689915870019!3d17.31640500693099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbf4a390d14c1%3A0x4f5b0692b08655d3!2sPrestige%20Spring%20Heights!5e0!3m2!1sen!2sin!4v1743405620981!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prestige Spring Heights location on map — Budvel, Hyderabad"
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
              Visit Prestige Spring Heights
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Book a Site Visit
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Schedule a personalised visit to experience Prestige Spring
              Heights in person. Our team will coordinate your visit at your
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
                value="Prestige Spring Heights"
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
                  placeholder="Tell us about your requirements (BHK preference, budget, etc.)"
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
              Common questions about Prestige Spring Heights apartments,
              approvals, amenities and site visits.
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
                Ready to Own a Home at Prestige Spring Heights?
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-black/70 sm:text-lg">
                Contact our team to know availability, pricing, unit
                configurations, or to book a site visit. Premium 3 &amp; 4 BHK
                apartments at this landmark Budvel project are in high demand.
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
          <span
            aria-current="page"
            className="rounded-full bg-[#800000] px-5 py-2.5 text-sm font-bold text-white"
          >
            Apartments
          </span>
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
            Fill in your details to receive the Prestige Spring Heights
            brochure.
          </p>
          <form action={submitBrochure} className="mt-5 space-y-3">
            <input
              type="hidden"
              name="project"
              value="Prestige Spring Heights"
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
              defaultValue="Prestige Spring Heights"
              className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
            >
              <option value="">Select Project</option>
              {[
                "Prestige Spring Heights",
                "The Prestige City",
                "Magadha",
                "Golden City",
                "Golden Terra",
                "Green Meadows",
                "Yuva Park",
                "Karthikeya Green County",
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
          aria-label="Enquire about Prestige Spring Heights"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFF00] text-sm font-black text-[#800000] shadow-lg transition hover:scale-110"
        >
          ?
        </a>
      </div>
    </main>
  );
}