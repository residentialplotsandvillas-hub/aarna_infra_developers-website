"use client";

import Link from "next/link";

const services = [
  {
    icon: "⌂",
    title: "Real Estate Appraisal",
    tagline: "Property Valuation & Advisory",
    description:
      "Professional property valuation and appraisal support to help you understand market value, location potential and pricing trends before you commit to a purchase.",
  },
  {
    icon: "✦",
    title: "Premium Quality Projects",
    tagline: "RERA Registered & Verified",
    description:
      "RERA registered properties and approved layouts that support buyer protection and long-term investment security across Hyderabad and nearby corridors.",
  },
  {
    icon: "☎",
    title: "Customer Support",
    tagline: "End-to-End Assistance",
    description:
      "Experienced support for enquiries, documentation guidance, site visits and booking coordination so your property journey stays smooth from start to finish.",
  },
  {
    icon: "⚒",
    title: "Property Maintenance",
    tagline: "In-House Maintenance Team",
    description:
      "In-house maintenance assistance for property improvements and specification support, helping plot and villa owners keep their investment in good shape.",
  },
];

const highlights = [
  { value: "12+ Years", label: "Industry Experience" },
  { value: "RERA", label: "Registered Projects" },
  { value: "End-to-End", label: "Customer Support" },
  { value: "Hyderabad", label: "Local Market Expertise" },
];

const coreServices = [
  {
    number: "01",
    title: "Property Appraisal & Valuation",
    description:
      "Our appraisal support helps buyers understand the market value of a plot, villa or apartment by reviewing location, infrastructure, approvals and comparable pricing. This gives you a clearer picture before negotiating or booking.",
    points: [
      "Comparative market analysis for target locations",
      "Location, connectivity and infrastructure review",
      "Approval and documentation context",
      "Pricing guidance for shortlisted projects",
    ],
  },
  {
    number: "02",
    title: "Premium Quality Property Projects",
    description:
      "We list RERA registered projects and approved layouts across Hyderabad. Each project is presented with the details available so you can compare layout features, amenities and location potential side by side.",
    points: [
      "RERA registered projects and approved layouts",
      "Gated communities, villa plots and open plots",
      "Apartment and independent house options",
      "Farmland and long-term land holdings",
    ],
  },
  {
    number: "03",
    title: "Customer Support & Advisory",
    description:
      "Our team is available to answer questions, share project information, coordinate site visits and help you move through the property search at a comfortable pace — with no pressure to decide before you are ready.",
    points: [
      "Project information and price sheet sharing",
      "Site visit coordination and scheduling",
      "Documentation guidance and next-step support",
      "Post-booking coordination assistance",
    ],
  },
  {
    number: "04",
    title: "Property Maintenance Assistance",
    description:
      "An in-house maintenance team can support property improvements and specification requirements after purchase. This is useful for plot owners planning construction and for villa owners managing ongoing upkeep.",
    points: [
      "Property improvement and specification support",
      "Construction planning assistance",
      "Ongoing upkeep coordination",
      "Local vendor and contractor guidance",
    ],
  },
];

const additionalServices = [
  {
    title: "Legal Documentation Support",
    description:
      "Guidance on the documents typically reviewed during a plot purchase — sale deed, mother deed, encumbrance certificate, revenue records and approved layout plans.",
    icon: "▤",
  },
  {
    title: "Home Loan & EMI Assistance",
    description:
      "Coordination with banks and housing finance companies for plot loans, EMI options and documentation support where applicable.",
    icon: "₹",
  },
  {
    title: "NRI Property Services",
    description:
      "Support for NRI and out-of-state buyers through documented project information, site visit coordination and legal review guidance.",
    icon: "◉",
  },
  {
    title: "Plot Investment Guidance",
    description:
      "Location-based insights on growth corridors, connectivity and long-term potential to help you shortlist plots that match your goals.",
    icon: "⌖",
  },
  {
    title: "Site Visit Coordination",
    description:
      "Scheduling and coordination for project site visits so you can see the layout, surroundings and access roads in person.",
    icon: "◫",
  },
  {
    title: "Registration Coordination",
    description:
      "Support through the registration process, including coordination on documentation and applicable charges, so the final steps stay organized.",
    icon: "✓",
  },
];

