import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GodrejMadisonSiteVisitForm from "./GodrejMadisonSiteVisitForm";

const SITE_URL = "https://aarnainfradevelopers.com";
const WHATSAPP = "https://wa.me/919959354255";
const PHONE = "+919959354255";
const slug = "godrej-madison-avenue";

const photos = [
  {
    src: "/assets/img/projects/apartments/Godrej-Madison-Avenue-1.jpg",
    alt: "Godrej Madison Avenue premium apartments in Kokapet, Hyderabad",
  },
  {
    src: "/assets/img/projects/apartments/Godrej-Madison-Avenue-2.jpg",
    alt: "Godrej Madison Avenue amenities and common areas",
  },
  {
    src: "/assets/img/projects/apartments/Godrej-Madison-Avenue-3.jpg",
    alt: "Godrej Madison Avenue apartment interior view",
  },
];

const amenities = [
  "Club House",
  "Cricket Net",
  "Jogging Track",
  "Pedestrian Pathway",
  "Driveway",
  "Sculpture Court",
  "Pickleball Court",
  "Fire Driveway",
  "Feature Wall",
  "Yoga Court",
  "Car Parking",
  "Indoor & Outdoor Sports",
];

const locationHighlights = [
  ["Schools", "1 Km"],
  ["Colleges", "3 Km"],
  ["Supermarkets", "1.5 Km"],
  ["IT SEZ", "2.5 Km"],
  ["Hospitals", "2 Km"],
  ["Cinemas", "3.5 Km"],
];

const faqs = [
  {
    question: "Where is Godrej Madison Avenue located?",
    answer:
      "Godrej Madison Avenue is located in Kokapet, Hyderabad — one of the city's fastest-growing premium residential corridors with excellent connectivity to the Financial District, Gachibowli and the ORR.",
  },
  {
    question: "What type of apartments are available at Godrej Madison Avenue?",
    answer:
      "The project offers premium 3 BHK apartments with HMDA and RERA approvals. The project features G+50 floors with a clubhouse and a range of modern amenities. Contact our team for current configurations and availability.",
  },
  {
    question: "What are the HMDA and RERA numbers for Godrej Madison Avenue?",
    answer:
      "The listed HMDA number is 011134/BP/HMDA/2919/SKP/2024 and the RERA number is P02400009227. Please independently verify current registration status on the official portals before proceeding.",
  },
  {
    question: "What amenities are available at Godrej Madison Avenue?",
    answer:
      "Amenities include a clubhouse, cricket net, jogging track, pedestrian pathway, sculpture court, pickleball court, yoga court, feature wall, car parking, indoor and outdoor sports, and more.",
  },
  {
    question: "What is the project size of Godrej Madison Avenue?",
    answer:
      "The project is spread across approximately 3 acres with G+50 floors and a clubhouse. The layout is designed for premium living with landscaped spaces and recreational amenities.",
  },
  {
    question: "Is bank loan available for Godrej Madison Avenue?",
    answer:
      "Bank loan availability is typically available for RERA-registered projects like Godrej Madison Avenue. Loan approval depends on the lender's eligibility criteria and documentation. Our team can help coordinate information with banks.",
  },
  {
    question: "How do I book a site visit?",
    answer:
      "Complete the site-visit form on this page to open a WhatsApp message with your contact details and preferred visit date and time. Our team will confirm your visit.",
  },
];

