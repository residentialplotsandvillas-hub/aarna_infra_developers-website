import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

const siteUrl = "https://aarnainfradevelopers.com";
const pageUrl = `${siteUrl}/projects/The-Prestige-City`;

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
  title:
    "The Prestige City — 1 to 5 BHK Apartments in Rajendra Nagar, Hyderabad | Aarna Infra Developers",
  description:
    "Buy premium 1, 2.5, 3, 3.5, 4 & 5 BHK luxury apartments at The Prestige City, Rajendra Nagar, Hyderabad. 64-acre HMDA & RERA approved township (RERA P02400007209), 14 towers G+41, 4,647 units. Near RGI Airport, PVNR Expressway, ORR & Hitech City. Possession 2028 onwards. Book a site visit.",
  keywords: [
    // Head terms
    "apartments in Hyderabad",
    "flats for sale Hyderabad",
    "luxury apartments Hyderabad",
    "3 BHK flats Hyderabad",
    "2 BHK apartments Hyderabad",
    "4 BHK flats Hyderabad",
    "premium apartments Hyderabad",
    "apartments for sale Rajendra Nagar",
    "flats in Rajendra Nagar",

    // Project
    "The Prestige City",
    "The Prestige City Hyderabad",
    "The Prestige City Rajendra Nagar",
    "The Prestige City price",
    "The Prestige City 1 BHK",
    "The Prestige City 2.5 BHK",
    "The Prestige City 3 BHK",
    "The Prestige City 3.5 BHK",
    "The Prestige City 4 BHK",
    "The Prestige City 5 BHK",
    "The Prestige City township",
    "The Prestige City RERA P02400007209",
    "Prestige City Hyderabad master plan",
    "Prestige City 64 acres",

    // Approvals / documentation
    "HMDA approved apartments Hyderabad",
    "RERA approved apartments Hyderabad",
    "RERA registered flats Rajendra Nagar",

    // Location long-tail
    "apartments near RGI Airport",
    "flats near PVNR Express Highway",
    "apartments near Outer Ring Road Hyderabad",
    "flats near GMR Aerospace",
    "apartments near Hitech City",
    "flats near Solitaire Global School",
    "apartments near KIMS Hospitals",
    "flats near Mantra Mall",
    "apartments in Rajendra Nagar Hyderabad",

    // Buyer intent
    "buy flat in Rajendra Nagar",
    "luxury apartment buying guide Hyderabad",
    "apartment investment Hyderabad",
    "RERA registered flats Hyderabad",
    "gated community apartments Hyderabad",
    "best apartments in Rajendra Nagar",
    "Prestige City price per sqft",

    // Brand
    "Aarna Infra Developers",
    "Aarna Infra apartments Hyderabad",
    "Aarna Infra Prestige City",
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
      "The Prestige City — 1–5 BHK Luxury Apartments in Rajendra Nagar, Hyderabad",
    description:
      "64-acre HMDA & RERA approved township with 4,647 apartments in 14 G+41 towers. Near RGI Airport, PVNR Expressway, ORR. 1–5 BHK. Possession 2028 onwards.",
    url: pageUrl,
    siteName: "Aarna Infra Developers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/assets/img/projects/apartments/The-Prestige-City-1.jpg`,
        width: 1200,
        height: 630,
        alt: "The Prestige City apartments in Rajendra Nagar, Hyderabad — Aarna Infra Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Prestige City — 1–5 BHK Apartments in Rajendra Nagar | Aarna Infra",
    description:
      "64-acre HMDA & RERA approved township. 14 towers, G+41. 4,647 apartments. 1–5 BHK. Near RGI Airport & ORR.",
    images: [`${siteUrl}/assets/img/projects/apartments/The-Prestige-City-1.jpg`],
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
    src: "/assets/img/projects/apartments/The-Prestige-City-1.jpg",
    alt: "The Prestige City apartments Rajendra Nagar — tower view",
  },
  {
    src: "/assets/img/projects/apartments/The-Prestige-City-2.jpg",
    alt: "The Prestige City township Hyderabad — clubhouse & amenities",
  },
  {
    src: "/assets/img/projects/apartments/The-Prestige-City-3.jpg",
    alt: "The Prestige City 1 to 5 BHK apartments Rajendra Nagar",
  },
];

