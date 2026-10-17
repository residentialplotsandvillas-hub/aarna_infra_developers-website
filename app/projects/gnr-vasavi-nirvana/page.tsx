import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GnrVasaviSiteVisitForm from "./GnrVasaviSiteVisitForm";

const SITE_URL = "https://aarnainfradevelopers.com";
const WHATSAPP = "https://wa.me/919959354255";
const PHONE = "+919959354255";
const slug = "gnr-vasavi-nirvana";

const photos = [
  {
    src: "/assets/img/projects/apartments/GNR-Vasavi-1.jpg",
    alt: "GNR Vasavi Nirvana exterior view in Attapur, Hyderabad",
  },
  {
    src: "/assets/img/projects/apartments/GNR-Vasavi-2.jpg",
    alt: "GNR Vasavi Nirvana amenities and common areas",
  },
  {
    src: "/assets/img/projects/apartments/GNR-Vasavi-3.jpg",
    alt: "GNR Vasavi Nirvana apartment interior view",
  },
];

const amenities = [
  "Club House",
  "Swimming Pool",
  "Kids Play Area",
  "Cricket Practice Net",
  "Super Market",
  "Landscape Parks",
  "Half Basketball Court",
  "Gym",
  "Open Air Activity",
  "2 Car Parking Per Flat",
  "Access Ramps At Arch",
  "Jogging Track",
  "Indoor & Outdoor Games",
];

const locationHighlights = [
  ["Bajaj Electronics", "3 Mins"],
  ["Asian Cinemas", "5 Mins"],
  ["Spencers", "3 Mins"],
  ["Zoi Hospital", "5 Mins"],
  ["Barista", "10 Mins"],
  ["Airport", "30 Mins"],
];

const faqs = [
  {
    question: "Where is GNR Vasavi Nirvana located?",
    answer:
      "GNR Vasavi Nirvana is located in Attapur, Hyderabad — near Eswar Theatre, Pillar No. 134. The location offers good connectivity to Mehdipatnam, Rajendra Nagar, the ORR and the airport.",
  },
  {
    question: "What type of apartments are available at GNR Vasavi Nirvana?",
    answer:
      "The project offers premium 3 BHK apartments with GHMC and RERA approvals. Flat sizes range from 1395 sq.ft to 2840 sq.ft. Confirm current availability and configurations with our sales team.",
  },
  {
    question: "What is the RERA number for GNR Vasavi Nirvana?",
    answer:
      "The listed RERA registration number is P02500003630. Please independently verify the current registration status on the Telangana RERA portal before proceeding.",
  },
  {
    question: "What amenities are available at GNR Vasavi Nirvana?",
    answer:
      "Amenities include a clubhouse, swimming pool, gym, kids play area, cricket practice net, half basketball court, jogging track, landscape parks, super market, open-air activity space and 2 car parking per flat.",
  },
  {
    question: "Is bank loan available for GNR Vasavi Nirvana?",
    answer:
      "Yes, bank loan availability is listed for this project. Loan approval depends on the lender's eligibility criteria and documentation. Our team can help coordinate information with banks and housing finance companies.",
  },
  {
    question: "What is the price of flats at GNR Vasavi Nirvana?",
    answer:
      "Pricing varies by unit size, floor and current availability. Contact our team for the latest price sheet and current offers on 3 BHK flats at GNR Vasavi Nirvana.",
  },
  {
    question: "How do I book a site visit?",
    answer:
      "Complete the site-visit form on this page to open a WhatsApp message with your contact details and preferred visit date and time. Our team will confirm your visit.",
  },
];

