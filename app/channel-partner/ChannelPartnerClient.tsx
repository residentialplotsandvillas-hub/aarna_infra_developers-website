"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const siteUrl = "https://aarnainfradevelopers.com";
const pageUrl = `${siteUrl}/channel-partner.html`;

const PROJECTS = [
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

const BUSINESS_TYPES = [
  "Individual",
  "Partnership",
  "Private Limited Company",
  "Public Limited Company",
  "LLP",
  "Proprietorship",
];

const HIGHLIGHTS = [
  { value: "15+ Projects", label: "To Promote" },
  { value: "24–48 Hrs", label: "Review Time" },
  { value: "Transparent", label: "Partner Terms" },
  { value: "End-to-End", label: "Support Team" },
];

const BENEFITS = [
  {
    icon: "★",
    title: "Attractive Partner Terms",
    description:
      "Clear, transparent partner terms with a structured payout process and dedicated support for every registered channel partner.",
  },
  {
    icon: "⌂",
    title: "Premium Project Portfolio",
    description:
      "Access to 15+ listed projects across open plots, villas, apartments and farmland in Hyderabad, Shadnagar, Kadthal, Kollur, Mokila and more.",
  },
  {
    icon: "☎",
    title: "Dedicated Partner Support",
    description:
      "A single point of contact for site visit coordination, documentation sharing, price sheets and client handoff — so you can focus on your clients.",
  },
  {
    icon: "▤",
    title: "Marketing Material Access",
    description:
      "Project brochures, layouts, pricing sheets and photos shared on request to help you present opportunities clearly to buyers.",
  },
  {
    icon: "◉",
    title: "Site Visit Assistance",
    description:
      "Our team coordinates site visits with your clients so they can see the project, layout and surroundings in person.",
  },
  {
    icon: "✓",
    title: "Documentation Guidance",
    description:
      "Support with the approvals, title documents and registration details your clients ask about — shared from verified project records.",
  },
];

const ELIGIBILITY = [
  "Individual agents, brokerage firms, or registered companies",
  "Valid PAN card and Aadhaar for verification",
  "A registered business address in Telangana or India",
  "Basic understanding of real estate transactions",
  "Ability to coordinate client site visits with our team",
  "Optional: RERA registration if you operate as a registered agent",
];

const STEPS = [
  {
    number: "01",
    title: "Submit Registration",
    description:
      "Fill the channel partner registration form with your business details, PAN, Aadhaar and contact information.",
  },
  {
    number: "02",
    title: "Team Verification",
    description:
      "Our team reviews your submission and verifies the details within 24–48 hours before contacting you.",
  },
  {
    number: "03",
    title: "Onboarding Call",
    description:
      "A brief onboarding call introduces you to our project portfolio, partner terms and support team.",
  },
  {
    number: "04",
    title: "Start Promoting",
    description:
      "Receive project details and share them with your clients. Our team handles site visits and documentation support.",
  },
];

const FAQS = [
  {
    q: "What is a real estate channel partner?",
    a: "A channel partner is an individual or business that promotes and refers clients to a developer's real estate projects in exchange for agreed partner terms. Channel partners typically introduce buyers, coordinate site visits and help move the deal toward booking, while the developer handles the project and documentation.",
  },
  {
    q: "How do I register as a channel partner with Aarna Infra Developers?",
    a: "Fill out the registration form on this page with your full name, company name, email, mobile number, PAN, Aadhaar, business type and registered address. Our team reviews submissions within 24–48 hours and contacts you to discuss the next steps.",
  },
  {
    q: "What documents are required for channel partner registration?",
    a: "You will need a valid PAN card, Aadhaar number (for individual verification), company details if you operate as a business, and a registered address. If you operate as a RERA-registered agent, you can optionally add your RERA number to the form.",
  },
  {
    q: "Is there a registration fee to become a channel partner?",
    a: "Registration is free. We do not charge a fee to register as a channel partner. Partner terms are discussed during the onboarding call and shared in writing before you begin promoting any project.",
  },
  {
    q: "Which projects can channel partners promote?",
    a: "Registered channel partners can promote our listed projects, including open plots in Shadnagar, Kadthal, Sadashivpet, Jadcherla and Kothur, plus villas, apartments and farmland projects where available. Project availability is shared during onboarding and updated as new projects are added.",
  },
  {
    q: "How do partner payouts or commissions work?",
    a: "Partner terms — including commission structure and payout timelines — are shared in writing during onboarding and confirmed per project. Terms may vary by project, deal size and location. We recommend reviewing the written terms before committing a client to any project.",
  },
  {
    q: "Do you support site visits for channel partner clients?",
    a: "Yes. Our team coordinates site visits with your clients so they can see the project, layout and surrounding infrastructure in person. Site visit assistance is part of the standard partner support we offer.",
  },
  {
    q: "Can NRIs register as channel partners?",
    a: "Yes, NRIs can register as channel partners subject to verification of their business details and applicable regulations. Our team will confirm the required documentation during the onboarding process.",
  },
  {
    q: "How long does registration approval take?",
    a: "Most registrations are reviewed within 24–48 hours. You will be contacted by our team to confirm the details and proceed to the onboarding call.",
  },
  {
    q: "Who do I contact for channel partner support?",
    a: "Call +91 99593 54255 or +91 73373 17289, or email info@aarnainfradevelopers.com. You can also message us on WhatsApp using the floating button on this page.",
  },
];

type RegistrationFields = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  panNumber: string;
  aadhaarNumber: string;
  businessType: string;
  registeredAddress: string;
  reraNumber: string;
  referredBy: string;
};