const summary = [
  { label: "Location", value: "Rajendra Nagar, Hyderabad" },
  { label: "Project Type", value: "Apartments" },
  { label: "Development Size", value: "64 Acres" },
  { label: "Approval", value: "HMDA & RERA" },
  { label: "RERA No.", value: "P02400007209" },
  { label: "Total Units", value: "4,647 Apartments" },
  { label: "Towers & Blocks", value: "14 Towers · G+41 Floors" },
  { label: "Unit Variants", value: "1, 2.5, 3, 3.5, 4 & 5 BHK" },
  { label: "Possession", value: "2028 Onwards" },
];

const amenities = [
  { icon: "🏊", label: "Swimming Pool" },
  { icon: "🏋", label: "Fully Equipped Gym" },
  { icon: "🧘", label: "Yoga Pavilion" },
  { icon: "🏛", label: "Clubhouse" },
  { icon: "🛡", label: "24/7 Security" },
  { icon: "🎬", label: "Private Cinema Hall" },
  { icon: "🎮", label: "Indoor Games Area" },
  { icon: "🍽", label: "Food Court" },
  { icon: "🏥", label: "Clinic & Pharmacy" },
  { icon: "🛒", label: "Daily Convenience Stores" },
];

const highlights = [
  { icon: "✈", label: "RGI Airport — 15 Mins" },
  { icon: "🛣", label: "PVNR Expressway — 7 Mins" },
  { icon: "🛤", label: "Outer Ring Road — 10 Mins" },
  { icon: "🏭", label: "GMR Aerospace — 20 Mins" },
  { icon: "🏢", label: "Hitech City — 40 Mins" },
  { icon: "🏫", label: "Solitaire Global School — 7 Mins" },
  { icon: "🏥", label: "KIMS Hospitals — 25 Mins" },
  { icon: "🛍", label: "Mantra Mall — 9 Mins" },
];

const stats = [
  { value: "64", label: "Acre Township" },
  { value: "4,647", label: "Luxury Apartments" },
  { value: "1–5 BHK", label: "Unit Variants" },
  { value: "G+41", label: "14 Towers · 2028" },
];

