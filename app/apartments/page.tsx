import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://aarnainfradevelopers.com";
const pageUrl = `${siteUrl}/apartments.html`;

export const metadata: Metadata = {
  title:
    "Apartments in Hyderabad | Premium Flats & Gated Communities — Aarna Infra",
  description:
    "Explore apartments in Hyderabad with Aarna Infra Developers. Premium flats and gated community projects in Kokapet, Attapur, Budvel, Rajendra Nagar and near the Financial District. 2 BHK, 3 BHK, luxury and ready-to-move options.",
  keywords: [
    // Head terms
    "apartments in Hyderabad",
    "flats for sale in Hyderabad",
    "apartments for sale in Hyderabad",
    "flats in Hyderabad",
    "apartment projects in Hyderabad",
    "residential apartments in Hyderabad",
    "new apartments in Hyderabad",
    "apartment sale Hyderabad",

    // Premium / category modifiers
    "luxury apartments in Hyderabad",
    "premium flats in Hyderabad",
    "premium apartments Hyderabad",
    "gated community apartments in Hyderabad",
    "gated community flats in Hyderabad",
    "gated communities Hyderabad",
    "affordable apartments in Hyderabad",
    "ready to move flats in Hyderabad",
    "under construction apartments in Hyderabad",
    "2 BHK flats in Hyderabad",
    "3 BHK flats in Hyderabad",
    "2BHK 3BHK apartments Hyderabad",

    // Location long-tail
    "apartments near Financial District Hyderabad",
    "flats in Financial District Hyderabad",
    "apartments in Kokapet",
    "flats for sale in Kokapet",
    "apartments in Attapur",
    "flats for sale in Attapur",
    "apartments in Budvel",
    "apartments in Rajendra Nagar",
    "flats in Rajendra Nagar Hyderabad",
    "apartments near Financial District",
    "apartments in West Hyderabad",

    // Buyer intent
    "property investment Hyderabad",
    "real estate in Hyderabad",
    "residential property in Hyderabad",
    "best apartments in Hyderabad",
    "best flats in Hyderabad",
    "apartment buying guide Hyderabad",
    "RERA registered apartments Hyderabad",
    "how to choose apartment in Hyderabad",
    "2 BHK vs 3 BHK apartment Hyderabad",
    "apartment maintenance charges Hyderabad",

    // Brand
    "Aarna Infra Developers",
    "Aarna Infra apartments Hyderabad",
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
      "Apartments in Hyderabad | Premium Flats & Gated Communities — Aarna Infra",
    description:
      "Explore apartment projects and residential property options in Kokapet, Attapur, Budvel, Rajendra Nagar and the Financial District.",
    url: pageUrl,
    siteName: "Aarna Infra Developers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/assets/img/Logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Aarna Infra Developers apartments in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartments in Hyderabad | Aarna Infra Developers",
    description:
      "Explore residential apartments and gated community projects in Hyderabad.",
    images: [`${siteUrl}/assets/img/Logo.jpg`],
    site: "@Aarnainfradev",
  },
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-touch-icon.png",
  },
};

const projects = [
  {
    name: "Myscape Songs Of The Sun",
    location: "Near Financial District, Hyderabad",
    image: "/assets/img/ongoing-projects/Myscape-Songs-Of-The-Sun.jpg",
    alt: "Myscape Songs Of The Sun - Premium Apartments near Financial District Hyderabad",
    href: "/projects/Myscape-Songs-Of-The-Sun",
    status: "Explore Project",
    sold: false,
  },
  {
    name: "GNR's Vasavi Nirvana",
    location: "Attapur, Hyderabad",
    image: "/assets/img/ongoing-projects/GNR-Vasavi.jpg",
    alt: "GNR's Vasavi Nirvana - Luxury Apartments in Attapur Hyderabad",
    href: "",
    status: "Sold Out",
    sold: true,
  },
  {
    name: "Prestige Spring Heights",
    location: "Budvel, Hyderabad",
    image: "/assets/img/ongoing-projects/Prestige-Spring-Heights.jpg",
    alt: "Prestige Spring Heights - Premium Apartments in Budvel Hyderabad",
    href: "/projects/Prestige-Spring-Heights",
    status: "Explore Project",
    sold: false,
  },
  {
    name: "Godrej Madison Avenue",
    location: "Kokapet, Hyderabad",
    image: "/assets/img/ongoing-projects/Godrej-Madison-Avenue.jpg",
    alt: "Godrej Madison Avenue - Luxury Apartments in Kokapet Hyderabad",
    href: "",
    status: "Sold Out",
    sold: true,
  },
  {
    name: "The Prestige City",
    location: "Rajendra Nagar, Hyderabad",
    image: "/assets/img/ongoing-projects/The-Prestige-City.jpg",
    alt: "The Prestige City - Premium Apartments in Rajendra Nagar Hyderabad",
    href: "/projects/The-Prestige-City",
    status: "Explore Project",
    sold: false,
  },
];

