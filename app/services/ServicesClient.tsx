
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const projects = [
  "Yuva Park",
  "Magadha",
  "Karthikeya Green County",
  "Golden City",
  "Golden Terra",
  "Golden Valley",
  "Green Meadows",
  "GNR's Vasavi Nirvana",
  "Myscape Songs Of The Sun",
  "Prestige Spring Heights",
  "The Prestige City",
  "Godrej Madison Avenue",
  "SLN Sundaram Palm Villas",
  "Oxy Flora",
  "Golden Farm",
];

const services = [
  {
    number: "01",
    icon: "⌂",
    title: "Real Estate Appraisal",
    description:
      "For over 12 years we have consistently delivered an unrivaled portfolio of properties to people who want a hassle-free moving experience in and around the world.",
  },
  {
    number: "02",
    icon: "✓",
    title: "Premium Quality",
    description:
      "We are a safe and secure property advisory firm and a member of RERA. It aims to protect the interests of plots, villas, homes, and flat buyers and promote real estate investments. All of which gives you peace of mind.",
  },
  {
    number: "03",
    icon: "◎",
    title: "Customer Support",
    description:
      "Each member of our team is highly experienced in the market and possesses exceptional local knowledge, guaranteeing a hassle-free and smooth moving experience for our clients.",
  },
  {
    number: "04",
    icon: "◷",
    title: "We Save Your Time",
    description:
      "If the selected property is in need of improvement to bring it up to your required specification, no problem, our in-house maintenance team will be on hand to make the changes.",
  },
];

