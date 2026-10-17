"use client";

import { useMemo, useRef, useState, type FormEvent } from "react";
import Link from "next/link";

const siteUrl = "https://aarnainfradevelopers.com";
const pageUrl = `${siteUrl}/career.html`;

const JOBS = [
  {
    id: "sales-executive-plots",
    title: "Sales Executive — Open Plots",
    department: "Sales",
    type: "Full-Time",
    location: "Madhapur, Hyderabad",
    experience: "1–4 Years",
    description:
      "Drive plot sales across Shadnagar, Kadthal, Kothur and nearby corridors. Handle client enquiries, coordinate site visits and close sales with support from our documentation team.",
    skills: ["Lead Handling", "Site Visits", "Client Relations", "Telugu/English"],
  },
  {
    id: "sales-executive-villas",
    title: "Sales Executive — Villas & Apartments",
    department: "Sales",
    type: "Full-Time",
    location: "Madhapur, Hyderabad",
    experience: "1–5 Years",
    description:
      "Sell villa and apartment projects across Hyderabad. Meet buyers, understand requirements and present the right projects from our portfolio with clear documentation and pricing.",
    skills: ["Villa Sales", "Apartment Sales", "Negotiation", "CRM"],
  },
  {
    id: "marketing-executive",
    title: "Marketing Executive",
    department: "Marketing",
    type: "Full-Time",
    location: "Madhapur, Hyderabad",
    experience: "1–4 Years",
    description:
      "Plan and execute digital and offline campaigns for plot, villa and apartment projects. Coordinate with the sales team to track leads and measure campaign performance.",
    skills: ["Digital Marketing", "Meta Ads", "Google Ads", "Content"],
  },
  {
    id: "site-coordinator",
    title: "Site Coordinator",
    department: "Operations",
    type: "Full-Time",
    location: "Shadnagar / Field",
    experience: "Fresher–2 Years",
    description:
      "Coordinate site visits for prospective buyers, ensure layout and boundary markings are ready and support the sales team during on-site meetings at our project locations.",
    skills: ["Field Coordination", "Site Visits", "Local Knowledge", "Telugu"],
  },
  {
    id: "channel-partner-manager",
    title: "Channel Partner Manager",
    department: "Sales",
    type: "Full-Time",
    location: "Hyderabad",
    experience: "3–6 Years",
    description:
      "Build and manage a network of real estate channel partners. Onboard new partners, share project details and coordinate partner-led sales with our team.",
    skills: ["Partner Management", "B2B Sales", "Networking", "Real Estate"],
  },
  {
    id: "customer-support-executive",
    title: "Customer Support Executive",
    department: "Support",
    type: "Full-Time",
    location: "Madhapur, Hyderabad",
    experience: "Fresher–2 Years",
    description:
      "Handle incoming enquiries via phone, WhatsApp and website. Share project information, book site visits and follow up with prospects through the sales cycle.",
    skills: ["Customer Service", "Communication", "CRM", "Follow-up"],
  },
  {
    id: "business-development-manager",
    title: "Business Development Manager",
    department: "Sales",
    type: "Full-Time",
    location: "Hyderabad",
    experience: "4–8 Years",
    description:
      "Identify new plot and villa projects, build relationships with landowners and developers, and help expand Aarna's project portfolio in Hyderabad and Telangana.",
    skills: ["Business Development", "Land Acquisition", "Negotiation", "Strategy"],
  },
  {
    id: "digital-marketing-intern",
    title: "Digital Marketing Intern",
    department: "Marketing",
    type: "Internship",
    location: "Remote / Madhapur",
    experience: "Fresher",
    description:
      "Support our digital team with social media content, lead tracking and campaign reports. Learn digital marketing in the real estate sector with hands-on exposure.",
    skills: ["Social Media", "Content Creation", "Analytics", "Canva"],
  },
];

const DEPARTMENTS = ["All", "Sales", "Marketing", "Operations", "Support"];

