import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://aarnainfradevelopers.com";

export const metadata: Metadata = {
  title:
    "About Aarna Infra Developers | Real Estate Company in Hyderabad",
  description:
    "Discover Aarna Infra Developers, offering residential open plots, villas, apartments and farmland options in Hyderabad, Shadnagar, Kothur, Kadthal, Kollur, Mokila, Tellapur and nearby locations. Explore projects and arrange a site visit.",
  keywords: [
    "Aarna Infra Developers",
    "real estate developers in Hyderabad",
    "real estate company in Hyderabad",
    "open plots for sale in Hyderabad",
    "residential plots in Hyderabad",
    "plots for sale in Hyderabad",
    "HMDA plots in Hyderabad",
    "HMDA approved plots in Hyderabad",
    "villa plots in Hyderabad",
    "villas for sale in Hyderabad",
    "apartments in Hyderabad",
    "farm land for sale near Hyderabad",
    "property investment in Hyderabad",
    "open plots in Shadnagar",
    "plots in Kothur",
    "plots in Kadthal",
    "plots in Kollur",
    "plots in Mokila",
    "plots in Tellapur",
    "plots in Shamshabad",
    "DTCP approved plots in Hyderabad",
    "gated community plots in Hyderabad",
    "real estate investment in Hyderabad",
    "best real estate company in Hyderabad",
    "top builders in Hyderabad",
    "site visit Hyderabad plots",
    "NRI property investment Hyderabad",
  ],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
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
  openGraph: {
    title:
      "About Aarna Infra Developers | Real Estate Company in Hyderabad",
    description:
      "Learn about Aarna Infra Developers and explore residential plots, villas, apartments and farmland options in Hyderabad and nearby locations.",
    url: `${siteUrl}/about`,
    siteName: "Aarna Infra Developers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/assets/img/Logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Aarna Infra Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Aarna Infra Developers | Real Estate Company in Hyderabad",
    description:
      "Explore residential plots, villas, apartments and farmland options with Aarna Infra Developers.",
    images: [`${siteUrl}/assets/img/Logo.jpg`],
  },
};

const companyValues = [
  {
    number: "01",
    title: "About Our Company",
    image: "/assets/img/about/About%20Company.jpg",
    description:
      "Aarna Infra Developers helps homebuyers and property seekers explore residential plots, villas, apartments, independent houses and farmland opportunities across Hyderabad and nearby growth corridors. We aim to make the property search process informative through project details, site visits and customer support, so buyers can compare options and make confident decisions.",
    tag: "Our Foundation",
  },
  {
    number: "02",
    title: "Our Vision",
    image: "/assets/img/about/Our%20Vision.jpg",
    description:
      "Our vision is to build lasting relationships with customers by providing clear property information, responsive service and opportunities that suit different homebuying and investment requirements. We believe that transparency, communication and follow-through are as important as the property itself.",
    tag: "Where We Are Going",
  },
  {
    number: "03",
    title: "Our Team",
    image: "/assets/img/about/Our%20Team.jpg",
    description:
      "Our team supports customers through property enquiries, project information, site visit coordination and booking-related assistance. Buyers should independently review all applicable property documents, approvals and registration details before purchasing so they understand exactly what they are investing in.",
    tag: "People Who Deliver",
  },
  {
    number: "04",
    title: "Our Mission",
    image: "/assets/img/about/Our%20Mission.jpg",
    description:
      "Our mission is to help customers make informed property decisions by focusing on service, communication, project information and ongoing support throughout their property search. From the first enquiry to the final site visit, we aim to keep things straightforward and helpful.",
    tag: "What Drives Us",
  },
];

const highlights = [
  { value: "Open Plots", label: "Residential Land Options" },
  { value: "Villas", label: "Independent Living Options" },
  { value: "Apartments", label: "Residential Property Options" },
  { value: "Site Visits", label: "Explore Projects in Person" },
];

