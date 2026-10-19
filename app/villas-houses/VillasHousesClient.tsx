import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://aarnainfradevelopers.com";
const pageUrl = `${siteUrl}/villas-houses.html`;

export const metadata: Metadata = {
  title:
    "Villas for Sale in Hyderabad | Luxury Villas & Gated Community Homes — Aarna Infra",
  description:
    "Explore villas for sale in Hyderabad with Aarna Infra Developers. View SLN Sundaram Palm Villas in Bonguluru, luxury villas, gated community villas and independent houses. Enquire about project details and site visits.",
  keywords: [
    // Head terms
    "villas for sale in Hyderabad",
    "villas in Hyderabad",
    "luxury villas in Hyderabad",
    "villas Hyderabad",
    "premium villas Hyderabad",
    "gated community villas in Hyderabad",
    "independent houses in Hyderabad",
    "houses for sale in Hyderabad",
    "villa plots in Hyderabad",
    "residential villas Hyderabad",

    // Buyer intent
    "buy villa in Hyderabad",
    "luxury villa buying guide Hyderabad",
    "villa investment Hyderabad",
    "property investment in Hyderabad",
    "gated community villas benefits",
    "villa vs independent house Hyderabad",
    "independent house buying Hyderabad",
    "best villas in Hyderabad",
    "premium homes Hyderabad",
    "villas near Financial District Hyderabad",
    "villas near ORR Hyderabad",

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

    // Project name
    "SLN Sundaram Palm Villas",
    "SLN Sundaram Palm Villas Bonguluru",
    "SLN Sundaram Palm Villas Hyderabad",
    "SLN Sundaram Palm Villas Padmavathi Nagar",

    // Category / documentation
    "villa documents verification Hyderabad",
    "villa approvals Hyderabad",
    "villa maintenance charges Hyderabad",
    "RERA registered villas Hyderabad",
    "villa construction quality Hyderabad",
    "gated community amenities Hyderabad",

    // Brand
    "Aarna Infra Developers",
    "Aarna Infra villas Hyderabad",
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
      "Villas for Sale in Hyderabad | Luxury Villas & Gated Communities — Aarna Infra",
    description:
      "Explore SLN Sundaram Palm Villas in Bonguluru, luxury villas, gated community villas and independent houses across Hyderabad.",
    url: pageUrl,
    siteName: "Aarna Infra Developers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/assets/img/ongoing-projects/SLN-Sundaram-Palm-Villas.jpg`,
        width: 1200,
        height: 630,
        alt: "SLN Sundaram Palm Villas — Aarna Infra Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villas for Sale in Hyderabad | Aarna Infra Developers",
    description:
      "Explore villas and independent houses in Hyderabad, including SLN Sundaram Palm Villas in Bonguluru.",
    images: [`${siteUrl}/assets/img/ongoing-projects/SLN-Sundaram-Palm-Villas.jpg`],
    site: "@Aarnainfradev",
  },
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-touch-icon.png",
  },
};

const projects = [
  {
    name: "SLN Sundaram Palm Villas",
    location: "Padmavathi Nagar, Bonguluru, Telangana",
    image: "/img/projects/SLN-Sundaram.jpg",
    alt: "SLN Sundaram Palm Villas in Padmavathi Nagar, Bonguluru, Telangana",
    href: "/projects/SLN-Sundaram-Palm-Villas",
    number: "01",
    description:
      "Explore SLN Sundaram Palm Villas in Padmavathi Nagar, Bonguluru. Review the project details and enquire about availability, pricing and site visits.",
  },
];

const highlights = [
  { value: "Luxury", label: "Villa Options" },
  { value: "Gated", label: "Community Living" },
  { value: "Independent", label: "Houses Available" },
  { value: "Site Visits", label: "Explore In Person" },
];

const locations = [
  {
    name: "Bonguluru",
    type: "SLN Sundaram Palm Villas",
    description:
      "Located near Padmavathi Nagar, offering villa options in a growing residential corridor close to Hyderabad.",
  },
  {
    name: "Tellapur",
    type: "Luxury Villas",
    description:
      "A premium residential corridor close to Gachibowli and the Financial District with villa and villa-plot options.",
  },
  {
    name: "Mokila",
    type: "Gated Communities",
    description:
      "A well-known gated community and villa corridor with proximity to the Financial District and ORR.",
  },
  {
    name: "Shamshabad",
    type: "Airport Corridor",
    description:
      "A strategic residential corridor near Rajiv Gandhi International Airport with villa and plot options.",
  },
];

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

