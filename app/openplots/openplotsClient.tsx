"use client";

import { useState, useMemo, type FormEvent } from "react";
import Link from "next/link";

type PopupType = "callback" | "enquiry" | null;

const projects = [
  {
    name: "Yuva Park",
    image: "/img/projects/Yuva Park.jpg",
    alt: "Yuva Park open plots near NRSC Shadnagar",
    location: "Near NRSC & Shadnagar",
    sold: true,
    href: "",
  },
  {
    name: "Magadha",
    image: "/img/projects/Magadha.jpg",
    alt: "Magadha open plots near Maisigandi Temple Kadthal",
    location: "Near Maisigandi Temple, Kadthal",
    sold: false,
    href: "/projects/Magadha.html",
  },
  {
    name: "Karthikeya Green County",
    image: "/img/projects/Karthikeya.jpg",
    alt: "Karthikeya Green County plots near Jadcherla",
    location: "Beside Bangalore Highway, Jadcherla",
    sold: true,
    href: "",
  },
  {
    name: "Golden City",
    image: "/img/projects/Golden-City.jpg",
    alt: "Golden City open plots near MRO Office Sadashivpet",
    location: "Near MRO Office, Sadashivpet",
    sold: false,
    href: "/projects/Golden-City.html",
  },
  {
    name: "Golden Terra",
    image: "/img/projects/Golden-Terra.jpg",
    alt: "Golden Terra open plots beside Shadnagar Tollgate",
    location: "Beside Shadnagar Tollgate, near RRR",
    sold: false,
    href: "/projects/Golden-Terra.html",
  },
  {
    name: "Golden Valley",
    image: "/img/projects/Golden-Valley.jpg",
    alt: "Golden Valley plots near Microsoft Data Center Kothur",
    location: "Near Microsoft Data Center, P&G, JP Dargah, Kothur",
    sold: true,
    href: "",
  },
  {
    name: "Green Meadows",
    image: "/img/projects/Green-Meadows.jpg",
    alt: "Green Meadows open plots in Balanagar and Shadnagar",
    location: "Balanagar Town and beside RRR (Shadnagar)",
    sold: false,
    href: "/projects/Green-Meadows.html",
  },
];

const enquiryProjects = [
  "Yuva Park",
  "Magadha",
  "Karthikeya Green County",
  "Golden City",
  "Golden Terra",
  "Golden Valley",
  "Green Meadows",
  "GNR Vasavi Nirvana",
  "Myscape Songs Of The Sun",
  "Prestige Spring Heights",
  "The Prestige City",
  "Godrej Madison Avenue",
  "SLN Sundaram Palm Villas",
  "Oxy Flora",
  "Golden Farm",
];

const highlights = [
  { value: "7 Projects", label: "Open Plot Ventures" },
  { value: "6 Locations", label: "Across Hyderabad" },
  { value: "HMDA & DTCP", label: "Approved Layouts" },
  { value: "Site Visits", label: "Explore In Person" },
];

const locations = [
  {
    name: "Shadnagar",
    type: "Open Plots",
    description:
      "A fast-growing corridor on the Hyderabad–Bengaluru highway with projects like Yuva Park, Golden Terra and Green Meadows.",
  },
  {
    name: "Kadthal",
    type: "Open Plots",
    description:
      "An emerging residential and farmland corridor with access to the highway and the proposed regional ring road.",
  },
  {
    name: "Sadashivpet",
    type: "Open Plots",
    description:
      "A developing corridor along NH-65 with Golden City located near the MRO Office.",
  },
  {
    name: "Jadcherla",
    type: "Open Plots",
    description:
      "A highway corridor near Mahbubnagar with Karthikeya Green County beside the Bangalore Highway.",
  },
  {
    name: "Kothur",
    type: "Open Plots",
    description:
      "Located along the Bengaluru highway near Shadnagar, with Golden Valley near the Microsoft Data Center and JP Dargah.",
  },
  {
    name: "Balanagar",
    type: "Open Plots",
    description:
      "Green Meadows is listed in Balanagar town and beside the RRR in the Shadnagar area.",
  },
];