const services = [
  {
    title: "Residential Open Plots",
    description:
      "Explore residential plot opportunities and compare locations, project features and applicable documentation before you decide.",
    icon: "⌂",
    href: "/openplots",
  },
  {
    title: "Villas & Independent Houses",
    description:
      "Discover villa and independent-house options for your homebuying requirements across Hyderabad and surrounding areas.",
    icon: "⌂",
    href: "/villas-houses",
  },
  {
    title: "Apartments",
    description:
      "Explore apartment options and review available project information, amenities and location details.",
    icon: "▥",
    href: "/apartments",
  },
  {
    title: "Farm Lands",
    description:
      "View farmland opportunities and check land use and relevant documentation before buying agricultural property.",
    icon: "❋",
    href: "/farmlands",
  },
];

const whyChoose = [
  {
    title: "Verified Property Information",
    description:
      "Every project we list is supported with project details, location context and available documentation so you can compare options with clarity.",
    icon: "✓",
  },
  {
    title: "Transparent Documentation Support",
    description:
      "We encourage buyers to review title documents, approvals and registration details, and our team can help coordinate the information you need.",
    icon: "▤",
  },
  {
    title: "Site Visit Coordination",
    description:
      "Book a site visit and our team will coordinate with you to explore the project in person, walk the layout and understand the surrounding infrastructure.",
    icon: "◉",
  },
  {
    title: "Multiple Property Categories",
    description:
      "From residential open plots and villa plots to apartments and farmland, you can explore different categories in one place.",
    icon: "◫",
  },
  {
    title: "Prime Locations in Hyderabad",
    description:
      "Projects across Shadnagar, Kothur, Kadthal, Kollur, Mokila, Tellapur, Shamshabad, Patancheru, Kompally and Adibatla.",
    icon: "⌖",
  },
  {
    title: "Customer-Focused Communication",
    description:
      "Our team is available to answer questions, share project details and help you move through the property search at your own pace.",
    icon: "☎",
  },
];

const locations = [
  {
    name: "Shadnagar",
    type: "Open Plots & Farm Lands",
    description:
      "A fast-growing corridor on the Hyderabad–Bengaluru highway with affordable plots and farmland options.",
  },
  {
    name: "Kothur",
    type: "HMDA & DTCP Plots",
    description:
      "Located along the Bengaluru highway near Shadnagar, popular for HMDA-approved layouts and gated ventures.",
  },
  {
    name: "Kadthal",
    type: "DTCP Approved Layouts",
    description:
      "An emerging residential and farm-land corridor with access to the highway and the proposed regional ring road.",
  },
  {
    name: "Kollur",
    type: "HMDA Plots",
    description:
      "One of the strongest plot-appreciation zones near the ORR, with gated communities and villa plots.",
  },
  {
    name: "Mokila",
    type: "HMDA Ventures",
    description:
      "A premium residential corridor with gated layouts, villa plots and proximity to Financial District.",
  },
  {
    name: "Tellapur",
    type: "Premium Plots & Villas",
    description:
      "A high-demand residential zone close to Gachibowli and the Financial District with villa plots and apartments.",
  },
  {
    name: "Shamshabad",
    type: "Plots Near Airport",
    description:
      "A strategic corridor near Rajiv Gandhi International Airport with residential, commercial and industrial land options.",
  },
  {
    name: "Patancheru",
    type: "Industrial & Residential",
    description:
      "An established industrial corridor with residential plot opportunities and strong connectivity.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Explore Projects",
    description:
      "Browse property categories, compare locations and shortlist projects that match your requirements.",
  },
  {
    number: "02",
    title: "Request Details",
    description:
      "Contact our team to request project information, price details and available documentation.",
  },
  {
    number: "03",
    title: "Book a Site Visit",
    description:
      "Coordinate a site visit to explore the project, layout and surrounding infrastructure in person.",
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "Review documents independently, verify applicable approvals and proceed with booking and registration.",
  },
];

const testimonials = [
  {
    quote:
      "The team shared every project detail clearly and arranged a site visit within a couple of days. It made comparing plots in Shadnagar much easier.",
    name: "Ramesh K.",
    role: "Plot Buyer, Shadnagar",
  },
  {
    quote:
      "I was exploring farmland near Kadthal and appreciated the honest information about land use and documentation. No pushy sales talk.",
    name: "Sneha P.",
    role: "Farmland Buyer, Kadthal",
  },
  {
    quote:
      "As an NRI, I needed someone to coordinate site visits and share documents. Their team was responsive and followed up consistently.",
    name: "Arun V.",
    role: "NRI Investor",
  },
];

