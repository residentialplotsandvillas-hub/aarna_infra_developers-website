"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type PopupType = "callback" | "enquiry" | null;

const siteUrl = "https://aarnainfradevelopers.com";
const pageUrl = `${siteUrl}/contact.html`;

const projectOptions = [
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

const HIGHLIGHTS = [
  { value: "24–48 Hrs", label: "Response Time" },
  { value: "Mon–Sat", label: "9 AM – 7 PM" },
  { value: "Madhapur", label: "Office Location" },
  { value: "Site Visits", label: "By Appointment" },
];

const FAQS = [
  {
    q: "How can I contact Aarna Infra Developers?",
    a: "You can call +91 99593 54255 or +91 73373 17289, email info@aarnainfradevelopers.com, or visit our office at #101, Road No: 10, Kakatiya Hills, Madhapur, Hyderabad – 500081. You can also message us on WhatsApp using the floating button on this page.",
  },
  {
    q: "What are your office hours?",
    a: "Our team is generally available Monday to Saturday, 9 AM to 7 PM. Site visits can be scheduled by appointment on these days. For urgent enquiries outside these hours, WhatsApp is usually the fastest way to reach us.",
  },
  {
    q: "Do you charge for site visits?",
    a: "Site visits for listed projects are coordinated free of charge. Contact our team with your preferred dates and locations, and we will help arrange a visit so you can see the project, layout and surroundings in person.",
  },
  {
    q: "Where is your office located in Hyderabad?",
    a: "Our office is at #101, Road No: 10, Kakatiya Hills, Madhapur, Hyderabad – 500081, Telangana. You can view the location on the Google Map embedded on this page for directions.",
  },
  {
    q: "How quickly will I get a response to my enquiry?",
    a: "Most enquiries are responded to within 24–48 hours on business days. If your matter is urgent, calling us directly is the fastest way to get a response.",
  },
  {
    q: "Can I visit the site before buying a plot or villa?",
    a: "Yes. We recommend site visits before any purchase decision. Our team coordinates visits with you and can walk you through the layout, surroundings and access roads during the visit.",
  },
  {
    q: "What property types does Aarna Infra Developers offer?",
    a: "We list open plots, villas, apartments and farmland options across Hyderabad and nearby areas including Shadnagar, Kadthal, Kothur, Kollur, Mokila, Tellapur and Madhapur. Project availability changes, so contact our team to confirm current options.",
  },
  {
    q: "Do you support NRI buyers?",
    a: "Yes. Many NRI and out-of-state buyers explore property with us remotely. We can share project details, coordinate site visits through a trusted contact and help guide the documentation review process.",
  },
  {
    q: "Can I get a bank loan for a plot or apartment?",
    a: "Several banks and housing finance companies offer loans for approved plots and apartments. Our team can help coordinate information, but loan eligibility, funding and approval terms should be confirmed directly with your preferred lender.",
  },
  {
    q: "How do I request a callback?",
    a: "Click the 'Request a Call Back' button on this page, fill in your name, email, phone number and a brief message, and submit. Our team will contact you within 24–48 hours on business days.",
  },
];

const inputClass =
  "w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-black outline-none transition placeholder:text-black/40 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      parameters?: Record<string, string>,
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

export default function ContactClient() {
  const [popup, setPopup] = useState<PopupType>(null);
  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  function openPopup(type: Exclude<PopupType, null>) {
    setPopup(type);
    setFormMessage("");
    setFormSuccess(false);
  }

  function closePopup() {
    setPopup(null);
    setFormMessage("");
    setFormSuccess(false);
  }

  async function submitForm(
    event: FormEvent<HTMLFormElement>,
    endpoint: string,
  ) {
    event.preventDefault();

    if (loading) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") || "").trim();

    if (!/^[0-9]{10}$/.test(phone)) {
      setFormMessage("Please enter a valid 10-digit mobile number.");
      setFormSuccess(false);
      return;
    }

    setLoading(true);
    setFormMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
      });

      const contentType = response.headers.get("content-type") || "";
      let result: { success?: boolean; message?: string } | null = null;

      if (contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const responseText = await response.text();
        if (responseText.trim()) {
          try {
            result = JSON.parse(responseText);
          } catch {
            result = null;
          }
        }
      }

      if (!response.ok || result?.success !== true) {
        throw new Error(
          result?.message ||
            "We couldn't confirm your submission. Please try again or call us.",
        );
      }

      setFormSuccess(true);
      setFormMessage(
        result.message || "Thank you! Your message has been sent.",
      );
      form.reset();

      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-457637666/abRICJT26e0BEKL-m9oB",
        });
      }
    } catch (error) {
      setFormSuccess(false);
      setFormMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${siteUrl}/#organization`,
    name: "Aarna Infra Developers",
    url: siteUrl,
    logo: `${siteUrl}/assets/img/Logo.jpg`,
    image: `${siteUrl}/assets/img/Logo.jpg`,
    telephone: "+91-9959354255",
    email: "info@aarnainfradevelopers.com",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "#101, Road No: 10, Kakatiya Hills, Madhapur",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500081",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.4440149",
      longitude: "78.3965193",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9959354255",
        contactType: "Customer Support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Telugu"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-7337317289",
        contactType: "Sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Telugu"],
      },
    ],
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
        name: "Contact",
        item: pageUrl,
      },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${pageUrl}#contact`,
    name: "Contact Aarna Infra Developers",
    description:
      "Contact Aarna Infra Developers for residential plots, apartments, villas and real estate projects in Hyderabad. Call, email or visit our Madhapur office.",
    url: pageUrl,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Aarna Infra Developers",
    },
    about: {
      "@id": `${siteUrl}/#organization`,
    },
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

  const schemas = [
    organizationSchema,
    breadcrumbSchema,
    contactPageSchema,
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
              We&apos;re Here to Help
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              Contact Us
              <span className="mt-2 block text-[#800000]">
                Aarna Infra Developers
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 sm:text-lg">
              Contact Aarna Infra Developers for premium residential plots,
              apartments, villas and real estate projects in Hyderabad. Our
              team is available to answer your questions, arrange site visits
              and share project details.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+919959354255"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#800000] px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
              >
                <span aria-hidden="true">☎</span>
                Call 9959354255
              </a>

              <a
                href="https://wa.me/919959354255"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
              >
                Chat on WhatsApp
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
              <span className="text-[#800000]">Contact</span>
            </nav>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#FFFF00] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
              <img
                src="/assets/img/ongoing-projects/Golden-Terra.jpg"
                alt="Contact Aarna Infra Developers for property in Hyderabad"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
                fetchPriority="high"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/50 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
                  Madhapur Office
                </p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">
                  Mon–Sat · 9 AM to 7 PM
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Site visits by appointment
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

      {/* CONTACT CARDS */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Get in Touch
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Ways to Reach Us
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Choose the contact method that works best for you — call, email,
              visit our office or message us on WhatsApp.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <article className="group rounded-2xl border border-black/10 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#800000]/30 hover:shadow-xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFFF00] text-2xl text-[#800000]">
                ⌖
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-[#800000]">
                Our Address
              </h3>
              <p className="mt-2 text-sm leading-6 text-black/70">
                #101, Road No: 10, Kakatiya Hills, Madhapur, Hyderabad –
                500081, Telangana
              </p>
            </article>

            <article className="group rounded-2xl border border-black/10 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#800000]/30 hover:shadow-xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFFF00] text-2xl text-[#800000]">
                ✉
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-[#800000]">
                Email Us
              </h3>
              <a
                href="mailto:info@aarnainfradevelopers.com"
                className="mt-2 inline-block break-all text-sm text-black/70 hover:text-[#800000]"
              >
                info@aarnainfradevelopers.com
              </a>
            </article>

            <article className="group rounded-2xl border border-black/10 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#800000]/30 hover:shadow-xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFFF00] text-2xl text-[#800000]">
                ☎
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-[#800000]">
                Call Us
              </h3>
              <div className="mt-2 space-y-1 text-sm">
                <a
                  href="tel:+917337317289"
                  className="block text-black/70 hover:text-[#800000]"
                >
                  7337317289
                </a>
                <a
                  href="tel:+919959354255"
                  className="block text-black/70 hover:text-[#800000]"
                >
                  9959354255
                </a>
              </div>
            </article>

            <article className="group rounded-2xl border border-black/10 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#800000]/30 hover:shadow-xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-2xl text-white">
                ◉
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-[#800000]">
                WhatsApp Us
              </h3>
              <p className="mt-2 text-sm text-black/70">
                Have a property enquiry?
              </p>
              <a
                href="https://wa.me/919959354255"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-semibold text-[#800000] hover:underline"
              >
                Start a conversation
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* MAP + FORM */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <div className="border-b border-black/10 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
                Visit Us
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#800000] sm:text-3xl">
                Find Us on the Map
              </h2>
              <p className="mt-2 text-sm text-black/60">
                View our office location in Madhapur, Hyderabad.
              </p>
            </div>
            <iframe
              title="Aarna Infra Developers office map — Jaya Kesav Avenue, Madhapur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.5819649730126!2d78.39651936954749!3d17.44401499896579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91fab879e293%3A0x75c9f309b2e44267!2sJaya%20Kesav%20Avenue!5e0!3m2!1sen!2sin!4v1770558404007!5m2!1sen!2sin"
              className="h-[384px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Send a Message
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#800000] sm:text-3xl">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm leading-6 text-black/60">
              Fill out the form and our team will get back to you within 24–48
              hours.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => submitForm(event, "/forms/contact.php")}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className={inputClass}
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                maxLength={150}
                className={inputClass}
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                required
                maxLength={3000}
                className={`${inputClass} resize-y`}
              />

              {formMessage && (
                <p
                  role="status"
                  className={`rounded-lg p-3 text-sm ${
                    formSuccess
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {formMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#800000] px-6 py-3.5 font-bold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl rounded-3xl border border-black/10 bg-white p-6 sm:p-10 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#800000]">
              Contact Guide
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Contact Aarna Infra Developers in Hyderabad
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-black/80">
              <p>
                If you are looking for residential open plots, villas,
                apartments or farmland in Hyderabad and nearby areas, our team
                is here to help. Aarna Infra Developers works with buyers to
                share project details, coordinate site visits and guide the
                property search — whether you are a first-time buyer, an
                investor, or an NRI exploring options remotely.
              </p>

              <p>
                You can reach us by phone at{" "}
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
                , email{" "}
                <a
                  href="mailto:info@aarnainfradevelopers.com"
                  className="font-bold text-[#800000] underline underline-offset-4"
                >
                  info@aarnainfradevelopers.com
                </a>
                , or visit our office in Madhapur. Our team is available
                Monday to Saturday, 9 AM to 7 PM, and responds to most
                enquiries within 24–48 hours.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Our Office in Madhapur, Hyderabad
              </h3>

              <p>
                Our office is located at #101, Road No: 10, Kakatiya Hills,
                Madhapur, Hyderabad – 500081, Telangana. Madhapur is part of
                Hyderabad&apos;s IT and business corridor, making it convenient
                to visit us from Gachibowli, HITEC City, Kondapur, Jubilee
                Hills, Banjara Hills and other parts of the city.
              </p>

              <p>
                If you are visiting for a specific project discussion, we
                recommend calling ahead so we can ensure the right team member
                is available and prepare the project documents you need.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                What Our Team Can Help With
              </h3>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Project information:</strong> Details about listed
                  open plot, villa, apartment and farmland projects across
                  Hyderabad and nearby areas.
                </li>
                <li>
                  <strong>Site visits:</strong> Coordination for site visits so
                  you can see the project, layout and surroundings in person.
                </li>
                <li>
                  <strong>Documentation guidance:</strong> Information about
                  approvals, title records and registration details from
                  verified project data.
                </li>
                <li>
                  <strong>Loan coordination:</strong> Guidance on connecting
                  with banks and housing finance companies for plot and
                  apartment loans.
                </li>
                <li>
                  <strong>NRI support:</strong> Remote coordination for NRI
                  buyers through documented project information and site-visit
                  arrangements.
                </li>
                <li>
                  <strong>Channel partnership:</strong> Registration and
                  onboarding for real estate agents interested in promoting our
                  projects.
                </li>
              </ul>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Locations We Serve
              </h3>

              <p>
                We list projects across Hyderabad and nearby growth corridors
                including Shadnagar, Kadthal, Sadashivpet, Jadcherla, Kothur,
                Balanagar, Kollur, Mokila, Tellapur, Shamshabad, Madhapur and
                Gachibowli. Availability changes as projects progress, so
                contact our team to confirm current options in your preferred
                area.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Prefer WhatsApp or a Callback?
              </h3>

              <p>
                If you prefer a quick conversation, message us on WhatsApp
                using the floating button on this page, or click the
                &quot;Request a Call Back&quot; button below to leave your
                details. Our team will contact you within 24–48 hours on
                business days.
              </p>

              <p>
                For urgent enquiries, calling us directly at{" "}
                <a
                  href="tel:+919959354255"
                  className="font-bold text-[#800000] underline underline-offset-4"
                >
                  +91 99593 54255
                </a>{" "}
                is the fastest way to reach us.
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
              Contact FAQs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Quick answers to common questions about reaching our team,
              office hours and site visits.
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
                Let&apos;s Find Your Perfect Property
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
                Ready to Talk Property?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-black/70 sm:text-lg">
                Speak with our team about residential plots, apartments,
                villas and other real estate projects in Hyderabad.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                type="button"
                onClick={() => openPopup("callback")}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#800000] px-7 py-3 font-extrabold text-white transition hover:-translate-y-1 hover:bg-black"
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

      {/* POPUP DIALOG */}
      {popup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setPopup(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative my-auto max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close popup"
              className="absolute right-4 top-3 text-3xl text-black/50 hover:text-black"
            >
              &times;
            </button>

            <h2
              id="contact-modal-title"
              className="pr-8 text-2xl font-extrabold text-[#800000]"
            >
              {popup === "callback" ? "Request a Call Back" : "Enquire Now"}
            </h2>
            <p className="mt-2 text-sm text-black/60">
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(event) =>
                submitForm(
                  event,
                  popup === "callback"
                    ? "/forms/request.php"
                    : "/forms/enquiry.php",
                )
              }
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                autoComplete="name"
                required
                maxLength={100}
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                required
                maxLength={254}
                className={inputClass}
              />
              <input
                type="tel"
                name="phone"
                placeholder="10-digit Mobile Number"
                inputMode="numeric"
                pattern="[0-9]{10}"
                minLength={10}
                maxLength={10}
                required
                className={inputClass}
              />

              {popup === "enquiry" && (
                <select
                  name="project"
                  defaultValue=""
                  required
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select Project
                  </option>
                  {projectOptions.map((project) => (
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
                required
                maxLength={2000}
                className={`${inputClass} resize-y`}
              />

              {formMessage && (
                <p
                  role="status"
                  className={`rounded-lg p-3 text-sm ${
                    formSuccess
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {formMessage}
                </p>
              )}

              {formSuccess ? (
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
                  className="w-full rounded-full bg-[#800000] px-5 py-3 font-bold text-white hover:bg-black disabled:opacity-60"
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