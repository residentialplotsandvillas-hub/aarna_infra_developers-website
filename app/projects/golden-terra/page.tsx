import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GoldenTerraSiteVisitForm from "./GoldenTerraSiteVisitForm";

const SITE_URL = "https://aarnainfradevelopers.com";
const WHATSAPP = "https://wa.me/919959354255";
const PHONE = "+919959354255";
const slug = "golden-terra";

const photos = [
  {
    src: "/assets/img/projects/openplots/Golden-Terra-1.jpg",
    alt: "Golden Terra open plots beside Shadnagar Tollgate",
  },
  {
    src: "/assets/img/projects/openplots/Golden-Terra-2.jpg",
    alt: "Golden Terra residential open plots community",
  },
  {
    src: "/assets/img/projects/openplots/Golden-Terra-3.jpg",
    alt: "Golden Terra plotted development near RRR",
  },
  {
    src: "/assets/img/projects/openplots/Golden-Terra-4.jpg",
    alt: "Golden Terra open plots layout surroundings",
  },
  {
    src: "/assets/img/projects/openplots/Golden-Terra-5.jpg",
    alt: "Golden Terra highway-facing plots",
  },
];

const amenities = [
  "33 Wide BT Roads",
  "Overhead Water Tank",
  "Avenue Plantation",
  "Water Connection",
  "Children Play Area",
  "24x7 Security & Camera",
  "Entrance Arch",
  "Electric Lines",
  "Street Lights",
];

const locationHighlights = [
  ["Banglore NH-44 Facing", "Facing"],
  ["RRR", "2 Mins"],
  ["NRSC (ISRO)", "3 Mins"],
  ["Amazon", "15 Mins"],
  ["ORR", "2 Mins"],
  ["Airport", "35 Mins"],
  ["Microsoft Data Center", "7 Mins"],
  ["Shadnagar Railway Station", "5 Mins"],
];

const faqs = [
  {
    question: "Where is Golden Terra located?",
    answer:
      "Golden Terra is located beside the Shadnagar Tollgate and near the Regional Ring Road (RRR), on the Bangalore NH-44 highway in Shadnagar, Telangana. The project offers highway-facing commercial and residential plots with excellent connectivity to Hyderabad and the airport.",
  },
  {
    question: "What type of plots are available at Golden Terra?",
    answer:
      "Golden Terra offers highway-facing commercial and residential open plots ranging from 150 to 1100 square yards. Contact our team for current availability, plot orientations and pricing.",
  },
  {
    question: "What are the HMDA, RERA and DTCP numbers for Golden Terra?",
    answer:
      "The listed HMDA LP No. is 0466/HMDA/SWDL/2025, RERA No. is P02400010212 and DTCP LP No. is 74/2023/HRO/H1. Please independently verify the current approval status before proceeding.",
  },
  {
    question: "What amenities are available at Golden Terra?",
    answer:
      "Amenities include 33-foot wide BT roads, overhead water tank, avenue plantation, water connections, children play area, 24/7 security and cameras, entrance arch, electric lines and street lights.",
  },
  {
    question: "Is Golden Terra a good investment?",
    answer:
      "Golden Terra is located beside the Shadnagar Tollgate and near the Regional Ring Road, with access to the ORR, NRSC (ISRO), Microsoft Data Center and the airport. Buyers should conduct independent research and legal verification before making any property decision.",
  },
  {
    question: "Is bank loan available for plots at Golden Terra?",
    answer:
      "Yes, bank loan availability is listed for this project. Loan approval depends on the lender's eligibility criteria and documentation. Our team can help coordinate information with banks and housing finance companies.",
  },
  {
    question: "How do I book a site visit to Golden Terra?",
    answer:
      "Complete the site-visit form on this page to open a WhatsApp message with your contact details and preferred visit date and time. Our team will confirm your visit.",
  },
];

