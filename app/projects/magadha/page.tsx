import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MagadhaSiteVisitForm from "./MagadhaSiteVisitForm";

const SITE_URL = "https://aarnainfradevelopers.com";
const WHATSAPP = "https://wa.me/919959354255";
const PHONE = "+919959354255";
const slug = "magadha";

const photos = [
  {
    src: "/assets/img/projects/openplots/Magadha-5.jpg",
    alt: "Magadha open plots project near Maisigandi, Kadthal",
  },
  {
    src: "/assets/img/projects/openplots/Magadha-1.jpg",
    alt: "Magadha residential open plots community",
  },
  {
    src: "/assets/img/projects/openplots/Magadha-2.jpg",
    alt: "Magadha open plots development",
  },
  {
    src: "/assets/img/projects/openplots/Magadha-3.jpg",
    alt: "Magadha plotted development near Future City",
  },
  {
    src: "/assets/img/projects/openplots/Magadha-4.jpg",
    alt: "Magadha open plots layout surroundings",
  },
];

const amenities = [
  "Shivoham Theme Park",
  "Clubhouse & Amenities",
  "Iconic Entrance Arch",
  "All BT Roads",
  "Overhead Water Tank",
  "24/7 Security",
  "Avenue Plantation",
  "Children Play Area",
  "Electric Lines",
  "Street Lights",
];

const locationHighlights = [
  ["Pharma City", "2 Min"],
  ["RGIA", "25 Min"],
  ["Wonderla", "25 Min"],
  ["ORR - Exit No. 14", "15 Min"],
  ["E-city & Fab-City", "15 Min"],
  ["TCS Adibatla", "30 Min"],
  ["Amazon Data Center", "15 Min"],
  ["Maisigandi Temple", "1 Min"],
];

const faqs = [
  {
    question: "Where is Magadha located?",
    answer:
      "According to the supplied project details, Magadha is near Maisigandi Temple, Maisigandi, Kadthal, near Future City on Srisailam Highway.",
  },
  {
    question: "What type of project is Magadha?",
    answer:
      "Magadha is described as an open plots project spread across 32 acres.",
  },
  {
    question: "What plot sizes are available?",
    answer:
      "The supplied description says plots range from 165 to 500 square yards. Confirm current plot availability and dimensions with the sales team.",
  },
  {
    question: "What are the DTCP and RERA numbers?",
    answer:
      "The provided details list DTCP number 261/2023/H and RERA number B02400008668. Please independently verify registration details before purchasing.",
  },
  {
    question: "How many plots are listed in Magadha?",
    answer:
      "The supplied project information lists a total of 435 plots.",
  },
  {
    question: "Is a bank loan available?",
    answer:
      "The supplied information states that a bank loan is available. Loan approval depends on the lender's eligibility and documentation requirements.",
  },
  {
    question: "How do I book a site visit?",
    answer:
      "Complete the site-visit form on this page to open a WhatsApp message with your contact details and preferred visit date and time.",
  },
];

