import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://aarnainfradevelopers.com";
const pageUrl = `${siteUrl}/farmlands.html`;

export const metadata: Metadata = {
  title:
    "Farm Land for Sale Near Hyderabad | Farm Plots & Agricultural Land — Aarna Infra",
  description:
    "Explore farm land for sale near Hyderabad with Aarna Infra Developers. View Oxy Flora near Nednur and Pharma City, and Golden Farm near Kallepally and Bangalore Highway. Enquire about project details, agricultural land buying guide and site visits.",
  keywords: [
    // Head terms
    "farm land for sale near Hyderabad",
    "farmland for sale in Hyderabad",
    "farm lands near Hyderabad",
    "farm land in Hyderabad",
    "agricultural land for sale near Hyderabad",
    "agricultural land near Hyderabad",
    "farm plots near Hyderabad",
    "farm land sale Hyderabad",
    "agricultural plots near Hyderabad",
    "land for sale near Hyderabad",

    // Investment / buyer intent
    "farm land investment Hyderabad",
    "farm land investment near Hyderabad",
    "weekend farm land near Hyderabad",
    "farmhouse land near Hyderabad",
    "agricultural land investment Telangana",
    "agricultural land in Telangana",
    "farm plots investment Hyderabad",
    "buy farm land near Hyderabad",
    "farm land buying guide Hyderabad",
    "agricultural land buying guide Telangana",
    "farm land ROI Hyderabad",
    "farm land appreciation Hyderabad",

    // Location long-tail
    "farm land near Pharma City",
    "farm plots near Nednur",
    "farm land near Srisailam Highway",
    "farm land near Bangalore Highway",
    "farm land in Balanagar",
    "farm plots in Kallepally",
    "farm land near Shadnagar",
    "farm land near Kothur",
    "farm land near Kadthal",
    "farm land near Moinabad",
    "farm land near Shamshabad",
    "agricultural land near Srisailam Highway",
    "agricultural land near Bangalore Highway",

    // Project names
    "Oxy Flora farm land",
    "Oxy Flora Nednur",
    "Oxy Flora Pharma City",
    "Golden Farm Hyderabad",
    "Golden Farm Kallepally",
    "Golden Farm Bangalore Highway",

    // Category / related terms
    "agricultural land for sale Telangana",
    "farm land documents verification",
    "farm land land use classification",
    "agricultural land regulations Telangana",
    "farm land near Hyderabad with clear title",

    // Brand
    "Aarna Infra Developers",
    "Aarna Infra farm lands",
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
    title: "Farm Land for Sale Near Hyderabad | Aarna Infra Developers",
    description:
      "Explore farmland listings near Nednur, Pharma City, Srisailam Highway and Bangalore Highway. Contact Aarna Infra Developers for project information and site visits.",
    url: pageUrl,
    siteName: "Aarna Infra Developers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/assets/img/ongoing-projects/Oxy-Flora.jpg`,
        width: 1200,
        height: 630,
        alt: "Farm land projects by Aarna Infra Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farm Land for Sale Near Hyderabad | Aarna Infra Developers",
    description:
      "Explore farmland projects near Hyderabad and enquire about locations, project details and site visits.",
    images: [`${siteUrl}/assets/img/ongoing-projects/Oxy-Flora.jpg`],
    site: "@Aarnainfradev",
  },
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-touch-icon.png",
  },
};

const projects = [
  {
    name: "Oxy Flora",
    location: "Near Pharma City, Nednur, Srisailam Highway",
    image: "/img/projects/Oxy-Flora.jpg",
    alt: "Oxy Flora farm land project near Nednur and Srisailam Highway",
    href: "/projects/Oxy-Flora",
    number: "01",
    description:
      "Explore the Oxy Flora project location near Pharma City, Nednur and Srisailam Highway.",
  },
  {
    name: "Golden Farm",
    location: "Balanagar, Bangalore Highway, Kallepally",
    image: "/img/projects/Golden-Farm.jpg",
    alt: "Golden Farm agricultural land project near Balanagar and Kallepally",
    href: "/projects/Golden-Farm",
    number: "02",
    description:
      "Discover the Golden Farm project and enquire about its location, availability and documentation.",
  },
];

const highlights = [
  { value: "2 Projects", label: "Featured Farm Lands" },
  { value: "Highway Access", label: "Srisailam & Bangalore" },
  { value: "Clear Title", label: "Documentation Focus" },
  { value: "Site Visits", label: "Visit Before You Buy" },
];

const locations = [
  {
    name: "Nednur & Pharma City",
    type: "Oxy Flora",
    description:
      "Near the Pharma City cluster along the Srisailam Highway, with access to industrial and infrastructure growth in the southern corridor.",
  },
  {
    name: "Srisailam Highway",
    type: "Highway Corridor",
    description:
      "A growing agricultural and weekend-farm corridor connecting Hyderabad to Srisailam, with developing access roads.",
  },
  {
    name: "Balanagar & Kallepally",
    type: "Golden Farm",
    description:
      "Located near Balanagar along the Bangalore Highway, offering farmland options in an emerging southern corridor.",
  },
  {
    name: "Bangalore Highway",
    type: "Highway Corridor",
    description:
      "The Hyderabad–Bengaluru highway corridor is widely discussed for long-term land holdings and weekend farm plots.",
  },
];