const faqs = [
  {
    q: "What types of properties does Aarna Infra Developers list?",
    a: "Aarna Infra Developers lists residential open plots, villa plots, independent houses, apartments and farmland options across Hyderabad and nearby areas. Each category has different documentation and approval requirements, and buyers should review the specific details for the property they are considering.",
  },
  {
    q: "Which locations do you cover in and around Hyderabad?",
    a: "Our listed projects include locations such as Shadnagar, Kothur, Kadthal, Kollur, Mokila, Tellapur, Shamshabad, Patancheru, Kompally and Adibatla. Availability can change, so contact our team to confirm current options in your preferred area.",
  },
  {
    q: "What is the difference between HMDA and DTCP approved plots?",
    a: "HMDA (Hyderabad Metropolitan Development Authority) approvals apply to layouts within the Hyderabad Metropolitan Region, while DTCP (Directorate of Town and Country Planning) approvals apply outside HMDA limits. Both indicate that a layout has been reviewed against applicable regulations, but buyers should always verify the approval copy and LP number for the specific project.",
  },
  {
    q: "Can I get a bank loan for an open plot in Hyderabad?",
    a: "Several banks and housing finance companies offer plot loans for approved layouts. Loan eligibility, funding percentage and approval depend on the bank, the project's approvals and the buyer's profile. Our team can help coordinate information, but buyers should confirm loan terms directly with their preferred lender.",
  },
  {
    q: "Do you offer site visits to projects?",
    a: "Yes. Site visits can be coordinated for listed projects. Contact our team to share your preferred dates and locations, and we can help arrange a visit so you can see the project, layout and surroundings in person.",
  },
  {
    q: "What documents should I check before buying a plot?",
    a: "Buyers should review the layout approval (HMDA/DTCP), LP number, mother deed, encumbrance certificate, revenue records, layout plan, RERA registration (where applicable) and any other project-specific documents. It is advisable to have these reviewed by a qualified legal professional.",
  },
  {
    q: "Are farmlands near Hyderabad a good investment?",
    a: "Farmland can be a long-term investment option, but it comes with specific considerations such as land classification, permitted use, access, water availability and applicable agricultural land rules. Buyers should verify these details for the specific property before proceeding.",
  },
  {
    q: "How do I get in touch with Aarna Infra Developers?",
    a: "You can call our team at +91 99593 54255, message us on WhatsApp, or use the contact form on our website. We are happy to answer questions about listed projects and arrange site visits.",
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

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aarna Infra Developers",
    url: `${siteUrl}/`,
    description:
      "A real estate company offering residential plots, villas, apartments and farmland options in Hyderabad and nearby locations.",
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
      contactType: "customer service",
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
        name: "About Us",
        item: `${siteUrl}/about`,
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

  return (
    <main className="overflow-hidden bg-[#F7F6F2] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

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
              Your Property Journey Starts Here
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              About Aarna Infra
              <span className="mt-2 block text-[#800000]">Developers</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 sm:text-lg">
              Learn about Aarna Infra Developers, a real estate company
              offering residential open plots, villas, apartments and
              farmland options in Hyderabad, Shadnagar, Kothur, Kadthal,
              Kollur, Mokila, Tellapur and nearby growth corridors.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#800000] px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
              >
                Explore Our Projects <ArrowIcon />
              </Link>

              <a
                href="tel:+919959354255"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
              >
                <span aria-hidden="true">☎</span>
                Call Our Team
              </a>
            </div>

            <nav
              aria-label="Breadcrumb"
              className="mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/50"
            >
              <Link href="/" className="transition hover:text-[#800000]">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#800000]">About Us</span>
            </nav>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#FFFF00] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
              <img
                src="/assets/img/about/About%20Company.jpg"
                alt="Aarna Infra Developers real estate company in Hyderabad"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
                fetchPriority="high"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/50 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
                  Our Promise
                </p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">
                  We Stand for Excellence
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
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
            <img
              src="/assets/img/about/About%20Company.jpg"
              alt="Aarna Infra Developers real estate company in Hyderabad"
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
            Who We Are
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
            A Real Estate Partner Focused on Your Future
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-black/80">
            <p>
              Aarna Infra Developers helps customers explore real estate
              opportunities in Hyderabad and surrounding areas. Our property
              categories include residential open plots, villas, independent
              houses, apartments and farmland options, with projects listed
              across both established and emerging growth corridors.
            </p>

            <p>
              We aim to make the property search process easier through
              project information, customer communication, site visit
              coordination and booking-related assistance. Customers should
              independently verify property ownership, applicable approvals
              and registration documents before purchasing so that they are
              fully informed about the property they are considering.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-7 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFFF00] text-2xl font-black text-[#800000]">
              ✓
            </div>
            <div>
              <h3 className="font-bold text-[#800000]">
                Customer-Focused Property Services
              </h3>
              <p className="mt-1 text-sm leading-6 text-black/70">
                Property enquiries, site visits, project information and
                booking assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY VALUES */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              The Aarna Difference
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Our Values. Our Vision. Our Mission.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              We focus on customer service, clear communication, helpful
              property information and support throughout the property search.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {companyValues.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#800000]/30 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden bg-gray-200 sm:h-56">
                  <img
                    src={item.image}
                    alt={`${item.title} at Aarna Infra Developers`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-black/30 px-3 py-1.5 text-xs font-bold tracking-widest text-white backdrop-blur-sm">
                    {item.number}
                  </span>

                  <p className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.16em] text-[#FFFF00]">
                    {item.tag}
                  </p>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-extrabold text-[#800000]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/70">
                    {item.description}
                  </p>

                  <div className="mt-6 h-1 w-12 rounded-full bg-[#FFFF00] transition-all duration-300 group-hover:w-20" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY SERVICES */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Property Portfolio
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Explore Our Real Estate Options
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-black/70">
              Explore the property categories listed by Aarna Infra
              Developers and review the details available for each project.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex min-h-12 w-fit items-center gap-3 rounded-full border border-[#800000]/30 bg-white px-6 py-3 font-bold text-[#800000] transition hover:border-[#800000] hover:bg-[#800000] hover:text-white"
          >
            View All Projects <ArrowIcon />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#800000]/30 hover:shadow-xl sm:p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFFF00] text-3xl text-[#800000] transition duration-300 group-hover:bg-[#800000] group-hover:text-white">
                {service.icon}
              </div>

              <h3 className="mt-6 text-lg font-extrabold text-[#800000]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/70">
                {service.description}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#800000]">
                Explore <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Why Aarna Infra
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              A Property Search That Feels Clear
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Buying property is a significant decision. We try to make the
              process informative, well-coordinated and easy to follow from
              enquiry to site visit.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#800000]/30 hover:shadow-xl sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFFF00] text-2xl font-black text-[#800000]">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-[#800000]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
            Where We Operate
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
            Locations We Serve in Hyderabad &amp; Nearby
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
            From highway corridors to premium residential zones, we list
            projects across established and emerging plot destinations around
            Hyderabad.
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

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-[#800000]/30 bg-white px-6 py-3 font-bold text-[#800000] transition hover:border-[#800000] hover:bg-[#800000] hover:text-white"
          >
            View All Locations <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Simple &amp; Clear
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              How Working With Us Usually Works
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              A straightforward process from exploring projects to arranging
              a site visit and reviewing documents.
            </p>
          </div>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="relative rounded-2xl border border-black/10 bg-white p-6 sm:p-7"
              >
                <span className="text-4xl font-black text-[#800000]/20">
                  {step.number}
                </span>

                <h3 className="mt-3 text-lg font-extrabold text-[#800000]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-black/70">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
            Customer Voices
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
            What Buyers Say About Us
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
            A few words from customers who explored projects through our team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-7"
            >
              <div
                className="text-lg text-[#800000]"
                aria-label="5 out of 5"
              >
                ★★★★★
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-7 text-black/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-black/10 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFF00] text-sm font-extrabold text-[#800000]">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-black">{t.name}</p>
                  <p className="text-xs text-black/60">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
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
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Quick answers to common questions about plots, documentation
              and the property search process.
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

      {/* SEO CONTENT */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl rounded-3xl border border-black/10 bg-white p-6 sm:p-10 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#800000]">
              Aarna Infra Developers
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Real Estate Opportunities in Hyderabad
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-black/80">
              <p>
                Aarna Infra Developers helps homebuyers and property seekers
                explore real estate opportunities in Hyderabad and nearby
                locations. Our property categories include residential open
                plots, apartments, villas, independent houses and farmland.
                Customers can explore available listings, compare project
                information and contact our team to arrange a site visit.
              </p>

              <p>
                Hyderabad has grown rapidly over the last decade, with
                expanding IT corridors, new infrastructure and evolving
                residential demand. Buyers exploring plots and properties
                today often consider factors such as location, connectivity,
                approvals, project quality and long-term potential. Our goal
                is to make that research easier by presenting clear project
                information and helping customers coordinate site visits and
                documentation discussions.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Open Plots for Sale in Hyderabad
              </h3>

              <p>
                If you are searching for open plots for sale in Hyderabad,
                compare the location, connectivity, plot dimensions, available
                infrastructure, price and applicable approvals for each
                project. Before buying residential land, review the title
                documents, land use, encumbrance details and registration
                eligibility with qualified professionals.
              </p>

              <p>
                Plot prices vary widely depending on location. Premium zones
                near the Financial District and ORR corridors tend to be
                higher, while emerging corridors along the Bengaluru highway
                and regional ring road offer more affordable options. Buyers
                should think about their budget, intended use and time frame
                before shortlisting a location.
              </p>

              <p>
                Explore our{" "}
                <Link
                  href="/openplots"
                  className="font-bold text-[#800000] underline underline-offset-4 hover:text-black"
                >
                  residential open plots
                </Link>{" "}
                and{" "}
                <Link
                  href="/projects"
                  className="font-bold text-[#800000] underline underline-offset-4 hover:text-black"
                >
                  property projects
                </Link>{" "}
                to learn more about the options listed on our website.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                HMDA Approved Plots and DTCP Layouts
              </h3>

              <p>
                HMDA (Hyderabad Metropolitan Development Authority) approvals
                apply to layouts within the Hyderabad Metropolitan Region,
                while DTCP (Directorate of Town and Country Planning)
                approvals apply outside HMDA limits. Both indicate that a
                layout has been reviewed against applicable regulations, but
                buyers should always verify the approval copy, LP number and
                project documentation for the specific layout they are
                considering.
              </p>

              <p>
                When evaluating HMDA-approved plots or DTCP layouts, check
                the approval status, layout plan, road widths, open spaces,
                project amenities and any conditions attached to the
                approval. For plots marketed as part of a gated community,
                also review the maintenance agreements and common-area
                arrangements.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Residential Plots, Villa Plots and Gated Communities
              </h3>

              <p>
                Residential plots and villa plots are available in a range of
                sizes across Hyderabad and nearby corridors. Gated-community
                plots usually include shared amenities, internal roads and
                common infrastructure, and they often come with specific
                design guidelines for future construction.
              </p>

              <p>
                Before buying a plot in a gated community, review the
                approved layout, internal road widths, amenity provisions
                and any maintenance charges. Confirm the plot dimensions,
                boundary markings and access to the plot from internal roads
                during your site visit.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Villas and Apartments in Hyderabad
              </h3>

              <p>
                Buyers looking for a home can compare villas, independent
                houses and apartments according to their preferred location,
                budget, layout and lifestyle requirements. Review the
                specifications and documentation of each property rather
                than relying only on promotional descriptions.
              </p>

              <p>
                For apartments, check the project approvals, carpet area,
                amenities, maintenance charges and possession timelines. For
                villas and independent houses, verify the plot ownership,
                building approvals and construction quality where relevant.
              </p>

              <p>
                Discover our{" "}
                <Link
                  href="/villas-houses"
                  className="font-bold text-[#800000] underline underline-offset-4 hover:text-black"
                >
                  villas and independent houses
                </Link>{" "}
                and{" "}
                <Link
                  href="/apartments"
                  className="font-bold text-[#800000] underline underline-offset-4 hover:text-black"
                >
                  apartments
                </Link>{" "}
                to explore the property categories available on our website.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Farm Lands Near Hyderabad
              </h3>

              <p>
                When exploring farmland for sale near Hyderabad, buyers
                should check the land classification, ownership, access,
                permitted use, water availability where relevant and
                applicable legal requirements. Agricultural land rules can
                vary, so verify the details of the specific property before
                making an investment decision.
              </p>

              <p>
                Farmland near corridors such as Shadnagar and Kadthal has
                attracted interest from buyers looking for long-term land
                holdings. As with any land purchase, confirm the survey
                numbers, extent, approach road and land-use classification
                before proceeding.
              </p>

              <p>
                Visit our{" "}
                <Link
                  href="/farmlands"
                  className="font-bold text-[#800000] underline underline-offset-4 hover:text-black"
                >
                  farmland page
                </Link>{" "}
                to explore the information available about this category.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Locations We Serve: Shadnagar, Kothur, Kadthal, Kollur,
                Mokila, Tellapur and More
              </h3>

              <p>
                We list projects across multiple locations in and around
                Hyderabad. Some of the areas buyers often ask about include:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Shadnagar:</strong> A highway corridor with
                  affordable plots and farmland options.
                </li>
                <li>
                  <strong>Kothur:</strong> Located near Shadnagar along the
                  Bengaluru highway, with HMDA-approved layouts and gated
                  ventures.
                </li>
                <li>
                  <strong>Kadthal:</strong> An emerging residential and
                  farmland corridor with DTCP-approved layouts.
                </li>
                <li>
                  <strong>Kollur:</strong> A strong plot-appreciation zone
                  near the ORR with gated communities and villa plots.
                </li>
                <li>
                  <strong>Mokila:</strong> A premium residential corridor
                  with gated layouts and villa plots.
                </li>
                <li>
                  <strong>Tellapur:</strong> A high-demand residential zone
                  close to Gachibowli and the Financial District.
                </li>
                <li>
                  <strong>Shamshabad:</strong> A strategic corridor near the
                  airport with residential and commercial land options.
                </li>
                <li>
                  <strong>Patancheru and Kompally:</strong> Established
                  corridors with residential plot opportunities and strong
                  connectivity.
                </li>
              </ul>

              <p>
                Availability in each location can change based on new
                launches and ongoing projects. Contact our team to confirm
                current options in your preferred area.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Understanding Property Approvals and Documentation
              </h3>

              <p>
                Property approvals depend on the individual project, location
                and applicable regulations. Before booking, verify the
                relevant layout or building permissions, title documents,
                registration details and RERA information where applicable.
                Confirm any HMDA, DTCP or other approval claim against the
                official documents for the specific project.
              </p>

              <p>
                Documentation typically reviewed for a plot purchase includes
                the sale deed, mother deed, encumbrance certificate, revenue
                records, approved layout plan, and the developer&apos;s
                registration details. Buyers should have these documents
                reviewed by a qualified legal professional and independently
                verify the property before making any payment.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Property Investment Considerations for Buyers
              </h3>

              <p>
                Real estate decisions depend on individual goals. Some buyers
                are looking for a future home, some for a long-term
                investment, and others for a specific category such as
                farmland or a gated-community plot. Before investing,
                consider the location, access, surrounding infrastructure,
                approvals, documentation and overall budget including
                registration and development charges.
              </p>

              <p>
                Investors should also review the local growth plans and
                connectivity for the area, and avoid relying solely on
                promotional projections. Independent research and legal
                advice are always recommended before making a property
                purchase decision.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                NRI Buyers and Out-of-State Customers
              </h3>

              <p>
                Many NRI and out-of-state buyers explore property in
                Hyderabad remotely. In such cases, it helps to coordinate
                site visits through a trusted contact, request documented
                project information and have documents reviewed by a legal
                professional in India before proceeding. Our team can share
                project details and coordinate site visits to support your
                property search.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Contact Aarna Infra Developers
              </h3>

              <p>
                Looking for property information in Hyderabad or nearby
                areas? Contact Aarna Infra Developers to enquire about
                listed projects, request further details or arrange a site
                visit with our team.
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

      {/* CALL TO ACTION */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-black/10 bg-white px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#800000]/10 sm:h-96 sm:w-96" />
          <div className="absolute -bottom-28 right-24 h-64 w-64 rounded-full bg-[#FFFF00]/20 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#800000]">
                Let&apos;s Talk Property
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
                Looking for Your Next Property?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-black/70 sm:text-lg">
                Contact our team to discuss available property options,
                request project details or arrange a site visit.
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
    </main>
  );
}