const initialFields: RegistrationFields = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  panNumber: "",
  aadhaarNumber: "",
  businessType: "",
  registeredAddress: "",
  reraNumber: "",
  referredBy: "",
};

type Message = { type: "success" | "error"; text: string } | null;

const inputClass =
  "mt-2 w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/40 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/10";

const labelClass = "block text-sm font-semibold text-black";

function validate(fields: RegistrationFields) {
  if (!/^[a-zA-Z\s.'-]{3,50}$/.test(fields.fullName.trim())) {
    return "Enter your full name using at least 3 letters.";
  }
  if (!fields.companyName.trim()) return "Enter your company name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    return "Enter a valid email address.";
  }
  if (!/^[6-9]\d{9}$/.test(fields.phone)) {
    return "Enter a valid 10-digit Indian mobile number.";
  }
  if (!/^[A-Z]{5}\d{4}[A-Z]$/.test(fields.panNumber)) {
    return "Enter a valid PAN number, for example ABCDE1234F.";
  }
  if (!/^\d{12}$/.test(fields.aadhaarNumber.replace(/\s/g, ""))) {
    return "Enter a valid 12-digit Aadhaar number.";
  }
  if (!fields.businessType) return "Select your business type.";
  if (!fields.registeredAddress.trim()) {
    return "Enter your registered address.";
  }
  if (fields.reraNumber && !/^[A-Z]\d{10}$/.test(fields.reraNumber)) {
    return "Enter a valid RERA number or leave the field empty.";
  }
  return "";
}