const faqs = [
  {
    q: "Where can I find open plots for sale near Hyderabad?",
    a: "You can explore the project listings on this page, including projects in the Shadnagar, Kadthal, Sadashivpet, Jadcherla, Kothur and Balanagar areas. Contact the team to confirm current availability and project details.",
  },
  {
    q: "Which projects are listed near Shadnagar?",
    a: "The listings include Yuva Park near NRSC and Shadnagar, Golden Terra beside Shadnagar Tollgate, and Green Meadows in Balanagar and the Shadnagar area. Check the project cards for their displayed status and available details.",
  },
  {
    q: "What should I verify before buying a residential plot?",
    a: "Verify ownership, title documents, applicable layout approvals, land use, plot boundaries, road access, total cost and registration requirements. Seek independent legal advice before completing the purchase.",
  },
  {
    q: "How do I check plot availability and pricing?",
    a: "Use the Enquire Now button or call 9959354255 to request current project information. Availability and prices can change, so confirm the details directly before making a decision.",
  },
  {
    q: "Are all projects shown on this page available for purchase?",
    a: "No. Some project cards are marked SOLD. Check each card's status and contact the team to clarify whether any plots are currently available.",
  },
  {
    q: "What is the difference between HMDA and DTCP approved plots?",
    a: "HMDA approvals apply within the Hyderabad Metropolitan Region, while DTCP approvals apply outside HMDA limits. Both indicate that a layout has been reviewed against applicable regulations, but buyers should always verify the approval copy and LP number for the specific project.",
  },
  {
    q: "Can I get a bank loan for an open plot in Hyderabad?",
    a: "Several banks and housing finance companies offer plot loans for approved layouts. Loan eligibility, funding percentage and approval depend on the bank, the project's approvals and the buyer's profile. Confirm loan terms directly with your preferred lender.",
  },
  {
    q: "Do you offer site visits to open plot projects?",
    a: "Yes. Site visits can be coordinated for listed projects. Contact our team with your preferred dates and locations, and we can help arrange a visit so you can see the project, layout and surroundings in person.",
  },
];

const fieldClass =
  "w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-black outline-none placeholder:text-black/40 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      parameters?: Record<string, string>
    ) => void;
  }
}

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