const faqs = [
  {
    q: "What documents should I check before buying farm land near Hyderabad?",
    a: "Review the title chain, mother deed, encumbrance certificate, revenue records (pahani), survey numbers, land classification, approach road details and any permissions required for the intended use. Independent legal review by a qualified professional is always recommended before payment.",
  },
  {
    q: "Is agricultural land near Hyderabad a good investment?",
    a: "Farm land can be a long-term land holding option, but returns are not guaranteed and depend on location, access, land-use regulations and market conditions. Buyers should evaluate their financial goals, verify the property's documents and avoid relying on promotional projections.",
  },
  {
    q: "Can I build a farmhouse on agricultural land near Hyderabad?",
    a: "Construction on agricultural land is subject to applicable land-use regulations and permissions, which can vary by location. Check the specific land classification and permitted use with the relevant authorities and a legal professional before planning construction.",
  },
  {
    q: "What is the difference between farm land and open plots?",
    a: "Farm land is typically classified as agricultural land with specific land-use rules, while open plots are usually residential or mixed-use layouts with layout approvals. The documentation, permitted use and construction rules differ between the two categories.",
  },
  {
    q: "Where are the Oxy Flora and Golden Farm projects located?",
    a: "Oxy Flora is listed near Pharma City, Nednur and the Srisailam Highway. Golden Farm is listed near Balanagar, Bangalore Highway and Kallepally. Contact our team to confirm the exact location, availability and documentation for each project.",
  },
  {
    q: "Do you offer site visits to farm land projects?",
    a: "Yes. Site visits can be coordinated for listed projects. Contact our team with your preferred dates, and we can help arrange a visit so you can see the property, access roads and surroundings in person.",
  },
  {
    q: "Can NRIs buy agricultural land in Telangana?",
    a: "NRI purchase of agricultural land in India is subject to specific regulations under FEMA and state laws. NRIs generally cannot purchase agricultural land without RBI approval, though they may acquire it through inheritance. Buyers should seek legal guidance and confirm the specific rules before proceeding.",
  },
  {
    q: "How is farm land priced near Hyderabad?",
    a: "Farm land pricing varies by location, access, extent, land classification and surrounding development. Highway-corridor farmland typically commands different rates than land in interior areas. Confirm the current price and total costs, including registration charges, directly with the seller or our team.",
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

export default function FarmLandsPage() {
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
        item: `${siteUrl}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Farm Lands",
        item: pageUrl,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Farm Land Projects Near Hyderabad",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Place",
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
              Agricultural Land &amp; Farm Plots
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              Farm Land for Sale
              <span className="mt-2 block text-[#800000]">
                Near Hyderabad
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 sm:text-lg">
              Explore farm land projects near Nednur, Pharma City,
              Srisailam Highway and Bangalore Highway. Contact Aarna
              Infra Developers for project information, current
              availability and site visits.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#farm-projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#800000] px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
              >
                Explore Farm Land Projects <ArrowIcon />
              </a>

              <a
                href="https://wa.me/919959354255?text=Hello%2C%20I%20am%20interested%20in%20farm%20land%20projects."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
              >
                <span aria-hidden="true">☎</span>
                Enquire on WhatsApp
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
              <span className="text-[#800000]">Farm Lands</span>
            </nav>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#FFFF00] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
              <img
                src="/img/projects/farmland-near-hyderbad.png"
                alt="Oxy Flora farmland project near Nednur and Srisailam Highway"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
                fetchPriority="high"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/50 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
               Farm Land Project
                </p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">Sanjeevini Golden Farm</p>
                <p className="mt-1 text-sm text-white/80">
             Kallepally, Balanagar
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

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12 lg:py-28">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
            Explore Our Projects
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
            Explore Farm Land Near Hyderabad
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-black/80">
            <p>
              Aarna Infra Developers features farmland projects near
              Hyderabad, including Oxy Flora near Pharma City and Nednur,
              and Golden Farm near Balanagar, Bangalore Highway and
              Kallepally. Explore the listed projects and contact our team
              for details about location, availability and site visits.
            </p>

            <p>
              Before purchasing agricultural land, review the land
              classification, ownership documents, access, applicable
              permissions and restrictions on land use. Verify the specific
              property&apos;s documentation independently.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-7 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFFF00] text-2xl font-black text-[#800000]">
              ❋
            </div>
            <div>
              <h3 className="font-bold text-[#800000]">
                Agricultural Land &amp; Farm Plots
              </h3>
              <p className="mt-1 text-sm leading-6 text-black/70">
                Highway-corridor farmland projects with documentation focus
                and site-visit support.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
            <img
              src="/img/projects/Golden-Farm.jpg"
              alt="Golden Farm agricultural land project near Balanagar and Kallepally"
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* FEATURED FARM LAND PROJECTS */}
      <section
        id="farm-projects"
        className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Discover Our Properties
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Farm Land Projects Near Hyderabad
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Explore the Oxy Flora and Golden Farm projects featured on our
              website. Contact our team to enquire about current availability
              and arrange a site visit.
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
                  aria-label={`View ${project.name} farm land project details`}
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
                      Farm Land
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
              Farm Land Locations
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Explore Farm Land Near Hyderabad
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Compare highway-corridor farmland locations and understand the
              access, context and growth potential of each area.
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

          <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-black/80">
              <p>
                If you are searching for farmland for sale near Hyderabad,
                compare the locations and details of the projects listed by
                Aarna Infra Developers. Oxy Flora is listed near Pharma
                City, Nednur and Srisailam Highway. Golden Farm is listed in
                the Balanagar, Bangalore Highway and Kallepally area.
              </p>

              <p>
                Location is one factor to consider when evaluating
                agricultural land. Check the actual site access, surrounding
                development, land classification, water availability where
                relevant, ownership records and applicable legal
                restrictions. Visit the property and independently verify
                all project claims before making a purchase.
              </p>

              <p>
                Contact our team to request project details, discuss your
                requirements and enquire about arranging a site visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl rounded-3xl border border-black/10 bg-white p-6 sm:p-10 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#800000]">
              Agricultural Land Buying Guide
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Things to Know Before Buying Farm Land Near Hyderabad
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-black/80">
              <p>
                Buyers searching for agricultural land for sale near
                Hyderabad should compare each property carefully. Consider
                the location, total area, access roads, intended use,
                ownership records and applicable land regulations. Ask for
                project-specific documents before making a payment.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Verify Land Documents and Permissions
              </h3>

              <p>
                Check the title chain, encumbrance details, land records,
                survey boundaries, land classification and any permissions
                required for the intended use. Rules governing agricultural
                land can differ by location and property type. Obtain
                independent legal advice when necessary.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Compare Location and Accessibility
              </h3>

              <p>
                When comparing farm plots near Hyderabad, evaluate actual
                road access, travel distance, surrounding infrastructure
                and access to relevant services. Confirm the precise project
                location on a site visit rather than relying only on a
                highway or landmark mentioned in advertising.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Understand the Investment Risks
              </h3>

              <p>
                Land prices can rise or fall, and agricultural land may have
                restrictions on development or use. Do not assume guaranteed
                appreciation, future infrastructure benefits or assured
                returns. Make decisions after reviewing the property&apos;s
                documents, total costs and your financial goals.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Farm Land vs. Open Plots — What&apos;s the Difference?
              </h3>

              <p>
                Farm land is typically classified as agricultural land with
                specific land-use rules, while open plots are usually
                residential or mixed-use layouts with layout approvals. The
                documentation, permitted use and construction rules differ
                between the two categories. Buyers should understand the
                classification of the specific property before proceeding.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Why Buyers Consider Farm Land Near Hyderabad
              </h3>

              <p>
                Farm land near Hyderabad attracts buyers looking for
                long-term land holdings, weekend properties and agricultural
                use. Corridors such as the Srisailam Highway and Bangalore
                Highway are often discussed for future connectivity and
                infrastructure. These are considerations for research, not
                guarantees, and buyers should evaluate each property on its
                own merits.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                NRI Buyers and Agricultural Land
              </h3>

              <p>
                NRI purchase of agricultural land in India is subject to
                specific regulations under FEMA and state laws. NRIs
                generally cannot purchase agricultural land without RBI
                approval, though they may acquire it through inheritance.
                Buyers should seek legal guidance and confirm the specific
                rules before proceeding.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Explore More Property Options
              </h3>

              <p>
                If you are comparing different property categories, explore
                our{" "}
                <Link
                  href="/openplots"
                  className="font-bold text-[#800000] underline underline-offset-4 hover:text-black"
                >
                  residential open plots
                </Link>
                ,{" "}
                <Link
                  href="/apartments"
                  className="font-bold text-[#800000] underline underline-offset-4 hover:text-black"
                >
                  apartments
                </Link>{" "}
                and{" "}
                <Link
                  href="/villas-houses"
                  className="font-bold text-[#800000] underline underline-offset-4 hover:text-black"
                >
                  villas and houses
                </Link>
                . Check each page for its current project information.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Contact Aarna Infra Developers
              </h3>

              <p>
                Looking for farm land near Hyderabad or want to explore our
                listed projects? Contact Aarna Infra Developers to enquire
                about project details, current availability or arrange a
                site visit.
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
              Farm Land Buying FAQs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Quick answers to common questions about farm land, documents
              and buying near Hyderabad.
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

      {/* CONTACT CTA */}
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
                Interested in Our Farm Land Projects?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-black/70 sm:text-lg">
                Contact our team for project details, availability enquiries
                and site visit assistance.
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

          <span
            aria-current="page"
            className="rounded-full bg-[#800000] px-5 py-2.5 text-sm font-bold text-white"
          >
            Farm Lands
          </span>

          <Link
            href="/villas-houses"
            className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
          >
            Villas &amp; Houses
          </Link>
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