export default function ChannelPartnerClient() {
  const [fields, setFields] = useState(initialFields);
  const [message, setMessage] = useState<Message>(null);
  const [submitting, setSubmitting] = useState(false);
  const [dialog, setDialog] = useState<"callback" | "enquiry" | null>(null);
  const [dialogMessage, setDialogMessage] = useState<Message>(null);
  const [dialogSubmitting, setDialogSubmitting] = useState(false);
  const [project, setProject] = useState("");
  const [callbackFields, setCallbackFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [enquiryFields, setEnquiryFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [startedAt] = useState(() => Math.floor(Date.now() / 1000));
  const formRef = useRef<HTMLFormElement>(null);

  function updateField<K extends keyof RegistrationFields>(
    key: K,
    value: RegistrationFields[K]
  ) {
    setFields((previous) => ({ ...previous, [key]: value }));
  }

  function normalizeValue(name: string, value: string) {
    if (name === "phone") return value.replace(/\D/g, "").slice(0, 10);
    if (name === "panNumber" || name === "reraNumber") {
      return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    }
    if (name === "aadhaarNumber") {
      const digits = value.replace(/\D/g, "").slice(0, 12);
      return digits.match(/.{1,4}/g)?.join(" ") ?? "";
    }
    return value;
  }

  async function submitRegistration(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    if (honeypot) {
      setMessage({
        type: "success",
        text: "Your registration has been received.",
      });
      return;
    }

    const error = validate(fields);
    if (error) {
      setMessage({ type: "error", text: error });
      return;
    }

    setSubmitting(true);

    try {
      const body = new FormData(formRef.current!);
      body.set("form_start_time", String(startedAt));
      body.set("website", honeypot);
      body.set("aadhaarNumber", fields.aadhaarNumber.replace(/\s/g, ""));

      const response = await fetch("/forms/channel-partner.php", {
        method: "POST",
        body,
        headers: { "X-Requested-With": "XMLHttpRequest" },
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Registration could not be submitted. Please try again."
        );
      }

      setMessage({
        type: "success",
        text: "Registration submitted successfully! Our team will contact you within 24–48 hours.",
      });
      setFields(initialFields);

      if (typeof window !== "undefined" && "gtag" in window) {
        (
          window as Window & {
            gtag?: (...args: unknown[]) => void;
          }
        ).gtag?.("event", "conversion", {
          send_to: "AW-457637666/abRICJT26e0BEKL-m9oB",
          event_category: "Channel Partner",
          event_label: "Registration",
          value: 1,
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please contact us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  async function submitPopup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDialogMessage(null);

    const current = dialog === "callback" ? callbackFields : enquiryFields;

    if (!current.name.trim()) {
      setDialogMessage({ type: "error", text: "Enter your name." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(current.email)) {
      setDialogMessage({ type: "error", text: "Enter a valid email address." });
      return;
    }
    if (!/^[6-9]\d{9}$/.test(current.phone)) {
      setDialogMessage({
        type: "error",
        text: "Enter a valid 10-digit mobile number.",
      });
      return;
    }
    if (!current.message.trim()) {
      setDialogMessage({ type: "error", text: "Enter your message." });
      return;
    }
    if (dialog === "enquiry" && !project) {
      setDialogMessage({ type: "error", text: "Select a project." });
      return;
    }

    setDialogSubmitting(true);

    try {
      const body = new FormData();
      body.set("name", current.name);
      body.set("email", current.email);
      body.set("phone", current.phone);
      body.set("message", current.message);

      const endpoint =
        dialog === "callback" ? "/forms/request.php" : "/forms/enquiry.php";

      if (dialog === "enquiry") body.set("project", project);

      const response = await fetch(endpoint, {
        method: "POST",
        body,
        headers: { "X-Requested-With": "XMLHttpRequest" },
      });

      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : null;

      if (!response.ok || (data && data.success === false)) {
        throw new Error(
          data?.message || "Unable to submit your request. Please try again."
        );
      }

      setDialogMessage({
        type: "success",
        text: "Your request has been submitted. Our team will contact you.",
      });

      if (dialog === "callback") {
        setCallbackFields({ name: "", email: "", phone: "", message: "" });
      } else {
        setEnquiryFields({ name: "", email: "", phone: "", message: "" });
        setProject("");
      }
    } catch (error) {
      setDialogMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Unable to submit your request. Please try again.",
      });
    } finally {
      setDialogSubmitting(false);
    }
  }

  const required = <span className="text-red-600"> *</span>;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${siteUrl}/#organization`,
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
      contactType: "Channel Partner Support",
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
        name: "Channel Partner",
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Real Estate Channel Partner Registration",
    description:
      "Registration service for channel partners interested in promoting Aarna Infra Developers' real estate projects in Hyderabad.",
    provider: {
      "@type": "RealEstateAgent",
      name: "Aarna Infra Developers",
      url: siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
    },
    serviceType: "Real Estate Channel Partnership",
  };

  const schemas = [
    organizationSchema,
    breadcrumbSchema,
    faqSchema,
    serviceSchema,
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
              Partner with Aarna
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
              Real Estate Channel Partner Program
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              Channel Partner
              <span className="mt-2 block text-[#800000]">Registration</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 sm:text-lg">
              Join Aarna Infra Developers as a channel partner and explore
              opportunities to promote premium real estate projects in
              Hyderabad — including open plots, villas, apartments and
              farmland across Shadnagar, Kadthal, Kollur, Mokila and beyond.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#registration"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#800000] px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
              >
                Register Now
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
              <span className="text-[#800000]">Channel Partner</span>
            </nav>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#FFFF00] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
              <img
                src="/assets/img/ongoing-projects/Golden-Terra.jpg"
                alt="Channel partner program by Aarna Infra Developers, Hyderabad"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
                fetchPriority="high"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/50 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
                  Grow With Us
                </p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">
                  15+ Projects to Promote
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Across Hyderabad &amp; Telangana
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
          {HIGHLIGHTS.map((item, index) => (
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

      {/* REGISTRATION SECTION */}
      <section
        id="registration"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Register Now
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Channel Partner Registration
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Submit your business details so our team can review your channel
              partnership request and contact you within 24–48 hours.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.5fr] lg:gap-12">
            {/* Sidebar */}
            <aside className="h-fit rounded-2xl border border-black/10 bg-white p-7 sm:p-9">
              <p className="text-sm font-bold uppercase tracking-widest text-[#800000]">
                Aarna Infra Developers
              </p>
              <h3 className="mt-4 text-2xl font-extrabold text-[#800000] sm:text-3xl">
                Grow With Us
              </h3>
              <p className="mt-4 leading-7 text-black/70">
                Register your business details so our team can review your
                channel partnership request and contact you.
              </p>

              <div className="mt-8 space-y-5 border-t border-black/10 pt-6">
                <div>
                  <p className="text-sm text-black/60">Mobile</p>
                  <a
                    className="mt-1 inline-block font-bold text-[#800000] hover:text-black"
                    href="tel:+919959354255"
                  >
                    9959354255
                  </a>
                  <span className="px-2 text-black/40">/</span>
                  <a
                    className="font-bold text-[#800000] hover:text-black"
                    href="tel:+917337317289"
                  >
                    7337317289
                  </a>
                </div>
                <div>
                  <p className="text-sm text-black/60">Email</p>
                  <a
                    className="mt-1 inline-block break-all font-bold text-[#800000] hover:text-black"
                    href="mailto:info@aarnainfradevelopers.com"
                  >
                    info@aarnainfradevelopers.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-black/60">Office</p>
                  <p className="mt-1 font-semibold text-black">
                    Premnagar, Khairtabad, Hyderabad, Telangana 500004
                  </p>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-[#800000] sm:text-3xl">
                  Registration Details
                </h3>
                <p className="mt-2 text-sm leading-6 text-black/60">
                  Fields marked with * are required.
                </p>
              </div>

              {message && (
                <div
                  role="alert"
                  className={`mb-6 rounded-lg border p-4 text-sm ${
                    message.type === "success"
                      ? "border-green-200 bg-green-50 text-green-800"
                      : "border-red-200 bg-red-50 text-red-800"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <form
                ref={formRef}
                onSubmit={submitRegistration}
                noValidate
                className="space-y-6"
              >
                <input type="hidden" name="form_start_time" value={startedAt} />
                <div
                  aria-hidden="true"
                  className="absolute -left-[10000px] h-px w-px overflow-hidden"
                >
                  <label htmlFor="channel-website">Website</label>
                  <input
                    id="channel-website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                  />
                </div>
                <input type="hidden" name="url" value="" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="fullName">
                      Full Name{required}
                    </label>
                    <input
                      className={inputClass}
                      id="fullName"
                      name="fullName"
                      autoComplete="name"
                      required
                      value={fields.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="companyName">
                      Company Name{required}
                    </label>
                    <input
                      className={inputClass}
                      id="companyName"
                      name="companyName"
                      autoComplete="organization"
                      required
                      value={fields.companyName}
                      onChange={(e) =>
                        updateField("companyName", e.target.value)
                      }
                      placeholder="Enter company name"
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="email">
                      Email Address{required}
                    </label>
                    <input
                      className={inputClass}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={fields.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Phone Number{required}
                    </label>
                    <input
                      className={inputClass}
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      maxLength={10}
                      required
                      value={fields.phone}
                      onChange={(e) =>
                        updateField(
                          "phone",
                          normalizeValue("phone", e.target.value)
                        )
                      }
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="panNumber">
                      PAN Number{required}
                    </label>
                    <input
                      className={inputClass}
                      id="panNumber"
                      name="panNumber"
                      autoComplete="off"
                      maxLength={10}
                      required
                      value={fields.panNumber}
                      onChange={(e) =>
                        updateField(
                          "panNumber",
                          normalizeValue("panNumber", e.target.value)
                        )
                      }
                      placeholder="ABCDE1234F"
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="aadhaarNumber">
                      Aadhaar Number{required}
                    </label>
                    <input
                      className={inputClass}
                      id="aadhaarNumber"
                      name="aadhaarNumber"
                      type="password"
                      inputMode="numeric"
                      autoComplete="off"
                      maxLength={14}
                      required
                      value={fields.aadhaarNumber}
                      onChange={(e) =>
                        updateField(
                          "aadhaarNumber",
                          normalizeValue("aadhaarNumber", e.target.value)
                        )
                      }
                      placeholder="XXXX XXXX XXXX"
                    />
                    <p className="mt-1 text-xs text-black/60">
                      Used only for verification purposes.
                    </p>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="businessType">
                      Type of Business{required}
                    </label>
                    <select
                      className={inputClass}
                      id="businessType"
                      name="businessType"
                      required
                      value={fields.businessType}
                      onChange={(e) =>
                        updateField("businessType", e.target.value)
                      }
                    >
                      <option value="">Select type</option>
                      {BUSINESS_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="reraNumber">
                      RERA Number (Optional)
                    </label>
                    <input
                      className={inputClass}
                      id="reraNumber"
                      name="reraNumber"
                      autoComplete="off"
                      maxLength={11}
                      value={fields.reraNumber}
                      onChange={(e) =>
                        updateField(
                          "reraNumber",
                          normalizeValue("reraNumber", e.target.value)
                        )
                      }
                      placeholder="A1234567890"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="registeredAddress">
                      Registered Address{required}
                    </label>
                    <textarea
                      className={inputClass}
                      id="registeredAddress"
                      name="registeredAddress"
                      rows={3}
                      autoComplete="street-address"
                      required
                      value={fields.registeredAddress}
                      onChange={(e) =>
                        updateField("registeredAddress", e.target.value)
                      }
                      placeholder="Enter your complete registered address"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="referredBy">
                      Referred By (Optional)
                    </label>
                    <input
                      className={inputClass}
                      id="referredBy"
                      name="referredBy"
                      value={fields.referredBy}
                      onChange={(e) =>
                        updateField("referredBy", e.target.value)
                      }
                      placeholder="Name of the person who referred you"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#800000] px-6 py-4 font-bold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {submitting
                    ? "Submitting Registration..."
                    : "Submit Registration"}
                  {submitting && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  )}
                </button>

                <p className="text-xs leading-5 text-black/60">
                  Your information is handled securely and used only for
                  legitimate registration and verification purposes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Why Partner With Us
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Benefits of the Channel Partner Program
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              A partnership designed to support your business with clear terms,
              strong project options and a responsive team.
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

      {/* ELIGIBILITY + STEPS */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Who Can Apply
            </p>

            <h2 className="mt-4 text-2xl font-extrabold text-[#800000] sm:text-3xl">
              Channel Partner Eligibility
            </h2>

            <ul className="mt-6 space-y-3">
              {ELIGIBILITY.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-7 text-black/80 sm:text-base"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFFF00] text-[10px] font-black text-[#800000]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              How It Works
            </p>

            <h2 className="mt-4 text-2xl font-extrabold text-[#800000] sm:text-3xl">
              Four Steps to Onboarding
            </h2>

            <ol className="mt-6 space-y-5">
              {STEPS.map((step) => (
                <li key={step.number} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#800000] text-sm font-black text-white">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-[#800000]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-black/70">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl rounded-3xl border border-black/10 bg-white p-6 sm:p-10 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#800000]">
              Channel Partner Guide
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Become a Real Estate Channel Partner in Hyderabad
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-black/80">
              <p>
                A real estate channel partner is an individual or business that
                promotes a developer&apos;s projects and refers interested
                buyers in exchange for agreed partner terms. Channel partners
                typically introduce clients, coordinate site visits and help
                move the transaction toward booking, while the developer
                manages the project and documentation. If you are an agent,
                brokerage firm, or real estate professional looking to expand
                your offerings, becoming a channel partner with Aarna Infra
                Developers gives you access to a curated portfolio of
                residential and plotted projects across Hyderabad.
              </p>

              <p>
                Our channel partner program is designed to be straightforward:
                you register your business details, our team verifies the
                submission, we conduct a brief onboarding call and then you
                can start sharing projects with your clients. We provide
                project information, pricing sheets and site visit support so
                you can focus on client relationships rather than
                documentation coordination.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Why Partner With Aarna Infra Developers
              </h3>

              <p>
                Aarna Infra Developers lists projects across open plots,
                villas, apartments and farmland in and around Hyderabad.
                Locations covered include Shadnagar, Kadthal, Sadashivpet,
                Jadcherla, Kothur, Balanagar, Kollur, Mokila, Tellapur and
                more. Channel partners benefit from a diverse project mix that
                can be matched to different client budgets and lifestyle
                preferences.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Diverse portfolio:</strong> Open plots, villas,
                  apartments and farmland options across multiple price points
                  and locations.
                </li>
                <li>
                  <strong>Transparent terms:</strong> Partner terms shared in
                  writing during onboarding so there are no surprises.
                </li>
                <li>
                  <strong>Site visit support:</strong> Our team coordinates
                  visits with your clients so they can see the project in
                  person.
                </li>
                <li>
                  <strong>Documentation guidance:</strong> We share available
                  approval details, layouts and project documents from
                  verified records.
                </li>
                <li>
                  <strong>Responsive communication:</strong> A single point of
                  contact for your queries, client handoff and follow-up.
                </li>
              </ul>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Who Should Register as a Channel Partner?
              </h3>

              <p>
                The channel partner program is open to real estate agents,
                independent brokers, brokerage firms, property consultants
                and registered companies that work with residential buyers.
                Individuals, partnerships, LLPs, private limited companies and
                proprietorships can register using the form on this page. A
                valid PAN and Aadhaar are required for verification, and a
                registered business address helps us coordinate efficiently.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Documents and Details Required
              </h3>

              <p>
                Registration requires your full name, company name, email,
                mobile number, PAN card, Aadhaar number, business type and
                registered address. If you are a RERA-registered agent, you
                can optionally include your RERA number to help us align on
                compliance and disclosure requirements. All details submitted
                through the form are used only for verification and partner
                onboarding.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                How the Onboarding Process Works
              </h3>

              <p>
                After you submit your registration, our team reviews the
                details within 24–48 hours. We then contact you to confirm the
                information, discuss partner terms and share project
                information. Once onboarding is complete, you can begin
                sharing projects with your clients and coordinating site
                visits through our team. We keep project availability,
                pricing and documentation updated and share changes as they
                occur.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Projects Available for Channel Partners
              </h3>

              <p>
                Channel partners can promote open plot projects like Yuva
                Park, Magadha, Golden City, Golden Terra, Golden Valley and
                Green Meadows, along with villas, apartments and farmland
                projects where available. New projects are added as they
                launch, and project-specific availability is confirmed during
                onboarding. Partners should always share current project
                information and direct clients to our team for verification
                before any booking decision.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Contact Aarna Infra Developers
              </h3>

              <p>
                Have questions about the channel partner program? Call{" "}
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
                . Our office is at Premnagar, Khairtabad, Hyderabad, Telangana
                500004.
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
              Channel Partner FAQs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Quick answers to common questions about registering and working
              with us as a channel partner.
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
                Have a Question?
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
                Request a Call Back
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-black/70 sm:text-lg">
                Contact our team for assistance with your channel partner
                registration, partner terms or project availability.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                type="button"
                onClick={() => {
                  setDialogMessage(null);
                  setDialog("callback");
                }}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#800000] px-7 py-3 font-extrabold text-white transition hover:-translate-y-1 hover:bg-black"
              >
                Request a Call Back
              </button>

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
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-xs font-extrabold text-white shadow-lg hover:scale-110"
        >
          WA
        </a>
        <a
          href="tel:+919959354255"
          aria-label="Call Aarna Infra Developers"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#800000] text-xl text-white shadow-lg hover:scale-110"
        >
          ☎
        </a>
        <button
          type="button"
          onClick={() => {
            setDialogMessage(null);
            setDialog("enquiry");
          }}
          className="rounded-full bg-[#FFFF00] px-4 py-3 text-xs font-extrabold text-[#800000] shadow-lg hover:bg-white"
        >
          Enquire
        </button>
      </div>

      {/* POPUP DIALOG */}
      {dialog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setDialog(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            className="my-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#800000]">
                  Aarna Infra Developers
                </p>
                <h2
                  id="popup-title"
                  className="mt-2 text-2xl font-extrabold text-[#800000]"
                >
                  {dialog === "callback" ? "Request a Call Back" : "Enquire Now"}
                </h2>
                <p className="mt-2 text-sm leading-6 text-black/60">
                  Fill in your details and our team will get back to you.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDialog(null)}
                aria-label="Close dialog"
                className="rounded-full px-3 py-1 text-2xl text-black/50 hover:bg-black/5"
              >
                ×
              </button>
            </div>

            {dialogMessage && (
              <p
                role="status"
                className={`mb-4 rounded-lg p-3 text-sm ${
                  dialogMessage.type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {dialogMessage.text}
              </p>
            )}

            <form onSubmit={submitPopup} className="space-y-4">
              <input
                className={inputClass}
                name="name"
                aria-label="Full name"
                placeholder="Full Name"
                required
                value={
                  dialog === "callback" ? callbackFields.name : enquiryFields.name
                }
                onChange={(e) => {
                  const value = e.target.value;
                  if (dialog === "callback") {
                    setCallbackFields((old) => ({ ...old, name: value }));
                  } else {
                    setEnquiryFields((old) => ({ ...old, name: value }));
                  }
                }}
              />
              <input
                className={inputClass}
                name="email"
                type="email"
                aria-label="Email"
                placeholder="Email"
                required
                value={
                  dialog === "callback"
                    ? callbackFields.email
                    : enquiryFields.email
                }
                onChange={(e) => {
                  const value = e.target.value;
                  if (dialog === "callback") {
                    setCallbackFields((old) => ({ ...old, email: value }));
                  } else {
                    setEnquiryFields((old) => ({ ...old, email: value }));
                  }
                }}
              />
              <input
                className={inputClass}
                name="phone"
                type="tel"
                inputMode="numeric"
                aria-label="Mobile number"
                placeholder="10-digit Mobile Number"
                maxLength={10}
                required
                value={
                  dialog === "callback"
                    ? callbackFields.phone
                    : enquiryFields.phone
                }
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  if (dialog === "callback") {
                    setCallbackFields((old) => ({ ...old, phone: value }));
                  } else {
                    setEnquiryFields((old) => ({ ...old, phone: value }));
                  }
                }}
              />

              {dialog === "enquiry" && (
                <select
                  className={inputClass}
                  name="project"
                  aria-label="Project name"
                  required
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                >
                  <option value="">Select Project</option>
                  {PROJECTS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              )}

              <textarea
                className={inputClass}
                name="message"
                aria-label="Your message"
                placeholder="Your Message"
                rows={3}
                required
                value={
                  dialog === "callback"
                    ? callbackFields.message
                    : enquiryFields.message
                }
                onChange={(e) => {
                  const value = e.target.value;
                  if (dialog === "callback") {
                    setCallbackFields((old) => ({ ...old, message: value }));
                  } else {
                    setEnquiryFields((old) => ({ ...old, message: value }));
                  }
                }}
              />

              <button
                type="submit"
                disabled={dialogSubmitting}
                className="w-full rounded-full bg-[#800000] px-6 py-3.5 font-bold text-white hover:bg-black disabled:opacity-60"
              >
                {dialogSubmitting ? "Sending..." : "Send Request"}
              </button>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}