export default function OpenPlotsPage() {
  const [popup, setPopup] = useState<PopupType>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | "available" | "sold">(
    "all"
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "available")
      return projects.filter((p) => !p.sold);
    if (activeFilter === "sold") return projects.filter((p) => p.sold);
    return projects;
  }, [activeFilter]);

  function openPopup(type: Exclude<PopupType, null>) {
    setPopup(type);
    setMessage("");
    setSuccess(false);
  }

  function closePopup() {
    if (loading) return;
    setPopup(null);
    setMessage("");
    setSuccess(false);
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading || !popup) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const phone = String(formData.get("phone") || "").trim();

    if (!/^[0-9]{10}$/.test(phone)) {
      setMessage("Please enter a valid 10-digit mobile number.");
      setSuccess(false);
      return;
    }

    setLoading(true);
    setMessage("");

    const endpoint =
      popup === "callback" ? "/forms/request.php" : "/forms/enquiry.php";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const contentType = response.headers.get("content-type") || "";
      let result: { success?: boolean; message?: string } | null = null;

      if (contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const body = await response.text();

        if (body.trim()) {
          try {
            result = JSON.parse(body);
          } catch {
            result = null;
          }
        }
      }

      if (!response.ok || result?.success !== true) {
        throw new Error(
          result?.message ||
            "We could not confirm your enquiry. Please try again or call us."
        );
      }

      setSuccess(true);
      setMessage(
        result.message || "Thank you! Your enquiry has been submitted."
      );

      form.reset();

      window.gtag?.("event", "conversion", {
        send_to: "AW-457637666/abRICJT26e0BEKL-m9oB",
      });
    } catch (error) {
      setSuccess(false);
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Aarna Infra Developers",
    url: "https://aarnainfradevelopers.com",
    logo: "https://aarnainfradevelopers.com/assets/img/Logo.jpg",
    image: "https://aarnainfradevelopers.com/assets/img/Logo.jpg",
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
        item: "https://aarnainfradevelopers.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://aarnainfradevelopers.com/projects.html",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Open Plots",
        item: "https://aarnainfradevelopers.com/openplots.html",
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Open Plot Projects Near Hyderabad",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Place",
        name: project.name,
        image: `https://aarnainfradevelopers.com${project.image}`,
        ...(project.href
          ? { url: `https://aarnainfradevelopers.com${project.href}` }
          : {}),
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
              Residential Open Plots Near Hyderabad
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              Open Plots for Sale
              <span className="mt-2 block text-[#800000]">Near Hyderabad</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 sm:text-lg">
              Explore open plots for sale in Shadnagar, Kadthal, Sadashivpet,
              Jadcherla, Kothur and Balanagar. Aarna Infra Developers lists
              approved layouts including Magadha, Golden City, Golden Terra
              and Green Meadows.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#800000] px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
              >
                Explore Projects <ArrowIcon />
              </a>

              <button
                type="button"
                onClick={() => openPopup("callback")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
              >
                <span aria-hidden="true">☎</span>
                Request Callback
              </button>
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
              <span className="text-[#800000]">Open Plots</span>
            </nav>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#FFFF00] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
              <img
                src="/assets/img/ongoing-projects/Golden-Terra.jpg"
                alt="Open plots near Hyderabad by Aarna Infra Developers"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
                fetchPriority="high"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/50 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
                  Featured Project
                </p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">Golden Terra</p>
                <p className="mt-1 text-sm text-white/80">
                  Beside Shadnagar Tollgate
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
            Who We Serve
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
            Open Plots for Sale Near Hyderabad
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-black/80">
            <p>
              Looking for open plots for sale near Hyderabad? Aarna Infra
              Developers showcases real estate projects in locations including
              Shadnagar, Kadthal, Sadashivpet, Jadcherla, Kothur and Balanagar.
              Explore the available project listings to compare locations and
              request information about plot availability, pricing and
              property details.
            </p>

            <p>
              When searching for residential plots in Hyderabad and
              surrounding areas, consider road connectivity, nearby
              infrastructure, development in the locality, plot dimensions,
              documentation and your intended use. Comparing these factors
              can help you shortlist a property that matches your needs and
              budget.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-7 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFFF00] text-2xl font-black text-[#800000]">
              ⌂
            </div>
            <div>
              <h3 className="font-bold text-[#800000]">
                HMDA &amp; DTCP Approved Layouts
              </h3>
              <p className="mt-1 text-sm leading-6 text-black/70">
                Verified documentation with site-visit support and transparent
                pricing.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
            <img
              src="/assets/img/ongoing-projects/Magadha.jpg"
              alt="Approved open plots near Kadthal by Aarna Infra Developers"
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section
        id="projects"
        className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Our Property Portfolio
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Our Open Plot Projects
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Browse Magadha, Golden City, Golden Terra, Green Meadows and
              other listed projects. Each card shows the location and current
              status — some projects are marked sold out.
            </p>
          </div>

          {/* Filter chips */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                activeFilter === "all"
                  ? "border-[#800000] bg-[#800000] text-white"
                  : "border-black/15 bg-white text-black hover:border-[#800000] hover:text-[#800000]"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("available")}
              className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                activeFilter === "available"
                  ? "border-[#800000] bg-[#800000] text-white"
                  : "border-black/15 bg-white text-black hover:border-[#800000] hover:text-[#800000]"
              }`}
            >
              Available ({projects.filter((p) => !p.sold).length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("sold")}
              className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                activeFilter === "sold"
                  ? "border-[#800000] bg-[#800000] text-white"
                  : "border-black/15 bg-white text-black hover:border-[#800000] hover:text-[#800000]"
              }`}
            >
              Sold Out ({projects.filter((p) => p.sold).length})
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => {
              const card = (
                <article
                  className={`group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#800000]/30 hover:shadow-xl ${
                    project.sold ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
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

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full bg-[#FFFF00] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#800000]">
                      Open Plots
                    </span>

                    {project.sold && (
                      <span className="absolute right-4 top-4 rounded-full bg-[#800000] px-4 py-2 text-xs font-extrabold tracking-widest text-white shadow-lg">
                        SOLD
                      </span>
                    )}

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                      <h3 className="text-xl font-extrabold sm:text-2xl">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/90">
                        {project.location}
                      </p>

                      {!project.sold && (
                        <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#FFFF00]">
                          View Project ↗
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );

              return (
                <div key={project.name}>
                  {project.href && !project.sold ? (
                    <Link
                      href={project.href}
                      aria-label={`View ${project.name} project details`}
                      className="block h-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#800000] focus:ring-offset-4"
                    >
                      {card}
                    </Link>
                  ) : (
                    <div
                      aria-label={
                        project.sold
                          ? `${project.name} - Sold Out`
                          : project.name
                      }
                    >
                      {card}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="rounded-2xl border border-dashed border-black/20 bg-white px-5 py-12 text-center">
              <h3 className="text-lg font-extrabold text-[#800000]">
                No projects found
              </h3>
              <p className="mt-2 text-sm text-black/60">
                Try a different filter.
              </p>
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className="mt-4 rounded-full bg-[#800000] px-5 py-2.5 font-semibold text-white transition hover:bg-black"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Where We Operate
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Plot Locations Near Hyderabad
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Compare highway corridors and emerging residential areas across
              the Hyderabad Metropolitan Region.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
              Open Plots Buying Guide
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Open Plots for Sale Near Hyderabad
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-black/80">
              <p>
                Looking for open plots for sale near Hyderabad? Aarna Infra
                Developers showcases real estate projects in locations
                including Shadnagar, Kadthal, Sadashivpet, Jadcherla, Kothur
                and Balanagar. Explore the available project listings to
                compare locations and request information about plot
                availability, pricing and property details.
              </p>

              <p>
                When searching for residential plots in Hyderabad and
                surrounding areas, consider road connectivity, nearby
                infrastructure, development in the locality, plot dimensions,
                documentation and your intended use. Comparing these factors
                can help you shortlist a property that matches your needs and
                budget.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Open Plots in Shadnagar and Near the Regional Ring Road
              </h3>

              <p>
                Shadnagar is one of the locations buyers explore when
                researching plots near Hyderabad. If you are searching for
                open plots in Shadnagar, plots near the Regional Ring Road
                (RRR), or land in nearby developing areas, review each
                project&apos;s exact location, road access, approved layout
                details and current availability before making a decision.
              </p>

              <p>
                The projects listed on this page include Yuva Park near NRSC
                and Shadnagar, Golden Terra beside Shadnagar Tollgate, and
                Green Meadows in Balanagar and the Shadnagar area.
                Availability may vary by project, so contact the team for the
                latest information.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Explore Plots in Kadthal, Sadashivpet and Jadcherla
              </h3>

              <p>
                Buyers comparing plots near Kadthal can explore the Magadha
                project, located near Maisigandi Temple. Golden City is
                listed near the MRO Office in Sadashivpet, while Karthikeya
                Green County is listed beside Bangalore Highway in Jadcherla.
                Check the individual project details to understand the
                location and applicable purchase requirements.
              </p>

              <p>
                If you are comparing plots near Bangalore Highway,
                residential plots near Hyderabad, or land in surrounding
                towns, consider accessibility, the distance to your regular
                destinations, local facilities, plot size, total cost and
                the documentation available for the property.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                HMDA Approved Plots and DTCP Layouts
              </h3>

              <p>
                HMDA (Hyderabad Metropolitan Development Authority)
                approvals apply to layouts within the Hyderabad Metropolitan
                Region, while DTCP (Directorate of Town and Country Planning)
                approvals apply outside HMDA limits. Both indicate that a
                layout has been reviewed against applicable regulations, but
                buyers should always verify the approval copy, LP number and
                project documentation for the specific layout.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                What to Check Before Buying an Open Plot
              </h3>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Title and ownership:</strong> Have the ownership
                  history and title documents reviewed by a qualified legal
                  professional.
                </li>
                <li>
                  <strong>Layout approvals:</strong> Verify applicable layout
                  permissions and approvals with the relevant authority.
                </li>
                <li>
                  <strong>Plot details:</strong> Confirm the plot number,
                  dimensions, boundaries, access road and land use.
                </li>
                <li>
                  <strong>Location:</strong> Visit the site and independently
                  check connectivity and nearby facilities.
                </li>
                <li>
                  <strong>Total cost:</strong> Ask about the price,
                  registration charges, taxes and other applicable expenses.
                </li>
                <li>
                  <strong>Availability:</strong> Confirm the current status
                  and written terms before paying any amount.
                </li>
              </ul>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Enquire About Open Plots Near Hyderabad
              </h3>

              <p>
                Aarna Infra Developers can help you request information about
                the projects listed on this website. Whether you are
                exploring open plots in Shadnagar, plots near Kadthal, plots
                in Sadashivpet or properties near Jadcherla, contact our team
                to ask about current availability, pricing, location and
                project documents.
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
              Frequently Asked Questions About Open Plots
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Quick answers to common questions about plots, documentation
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
                Interested in Our Open Plots?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-black/70 sm:text-lg">
                Request a call back or send us an enquiry — our team can help
                with project details, availability and site visits.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                type="button"
                onClick={() => openPopup("callback")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#800000] px-7 py-3 font-extrabold text-white transition hover:-translate-y-1 hover:bg-black"
              >
                Request a Call Back
              </button>

              <button
                type="button"
                onClick={() => openPopup("enquiry")}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#800000]/30 bg-white px-7 py-3 font-bold text-[#800000] transition hover:border-[#800000] hover:bg-[#800000] hover:text-white"
              >
                Enquire Now
              </button>

              <a
                href="tel:+919959354255"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#800000]/30 bg-white px-7 py-3 font-bold text-[#800000] transition hover:border-[#800000] hover:bg-[#800000] hover:text-white"
              >
                ☎ Call 9959354255
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

      {/* POPUP FORM */}
      {popup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePopup();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative my-auto max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={closePopup}
              disabled={loading}
              aria-label="Close enquiry form"
              className="absolute right-4 top-3 text-3xl text-black/50 hover:text-black disabled:opacity-40"
            >
              &times;
            </button>

            <h2
              id="project-modal-title"
              className="pr-8 text-2xl font-extrabold text-[#800000]"
            >
              {popup === "callback" ? "Request a Call Back" : "Enquire Now"}
            </h2>

            <p className="mt-2 text-sm leading-6 text-black/60">
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>

            <form onSubmit={submitForm} className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                autoComplete="name"
                maxLength={100}
                required
                className={fieldClass}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                maxLength={254}
                required
                className={fieldClass}
              />

              <input
                type="tel"
                name="phone"
                placeholder="10-digit Mobile Number"
                autoComplete="tel-national"
                inputMode="numeric"
                pattern="[0-9]{10}"
                minLength={10}
                maxLength={10}
                required
                className={fieldClass}
              />

              {popup === "enquiry" && (
                <select
                  name="project"
                  defaultValue=""
                  required
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Select Project
                  </option>

                  {enquiryProjects.map((project) => (
                    <option key={project} value={project}>
                      {project}
                    </option>
                  ))}
                </select>
              )}

              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                maxLength={2000}
                required
                className={`${fieldClass} resize-y`}
              />

              {message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-lg p-3 text-sm ${
                    success
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {message}
                </p>
              )}

              {success ? (
                <button
                  type="button"
                  onClick={closePopup}
                  className="w-full rounded-full bg-[#800000] px-5 py-3 font-bold text-white hover:bg-black"
                >
                  Close
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-[#800000] px-5 py-3 font-bold text-white hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Send"}
                </button>
              )}
            </form>
          </section>
        </div>
      )}
    </main>
  );
}