const highlights = [
  { value: "2 & 3 BHK", label: "Apartment Configurations" },
  { value: "Gated", label: "Community Living" },
  { value: "RERA", label: "Registered Projects" },
  { value: "5+", label: "Prime Locations" },
];

const locations = [
  {
    name: "Financial District",
    description:
      "Hyderabad's IT and business hub with premium apartment projects and strong rental demand.",
  },
  {
    name: "Kokapet",
    description:
      "A premium residential corridor near ORR with luxury gated communities and high-end apartments.",
  },
  {
    name: "Attapur",
    description:
      "An established south-west Hyderabad area with connectivity to Mehdipatnam and Rajendra Nagar.",
  },
  {
    name: "Budvel",
    description:
      "An emerging residential zone near Rajendra Nagar with access to the Financial District.",
  },
  {
    name: "Rajendra Nagar",
    description:
      "A well-connected south-west corridor with schools, hospitals and gated apartment projects.",
  },
];

const faqs = [
  {
    q: "What types of apartments are available in Hyderabad?",
    a: "Hyderabad offers a wide range of apartment options — 2 BHK and 3 BHK flats, luxury gated communities, premium high-rise projects and affordable housing. Availability and configuration vary by project, so check the specific project details before shortlisting.",
  },
  {
    q: "Which areas in Hyderabad are best for apartment buyers?",
    a: "Popular apartment corridors include the Financial District, Kokapet, Attapur, Budvel, Rajendra Nagar, Gachibowli, Narsingi and Kondapur. The right area depends on your workplace, budget, connectivity needs and lifestyle preferences.",
  },
  {
    q: "What is the price range for apartments in Hyderabad?",
    a: "Apartment prices vary widely by location, project quality, configuration and amenities. Premium areas like Kokapet and the Financial District typically have higher per-square-foot rates than emerging corridors. Always confirm current pricing directly with the project or developer.",
  },
  {
    q: "Should I choose a 2 BHK or 3 BHK apartment?",
    a: "The choice depends on your household size, long-term plans and budget. A 2 BHK is often suitable for smaller families or first-time buyers, while a 3 BHK offers more space for larger families. Compare usable space, bedroom sizes and ventilation before deciding.",
  },
  {
    q: "What should I check before buying an apartment in Hyderabad?",
    a: "Verify the project's RERA registration, building permissions, title and sale documentation, payment schedule, possession terms and maintenance charges. Review the approved floor plan and check the construction status before booking.",
  },
  {
    q: "Are gated community apartments better than standalone buildings?",
    a: "Gated communities often include shared amenities, security arrangements and common infrastructure. Standalone buildings may have lower maintenance charges but fewer shared facilities. The right choice depends on your priorities, budget and lifestyle.",
  },
  {
    q: "Can NRIs buy apartments in Hyderabad?",
    a: "Yes, NRIs can buy residential apartments in India subject to applicable regulations. Documentation, payment and registration should be handled carefully, ideally with legal guidance and proper Power of Attorney arrangements where required.",
  },
  {
    q: "How do I schedule a site visit for an apartment project?",
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

export default function ApartmentsPage() {
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

  const apartmentSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Apartment Projects in Hyderabad",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "ApartmentComplex",
        name: project.name,
        image: `${siteUrl}${project.image}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: project.location,
          addressRegion: "Hyderabad",
          addressCountry: "IN",
        },
        ...(project.href ? { url: `${siteUrl}${project.href}` } : {}),
      },
    })),
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
        name: "Apartments",
        item: pageUrl,
      },
    ],
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
    apartmentSchema,
    breadcrumbSchema,
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

      {/* HERO */}
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
              Premium Flats &amp; Gated Communities
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              Apartments in
              <span className="mt-2 block text-[#800000]">Hyderabad</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 sm:text-lg">
              Discover premium apartments in Hyderabad with Aarna Infra
              Developers. Explore luxury gated communities, affordable
              housing and investment properties in prime locations like the
              Financial District, Kokapet, Attapur, Budvel and Rajendra
              Nagar.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#apartment-projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#800000] px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
              >
                Explore Apartments <ArrowIcon />
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
              <span className="text-[#800000]">Apartments</span>
            </nav>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#FFFF00] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
              <img
                src="/assets/img/ongoing-projects/Myscape-Songs-Of-The-Sun.jpg"
                alt="Premium apartments in Hyderabad by Aarna Infra Developers"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
                fetchPriority="high"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/50 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
                  Featured Project
                </p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">
                  Myscape Songs Of The Sun
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Near Financial District, Hyderabad
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
            Find Your Next Home
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
            Explore Apartments in Hyderabad
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-black/80">
            <p>
              Explore apartment options in Hyderabad, from premium gated
              communities to residential properties in established and
              developing locations. Review each project&apos;s location,
              available details and current status before making a decision.
            </p>
            <p>
              Looking for apartments in Hyderabad? Aarna Infra Developers
              showcases residential apartment projects to help homebuyers
              explore locations, compare project information and enquire
              about available options. Before choosing a flat, consider your
              budget, preferred neighbourhood, travel requirements, floor
              plan, amenities and the project&apos;s current availability.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-7 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFFF00] text-2xl font-black text-[#800000]">
              ⌂
            </div>
            <div>
              <h3 className="font-bold text-[#800000]">
                2 BHK, 3 BHK &amp; Gated Communities
              </h3>
              <p className="mt-1 text-sm leading-6 text-black/70">
                Residential property options across prime Hyderabad
                corridors.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
            <img
              src="/assets/img/ongoing-projects/Prestige-Spring-Heights.jpg"
              alt="Gated community apartments in Hyderabad"
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* APARTMENT PROJECTS */}
      <section
        id="apartment-projects"
        className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Our Property Portfolio
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Featured Apartment Projects
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Browse the apartment projects featured in our portfolio across
              Hyderabad&apos;s prime residential corridors.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const content = (
                <>
                  <div className="relative h-64 overflow-hidden bg-gray-200 sm:h-72">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                      className={`h-full w-full object-cover transition duration-700 ${
                        project.sold
                          ? "brightness-75"
                          : "group-hover:scale-110"
                      }`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/45 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                      Apartments
                    </span>

                    {project.sold && (
                      <span className="absolute right-4 top-4 rounded-full bg-[#800000] px-4 py-2 text-xs font-extrabold tracking-widest text-white shadow-lg">
                        SOLD
                      </span>
                    )}

                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#FFFF00]">
                        {project.location}
                      </p>
                      <h3 className="mt-2 text-xl font-extrabold leading-snug text-white sm:text-2xl">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-black/10 p-5 sm:p-6">
                    <span
                      className={`text-sm font-bold ${
                        project.sold ? "text-black/50" : "text-[#800000]"
                      }`}
                    >
                      {project.status}
                    </span>
                    {!project.sold && (
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFF00] text-[#800000] transition group-hover:bg-[#800000] group-hover:text-white">
                        <ArrowIcon />
                      </span>
                    )}
                  </div>
                </>
              );

              return (
                <article
                  key={project.name}
                  className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#800000]/30 hover:shadow-xl"
                >
                  {project.sold ? (
                    <div
                      aria-label={`${project.name} - Sold Out`}
                      className="cursor-default"
                    >
                      {content}
                    </div>
                  ) : (
                    <Link
                      href={project.href}
                      aria-label={`View ${project.name} apartment details`}
                      className="block"
                    >
                      {content}
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Explore Hyderabad
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Apartment Locations to Explore
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Aarna Infra Developers features apartment projects in locations
              including the Financial District, Kokapet, Attapur, Budvel and
              Rajendra Nagar.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <article
                key={loc.name}
                className="group rounded-2xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#800000]/30 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFFF00] text-2xl font-black text-[#800000]">
                  ⌖
                </div>

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
              Hyderabad Residential Property Guide
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Find Apartments and Flats in Hyderabad
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-black/80">
              <p>
                Looking for apartments in Hyderabad? Aarna Infra Developers
                showcases residential apartment projects to help homebuyers
                explore locations, compare project information and enquire
                about available options. Before choosing a flat, consider your
                budget, preferred neighbourhood, travel requirements, floor
                plan, amenities and the project&apos;s current availability.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Premium Flats and Gated Community Apartments
              </h3>

              <p>
                Buyers comparing premium flats in Hyderabad may want to
                review gated community features, security arrangements,
                parking, recreational facilities, maintenance charges and
                connectivity. The actual facilities and costs differ between
                projects, so check the official project specifications before
                booking.
              </p>

              <p>
                Gated community apartments often include shared amenities
                such as clubhouses, swimming pools, gyms, landscaped areas
                and 24/7 security. Standalone buildings may have lower
                maintenance charges but fewer shared facilities. The right
                choice depends on your priorities, budget and lifestyle.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Apartments in Kokapet and the Financial District
              </h3>

              <p>
                Kokapet and the Financial District are among the locations
                buyers consider when exploring residential property in
                Hyderabad. Compare commute times, nearby facilities, project
                specifications and current pricing to determine whether a
                property suits your requirements.
              </p>

              <p>
                The Financial District is home to major IT and business
                offices, which supports rental demand for apartments in the
                area. Kokapet, located nearby along the ORR, has emerged as a
                premium residential corridor with luxury gated communities
                and high-end apartment projects.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Flats in Attapur, Budvel and Rajendra Nagar
              </h3>

              <p>
                Homebuyers can also compare apartment projects in Attapur,
                Budvel and Rajendra Nagar. Review access roads, public
                transport, nearby schools and hospitals, construction status
                and the applicable project documentation before deciding.
              </p>

              <p>
                These south-west Hyderabad corridors offer good connectivity
                to Mehdipatnam, the ORR and the Financial District. They may
                suit buyers looking for a balance between city access and
                more established residential neighbourhoods.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Choosing a 2 BHK or 3 BHK Apartment
              </h3>

              <p>
                When comparing 2 BHK and 3 BHK flats in Hyderabad, consider
                usable space, bedroom sizes, ventilation, natural light,
                storage, parking and your long-term household needs. Confirm
                the available configurations and prices directly for each
                project; do not assume every project offers every layout.
              </p>

              <p>
                A 2 BHK is often suitable for smaller families or first-time
                buyers, while a 3 BHK offers more space for growing families.
                Also check the carpet area versus built-up area, as this
                affects the usable space you actually get.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Check Project Details Before Buying
              </h3>

              <p>
                Before purchasing an apartment, verify the project&apos;s
                applicable RERA registration, building permissions, title and
                sale documentation, payment schedule, possession terms and
                maintenance charges. Confirm the details using the relevant
                official records and qualified professional advice.
              </p>

              <p>
                Ask for the approved floor plan, check construction status
                and confirm the amenities that are actually included versus
                those listed in marketing material. For under-construction
                projects, review the possession timeline and any penalty
                clauses in the agreement.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Ready-to-Move vs. Under-Construction Apartments
              </h3>

              <p>
                Ready-to-move apartments let you see the actual unit and
                amenities before deciding, and possession is immediate. They
                typically cost more per square foot than under-construction
                projects in the same area. Under-construction projects may
                offer lower prices and flexible payment plans, but involve
                waiting for possession and construction risk.
              </p>

              <p>
                Explore our{" "}
                <Link
                  href="/projects"
                  className="font-bold text-[#800000] underline underline-offset-4 hover:text-black"
                >
                  featured property projects
                </Link>{" "}
                to review other property options listed by Aarna Infra
                Developers.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Enquire About Apartments in Hyderabad
              </h3>

              <p>
                Contact Aarna Infra Developers for information about listed
                apartment projects, current availability and site visits.
                Call{" "}
                <a
                  href="tel:+919959354255"
                  className="font-bold text-[#800000] underline underline-offset-4"
                >
                  +91 99593 54255
                </a>{" "}
                or{" "}
                <a
                  href="https://wa.me/919959354255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#800000] underline underline-offset-4"
                >
                  message our team on WhatsApp
                </a>
                .
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
              Apartment Buying FAQs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Quick answers to common questions about apartments, pricing and
              buying in Hyderabad.
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
                Looking for an Apartment in Hyderabad?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-black/70 sm:text-lg">
                Contact our team to discuss apartment options, request
                project information or arrange a site visit.
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