import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://aarnainfradevelopers.com";
const PHONE = "+919959354255";
const WHATSAPP = "https://wa.me/919959354255";
const slug = "myscape-songs-of-the-sun";

const photos = [
  {
    src: "/assets/img/projects/apartments/Myscape-Songs-Of-The-Sun-3.jpg",
    alt: "Myscape Songs Of The Sun residential project in Kokapet",
  },
  {
    src: "/assets/img/projects/apartments/Myscape-Songs-Of-The-Sun-1.jpg",
    alt: "Myscape Songs Of The Sun apartment exterior view",
  },
  {
    src: "/assets/img/projects/apartments/Myscape-Songs-Of-The-Sun-2.jpg",
    alt: "Myscape Songs Of The Sun residential tower",
  },
];

const amenities = [
  "Business Lounge",
  "Café",
  "Indoor Games",
  "Children's Play Area",
  "Guest Rooms",
  "Clubhouse",
  "Terrace Swimming Pool",
  "Multipurpose Hall",
];

const locationHighlights = [
  "Near the Financial District",
  "Close to IT hubs",
  "Nearby international schools",
  "Restaurants and malls in the surrounding area",
];

export const metadata: Metadata = {
  title:
    "Myscape Songs Of The Sun | 3 & 4 BHK Apartments in Kokapet, Hyderabad",
  description:
    "Explore Myscape Songs Of The Sun near Hyderabad's Financial District. View listed 3 and 4 BHK sizes, amenities, location highlights, RERA reference and request a site visit.",
  keywords: [
    "Myscape Songs Of The Sun",
    "Myscape Songs Of The Sun Kokapet",
    "3 BHK apartments in Kokapet",
    "4 BHK apartments in Hyderabad",
    "luxury apartments near Financial District Hyderabad",
    "apartments on ISB Road",
    "Myscape RERA P02400008721",
    "Aarna Infra Developers",
  ],
  alternates: {
    canonical: `${SITE_URL}/projects/${slug}`,
  },
  openGraph: {
    title: "Myscape Songs Of The Sun | Aarna Infra Developers",
    description:
      "Explore project information, apartment sizes, amenities and location highlights for Myscape Songs Of The Sun.",
    url: `${SITE_URL}/projects/${slug}`,
    siteName: "Aarna Infra Developers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}${photos[0].src}`,
        alt: photos[0].alt,
      },
    ],
  },
};

const faqs = [
  {
    question: "Where is Myscape Songs Of The Sun located?",
    answer:
      "The supplied project information lists the location as near the Financial District, Hyderabad, with ISB Road, Kokapet as the landmark. Confirm the exact site address before visiting.",
  },
  {
    question: "What apartment configurations are listed?",
    answer:
      "The supplied content lists 3 BHK apartments of 2,900 sq. ft. and 4 BHK apartments of 3,300 sq. ft. Confirm current specifications directly with the project team.",
  },
  {
    question: "What is the RERA number shown for this project?",
    answer:
      "The supplied project content lists RERA number P02400008721. Verify the registration and current project details through the official RERA source before making a decision.",
  },
  {
    question: "How can I arrange a site visit?",
    answer:
      "Contact Aarna Infra Developers by phone or WhatsApp to ask about current availability and arrange a suitable site-visit date and time.",
  },
];