export const metadata: Metadata = {
  title:
    "Golden Terra — Open Plots in Shadnagar Near RRR | Aarna Infra",
  description:
    "Golden Terra — highway-facing open plots beside Shadnagar Tollgate and near the Regional Ring Road (RRR). HMDA & RERA approved plots from 150 to 1100 sq. yards. Book a site visit.",
  keywords: [
    "Golden Terra",
    "Golden Terra Shadnagar",
    "open plots in Shadnagar",
    "plots for sale in Shadnagar",
    "plots near Shadnagar Tollgate",
    "plots near RRR",
    "HMDA plots Shadnagar",
    "RERA approved plots Shadnagar",
    "highway facing plots Hyderabad",
    "commercial plots Shadnagar",
    "residential plots in Hyderabad",
    "Aarna Infra Developers",
  ],
  authors: [{ name: "Aarna Infra Developers" }],
  alternates: {
    canonical: `${SITE_URL}/projects/${slug}`,
  },
  openGraph: {
    title: "Golden Terra — Open Plots in Shadnagar Near RRR",
    description:
      "Highway-facing open plots beside Shadnagar Tollgate and near RRR. HMDA & RERA approved. Sizes from 150 to 1100 sq. yards.",
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
    title: "Golden Terra — Open Plots in Shadnagar Near RRR",
    description:
      "Highway-facing open plots beside Shadnagar Tollgate and near RRR. HMDA & RERA approved.",
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

export default function GoldenTerraPage() {
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

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Golden Terra",
    description:
      "Highway-facing commercial and residential open plots beside Shadnagar Tollgate and near the Regional Ring Road (RRR) in Shadnagar, Telangana.",
    image: photos.map((photo) => `${SITE_URL}${photo.src}`),
    url: `${SITE_URL}/projects/${slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Shadnagar",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    telephone: "+91-9959354255",
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
        name: "Open Plots",
        item: `${SITE_URL}/openplots`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Golden Terra",
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
    placeSchema,
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
              <Link href="/openplots" className="hover:text-[#D9FBE0]">
                Open Plots
              </Link>
              <span>/</span>
              <span className="text-white">Golden Terra</span>
            </div>

            <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D9FBE0]">
              HMDA &amp; RERA Approved Open Plots
            </p>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Golden Terra
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/90">
              Highway-facing commercial and residential plots beside Shadnagar
              Tollgate and near the Regional Ring Road (RRR) — one of the most
              promising growth corridors of Hyderabad.
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
                  "Hello Aarna Infra Developers, I would like to know more about Golden Terra open plots in Shadnagar."
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
              <span>✓ Highway-facing plots*</span>
              <span>✓ 150–1100 sq. yards*</span>
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
                  <p className="text-xl font-black text-[#D9FBE0]">NH-44</p>
                  <p className="mt-1 text-xs text-white/80">Facing</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 text-center">
                  <p className="text-xl font-black text-[#D9FBE0]">RRR</p>
                  <p className="mt-1 text-xs text-white/80">2 Mins*</p>
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
          description="Key details about Golden Terra. Verify current availability, pricing and approvals before making a purchase decision."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Project Name", "Golden Terra"],
            ["Location", "Beside Shadnagar Tollgate, near RRR"],
            ["Project Type", "Open Plots (Commercial & Residential)"],
            ["Approval", "HMDA & RERA"],
            ["HMDA LP No.", "0466/HMDA/SWDL/2025"],
            ["RERA No.", "P02400010212"],
            ["DTCP LP No.", "74/2023/HRO/H1"],
            ["Plot Sizes", "150 – 1100 Sq. Yards"],
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
              Golden Terra presents a rare opportunity to own highway-facing
              commercial and residential plots in one of the most promising
              growth corridors of Hyderabad. Located beside the Shadnagar
              Tollgate and just minutes from the Regional Ring Road (RRR), this
              landmark project combines unbeatable visibility with seamless
              connectivity.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Experience a perfect blend of investment potential, modern
              infrastructure and lifestyle convenience — all set in a
              fast-developing neighborhood that&apos;s destined to become a
              major urban hub. Plot sizes range from 150 to 1100 square yards,
              with both commercial and residential options available.
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
              title="Highway-Facing Plots in Shadnagar"
              description="A quick view of the key features of Golden Terra."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "HMDA & RERA approved*",
                "Highway-facing plots",
                "150–1100 sq. yards*",
                "Near RRR (2 mins)*",
                "Commercial & residential plots",
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
          title="Golden Terra Open Plots Images"
          description="Explore the project images. Visit the site to understand current development and plot availability."
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
            description="Amenities listed for Golden Terra. Confirm the current list with the sales team during your site visit."
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
            description="Travel times are indicative and may vary with route and traffic. Golden Terra is well-connected to the RRR, ORR, NRSC and the airport."
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
            src="/assets/img/layouts/Golden-Terra%20Layout.jpg"
            alt="Golden Terra open plots layout plan"
            width={1200}
            height={900}
            className="max-h-[520px] w-full rounded-2xl object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <p className="px-2 py-3 text-sm text-slate-500">
            Golden Terra layout plan. Confirm plot dimensions and availability
            with the sales team before booking.
          </p>
        </div>
      </section>

      {/* VIDEO + MAP */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Explore further"
            title="Project Video & Location Map"
            description="Watch the project video and locate Golden Terra on the map."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <iframe
                src="https://www.youtube.com/embed/0C4bDLn2ow8"
                width="100%"
                height="460"
                allowFullScreen
                title="Golden Terra project video"
                className="rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3815.405838372993!2d78.194008!3d17.003751999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDAwJzEzLjUiTiA3OMKwMTEnMzguNCJF!5e0!3m2!1sen!2sin!4v1728368721040!5m2!1sen!2sin"
                width="100%"
                height="460"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Golden Terra location map"
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
          title="Golden Terra – Frequently Asked Questions"
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
                <strong>Project:</strong> Golden Terra
              </p>
              <p>
                <strong>Location:</strong> Beside Shadnagar Tollgate, near RRR
              </p>
            </div>
          </div>
          <GoldenTerraSiteVisitForm />
        </div>
      </section>

      {/* FOOTER STRIP */}
      <section className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2025 Aarna Infra Developers. All rights reserved.</p>
          <Link
            href="/openplots"
            className="font-bold text-[#183323] hover:underline"
          >
            View All Open Plots
          </Link>
        </div>
      </section>
    </main>
  );
}