const whyChoose = [
  {
    title: "12+ Years of Experience",
    description:
      "Over a decade of local experience in Hyderabad real estate, with knowledge of emerging corridors, pricing trends and project quality.",
    icon: "★",
  },
  {
    title: "RERA Registered Projects",
    description:
      "Projects listed with RERA registration where applicable, supporting buyer protection and clearer project accountability.",
    icon: "✓",
  },
  {
    title: "Local Market Expertise",
    description:
      "Deep familiarity with areas like Shadnagar, Kothur, Kadthal, Kollur, Mokila, Tellapur, Shamshabad and Patancheru.",
    icon: "⌖",
  },
  {
    title: "Transparent Communication",
    description:
      "Project details, pricing context and available documentation shared openly so you can compare options with clarity.",
    icon: "▤",
  },
  {
    title: "End-to-End Support",
    description:
      "From the first enquiry to site visit, documentation and post-booking coordination, the process stays organized.",
    icon: "◉",
  },
  {
    title: "Hassle-Free Transactions",
    description:
      "Support at each stage so buyers can move through the property search with fewer surprises and clearer next steps.",
    icon: "☎",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Share Requirements",
    description:
      "Tell us your preferred location, budget, property type and time frame so we can shortlist relevant options.",
  },
  {
    number: "02",
    title: "Review Project Details",
    description:
      "Receive project information, pricing context and available documentation for shortlisted options.",
  },
  {
    number: "03",
    title: "Book a Site Visit",
    description:
      "Coordinate a site visit to explore the project, layout, surroundings and access roads in person.",
  },
  {
    number: "04",
    title: "Proceed with Confidence",
    description:
      "Review documents independently, verify approvals and move ahead with booking and registration.",
  },
];

const faqs = [
  {
    q: "What real estate services does Aarna Infra Developers offer?",
    a: "Aarna Infra Developers offers property appraisal and valuation support, access to RERA registered projects and approved layouts, customer support through enquiries and site visits, and in-house property maintenance assistance. We also help with documentation guidance, loan coordination, NRI services and registration support.",
  },
  {
    q: "Do you help with property valuation or appraisal?",
    a: "Yes. Our appraisal support helps buyers understand the market value of a property by reviewing location, infrastructure, approvals and comparable pricing. This is guidance for your decision-making and does not replace a formal valuation report from a licensed valuer.",
  },
  {
    q: "Are the projects listed by Aarna Infra Developers RERA registered?",
    a: "We list projects with RERA registration where applicable. Buyers should independently confirm the RERA registration number, project details and approvals for the specific property before proceeding.",
  },
  {
    q: "Can you help me get a home loan or plot loan?",
    a: "We can help coordinate information with banks and housing finance companies for plot loans and EMI options. Loan eligibility, funding percentage and approval depend on the lender and your profile, so final terms should be confirmed directly with your preferred lender.",
  },
  {
    q: "Do you offer site visits to projects?",
    a: "Yes. Site visits can be coordinated for listed projects. Contact our team with your preferred dates and locations, and we can help arrange a visit so you can see the project, layout and surroundings in person.",
  },
  {
    q: "Do you charge any brokerage or service fee?",
    a: "Service-related charges, if applicable, are communicated upfront. We aim to keep pricing and process transparent so buyers understand what they are paying for before proceeding.",
  },
  {
    q: "Do you support NRI buyers?",
    a: "Yes. Many NRI and out-of-state buyers explore property in Hyderabad remotely. We can share documented project information, coordinate site visits through a trusted contact and help guide the documentation review process.",
  },
  {
    q: "What documents should I check before buying a property?",
    a: "Buyers should review the layout approval (HMDA/DTCP), LP number, mother deed, encumbrance certificate, revenue records, layout plan, RERA registration where applicable and any other project-specific documents. It is advisable to have these reviewed by a qualified legal professional.",
  },
];