export default function ServicesClient() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [formType, setFormType] = useState<"callback" | "enquiry">(
    "enquiry"
  );
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!popupOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setPopupOpen(false);
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [popupOpen]);

  function openPopup(type: "callback" | "enquiry") {
    setFormType(type);
    setSubmitted(false);
    setPopupOpen(true);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Connect this form to your actual backend before using it in production.
    // The original HTML submits to PHP endpoints, which Next.js does not
    // automatically execute.
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (!name || !email || !/^\d{10}$/.test(phone)) {
      alert("Please enter your name, valid email, and 10-digit mobile number.");
      return;
    }

    alert(
      "The form UI is ready, but submission is not connected yet. Please connect your backend."
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#333333]">
      {/* Page introduction */}
      <section className="relative overflow-hidden bg-[#800000] px-5 pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-white/5" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[50px] border-[#FFFF00]/10" />

        <div className="relative mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-sm text-white/80"
          >
            <Link href="/" className="transition hover:text-[#FFFF00]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-semibold text-[#FFFF00]">Services</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FFFF00]/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00] sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#FFFF00]" />
              Aarna Infra Developers
            </p>

            <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Real Estate Services in Hyderabad
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Explore comprehensive real estate services, property
              appraisal, premium quality projects, customer support, and
              investment solutions for residential plots, villas, and
              apartments.
            </p>

            <button
              type="button"
              onClick={() => openPopup("enquiry")}
              className="mt-8 inline-flex items-center justify-center rounded-md bg-[#FFFF00] px-7 py-3.5 font-bold text-[#800000] shadow-lg transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              Enquire Now <span className="ml-2" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#800000]">
              What We Offer
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#222222] sm:text-4xl">
              Our Real Estate Services
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#FFFF00]" />

            <p className="mt-5 text-base leading-7 text-gray-600">
              From property guidance to customer support, we help make your
              property journey more convenient.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-[0_8px_35px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#800000]/20 hover:shadow-[0_18px_45px_rgba(128,0,0,0.12)] sm:p-7"
              >
                <span className="absolute right-5 top-4 text-sm font-bold tracking-widest text-gray-200">
                  {service.number}
                </span>

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFFF00]/40 text-3xl font-bold text-[#800000] transition group-hover:bg-[#800000] group-hover:text-[#FFFF00]">
                  <span aria-hidden="true">{service.icon}</span>
                </div>

                <h3 className="mb-4 text-xl font-bold leading-snug text-[#800000]">
                  {service.title}
                </h3>

                <p className="flex-1 text-sm leading-7 text-gray-600 sm:text-base">
                  {service.description}
                </p>

                <button
                  type="button"
                  onClick={() => openPopup("enquiry")}
                  className="mt-6 inline-flex w-fit items-center gap-2 border-b-2 border-[#FFFF00] pb-1 text-sm font-bold text-[#800000] transition hover:gap-3"
                >
                  Know More <span aria-hidden="true">→</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact call to action */}
      <section className="px-5 pb-16 sm:pb-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl bg-[#800000] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:p-14">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#FFFF00]">
              Let’s Talk Property
            </p>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Looking for the right property in Hyderabad?
            </h2>
            <p className="mt-3 leading-7 text-white/80">
              Contact our team to discuss your requirements and explore
              available projects.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="tel:+919959354255"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-bold text-[#800000] transition hover:bg-gray-100"
            >
              Call 9959354255
            </a>

            <button
              type="button"
              onClick={() => openPopup("callback")}
              className="inline-flex items-center justify-center rounded-lg bg-[#FFFF00] px-6 py-3 font-bold text-[#800000] transition hover:bg-white"
            >
              Request a Callback
            </button>
          </div>
        </div>
      </section>

      {/* Enquiry popup */}
      {popupOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setPopupOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="relative my-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setPopupOpen(false)}
              aria-label="Close enquiry form"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-600 transition hover:bg-[#800000] hover:text-white"
            >
              ×
            </button>

            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#800000]">
              Aarna Infra Developers
            </p>

            <h2
              id="enquiry-title"
              className="pr-8 text-2xl font-extrabold text-gray-900"
            >
              {formType === "callback" ? "Request a Call Back" : "Enquire Now"}
            </h2>

            <p className="mb-6 mt-2 text-sm leading-6 text-gray-600">
              Fill out the form below and our team can follow up on your
              property enquiry.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="service-name" className="mb-1.5 block text-sm font-semibold">
                  Full Name
                </label>
                <input
                  id="service-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/10"
                />
              </div>

              <div>
                <label htmlFor="service-email" className="mb-1.5 block text-sm font-semibold">
                  Email Address
                </label>
                <input
                  id="service-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/10"
                />
              </div>

              <div>
                <label htmlFor="service-phone" className="mb-1.5 block text-sm font-semibold">
                  Mobile Number
                </label>
                <input
                  id="service-phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                  placeholder="10-digit mobile number"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/10"
                />
              </div>

              {formType === "enquiry" && (
                <div>
                  <label htmlFor="service-project" className="mb-1.5 block text-sm font-semibold">
                    Project Name
                  </label>
                  <select
                    id="service-project"
                    name="project"
                    defaultValue=""
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/10"
                  >
                    <option value="" disabled>Select a project</option>
                    {projects.map((project) => (
                      <option key={project} value={project}>
                        {project}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="service-message" className="mb-1.5 block text-sm font-semibold">
                  Your Message
                </label>
                <textarea
                  id="service-message"
                  name="message"
                  rows={3}
                  required
                  placeholder="Tell us about your requirements"
                  className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/10"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#800000] px-5 py-3.5 font-bold text-white transition hover:bg-[#600000] focus:outline-none focus:ring-2 focus:ring-[#800000] focus:ring-offset-2"
              >
                Submit Enquiry
              </button>

              <p className="text-center text-xs leading-5 text-gray-500">
                Prefer to speak directly?{" "}
                <a
                  href="tel:+919959354255"
                  className="font-bold text-[#800000] underline"
                >
                  Call 9959354255
                </a>
              </p>
            </form>
          </section>
        </div>
      )}

      {/* Floating contact buttons */}
      <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-7 sm:right-6">
        <a
          href="https://wa.me/919959354255"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Aarna Infra Developers on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-xl font-bold text-white shadow-lg transition hover:scale-110"
        >
          W
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
