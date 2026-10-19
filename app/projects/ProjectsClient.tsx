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
    href: "/projects/Magadha",
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
    href: "/projects/Golden-City",
  },
  {
    name: "Golden Terra",
    image: "/img/projects/Golden-Terra.jpg",
    alt: "Golden Terra open plots beside Shadnagar Tollgate",
    location: "Beside Shadnagar Tollgate, near RRR",
    sold: false,
    href: "/projects/Golden-Terra",
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
    href: "/projects/Green-Meadows",
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
  { value: "7 Projects", label: "Across Telangana" },
  { value: "6 Locations", label: "Near Hyderabad" },
  { value: "HMDA & DTCP", label: "Approved Layouts" },
  { value: "Site Visits", label: "Explore In Person" },
];

const locations = [
  {
    name: "Shadnagar",
    type: "Open Plots",
    description:
      "A fast-growing corridor on the Hyderabad–Bengaluru highway with Yuva Park, Golden Terra and Green Meadows projects.",
  },
  {
    name: "Kadthal",
    type: "Open Plots",
    description:
      "An emerging residential corridor with Magadha located near Maisigandi Temple.",
  },
  {
    name: "Sadashivpet",
    type: "Open Plots",
    description:
      "A developing corridor along NH-65 with Golden City near the MRO Office.",
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
      "Located along the Bengaluru highway near Shadnagar with Golden Valley near the Microsoft Data Center and JP Dargah.",
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
    q: "Where can I find open plots near Hyderabad?",
    a: "Explore the project listings on this page for locations including Shadnagar, Kadthal, Sadashivpet, Jadcherla, Kothur and Balanagar. Contact the team to confirm current availability.",
  },
  {
    q: "Which projects are listed near Shadnagar?",
    a: "Yuva Park is listed near NRSC and Shadnagar, Golden Terra is listed beside Shadnagar Tollgate, and Green Meadows is listed in the Balanagar and Shadnagar area. Check each card for its displayed status.",
  },
  {
    q: "Are all listed projects currently available?",
    a: "No. Some project cards are marked sold out. Contact the team to verify the current status of a specific project.",
  },
  {
    q: "What documents should I check before buying a plot?",
    a: "Review title documents, ownership, applicable layout approvals, land use, plot boundaries and registration requirements with a qualified legal professional.",
  },
  {
    q: "How can I enquire about a project?",
    a: "Click Enquire Now, select your preferred project and submit your contact details. You can also call 9959354255 for further information.",
  },
  {
    q: "What is the difference between HMDA and DTCP approved plots?",
    a: "HMDA approvals apply within the Hyderabad Metropolitan Region, while DTCP approvals apply outside HMDA limits. Both indicate that a layout has been reviewed against applicable regulations, but buyers should always verify the approval copy and LP number for the specific project.",
  },
  {
    q: "Do you offer site visits to project locations?",
    a: "Yes. Site visits can be coordinated for listed projects. Contact our team with your preferred dates and locations, and we can help arrange a visit so you can see the project, layout and surroundings in person.",
  },
  {
    q: "Can I get a bank loan for an open plot?",
    a: "Several banks and housing finance companies offer plot loans for approved layouts. Loan eligibility, funding percentage and approval depend on the bank, the project's approvals and the buyer's profile. Confirm loan terms directly with your preferred lender.",
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

export default function ProjectsClient() {
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

  return (
    <main className="overflow-hidden bg-[#F7F6F2] text-black">
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
              Real Estate Projects Near Hyderabad
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              Real Estate Projects
              <span className="mt-2 block text-[#800000]">
                in Hyderabad &amp; Telangana
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 sm:text-lg">
              Explore open plots and residential real estate projects in
              Shadnagar, Kadthal, Sadashivpet, Jadcherla, Kothur and
              Balanagar. Browse project details and contact Aarna Infra
              Developers to enquire about availability, pricing and property
              specifications.
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
              <span className="text-[#800000]">Projects</span>
            </nav>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#FFFF00] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
              <img
                src="/img/projects/hyderabad-real-estate-projects.jpeg"
                alt="Real estate projects near Hyderabad by Aarna Infra Developers"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
                fetchPriority="high"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/50 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
                  Featured Project
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
            Explore Our Portfolio
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
            Explore Real Estate Projects Near Hyderabad
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-black/80">
            <p>
              Aarna Infra Developers showcases real estate projects in and
              around Hyderabad, including open plots in Shadnagar, Kadthal,
              Sadashivpet, Jadcherla, Kothur and Balanagar. Buyers can explore
              the listed projects, compare their locations and contact the
              team for additional information about plot sizes, pricing,
              availability and applicable documentation.
            </p>

            <p>
              Each project page provides location details and current status.
              Some listed projects are marked sold out — please check the
              status shown on each card and contact our team if you need
              clarification.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-7 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFFF00] text-2xl font-black text-[#800000]">
              ⌂
            </div>
            <div>
              <h3 className="font-bold text-[#800000]">
                Open Plots Across Telangana
              </h3>
              <p className="mt-1 text-sm leading-6 text-black/70">
                HMDA and DTCP approved layouts with site-visit support.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
            <img
              src="/img/projects/Projects-Near-Hyderabad.png"
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
              Our Featured Projects
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Explore the project cards below for Magadha, Golden City, Golden
              Terra, Green Meadows, Yuva Park, Karthikeya Green County and
              Golden Valley. Availability and pricing may change — contact us
              to verify the latest information.
            </p>
          </div>

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
              Project Locations Across Telangana
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
              Projects Buying Guide
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Explore Real Estate Projects Near Hyderabad
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-black/80">
              <p>
                Aarna Infra Developers showcases real estate projects in and
                around Hyderabad, including open plots in Shadnagar, Kadthal,
                Sadashivpet, Jadcherla, Kothur and Balanagar. Buyers can
                explore the listed projects, compare their locations and
                contact the team for additional information about plot sizes,
                pricing, availability and applicable documentation.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Open Plots for Sale in Shadnagar
              </h3>

              <p>
                If you are researching open plots for sale near Hyderabad,
                Shadnagar is one of the locations you can explore. Review
                projects such as Yuva Park, Golden Terra and Green Meadows,
                which are listed in or around the Shadnagar area. Check the
                status displayed on each project card and confirm current
                availability directly before proceeding.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Plots in Kadthal, Sadashivpet and Jadcherla
              </h3>

              <p>
                Buyers comparing land and residential plots near Hyderabad
                can explore Magadha near Maisigandi Temple in Kadthal, Golden
                City near the MRO Office in Sadashivpet, and Karthikeya Green
                County beside Bangalore Highway in Jadcherla. The listed
                project locations can help you shortlist properties for
                further investigation.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Our Featured Projects
              </h3>

              <p>
                Explore the project cards above for Magadha, Golden City,
                Golden Terra, Green Meadows, Yuva Park, Karthikeya Green
                County and Golden Valley. Some projects are marked sold out.
                Availability, pricing and property details may change, so
                contact the team to verify the latest information.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                What to Check Before Buying a Plot
              </h3>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  Verify ownership and title documents with a qualified legal
                  professional.
                </li>
                <li>
                  Confirm the applicable layout approvals and land-use
                  permissions.
                </li>
                <li>
                  Check the plot dimensions, boundaries, road access and
                  location.
                </li>
                <li>
                  Review the complete purchase price and other applicable
                  charges.
                </li>
                <li>
                  Visit the property and independently assess its surroundings.
                </li>
                <li>
                  Confirm availability and written terms before making a
                  payment.
                </li>
              </ul>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Contact Aarna Infra Developers
              </h3>

              <p>
                Looking for open plots near Hyderabad or want more details
                about a listed real estate project? Contact Aarna Infra
                Developers to discuss your requirements and request current
                project information. Our team can help you with enquiries
                about locations, availability and property specifications.
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
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Quick answers to common questions about projects, plots and
              buying near Hyderabad.
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
                Interested in Our Projects?
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
            href="/openplots"
            className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
          >
            Open Plots
          </Link>

          <Link
            href="/apartments"
            className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
          >
            Apartments
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