const seoFaqs = [
  {
    q: "What is property appraisal and why does it matter?",
    a: "Property appraisal is the process of assessing a property's market value based on location, infrastructure, approvals, size and comparable sales. It helps buyers understand whether the asking price aligns with the local market and supports better decision-making.",
  },
  {
    q: "How do I choose the right real estate service in Hyderabad?",
    a: "Look for a service that offers clear project information, transparent pricing, documentation guidance and responsive support. Local market experience and familiarity with approvals and growth corridors are also important when comparing property services.",
  },
  {
    q: "What makes a property a good long-term investment?",
    a: "Location, connectivity, infrastructure growth, clear title, applicable approvals and surrounding development are key factors. Independent research and legal review are always recommended before making a property purchase.",
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

export default function ServicesClient() {
  return (
    <main className="overflow-hidden bg-[#F7F6F2] text-black">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden pt-16 sm:pt-20 lg:pt-24">
        <div className="absolute -right-24 top-10 -z-10 h-64 w-64 rounded-full border border-[#800000]/10 sm:h-96 sm:w-96" />
        <div className="absolute -left-20 bottom-0 -z-10 h-56 w-56 rounded-full bg-[#FFFF00]/20 blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 lg:pb-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#800000]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#800000] sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#800000]" />
              Real Estate Services
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
              Trusted Property Services in Hyderabad
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              Comprehensive
              <span className="mt-2 block text-[#800000]">
                Real Estate Services
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 sm:text-lg">
              Property appraisal, premium quality projects, customer support
              and maintenance assistance from Aarna Infra Developers —
              helping buyers across Hyderabad make informed property
              decisions with clarity and confidence.
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
              <span className="text-[#800000]">Services</span>
            </nav>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#FFFF00] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
              <img
                src="/assets/img/services/Services.jpg"
                alt="Aarna Infra Developers real estate services in Hyderabad"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
                fetchPriority="high"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/50 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
                  Our Commitment
                </p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">
                  Service You Can Trust
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
              src="/img/aarna-infra-developers-real-estate-services.png"
              alt="Real estate services by Aarna Infra Developers"
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
            What We Do
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
            Real Estate Services Designed Around You
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-black/80">
            <p>
              Aarna Infra Developers offers real estate services built around
              clarity, communication and follow-through. From property
              appraisal and premium quality project access to customer
              support and maintenance assistance, we aim to make the property
              search process more organized for buyers across Hyderabad.
            </p>

            <p>
              Our services cover residential open plots, villas, independent
              houses, apartments and farmland. Whether you are buying your
              first plot, comparing villa options or exploring land for
              long-term investment, our team can help coordinate information
              and site visits so you can make decisions with a clearer
              picture.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-7 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFFF00] text-2xl font-black text-[#800000]">
              ✓
            </div>
            <div>
              <h3 className="font-bold text-[#800000]">
                Hassle-Free Property Transactions
              </h3>
              <p className="mt-1 text-sm leading-6 text-black/70">
                From enquiry to site visit, documentation and registration —
                support at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Core Services
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Our Four Pillars of Service
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Appraisal, premium project access, customer support and
              maintenance assistance — each designed to make your property
              journey smoother.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-[#800000]/30 hover:shadow-xl sm:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFFF00] text-3xl text-[#800000] transition duration-300 group-hover:bg-[#800000] group-hover:text-white">
                  {service.icon}
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-black/50">
                  {service.tagline}
                </p>

                <h3 className="mt-2 text-xl font-extrabold text-[#800000]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/70">
                  {service.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#FFFF00] transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED CORE SERVICES */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              In Detail
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              What Each Service Includes
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              A closer look at how our core services support buyers at each
              stage of the property search.
            </p>
          </div>

          <div className="space-y-6">
            {coreServices.map((service, index) => (
              <article
                key={service.number}
                className={`grid gap-6 rounded-2xl border border-black/10 bg-white p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-8 ${
                  index % 2 === 1 ? "lg:grid-cols-[auto_1fr_auto]" : ""
                }`}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#800000] text-2xl font-black text-white">
                  {service.number}
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-[#800000] sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/70 sm:text-base sm:leading-8">
                    {service.description}
                  </p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm leading-6 text-black/80"
                      >
                        <span className="mt-0.5 text-[#800000]">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="group hidden shrink-0 items-center gap-2 rounded-full border border-[#800000]/30 bg-white px-5 py-2.5 text-sm font-bold text-[#800000] transition hover:border-[#800000] hover:bg-[#800000] hover:text-white lg:inline-flex"
                >
                  Enquire <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              More Support
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Additional Services We Offer
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Beyond the core services, our team supports buyers with
              documentation, loans, site visits and more.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#800000]/30 hover:shadow-xl sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFFF00] text-2xl font-black text-[#800000]">
                  {service.icon}
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-[#800000]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/70">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
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
              Why Choose Our Real Estate Services
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Experience, transparency and support that make the property
              search feel clearer from the first enquiry.
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

      {/* PROCESS */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Our Service Process
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Four simple steps from sharing your requirements to moving
              ahead with confidence.
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
              Quick answers to common questions about our real estate
              services, documentation and the property search process.
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
              Real Estate Services in Hyderabad
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-black/80">
              <p>
                Aarna Infra Developers offers real estate services designed to
                help buyers navigate the property market in Hyderabad with
                clarity. Our services include property appraisal and
                valuation support, access to premium quality RERA registered
                projects, customer support through the buying process and
                in-house maintenance assistance for property owners.
              </p>

              <p>
                Whether you are exploring open plots in growth corridors like
                Shadnagar, Kothur, Kadthal, Kollur, Mokila or Tellapur, or
                comparing villas and apartments closer to the city, our team
                aims to provide the information and coordination you need to
                make a well-informed decision.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Property Appraisal and Valuation Support
              </h3>

              <p>
                Property appraisal helps you understand whether the asking
                price of a plot, villa or apartment aligns with the local
                market. Our appraisal support reviews location, connectivity,
                infrastructure, applicable approvals and comparable pricing to
                give you a clearer picture before you negotiate or book.
              </p>

              <p>
                This is guidance to support your decision-making and does not
                replace a formal valuation report from a licensed valuer. For
                any purchase, we encourage buyers to conduct independent
                research and review all relevant documents.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Premium Quality Projects and RERA Registered Properties
              </h3>

              <p>
                We list projects with RERA registration where applicable and
                present available project details so you can compare layout
                features, amenities, location potential and pricing. RERA
                registration supports buyer protection and clearer project
                accountability, and buyers should always confirm the
                registration details for the specific project they are
                considering.
              </p>

              <p>
                Our property categories include residential open plots, villa
                plots, gated-community plots, apartments, independent houses
                and farmland. Each category has different documentation and
                approval requirements, and we can help coordinate the
                information you need to review.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Customer Support Throughout Your Property Search
              </h3>

              <p>
                Our customer support covers project enquiries, price sheet
                sharing, site visit coordination, documentation guidance and
                post-booking assistance. We aim to keep the process
                straightforward so you can move at your own pace without
                pressure to decide before you are ready.
              </p>

              <p>
                Site visits are a key part of the process. Seeing the layout,
                surrounding infrastructure and access roads in person helps
                you compare projects more realistically than reviewing photos
                alone. Our team can coordinate visit schedules based on your
                preferred dates and locations.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Property Maintenance Assistance
              </h3>

              <p>
                An in-house maintenance team can support property improvements
                and specification requirements after purchase. This is useful
                for plot owners planning construction and for villa owners
                managing ongoing upkeep. Support can include coordination on
                improvement specifications and local vendor guidance.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Documentation and Legal Review Guidance
              </h3>

              <p>
                Documentation is a critical part of any property purchase.
                Buyers should review the sale deed, mother deed, encumbrance
                certificate, revenue records, approved layout plan, RERA
                registration where applicable and any project-specific
                documents before proceeding. We can help coordinate the
                information you need, but independent legal review by a
                qualified professional is always recommended.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Home Loan and EMI Assistance
              </h3>

              <p>
                Several banks and housing finance companies offer plot loans
                and home loans for approved projects. We can help coordinate
                information with lenders, but loan eligibility, funding
                percentage and approval terms should be confirmed directly
                with your preferred lender.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                NRI and Out-of-State Buyer Services
              </h3>

              <p>
                Many NRI and out-of-state buyers explore property in Hyderabad
                remotely. In such cases, it helps to coordinate site visits
                through a trusted contact, request documented project
                information and have documents reviewed by a legal
                professional in India before proceeding. Our team can share
                project details and coordinate site visits to support your
                property search.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Choosing the Right Real Estate Service in Hyderabad
              </h3>

              <p>
                When comparing real estate services, look for clear project
                information, transparent pricing, documentation guidance and
                responsive support. Local market experience and familiarity
                with approvals and growth corridors also help. Buyers should
                avoid relying solely on promotional claims and should verify
                the specific details of each property independently.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Contact Aarna Infra Developers
              </h3>

              <p>
                Looking for property information or real estate services in
                Hyderabad? Contact Aarna Infra Developers to enquire about
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

      {/* SECONDARY FAQ / SEO FAQS */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              More Answers
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Property Service Insights
            </h2>
          </div>

          <div className="space-y-3">
            {seoFaqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-black/10 bg-white px-5 py-4 sm:px-6 sm:py-5"
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
                Ready to Explore Our Services?
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