export default function MyscapeSongsOfTheSunPage() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Myscape Songs Of The Sun",
    description:
      "Project information for Myscape Songs Of The Sun near the Financial District, Hyderabad.",
    url: `${SITE_URL}/projects/${slug}`,
    about: {
      "@type": "Thing",
      name: "Myscape Songs Of The Sun",
    },
    publisher: {
      "@type": "Organization",
      name: "Aarna Infra Developers",
      url: SITE_URL,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${SITE_URL}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Myscape Songs Of The Sun",
        item: `${SITE_URL}/projects/${slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const schemas = [projectSchema, breadcrumbSchema, faqSchema];

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F6F2] text-[#183323]">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-5 pt-6 text-sm text-gray-600 sm:px-8 lg:px-12"
      >
        <Link href="/" className="transition hover:text-[#800000]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/projects" className="transition hover:text-[#800000]">
          Projects
        </Link>
        <span className="mx-2">/</span>
        <span aria-current="page" className="font-semibold text-[#800000]">
          Myscape Songs Of The Sun
        </span>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-[#183323] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#FFFF00]/10 blur-3xl"
          />
          <div className="relative max-w-4xl">
            <span className="inline-flex rounded-full border border-[#FFFF00]/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
              Premium Apartments
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Myscape Songs Of The Sun
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
              Explore the supplied details for this residential project near
              the Financial District, Hyderabad, including listed apartment
              configurations, amenities and location highlights.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent("Hello, I would like details about Myscape Songs Of The Sun, including current pricing, availability and a site visit.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#FFFF00] px-6 py-3 font-extrabold text-[#183323] transition hover:bg-yellow-300"
              >
                Enquire on WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-bold text-white transition hover:border-[#FFFF00] hover:text-[#FFFF00]"
              >
                Call +91 99593 54255
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project gallery */}
      <section
        aria-label="Myscape Songs Of The Sun gallery"
        className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 lg:px-12"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Quick summary */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#800000]">
            At a Glance
          </p>
          <h2 className="mt-3 text-2xl font-black sm:text-3xl">
            Quick Project Summary
          </h2>
          <dl className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Location", "Near Financial District, Hyderabad"],
              ["Landmark", "ISB Road, Kokapet"],
              ["Property Type", "Apartments"],
              ["Project Size", "6 acres"],
              ["Flat Sizes", "3 BHK: 2,900 sq. ft.; 4 BHK: 3,300 sq. ft."],
              ["Total Units", "592 residences"],
              ["Towers", "4 towers; 37 floors each (as supplied)"],
              ["Approvals", "HMDA & RERA (as supplied)"],
              ["RERA Number", "P02400008721"],
              ["Bank Loan", "Listed as available; confirm with lender"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-black/10 bg-[#F7F6F2] p-4"
              >
                <dt className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  {label}
                </dt>
                <dd className="mt-2 text-sm font-bold leading-6 text-[#183323]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-xs leading-6 text-gray-500">
            Project specifications and registration details above are based on
            the supplied content. Confirm all details with the project team
            and official sources before making a purchase decision.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-7 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-2xl border border-black/10 bg-white p-6 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#800000]">
              Project Description
            </p>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              About Myscape Songs Of The Sun
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-8 text-gray-700 sm:text-base">
              <p>
                Myscape Songs Of The Sun is described in the supplied project
                content as a residential development featuring four towers
                with 3 BHK apartments listed at 2,900 sq. ft. and 4 BHK
                apartments listed at 3,300 sq. ft. The source states that the
                residences are arranged at tower corners, with four units per
                floor, and highlights indoor-outdoor integration and natural
                light.
              </p>
              <p>
                The supplied details list 592 residences across four towers
                rising to 37 floors, with open spaces and landscaped areas
                intended for a range of household activities. The architectural
                design and tower arrangement are presented as distinguishing
                features of the project.
              </p>
              <p>
                If you are considering an apartment near Kokapet or the
                Financial District, ask the project team to confirm current
                inventory, apartment plans, carpet and saleable areas, total
                costs, maintenance charges and applicable documentation.
              </p>
            </div>
          </article>

          <aside className="h-fit rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-black text-[#800000]">
              Request Project Details
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Ask about current pricing, apartment availability, floor plans
              and site-visit arrangements.
            </p>
            <Link
              href="/contact"
              className="mt-5 flex min-h-12 items-center justify-center rounded-xl bg-[#800000] px-5 py-3 text-center font-bold text-white transition hover:bg-[#350000]"
            >
              Contact Our Team
            </Link>
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent("Please share the latest brochure and details for Myscape Songs Of The Sun.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex min-h-12 items-center justify-center rounded-xl border border-[#183323]/20 px-5 py-3 text-center font-bold text-[#183323] transition hover:bg-[#183323] hover:text-white"
            >
              Request Brochure on WhatsApp
            </a>
          </aside>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#800000]">
            Lifestyle Features
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Project Amenities
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-3 rounded-xl border border-black/10 bg-[#F7F6F2] p-5"
              >
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#183323] font-black text-[#FFFF00]"
                >
                  ✓
                </span>
                <span className="font-bold">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location highlights */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <h2 className="text-3xl font-black sm:text-4xl">
          Location Highlights
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
          The supplied content positions the project near Hyderabad&apos;s
          Financial District and Kokapet. Confirm exact distances and travel
          times before planning a visit.
        </p>
        <ul className="mt-7 grid gap-4 sm:grid-cols-2">
          {locationHighlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-xl border border-black/10 bg-white p-5 font-semibold"
            >
              <span className="mr-3 text-[#800000]">●</span>
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      {/* Layout plan */}
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#800000]">
              Project Layout
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Myscape Songs Of The Sun Master Plan
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              View the supplied layout image. Confirm the latest approved plan
              and apartment specifications with the project team.
            </p>
          </div>
          <a
            href="/assets/img/layouts/Myscape-Songs-of-the-Sun%20Layout.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 block overflow-hidden rounded-2xl border border-black/10 bg-[#F7F6F2]"
          >
            <Image
              src="/assets/img/layouts/Myscape-Songs-of-the-Sun%20Layout.jpg"
              alt="Myscape Songs Of The Sun project layout plan"
              width={1400}
              height={1000}
              className="mx-auto h-auto max-h-[750px] w-full object-contain"
            />
          </a>
        </div>
      </section>

      {/* Site visit */}
      <section id="site-visit" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-8 rounded-3xl bg-[#183323] p-6 text-white sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
              Visit the Project
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Book a Site Visit
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/75 sm:text-base">
              Interested in Myscape Songs Of The Sun? Contact Aarna Infra
              Developers to confirm current availability and arrange a suitable
              visit date and time.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#FFFF00] px-6 py-3 font-extrabold text-[#183323] hover:bg-yellow-300"
            >
              Call to Arrange a Visit
            </a>
          </div>

          <form
            action={WHATSAPP}
            method="get"
            target="_blank"
            className="rounded-2xl bg-white p-5 text-[#183323] sm:p-7"
          >
            <h3 className="text-xl font-black">Request a Visit</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Complete the details below. WhatsApp will open with your enquiry
              message for you to send.
            </p>

            <label htmlFor="visitor-name" className="mt-5 block text-sm font-bold">
              Your Name *
            </label>
            <input
              id="visitor-name"
              name="visitorName"
              required
              placeholder="Enter your name"
              className="mt-2 min-h-12 w-full rounded-lg border border-gray-300 px-4 outline-none focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/15"
            />

            <label htmlFor="visitor-phone" className="mt-4 block text-sm font-bold">
              Mobile Number *
            </label>
            <input
              id="visitor-phone"
              name="visitorPhone"
              type="tel"
              required
              pattern="[0-9+ ()-]{10,16}"
              placeholder="Enter your mobile number"
              className="mt-2 min-h-12 w-full rounded-lg border border-gray-300 px-4 outline-none focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/15"
            />

            <label htmlFor="visit-date" className="mt-4 block text-sm font-bold">
              Preferred Visit Date *
            </label>
            <input
              id="visit-date"
              name="visitDate"
              type="date"
              required
              min="2026-10-17"
              className="mt-2 min-h-12 w-full rounded-lg border border-gray-300 px-4 outline-none focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/15"
            />

            <label htmlFor="visit-time" className="mt-4 block text-sm font-bold">
              Select Visit Time *
            </label>
            <select
              id="visit-time"
              name="visitTime"
              required
              defaultValue=""
              className="mt-2 min-h-12 w-full rounded-lg border border-gray-300 bg-white px-4 outline-none focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/15"
            >
              <option value="" disabled>Select a time</option>
              {[
                "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM",
                "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM",
                "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
                "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
                "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
                "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
                "06:00 PM",
              ].map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>

            <button
              type="submit"
              className="mt-6 flex min-h-12 w-full items-center justify-center rounded-xl bg-[#800000] px-5 py-3 font-extrabold text-white transition hover:bg-[#350000]"
              onClick={(event) => {
                const form = event.currentTarget.form;
                if (!form?.reportValidity()) {
                  event.preventDefault();
                  return;
                }
                const fields = new FormData(form);
                const message = [
                  "Site visit request: Myscape Songs Of The Sun",
                  `Name: ${fields.get("visitorName")}`,
                  `Mobile: ${fields.get("visitorPhone")}`,
                  `Preferred date: ${fields.get("visitDate")}`,
                  `Preferred time: ${fields.get("visitTime")}`,
                ].join("\n");
                event.preventDefault();
                window.open(
                  `${WHATSAPP}?text=${encodeURIComponent(message)}`,
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
            >
              Request Site Visit via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8 sm:pb-20">
        <h2 className="text-center text-3xl font-black sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-xl border border-black/10 bg-white p-5"
            >
              <summary className="cursor-pointer font-bold text-[#183323]">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#800000] px-5 py-12 text-white sm:px-8 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-black sm:text-3xl">
              Need More Information?
            </h2>
            <p className="mt-2 text-sm leading-7 text-white/80">
              Contact Aarna Infra Developers for updated project information.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#FFFF00] px-6 py-3 font-extrabold text-[#183323] hover:bg-yellow-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