export const metadata: Metadata = {
  title:
    "Godrej Madison Avenue — 3 BHK Apartments in Kokapet, Hyderabad | Aarna Infra",
  description:
    "Godrej Madison Avenue — premium 3 BHK apartments for sale in Kokapet, Hyderabad. HMDA & RERA approved project with G+50 floors, clubhouse and world-class amenities. Book a site visit.",
  keywords: [
    "Godrej Madison Avenue",
    "Godrej Madison Avenue Kokapet",
    "3 BHK apartments Kokapet",
    "apartments in Kokapet",
    "HMDA approved apartments Hyderabad",
    "RERA approved flats Kokapet",
    "luxury apartments Hyderabad",
    "premium apartments Kokapet",
    "Godrej Madison Avenue price",
    "Aarna Infra Developers",
  ],
  authors: [{ name: "Aarna Infra Developers" }],
  alternates: {
    canonical: `${SITE_URL}/projects/${slug}`,
  },
  openGraph: {
    title: "Godrej Madison Avenue — 3 BHK Apartments in Kokapet, Hyderabad",
    description:
      "Premium 3 BHK apartments in Kokapet. HMDA & RERA approved project with G+50 floors and modern amenities.",
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
  twitter: {
    card: "summary_large_image",
    title: "Godrej Madison Avenue — 3 BHK Apartments in Kokapet, Hyderabad",
    description:
      "Premium 3 BHK apartments in Kokapet. HMDA & RERA approved project.",
    images: [`${SITE_URL}${photos[0].src}`],
    site: "@Aarnainfradev",
  },
};

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-7">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-800">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

export default function GodrejMadisonPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Aarna Infra Developers",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/img/Logo.jpg`,
    image: `${SITE_URL}/assets/img/Logo.jpg`,
    telephone: "+91-9959354255",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Premnagar, Khairtabad",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500004",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/aarnainfradevelopers",
      "https://www.instagram.com/aarnainfradevelopers/",
      "https://www.youtube.com/@aarnainfradevelopers",
      "https://twitter.com/Aarnainfradev",
      "https://www.linkedin.com/in/aarnainfra-developers-29ab30200",
      "https://telegram.me/aarnainfradevelopers",
    ],
  };

  const apartmentSchema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "Godrej Madison Avenue",
    description:
      "Premium 3 BHK apartments at Kokapet, Hyderabad with HMDA and RERA approvals.",
    image: `${SITE_URL}${photos[0].src}`,
    url: `${SITE_URL}/projects/${slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kokapet",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    numberOfRooms: "3",
    amenityFeature: amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
    })),
    telephone: "+91-9959354255",
    priceRange: "Contact for pricing",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${SITE_URL}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Apartments",
        item: `${SITE_URL}/apartments`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Godrej Madison Avenue",
        item: `${SITE_URL}/projects/${slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const schemas = [
    organizationSchema,
    apartmentSchema,
    breadcrumbSchema,
    faqSchema,
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">
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
      <section className="relative overflow-hidden bg-[#183323] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#183323] via-[#183323] to-[#350000] opacity-95" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-emerald-100">
              <Link href="/" className="hover:text-[#D9FBE0]">
                Home
              </Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-[#D9FBE0]">
                Projects
              </Link>
              <span>/</span>
              <Link href="/apartments" className="hover:text-[#D9FBE0]">
                Apartments
              </Link>
              <span>/</span>
              <span className="text-white">Godrej Madison Avenue</span>
            </div>

            <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D9FBE0]">
              Premium 3 BHK Apartments
            </p>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Godrej Madison Avenue
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/90">
              Premium 3 BHK apartments in Kokapet, Hyderabad — HMDA and RERA
              approved with G+50 floors, a clubhouse and a curated range of
              modern amenities designed for sophisticated urban living.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#site-visit"
                className="inline-flex items-center justify-center rounded-xl bg-[#D9FBE0] px-6 py-3.5 font-extrabold text-[#183323] shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
              >
                Book a Site Visit
              </a>
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent(
                  "Hello Aarna Infra Developers, I would like to know more about Godrej Madison Avenue in Kokapet."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                WhatsApp Enquiry
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-emerald-50">
              <span>✓ HMDA &amp; RERA approved*</span>
              <span>✓ G+50 floors*</span>
              <span>✓ 3 Acres*</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#D9FBE0]/10 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/10 p-2 shadow-2xl">
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                width={1200}
                height={800}
                priority
                className="h-[280px] w-full rounded-2xl object-cover sm:h-[390px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="grid grid-cols-3 gap-2 p-2">
                <div className="rounded-xl bg-white/10 p-3 text-center">
                  <p className="text-xl font-black text-[#D9FBE0]">3 BHK</p>
                  <p className="mt-1 text-xs text-white/80">Configuration</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 text-center">
                  <p className="text-xl font-black text-[#D9FBE0]">G+50</p>
                  <p className="mt-1 text-xs text-white/80">Floors*</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 text-center">
                  <p className="text-xl font-black text-[#D9FBE0]">HMDA</p>
                  <p className="mt-1 text-xs text-white/80">& RERA*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle
          eyebrow="Project at a glance"
          title="Quick Summary"
          description="Key details about Godrej Madison Avenue. Verify current availability, pricing and approvals before making a purchase decision."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Location", "Kokapet, Hyderabad"],
            ["Project Type", "Residential Apartments"],
            ["Approval", "HMDA & RERA"],
            ["HMDA No.", "011134/BP/HMDA/2919/SKP/2024"],
            ["RERA No.", "P02400009227"],
            ["Project Size", "3 Acres"],
            ["Features", "G+50 Floors, Clubhouse"],
            ["Configuration", "3 BHK"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-slate-500">{label}</p>
              <p className="mt-2 break-words font-bold leading-6 text-slate-900">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionTitle eyebrow="About the project" title="Project Description" />
            <p className="leading-8 text-slate-600">
              Godrej Madison Avenue is a premium residential project in
              Kokapet, Hyderabad, offering luxurious living with modern design
              and breathtaking city views. Crafted for elegance and comfort, it
              features high-end specifications, serene green spaces and
              exclusive recreational amenities.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Its prime location in Kokapet ensures seamless connectivity to
              the Financial District, Gachibowli, HITEC City and the ORR —
              making it an ideal choice for a sophisticated urban lifestyle.
              The project is spread across approximately 3 acres with G+50
              floors and a clubhouse.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              *Project details are based on the information supplied and should
              be independently verified with the relevant authorities and sales
              team.
            </p>
          </div>
          <div className="rounded-3xl bg-[#D9FBE0] p-6 sm:p-8">
            <SectionTitle
              eyebrow="Project highlights"
              title="Premium Urban Living in Kokapet"
              description="A quick view of the key features of Godrej Madison Avenue."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "HMDA & RERA approved*",
                "3 BHK premium apartments",
                "G+50 floors with clubhouse*",
                "3-acre gated community*",
                "Curated modern amenities",
                "Prime Kokapet location",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl bg-white/80 p-3 text-sm font-semibold text-[#183323]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#183323] text-white">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle
          eyebrow="Project gallery"
          title="Godrej Madison Avenue Photos"
          description="Explore the project images. Visit the site to understand current development and apartment availability."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className="group overflow-hidden rounded-2xl bg-slate-100"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={900}
                height={650}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <p className="p-3 text-sm font-semibold text-slate-600">
                Project View {index + 1}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section className="bg-[#183323] py-12 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Community features"
            title="Project Amenities"
            description="Amenities listed for Godrej Madison Avenue. Confirm the current list with the sales team during your site visit."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {amenities.map((amenity, index) => (
              <div
                key={amenity}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9FBE0] font-black text-[#183323]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-bold">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION + LAYOUT */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div>
          <SectionTitle
            eyebrow="Connectivity"
            title="Location Highlights"
            description="Distances are indicative and may vary with route and traffic. Kokapet is well-connected to the Financial District, Gachibowli and the ORR."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {locationHighlights.map(([place, distance]) => (
              <div
                key={place}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-4"
              >
                <span className="font-semibold text-slate-700">{place}</span>
                <span className="shrink-0 rounded-full bg-[#D9FBE0] px-3 py-1 text-sm font-extrabold text-[#183323]">
                  {distance}*
                </span>
              </div>
            ))}
          </div>
        </div>
        <div
          id="layout-plan"
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm"
        >
          <Image
            src="/assets/img/layouts/Godrej-Madison-Avenue%20Layout.jpg"
            alt="Godrej Madison Avenue apartment layout plan"
            width={1200}
            height={900}
            className="max-h-[520px] w-full rounded-2xl object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <p className="px-2 py-3 text-sm text-slate-500">
            Godrej Madison Avenue layout plan. Confirm unit layout with the sales
            team before booking.
          </p>
        </div>
      </section>

      {/* VIDEO + MAP */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Explore further"
            title="Project Video & Location Map"
            description="Watch the project video and locate Godrej Madison Avenue on the map."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <video
                controls
                width="100%"
                height="460"
                className="rounded-xl"
                aria-label="Godrej Madison Avenue project video"
              >
                <source
                  src="/assets/img/videos/Godrej-Madison-Avenue.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3807.4144403467644!2d78.33830357516506!3d17.391887483496063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIzJzMwLjgiTiA3OMKwMjAnMjcuMiJF!5e0!3m2!1sen!2sin!4v1742733972583!5m2!1sen!2sin"
                width="100%"
                height="460"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Godrej Madison Avenue location map"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <SectionTitle
          eyebrow="FAQs"
          title="Godrej Madison Avenue – Frequently Asked Questions"
        />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-emerald-200 open:bg-emerald-50/40"
            >
              <summary className="cursor-pointer list-none pr-6 font-bold text-slate-900 marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-xl text-emerald-800 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* SITE VISIT */}
      <section
        id="site-visit"
        className="bg-[#350000] py-12 text-white sm:py-16"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="self-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D9FBE0]">
              Plan your visit
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Book a Site Visit
            </h2>
            <p className="mt-4 leading-7 text-white/80">
              Choose your preferred date and time. WhatsApp will open with your
              enquiry ready to send to the Aarna Infra Developers team.
            </p>
            <div className="mt-7 space-y-3 text-sm text-white/90">
              <p>
                <strong>Phone:</strong>{" "}
                <a className="underline underline-offset-4" href={`tel:${PHONE}`}>
                  {PHONE}
                </a>
              </p>
              <p>
                <strong>Project:</strong> Godrej Madison Avenue
              </p>
              <p>
                <strong>Location:</strong> Kokapet, Hyderabad
              </p>
            </div>
          </div>
          <GodrejMadisonSiteVisitForm />
        </div>
      </section>

      {/* FOOTER STRIP */}
      <section className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2025 Aarna Infra Developers. All rights reserved.</p>
          <Link
            href="/apartments"
            className="font-bold text-[#183323] hover:underline"
          >
            View All Apartments
          </Link>
        </div>
      </section>
    </main>
  );
}