export const metadata: Metadata = {
  title:
    "GNR Vasavi Nirvana — 3 BHK Flats in Attapur, Hyderabad | Aarna Infra",
  description:
    "GNR Vasavi Nirvana — premium 3 BHK flats for sale in Attapur, Hyderabad. GHMC & RERA approved apartments with sizes from 1395 to 2840 sq.ft and world-class amenities. Book a site visit.",
  keywords: [
    "GNR Vasavi Nirvana",
    "GNR Vasavi Nirvana Attapur",
    "flats in Attapur",
    "3 BHK apartments Hyderabad",
    "3 BHK flats Attapur",
    "RERA approved flats Hyderabad",
    "GHMC approved apartments",
    "flats near Attapur",
    "luxury apartments Hyderabad",
    "residential flats Attapur",
    "GNR Vasavi Attapur price",
    "Aarna Infra Developers",
  ],
  authors: [{ name: "Aarna Infra Developers" }],
  alternates: {
    canonical: `${SITE_URL}/projects/${slug}`,
  },
  openGraph: {
    title: "GNR Vasavi Nirvana — 3 BHK Flats in Attapur, Hyderabad",
    description:
      "Premium 3 BHK flats for sale in Attapur. GHMC & RERA approved apartments with modern amenities. Sizes: 1395–2840 sq.ft.",
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
    title: "GNR Vasavi Nirvana — 3 BHK Flats in Attapur, Hyderabad",
    description:
      "Premium 3 BHK flats for sale in Attapur. GHMC & RERA approved apartments.",
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

export default function GnrVasaviPage() {
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
    name: "GNR Vasavi Nirvana",
    description:
      "Premium 3 BHK flats at Attapur, Hyderabad with GHMC and RERA approvals.",
    image: `${SITE_URL}${photos[0].src}`,
    url: `${SITE_URL}/projects/${slug}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Eswar Theatre, Pillar No: 134",
      addressLocality: "Attapur",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    numberOfRooms: "3",
    floorSize: {
      "@type": "QuantitativeValue",
      value: "1395-2840",
      unitCode: "FTK",
    },
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
        name: "GNR Vasavi Nirvana",
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
              <span className="text-white">GNR Vasavi Nirvana</span>
            </div>

            <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D9FBE0]">
              Premium 3 BHK Apartments
            </p>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              GNR Vasavi Nirvana
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/90">
              Premium 3 BHK flats at Attapur, Hyderabad — GHMC and RERA
              approved apartments with spacious layouts from 1395 to 2840
              sq.ft and world-class amenities.
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
                  "Hello Aarna Infra Developers, I would like to know more about GNR Vasavi Nirvana apartments in Attapur."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                WhatsApp Enquiry
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-emerald-50">
              <span>✓ GHMC &amp; RERA approved*</span>
              <span>✓ 3 BHK apartments*</span>
              <span>✓ 1395–2840 sq.ft*</span>
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
                  <p className="text-xl font-black text-[#D9FBE0]">1395+</p>
                  <p className="mt-1 text-xs text-white/80">Sq.ft*</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 text-center">
                  <p className="text-xl font-black text-[#D9FBE0]">GHMC</p>
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
          description="Key details about GNR Vasavi Nirvana. Verify current availability, pricing and approvals before making a purchase decision."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Location", "Attapur, Hyderabad"],
            ["Landmark", "Near Eswar Theatre, Pillar No: 134"],
            ["Project Type", "Residential Apartments"],
            ["Approval", "GHMC & RERA"],
            ["RERA No.", "P02500003630"],
            ["Flat Sizes", "1395 – 2840 sq.ft"],
            ["Configuration", "3 BHK"],
            ["Bank Loan", "Available"],
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
              GNR Vasavi Nirvana is a premium residential apartment project in
              Attapur, Hyderabad. The project is GHMC and RERA approved and
              offers spacious 3 BHK flats ranging from 1395 to 2840 sq.ft.
              Amenities include a well-equipped clubhouse, swimming pool, gym,
              kids play area, cricket practice net, landscape parks and more.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Each flat comes with 2 car parking spaces. The project is designed
              for families looking for a well-connected residential community
              in the Attapur–Mehdipatnam corridor, with easy access to schools,
              hospitals, shopping and the Hyderabad airport.
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
              title="Space to Live Your Best Life"
              description="A quick view of the key features of GNR Vasavi Nirvana."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "GHMC & RERA approved*",
                "3 BHK spacious apartments",
                "1395–2840 sq.ft flats*",
                "2 car parking per flat",
                "Premium amenities & clubhouse",
                "Bank loan available*",
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
          title="GNR Vasavi Nirvana Photos"
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
            description="Amenities listed for GNR Vasavi Nirvana. Confirm the current list with the sales team during your site visit."
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
            description="Travel times are indicative and may vary with route and traffic. Attapur is well-connected to Mehdipatnam, Rajendra Nagar and the ORR."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {locationHighlights.map(([place, time]) => (
              <div
                key={place}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-4"
              >
                <span className="font-semibold text-slate-700">{place}</span>
                <span className="shrink-0 rounded-full bg-[#D9FBE0] px-3 py-1 text-sm font-extrabold text-[#183323]">
                  {time}*
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
            src="/assets/img/layouts/GNR-Vasavi%20Layout.jpg"
            alt="GNR Vasavi Nirvana apartment layout plan"
            width={1200}
            height={900}
            className="max-h-[520px] w-full rounded-2xl object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <p className="px-2 py-3 text-sm text-slate-500">
            GNR Vasavi Nirvana layout plan. Confirm unit layout with the sales
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
            description="Watch the project video and locate GNR Vasavi Nirvana on the map."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <video
                controls
                width="100%"
                height="460"
                className="rounded-xl"
                aria-label="GNR Vasavi Nirvana project video"
              >
                <source
                  src="/assets/img/videos/GNR-Vasavi.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.915620921519!2d78.4256808!3d17.3677928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb979c00533a07%3A0x4e30096d157c5e0b!2sGNR's%20Vasavi%20Nirvana!5e0!3m2!1sen!2sin!4v1708321354441!5m2!1sen!2sin"
                width="100%"
                height="460"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GNR Vasavi Nirvana location map"
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
          title="GNR Vasavi Nirvana – Frequently Asked Questions"
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
                <strong>Project:</strong> GNR Vasavi Nirvana
              </p>
              <p>
                <strong>Location:</strong> Attapur, Hyderabad
              </p>
            </div>
          </div>
          <GnrVasaviSiteVisitForm />
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