const faqs = [
  {
    q: "Where is The Prestige City located in Hyderabad?",
    a: "The Prestige City is located in Rajendra Nagar, Hyderabad — just 15 minutes from RGI Airport, 7 minutes from PVNR Expressway, and 10 minutes from the Outer Ring Road. The project offers excellent connectivity to Hitech City (40 mins), GMR Aerospace (20 mins), and KIMS Hospitals (25 mins).",
  },
  {
    q: "Is The Prestige City HMDA and RERA approved?",
    a: "Yes. The Prestige City is approved by HMDA and RERA (Registration No. P02400007209). Both approvals ensure full legal compliance, transparent pricing, and buyer protection.",
  },
  {
    q: "What BHK configurations are available at The Prestige City?",
    a: "The Prestige City offers 1, 2.5, 3, 3.5, 4, and 5 BHK luxury apartments across 14 towers (G+41 floors). Each configuration is thoughtfully designed with premium fittings and Vastu-compliant layouts.",
  },
  {
    q: "What is the total size and scale of The Prestige City?",
    a: "The Prestige City is a 64-acre integrated township comprising 4,647 luxury apartments spread across 14 towers, each rising up to G+41 floors. It's one of the largest residential developments in the Rajendra Nagar corridor.",
  },
  {
    q: "When is possession expected at The Prestige City?",
    a: "Possession at The Prestige City is scheduled from 2028 onwards, depending on the tower, floor, and unit configuration. Confirm exact timelines with our team during your enquiry.",
  },
  {
    q: "What amenities does The Prestige City offer?",
    a: "The Prestige City offers swimming pool, fully equipped gym, yoga pavilion, grand clubhouse, 24/7 security, private cinema hall, indoor games area, food court, clinic & pharmacy, and daily convenience stores — a complete lifestyle destination inside the township.",
  },
  {
    q: "Is The Prestige City good for investment?",
    a: "Rajendra Nagar is one of Hyderabad's fastest-growing residential corridors, with proximity to the airport, ORR, GMR Aerospace, and Hitech City. The Prestige City's scale, RERA registration, and premium positioning make it a strong long-term residential investment — as always, independent due diligence is recommended.",
  },
  {
    q: "How do I book a site visit to The Prestige City?",
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
    project: "The Prestige City",
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
    project: "The Prestige City",
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
export default function ThePrestigeCityPage() {
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
        name: "The Prestige City",
        item: pageUrl,
      },
    ],
  };

  const apartmentComplexSchema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "The Prestige City",
    description:
      "64-acre HMDA & RERA approved luxury township in Rajendra Nagar, Hyderabad with 4,647 apartments in 14 towers (G+41). 1–5 BHK. RERA No. P02400007209.",
    url: pageUrl,
    image: images.map((i) => `${siteUrl}${i.src}`),
    numberOfAccommodationUnits: 4647,
    numberOfAvailableAccommodationUnits: 4647,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rajendra Nagar",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500030",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.303819,
      longitude: 78.426478,
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
        minValue: 1,
        maxValue: 5,
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
              HMDA &amp; RERA Approved · 64-Acre Township
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              The Prestige City
              <span className="mt-2 block text-[#800000]">
                Luxury Apartments in Hyderabad
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 sm:text-lg">
              Premium <strong>1 to 5 BHK apartments</strong> in Rajendra
              Nagar — a 64-acre HMDA &amp; RERA approved township with{" "}
              <strong>4,647 apartments across 14 G+41 towers</strong>. Minutes
              from RGI Airport, PVNR Expressway, and ORR. Possession 2028
              onwards.
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
              <span className="text-[#800000]">The Prestige City</span>
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
                  src="/assets/img/logos/The-Prestige-City.png"
                  alt="The Prestige City logo"
                  className="h-10 w-auto object-contain"
                />
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/50 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
                  Featured Project
                </p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">
                  The Prestige City
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Rajendra Nagar · Hyderabad
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
            The Prestige City at a Glance
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
                A 64-Acre Landmark Township in Rajendra Nagar
              </p>
              <p>
                The Prestige City offers premium <strong>1 to 5 BHK
                apartments</strong> in Rajendra Nagar, Hyderabad. Designed for
                luxury and comfort, the project includes modern amenities such
                as a clubhouse, swimming pool, gym, jogging track, yoga
                pavilion, and 24/7 security.
              </p>
              <p>
                The location provides excellent connectivity to IT hubs,
                educational institutions, and healthcare facilities, making it
                an ideal choice for families and professionals. With{" "}
                <strong>4,647 apartments across 14 G+41 towers</strong> set
                within 64 landscaped acres, it&apos;s one of Hyderabad&apos;s
                most ambitious integrated residential communities.
              </p>
              <p className="font-bold text-[#800000]">
                The Prestige City — a complete lifestyle destination, not just
                an address.
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
              A complete urban lifestyle packed into a 64-acre gated township.
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
              Unmatched connectivity to the airport, ORR, and Hyderabad&apos;s
              major employment hubs.
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
              where The Prestige City is on the map.
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
                  title="The Prestige City Hyderabad — project video by Aarna Infra Developers"
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
                src="/assets/img/layouts/The-Prestige-City Layout.jpg"
                alt="The Prestige City master plan — Rajendra Nagar, Hyderabad"
                className="h-full max-h-[460px] w-full object-contain"
              />
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm lg:col-span-2">
              <div className="border-b border-black/10 px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#800000]">
                Location on Map
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15236.972150825879!2d78.426478!3d17.303819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbd8927a887f1%3A0xcd45ac891ae21bf1!2sThe%20Prestige%20City%2C%20Hyderabad!5e0!3m2!1sen!2sus!4v1743668614288!5m2!1sen!2sus"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Prestige City location on map — Rajendra Nagar, Hyderabad"
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
              Visit The Prestige City
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Book a Site Visit
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Schedule a personalised visit to experience The Prestige City in
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
              <input
                type="hidden"
                name="project_name"
                value="The Prestige City"
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
              Common questions about The Prestige City apartments, approvals,
              unit configurations and site visits.
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
                Ready to Own a Home at The Prestige City?
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-black/70 sm:text-lg">
                Contact our team to know availability, pricing, unit
                configurations, or to book a site visit. Premium apartments at
                this landmark Rajendra Nagar township are in high demand.
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
            Fill in your details to receive The Prestige City brochure.
          </p>
          <form action={submitBrochure} className="mt-5 space-y-3">
            <input type="hidden" name="project" value="The Prestige City" />
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
              defaultValue="The Prestige City"
              className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
            >
              <option value="">Select Project</option>
              {[
                "The Prestige City",
                "Magadha",
                "Golden City",
                "Golden Terra",
                "Green Meadows",
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
          aria-label="Enquire about The Prestige City"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFF00] text-sm font-black text-[#800000] shadow-lg transition hover:scale-110"
        >
          ?
        </a>
      </div>
    </main>
  );
}