const BENEFITS = [
  {
    icon: "★",
    title: "Growth-Oriented Culture",
    description:
      "Work on real projects from day one. Learn the full lifecycle of real estate sales, marketing and operations with mentorship from senior team members.",
  },
  {
    icon: "₹",
    title: "Performance-Linked Earnings",
    description:
      "Attractive base salary plus performance-linked incentives for sales roles. Your earnings grow with your results.",
  },
  {
    icon: "⌂",
    title: "Prime Hyderabad Location",
    description:
      "Our office is in Madhapur — the heart of Hyderabad's IT and business corridor, with easy access from Gachibowli, HITEC City and Kondapur.",
  },
  {
    icon: "◉",
    title: "Learning & Development",
    description:
      "Regular training on project knowledge, sales processes, documentation and digital tools to help you grow in real estate.",
  },
  {
    icon: "▤",
    title: "Team Support",
    description:
      "You won't work in isolation. Our documentation, marketing and customer support teams are here to help you close every deal.",
  },
  {
    icon: "✓",
    title: "Direct Exposure",
    description:
      "Work directly with founders and senior leadership on live projects across Hyderabad and Telangana.",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Apply Online",
    description:
      "Submit your application through the form on this page along with your résumé and role of interest.",
  },
  {
    number: "02",
    title: "Resume Review",
    description:
      "Our HR team reviews your application and shortlists candidates based on role fit and experience.",
  },
  {
    number: "03",
    title: "Interview Round",
    description:
      "Shortlisted candidates are invited for an interview — virtual or in-person at our Madhapur office.",
  },
  {
    number: "04",
    title: "Offer & Onboarding",
    description:
      "Selected candidates receive an offer and go through a structured onboarding with our team.",
  },
];

const FAQS = [
  {
    q: "How do I apply for a job at Aarna Infra Developers?",
    a: "Browse the open positions on this page, click Apply against the role you're interested in, and submit the application form with your name, email, phone number, résumé and a brief message. Our HR team reviews applications and contacts shortlisted candidates for an interview.",
  },
  {
    q: "Do you hire freshers?",
    a: "Yes. Several roles — including Site Coordinator, Customer Support Executive and Digital Marketing Intern — are open to freshers. We provide on-the-job training and mentorship so you can build a strong career in real estate.",
  },
  {
    q: "What is the work location?",
    a: "Our office is at #101, Road No: 10, Kakatiya Hills, Madhapur, Hyderabad – 500081. Some field roles, like Site Coordinator, involve working at project locations in Shadnagar, Kadthal or Kothur. All locations are mentioned against each role.",
  },
  {
    q: "What is the interview process?",
    a: "The process typically includes an application review, a shortlisting round and a personal interview (virtual or in-person). Depending on the role, you may have a second discussion with the reporting manager or a senior team member before an offer is made.",
  },
  {
    q: "Do you offer internships?",
    a: "Yes. We offer internships in digital marketing, sales and operations from time to time. Check the open positions list, or write to us at info@aarnainfradevelopers.com with your résumé and area of interest.",
  },
  {
    q: "Is the salary fixed or performance-based?",
    a: "Sales roles typically combine a base salary with performance-linked incentives. Non-sales roles have a fixed salary structure with annual reviews. The exact structure is discussed during the interview and confirmed in the offer.",
  },
  {
    q: "What documents do I need for onboarding?",
    a: "You'll need your updated résumé, PAN card, Aadhaar card, previous employment documents (if applicable), educational certificates and bank account details. Specific requirements are shared once an offer is made.",
  },
  {
    q: "Can I apply for more than one role?",
    a: "Yes. You can apply for multiple roles, but please apply for the role that best matches your experience and interests. Duplicate applications may slow the review process, so we recommend one application per candidate.",
  },
  {
    q: "How long does it take to hear back?",
    a: "Most applications are reviewed within 1–2 weeks. If your profile matches an open role, our HR team will contact you directly. Due to high volumes, we cannot respond to every application individually.",
  },
  {
    q: "Can I send my résumé directly by email?",
    a: "Yes. You can email your résumé to info@aarnainfradevelopers.com with the role you're interested in mentioned in the subject line. Using the form is faster because it routes your application directly to our HR team.",
  },
];

type PopupType = "apply" | "callback" | null;