export const metadata: Metadata = {
  title: "Magadha Open Plots Near Future City, Kadthal | Aarna Infra Developers",
  description:
    "Explore Magadha open plots near Maisigandi Temple, Kadthal and Future City on Srisailam Highway. View project details, DTCP and RERA numbers, amenities, location highlights and request a site visit.",
  keywords: [
    "Magadha open plots",
    "Magadha Kadthal",
    "open plots near Future City",
    "open plots in Kadthal",
    "plots near Maisigandi Temple",
    "plots on Srisailam Highway",
    "DTCP approved plots Kadthal",
    "Magadha RERA B02400008668",
    "Aarna Infra Developers",
  ],
  alternates: {
    canonical: `${SITE_URL}/projects/${slug}`,
  },
  openGraph: {
    title: "Magadha Open Plots Near Future City, Kadthal",
    description:
      "Explore Magadha's project details, amenities, location highlights and site-visit enquiry.",
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

export default function MagadhaPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Landform",
    name: "Magadha",
    description:
      "Open plots project near Maisigandi Temple, Kadthal, near Future City on Srisailam Highway.",
    url: `${SITE_URL}/projects/${slug}`,
    image: photos.map((photo) => `${SITE_URL}${photo.src}`),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Maisigandi, Kadthal",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  };

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden bg-[#183323] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#183323] via-[#183323] to-[#350000] opacity-95" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-emerald-100">
              <Link href="/" className="hover:text-[#D9FBE0]">Home</Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-[#D9FBE0]">Projects</Link>
              <span>/</span>
              <span className="text-white">Magadha</span>
            </div>
            <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D9FBE0]">
              Premium Open Plots
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Magadha Open Plots
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/90">
              A plotted community near Maisigandi Temple, Kadthal, close to
              Future City on Srisailam Highway—planned for those seeking a
              balance of green surroundings, convenience and peaceful living.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#site-visit" className="inline-flex items-center justify-center rounded-xl bg-[#D9FBE0] px-6 py-3.5 font-extrabold text-[#183323] shadow-lg transition hover:-translate-y-0.5 hover:bg-white">
                Book a Site Visit
              </a>
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent("Hello Aarna Infra Developers, I would like to know more about Magadha open plots.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                WhatsApp Enquiry
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-emerald-50">
              <span>✓ DTCP &amp; RERA listed*</span>
              <span>✓ 32 acres*</span>
              <span>✓ 435 plots*</span>
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
                  <p className="text-xl font-black text-[#D9FBE0]">32</p>
                  <p className="mt-1 text-xs text-white/80">Acres*</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 text-center">
                  <p className="text-xl font-black text-[#D9FBE0]">435</p>
                  <p className="mt-1 text-xs text-white/80">Plots*</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 text-center">
                  <p className="text-xl font-black text-[#D9FBE0]">165–500</p>
                  <p className="mt-1 text-xs text-white/80">Sq. yards*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle
          eyebrow="Project at a glance"
          title="Quick Summary"
          description="Key details from the supplied project information. Verify current approvals, availability and specifications before making a purchase decision."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Location", "Near Future City, Maisigandi, Kadthal"],
            ["Project Type", "Open Plots"],
            ["Approval", "DTCP & RERA*"],
            ["DTCP No.", "261/2023/H"],
            ["RERA No.", "B02400008668"],
            ["Project Size", "32 Acres"],
            ["Total Units", "435 Plots"],
            ["Plot Sizes", "165–500 Sq. Yards*"],
            ["Bank Loan", "Available*"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
              <p className="text-sm font-semibold text-slate-500">{label}</p>
              <p className="mt-2 break-words font-bold leading-6 text-slate-900">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionTitle eyebrow="About the project" title="Project Description" />
            <p className="leading-8 text-slate-600">
              Experience serene living at Magadha, nestled in the peaceful
              surroundings of Maisigandi Temple, Kadthal, near Future City on
              Srisailam Highway. The supplied project description presents
              Magadha as a plotted community spread across 32 acres, with 435
              planned plots ranging from 165 to 500 square yards.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              The description lists DTCP and RERA approvals and amenities
              including a clubhouse, a Lord Shiva Shivoham-themed park,
              landscaped gardens, avenue plantations and an underground
              drainage system. The project is presented as an option for people
              seeking a residential plot amid green surroundings and a peaceful
              setting.
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
              title="Space to Plan Your Dream Home"
              description="A quick view of the key details listed for Magadha."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "32-acre plotted community*",
                "435 plots listed*",
                "165–500 square yards*",
                "DTCP number provided",
                "RERA number provided",
                "Bank loan availability listed*",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-xl bg-white/80 p-3 text-sm font-semibold text-[#183323]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#183323] text-white">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle
          eyebrow="Project gallery"
          title="Magadha Open Plots Images"
          description="Explore the supplied project images. Visit the site to understand current development and plot availability."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div key={photo.src} className="group overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={900}
                height={650}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <p className="p-3 text-sm font-semibold text-slate-600">Project View {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#183323] py-12 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Community features"
            title="Project Amenities"
            description="Amenities listed in the supplied project information."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {amenities.map((amenity, index) => (
              <div key={amenity} className="rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10">
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9FBE0] font-black text-[#183323]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-bold">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div>
          <SectionTitle
            eyebrow="Connectivity"
            title="Location Highlights"
            description="Travel times below are reproduced from the supplied project description; actual journey times vary with route and traffic."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {locationHighlights.map(([place, time]) => (
              <div key={place} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-4">
                <span className="font-semibold text-slate-700">{place}</span>
                <span className="shrink-0 rounded-full bg-[#D9FBE0] px-3 py-1 text-sm font-extrabold text-[#183323]">{time}*</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#project-video" className="rounded-xl border border-[#183323] px-5 py-3 text-sm font-bold text-[#183323] transition hover:bg-[#183323] hover:text-white">Video</a>
            <a href="#layout-plan" className="rounded-xl border border-[#183323] px-5 py-3 text-sm font-bold text-[#183323] transition hover:bg-[#183323] hover:text-white">Layout Plans</a>
            <a href="#location" className="rounded-xl border border-[#183323] px-5 py-3 text-sm font-bold text-[#183323] transition hover:bg-[#183323] hover:text-white">Location</a>
          </div>
        </div>
        <div id="layout-plan" className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
          <Image
            src="/assets/img/layouts/Magadha%20Layout.jpg"
            alt="Magadha open plots layout plan"
            width={1200}
            height={900}
            className="max-h-[520px] w-full rounded-2xl object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <p className="px-2 py-3 text-sm text-slate-500">Magadha layout plan image supplied for this project.</p>
        </div>
      </section>

      <section id="project-video" className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Explore further"
            title="Video, Layout Plans & Location"
            description="Open the original project page sections for available media and further project information."
          />
          <div className="grid gap-4 md:grid-cols-3">
            <a href={`${SITE_URL}/projects/Magadha.html#pills-video`} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
              <span className="text-2xl">▶</span>
              <h3 className="mt-4 text-lg font-extrabold text-slate-900">Project Video</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Open the original project video section.</p>
            </a>
            <a href={`${SITE_URL}/projects/Magadha.html#pills-plans`} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
              <span className="text-2xl">▦</span>
              <h3 className="mt-4 text-lg font-extrabold text-slate-900">Layout Plans</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Open the original layout plan section.</p>
            </a>
            <a id="location" href={`${SITE_URL}/projects/Magadha.html#pills-map`} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
              <span className="text-2xl">⌖</span>
              <h3 className="mt-4 text-lg font-extrabold text-slate-900">Location</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Open the original project location section.</p>
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            The supplied content mentions "Download Brochure" but does not include a direct brochure file URL.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <SectionTitle eyebrow="FAQs" title="Magadha Open Plots – Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-emerald-200 open:bg-emerald-50/40">
              <summary className="cursor-pointer list-none pr-6 font-bold text-slate-900 marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-xl text-emerald-800 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="site-visit" className="bg-[#350000] py-12 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="self-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D9FBE0]">Plan your visit</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Book a Site Visit</h2>
            <p className="mt-4 leading-7 text-white/80">
              Choose your preferred date and time. WhatsApp will open with your enquiry ready to send to the Aarna Infra Developers team.
            </p>
            <div className="mt-7 space-y-3 text-sm text-white/90">
              <p><strong>Phone:</strong> <a className="underline underline-offset-4" href={`tel:${PHONE}`}>{PHONE}</a></p>
              <p><strong>Project:</strong> Magadha Open Plots</p>
            </div>
          </div>
          <MagadhaSiteVisitForm />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Aarna Infra Developers. All rights reserved.</p>
          <Link href="/projects" className="font-bold text-[#183323] hover:underline">View All Projects</Link>
        </div>
      </section>
    </main>
  );
}