export default function VillasHousesPage() {
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
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Villas and Houses in Hyderabad",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Residence",
        name: project.name,
        image: `${siteUrl}${project.image}`,
        url: `${siteUrl}${project.href}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: project.location,
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const schemas = [
    organizationSchema,
    breadcrumbSchema,
    itemListSchema,
    faqSchema,
  ];

  return (
    <main className="overflow-hidden bg-[#F7F6F2] text-black">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      {/* HERO SECTION */}
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
              Luxury Villas &amp; Independent Homes
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              Villas for Sale
              <span className="mt-2 block text-[#800000]">in Hyderabad</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 sm:text-lg">
              Explore villas for sale in Hyderabad with Aarna Infra
              Developers. Discover luxury villas, gated community homes and
              independent houses — including SLN Sundaram Palm Villas in
              Padmavathi Nagar, Bonguluru, Telangana.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#villa-projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#800000] px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
              >
                Explore Villas <ArrowIcon />
              </a>

              <a
                href="tel:+919959354255"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
              >
                <span aria-hidden="true">☎</span>
                Call 9959354255
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
              <span className="text-[#800000]">Villas &amp; Houses</span>
            </nav>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#FFFF00] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
              <img
                src="/img/projects/SLN-Sundaram.jpg"
                alt="SLN Sundaram Palm Villas in Padmavathi Nagar, Bonguluru, Telangana"
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
                  Padmavathi Nagar, Bonguluru
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-2 -z-10 h-28 w-28 rounded-2xl bg-[#FFFF00] sm:-bottom-7 sm:-right-5 sm:h-40 sm:w-40" />
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-[#800000] via-[#FFFF00] to-[#800000]" />
      </section>

      {/* HIGHLIGHTS */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl shadow-black/5 md:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={item.value}
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

      {/* INTRO */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12 lg:py-28">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
            Find Your Home
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
            Explore Villas and Houses in Hyderabad
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-black/80">
            <p>
              Looking for villas for sale in Hyderabad? Aarna Infra
              Developers helps property buyers explore residential real
              estate options that suit their location preferences,
              lifestyle needs and budget. Whether you are searching for
              luxury villas, gated community villas, premium homes or
              independent houses, explore the available project information
              and contact our team for assistance.
            </p>

            <p>
              Hyderabad offers residential property options across
              established neighbourhoods and developing areas. When
              comparing houses for sale in Hyderabad, consider the
              location, road connectivity, nearby infrastructure, property
              specifications, amenities, documentation and total purchase
              cost.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-7 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFFF00] text-2xl font-black text-[#800000]">
              ⌂
            </div>
            <div>
              <h3 className="font-bold text-[#800000]">
                Luxury &amp; Gated Community Villas
              </h3>
              <p className="mt-1 text-sm leading-6 text-black/70">
                Compare villas, gated communities and independent houses
                across Hyderabad.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
            <img
              src="/img/villas-houses-lands.webp"
              alt="Luxury villas in Hyderabad by Aarna Infra Developers"
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* FEATURED VILLA PROJECTS */}
      <section
        id="villa-projects"
        className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Discover Our Properties
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Featured Villa Projects in Hyderabad
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Explore SLN Sundaram Palm Villas and contact our team to
              enquire about current availability and arrange a site visit.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#800000]/30 hover:shadow-xl"
              >
                <Link
                  href={project.href}
                  aria-label={`View ${project.name} villa project details`}
                  className="block"
                >
                  <div className="relative h-[260px] overflow-hidden bg-gray-200 sm:h-[340px]">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full bg-[#FFFF00] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#800000]">
                      Villa
                    </span>

                    <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-black/30 text-sm font-bold text-white backdrop-blur-sm">
                      {project.number}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                        {project.name}
                      </h3>

                      <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-white/90 sm:text-base">
                        <span
                          className="mt-0.5 text-[#FFFF00]"
                          aria-hidden="true"
                        >
                          ●
                        </span>
                        {project.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                    <p className="max-w-sm text-sm leading-6 text-black/70">
                      {project.description}
                    </p>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFFF00] text-xl font-bold text-[#800000] transition duration-300 group-hover:bg-[#800000] group-hover:text-[#FFFF00]">
                      ↗
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Where to Buy
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Villa Locations in &amp; Around Hyderabad
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Compare corridors and neighbourhoods based on connectivity,
              amenities and lifestyle preferences.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc) => (
              <article
                key={loc.name}
                className="group rounded-2xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#800000]/30 hover:shadow-xl"
              >
                <span className="inline-block rounded-full bg-[#FFFF00] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#800000]">
                  {loc.type}
                </span>

                <h3 className="mt-4 text-xl font-extrabold text-[#800000]">
                  {loc.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/70">
                  {loc.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl rounded-3xl border border-black/10 bg-white p-6 sm:p-10 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#800000]">
              Villas &amp; Houses Buying Guide
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Villas for Sale in Hyderabad
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-black/80">
              <p>
                Looking for villas for sale in Hyderabad? Aarna Infra
                Developers helps property buyers explore residential real
                estate options that suit their location preferences,
                lifestyle needs and budget. Whether you are searching for
                luxury villas in Hyderabad, gated community villas, premium
                homes or independent houses, explore the available project
                information and contact our team for assistance.
              </p>

              <p>
                Hyderabad offers residential property options across
                established neighbourhoods and developing areas. When
                comparing houses for sale in Hyderabad, consider the
                location, road connectivity, nearby infrastructure, property
                specifications, amenities, documentation and total purchase
                cost. These factors can help you evaluate a property based
                on your family&apos;s needs and long-term plans.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Explore Luxury Villas and Gated Community Villas
              </h3>

              <p>
                Luxury villas in Hyderabad may appeal to buyers looking for
                greater privacy, spacious living areas and a residential
                setting with convenient access to everyday facilities.
                Gated community villas may also offer shared amenities,
                subject to the facilities provided by each project. Before
                choosing a villa, review the approved layout, construction
                specifications, available facilities, maintenance
                arrangements and applicable permissions.
              </p>

              <p>
                If you plan to buy a house in Hyderabad for personal use,
                compare the property&apos;s location and features with your
                daily requirements. Buyers considering property investment
                in Hyderabad should independently assess the purchase
                price, rental demand, resale conditions, legal documents
                and associated costs. Property values and investment
                returns are not guaranteed.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                SLN Sundaram Palm Villas in Bonguluru
              </h3>

              <p>
                Explore SLN Sundaram Palm Villas, listed on this page in
                Padmavathi Nagar, Bonguluru, Telangana. If you are
                researching villas in Bonguluru or residential properties
                in the surrounding area, review the project details to
                understand its location and available property
                information.
              </p>

              <p>
                Contact Aarna Infra Developers to enquire about SLN
                Sundaram Palm Villas, request further project information
                or discuss your residential property requirements. Confirm
                current availability, pricing, specifications, approvals
                and applicable terms directly with the project
                representative before making a purchase decision.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                How to Choose the Right Villa or Independent House
              </h3>

              <p>
                Choosing between a villa and an independent house involves
                comparing several factors. Below are the key considerations
                to review before deciding.
              </p>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Location:</strong> Check road access, transport,
                  schools, hospitals, workplaces and nearby facilities.
                </li>
                <li>
                  <strong>Property details:</strong> Compare plot size,
                  built-up area, floor plan, construction quality and
                  specifications.
                </li>
                <li>
                  <strong>Community amenities:</strong> Verify which
                  facilities are actually available and whether additional
                  charges apply.
                </li>
                <li>
                  <strong>Legal verification:</strong> Review title
                  documents, relevant approvals, applicable registrations
                  and other legal requirements with a qualified
                  professional.
                </li>
                <li>
                  <strong>Budget:</strong> Account for the purchase price,
                  registration charges, taxes, maintenance and other
                  applicable expenses.
                </li>
              </ul>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Villas vs. Independent Houses — What&apos;s the Difference?
              </h3>

              <p>
                Gated community villas often include shared amenities such
                as clubhouses, swimming pools, landscaped areas and 24/7
                security, along with community rules and maintenance
                charges. Independent houses may offer more customisation
                and privacy but typically come with fewer shared amenities
                and lower maintenance costs. The right choice depends on
                your priorities, budget and lifestyle.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Enquire About Villas and Houses in Hyderabad
              </h3>

              <p>
                Aarna Infra Developers can help you enquire about the
                residential properties listed on this website. If you are
                searching for premium homes in Hyderabad, luxury villas,
                gated community villas or independent houses, contact our
                team to request project information and discuss your
                requirements.
              </p>

              <p>
                Call{" "}
                <a
                  href="tel:+919959354255"
                  className="font-bold text-[#800000] underline underline-offset-4"
                >
                  +91 99593 54255
                </a>{" "}
                or visit our{" "}
                <Link
                  href="/contact"
                  className="font-bold text-[#800000] underline underline-offset-4 hover:text-black"
                >
                  contact page
                </Link>{" "}
                to get in touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Answers
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Frequently Asked Questions About Villas
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Quick answers to common questions about villas and independent
              houses in Hyderabad.
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

      {/* CTA */}
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
                Looking for a Villa in Hyderabad?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-black/70 sm:text-lg">
                Contact our team to discuss villa and independent house
                options, request project information or arrange a site
                visit.
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

      {/* PROPERTY CATEGORY NAVIGATION */}
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

      {/* FLOATING CONTACT SHORTCUTS */}
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
      </div>
    </main>
  );
}