const inputClass =
  "mt-2 w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/40 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/10";

const labelClass = "block text-sm font-semibold text-black";

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

export default function CareerClient() {
  const [popup, setPopup] = useState<PopupType>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [activeDept, setActiveDept] = useState("All");
  const [selectedRole, setSelectedRole] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [startedAt] = useState(() => Math.floor(Date.now() / 1000));
  const formRef = useRef<HTMLFormElement>(null);

  const filteredJobs = useMemo(() => {
    if (activeDept === "All") return JOBS;
    return JOBS.filter((j) => j.department === activeDept);
  }, [activeDept]);

  function openApply(roleTitle: string) {
    setSelectedRole(roleTitle);
    setPopup("apply");
    setMessage("");
    setSuccess(false);
  }

  function openCallback() {
    setPopup("callback");
    setMessage("");
    setSuccess(false);
  }

  function closePopup() {
    if (loading) return;
    setPopup(null);
    setMessage("");
    setSuccess(false);
  }

  async function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading || !popup) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") || "").trim();

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setMessage("Enter a valid 10-digit Indian mobile number.");
      setSuccess(false);
      return;
    }

    if (honeypot) {
      setMessage("Application received.");
      setSuccess(true);
      return;
    }

    setLoading(true);
    setMessage("");

    const endpoint =
      popup === "apply" ? "/forms/career.php" : "/forms/request.php";

    try {
      data.set("form_start_time", String(startedAt));
      data.set("website", honeypot);

      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { "X-Requested-With": "XMLHttpRequest" },
      });

      const contentType = response.headers.get("content-type") || "";
      let result: { success?: boolean; message?: string } | null = null;

      if (contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();
        if (text.trim()) {
          try {
            result = JSON.parse(text);
          } catch {
            result = null;
          }
        }
      }

      if (!response.ok || result?.success !== true) {
        throw new Error(
          result?.message ||
            "We couldn't submit your application. Please try again or email us.",
        );
      }

      setSuccess(true);
      setMessage(
        result.message ||
          "Thank you! Your application has been submitted. Our HR team will review it and contact you if there's a match.",
      );
      form.reset();

      if (typeof window !== "undefined" && "gtag" in window) {
        (
          window as Window & { gtag?: (...args: unknown[]) => void }
        ).gtag?.("event", "conversion", {
          send_to: "AW-457637666/abRICJT26e0BEKL-m9oB",
        });
      }
    } catch (error) {
      setSuccess(false);
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email info@aarnainfradevelopers.com.",
      );
    } finally {
      setLoading(false);
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Aarna Infra Developers",
    url: siteUrl,
    logo: `${siteUrl}/assets/img/Logo.jpg`,
    description:
      "Real estate company in Hyderabad offering residential plots, villas, apartments and farmland.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "#101, Road No: 10, Kakatiya Hills, Madhapur",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500081",
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
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Career",
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const jobsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Open Positions at Aarna Infra Developers",
    numberOfItems: JOBS.length,
    itemListElement: JOBS.map((job, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "JobPosting",
        title: job.title,
        description: job.description,
        employmentType: job.type === "Internship" ? "INTERN" : "FULL_TIME",
        datePosted: new Date().toISOString().split("T")[0],
        hiringOrganization: {
          "@type": "Organization",
          name: "Aarna Infra Developers",
          sameAs: siteUrl,
          logo: `${siteUrl}/assets/img/Logo.jpg`,
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: job.location,
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
        },
        experienceRequirements: {
          "@type": "OccupationalExperienceRequirements",
          monthsOfExperience: job.experience.includes("Fresher") ? 0 : 12,
        },
        skills: job.skills.join(", "),
        industry: "Real Estate",
      },
    })),
  };

  const schemas = [
    organizationSchema,
    breadcrumbSchema,
    faqSchema,
    jobsSchema,
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
              Join Our Team
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
              Build Your Career in Real Estate
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              Careers at
              <span className="mt-2 block text-[#800000]">
                Aarna Infra Developers
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 sm:text-lg">
              Explore real estate career opportunities in Hyderabad — sales,
              marketing, site coordination, channel partnerships and support.
              Grow with a fast-moving team working on open plots, villas,
              apartments and farmland projects.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#openings"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#800000] px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
              >
                View Open Positions <ArrowIcon />
              </a>

              <button
                type="button"
                onClick={openCallback}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
              >
                <span aria-hidden="true">☎</span>
                Talk to HR
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
              <span className="text-[#800000]">Careers</span>
            </nav>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#FFFF00] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
              <img
                src="/assets/img/ongoing-projects/Golden-Terra.jpg"
                alt="Careers at Aarna Infra Developers, Hyderabad"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
                fetchPriority="high"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/50 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
                  We&apos;re Hiring
                </p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">
                  8 Open Roles
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Madhapur · Hyderabad · Field
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-2 -z-10 h-28 w-28 rounded-2xl bg-[#FFFF00] sm:-bottom-7 sm:-right-5 sm:h-40 sm:w-40" />
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-[#800000] via-[#FFFF00] to-[#800000]" />
      </section>

      {/* WHY JOIN */}
      <section className="px-5 pb-20 pt-16 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Why Work With Us
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Why Build Your Career at Aarna
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              A culture that rewards ownership, learning and clear
              communication — with real projects from day one.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#800000]/30 hover:shadow-xl sm:p-7"
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

      {/* OPEN POSITIONS */}
      <section
        id="openings"
        className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Open Positions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Current Job Openings
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              {JOBS.length} open roles across sales, marketing, operations and
              support. Click Apply to submit your application.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setActiveDept(dept)}
                className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                  activeDept === dept
                    ? "border-[#800000] bg-[#800000] text-white"
                    : "border-black/15 bg-white text-black hover:border-[#800000] hover:text-[#800000]"
                }`}
              >
                {dept} {dept === "All" ? `(${JOBS.length})` : ""}
              </button>
            ))}
          </div>

          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <article
                key={job.id}
                className="group rounded-2xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#800000]/30 hover:shadow-xl sm:p-8"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#FFFF00] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#800000]">
                        {job.department}
                      </span>
                      <span className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-[11px] font-semibold text-black/70">
                        {job.type}
                      </span>
                      <span className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-[11px] font-semibold text-black/70">
                        {job.experience}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-extrabold text-[#800000] sm:text-2xl">
                      {job.title}
                    </h3>

                    <p className="mt-1 flex items-center gap-2 text-sm text-black/60">
                      <span aria-hidden="true">⌖</span>
                      {job.location}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-black/80">
                      {job.description}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/70"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex shrink-0 flex-col gap-2 sm:flex-row lg:flex-col">
                    <button
                      type="button"
                      onClick={() => openApply(job.title)}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#800000] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-black"
                    >
                      Apply Now
                    </button>
                    <button
                      type="button"
                      onClick={openCallback}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#800000]/30 bg-white px-6 py-2.5 text-sm font-bold text-[#800000] transition hover:border-[#800000] hover:bg-[#800000] hover:text-white"
                    >
                      Ask a Question
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="rounded-2xl border border-dashed border-black/20 bg-white px-5 py-12 text-center">
              <h3 className="text-lg font-extrabold text-[#800000]">
                No openings in this department
              </h3>
              <p className="mt-2 text-sm text-black/60">
                Send us your résumé anyway — we&apos;re always happy to hear
                from strong candidates.
              </p>
              <button
                type="button"
                onClick={() => openApply("General Application")}
                className="mt-4 rounded-full bg-[#800000] px-5 py-2.5 font-semibold text-white transition hover:bg-black"
              >
                Send General Application
              </button>
            </div>
          )}
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Our Hiring Process
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              A straightforward process from application to onboarding — with
              clear communication at each stage.
            </p>
          </div>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step) => (
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

      {/* SEO CONTENT */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl rounded-3xl border border-black/10 bg-white p-6 sm:p-10 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#800000]">
              Career Guide
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Real Estate Jobs in Hyderabad at Aarna Infra Developers
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-black/80">
              <p>
                Aarna Infra Developers is a Hyderabad-based real estate
                company working on open plots, villas, apartments and farmland
                projects across the city and nearby growth corridors. As we
                grow, we&apos;re looking for talented people who want to build
                a career in real estate — whether you&apos;re an experienced
                sales professional, a creative marketer, or a fresher eager to
                learn the industry from the ground up.
              </p>

              <p>
                Our office is in Madhapur, one of Hyderabad&apos;s most
                connected business hubs, with easy access from Gachibowli,
                HITEC City, Kondapur and Jubilee Hills. Several field roles,
                such as Site Coordinator, involve working at project locations
                like Shadnagar, Kadthal and Kothur, which gives you on-ground
                exposure to how real estate projects actually operate.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Roles We Hire For
              </h3>

              <p>
                We regularly hire for roles across sales, marketing, operations
                and customer support. Open positions include:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Sales Executive — Open Plots:</strong> Handle client
                  enquiries, coordinate site visits and close plot sales across
                  Shadnagar, Kadthal and Kothur.
                </li>
                <li>
                  <strong>Sales Executive — Villas &amp; Apartments:</strong>{" "}
                  Present villa and apartment projects to buyers, manage
                  follow-ups and coordinate with documentation teams.
                </li>
                <li>
                  <strong>Marketing Executive:</strong> Plan and execute
                  digital and offline campaigns, track leads and measure
                  performance.
                </li>
                <li>
                  <strong>Site Coordinator:</strong> Manage site visits, layout
                  readiness and on-ground coordination at project locations.
                </li>
                <li>
                  <strong>Channel Partner Manager:</strong> Build and manage a
                  network of real estate partners and support partner-led
                  sales.
                </li>
                <li>
                  <strong>Customer Support Executive:</strong> Handle incoming
                  enquiries, share project details and schedule site visits.
                </li>
                <li>
                  <strong>Business Development Manager:</strong> Identify new
                  plot and villa projects and build relationships with
                  landowners and developers.
                </li>
                <li>
                  <strong>Digital Marketing Intern:</strong> Support social
                  media, content and campaign reporting for our projects.
                </li>
              </ul>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Who We&apos;re Looking For
              </h3>

              <p>
                We look for candidates who are curious, reliable and
                comfortable working with clients. For sales roles, strong
                communication skills in English and Telugu (and ideally Hindi)
                make a big difference. For operations and support roles,
                attention to detail and follow-through matter more than prior
                experience. Freshers are welcome for several roles — we
                provide on-the-job training and mentorship so you can learn
                quickly.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                What to Expect When You Join
              </h3>

              <p>
                New team members go through a structured onboarding that covers
                our project portfolio, documentation processes, sales
                workflows and the tools we use. You&apos;ll work directly with
                senior team members and have access to the project, marketing
                and documentation teams whenever you need support. Over time,
                you&apos;ll build a strong understanding of real estate in
                Hyderabad — from land approvals and title documents to site
                visits and client handoff.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                How to Apply
              </h3>

              <p>
                Browse the open positions on this page and click{" "}
                <strong>Apply Now</strong> against the role that fits you best.
                You&apos;ll be asked to submit your name, email, phone number,
                résumé and a brief message. Our HR team reviews applications
                and contacts shortlisted candidates for an interview — virtual
                or in-person at our Madhapur office. You can also email your
                résumé directly to{" "}
                <a
                  href="mailto:info@aarnainfradevelopers.com"
                  className="font-bold text-[#800000] underline underline-offset-4"
                >
                  info@aarnainfradevelopers.com
                </a>{" "}
                with the role you&apos;re interested in mentioned in the
                subject line.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Contact Our HR Team
              </h3>

              <p>
                Have a question about a role or the application process? Call{" "}
                <a
                  href="tel:+919959354255"
                  className="font-bold text-[#800000] underline underline-offset-4"
                >
                  +91 99593 54255
                </a>{" "}
                or{" "}
                <a
                  href="tel:+917337317289"
                  className="font-bold text-[#800000] underline underline-offset-4"
                >
                  +91 73373 17289
                </a>
                , or email{" "}
                <a
                  href="mailto:info@aarnainfradevelopers.com"
                  className="font-bold text-[#800000] underline underline-offset-4"
                >
                  info@aarnainfradevelopers.com
                </a>
                . Our office is at #101, Road No: 10, Kakatiya Hills,
                Madhapur, Hyderabad – 500081.
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
              Career FAQs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Quick answers to common questions about applying and working at
              Aarna Infra Developers.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((f, i) => (
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
                Ready to Join?
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
                Send Us Your Application
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-black/70 sm:text-lg">
                Don&apos;t see the perfect role? Send us your résumé anyway —
                we&apos;re always interested in meeting strong candidates.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                type="button"
                onClick={() => openApply("General Application")}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#800000] px-7 py-3 font-extrabold text-white transition hover:-translate-y-1 hover:bg-black"
              >
                Submit Application
              </button>

              <a
                href="mailto:info@aarnainfradevelopers.com?subject=Career%20Application%20%E2%80%94%20Aarna%20Infra"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#800000]/30 bg-white px-7 py-3 font-bold text-[#800000] transition hover:border-[#800000] hover:bg-[#800000] hover:text-white"
              >
                Email Résumé
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

      {/* POPUP */}
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
            aria-labelledby="career-modal-title"
            className="relative my-auto max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={closePopup}
              disabled={loading}
              aria-label="Close"
              className="absolute right-4 top-3 text-3xl text-black/50 hover:text-black disabled:opacity-40"
            >
              &times;
            </button>

            <h2
              id="career-modal-title"
              className="pr-8 text-2xl font-extrabold text-[#800000]"
            >
              {popup === "apply" ? "Apply for a Role" : "Talk to Our HR Team"}
            </h2>

            <p className="mt-2 text-sm leading-6 text-black/60">
              {popup === "apply"
                ? "Submit your application and our HR team will review it."
                : "Share your details and we'll call you back."}
            </p>

            <form
              ref={formRef}
              onSubmit={submitApplication}
              className="mt-6 space-y-4"
            >
              {/* Honeypot */}
              <div
                aria-hidden="true"
                className="absolute -left-[10000px] h-px w-px overflow-hidden"
              >
                <label htmlFor="career-website">Website</label>
                <input
                  id="career-website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="career-name">
                  Full Name *
                </label>
                <input
                  id="career-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  className={inputClass}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="career-email">
                    Email *
                  </label>
                  <input
                    id="career-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="career-phone">
                    Mobile *
                  </label>
                  <input
                    id="career-phone"
                    name="phone"
                    type="tel"
                    placeholder="10-digit mobile"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    pattern="[6-9][0-9]{9}"
                    minLength={10}
                    maxLength={10}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {popup === "apply" && (
                <>
                  <div>
                    <label className={labelClass} htmlFor="career-role">
                      Role Applying For *
                    </label>
                    <select
                      id="career-role"
                      name="role"
                      required
                      defaultValue={selectedRole}
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select a role
                      </option>
                      {selectedRole === "General Application" && (
                        <option value="General Application">
                          General Application
                        </option>
                      )}
                      {JOBS.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="career-resume">
                      Résumé Link (Google Drive / Dropbox) *
                    </label>
                    <input
                      id="career-resume"
                      name="resumeLink"
                      type="url"
                      placeholder="https://drive.google.com/..."
                      required
                      maxLength={500}
                      className={inputClass}
                    />
                    <p className="mt-1 text-xs text-black/60">
                      Share a viewable link to your résumé (PDF preferred).
                    </p>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="career-exp">
                      Years of Experience
                    </label>
                    <input
                      id="career-exp"
                      name="experience"
                      type="text"
                      placeholder="e.g. 2 years in real estate sales"
                      maxLength={50}
                      className={inputClass}
                    />
                  </div>
                </>
              )}

              <div>
                <label className={labelClass} htmlFor="career-message">
                  Message / Cover Note *
                </label>
                <textarea
                  id="career-message"
                  name="message"
                  rows={4}
                  placeholder="Briefly tell us why you're a good fit"
                  required
                  maxLength={2000}
                  className={`${inputClass} resize-y`}
                />
              </div>

              {message && (
                <p
                  role="status"
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
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              )}
            </form>
          </section>
        </div>
      )}
    </main>
  );
}