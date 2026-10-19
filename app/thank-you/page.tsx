import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://aarnainfradevelopers.com";

/* ============================================================
   SEO — Utility page, do NOT index
   ============================================================ */
export const metadata: Metadata = {
  title: "Thank You | Aarna Infra Developers",
  description:
    "Thank you for contacting Aarna Infra Developers. Our team will reach out to you shortly to assist with your plot, villa or property enquiry.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: `${siteUrl}/thank-you` },
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-touch-icon.png",
  },
};

/* ============================================================
   NOTE: No `export const dynamic` here.
   With `experimental.cacheComponents: true` enabled in next.config,
   route segment configs like `dynamic` are not compatible.
   This route is automatically dynamic because it awaits
   `searchParams` — Next.js infers request-time rendering.
   ============================================================ */

/* ============================================================
   PAGE — accepts optional ?type= site_visit | brochure | enquiry
   ============================================================ */
type Props = {
  searchParams: Promise<{ type?: string }>;
};

const MESSAGES = {
  site_visit: {
    eyebrow: "Site Visit Booked",
    heading: "Your Site Visit is Confirmed!",
    subtext:
      "Our team will call you shortly to confirm your preferred date, time and location details. Get ready to explore your future plot in person.",
    icon: "🚗",
  },
  brochure: {
    eyebrow: "Brochure on the Way",
    heading: "Brochure Request Received!",
    subtext:
      "We've received your details. Our team will email the brochure to you shortly. In the meantime, feel free to explore our projects below.",
    icon: "📄",
  },
  enquiry: {
    eyebrow: "Enquiry Received",
    heading: "Thank You for Your Enquiry!",
    subtext:
      "Our team has received your message and will get back to you within a few hours during business hours. We look forward to helping you find your perfect property.",
    icon: "✉",
  },
  default: {
    eyebrow: "Message Received",
    heading: "Thank You for Contacting Aarna Infra!",
    subtext:
      "We've received your details and our team will reach out to you shortly. In the meantime, explore our premium open plots and villa projects below.",
    icon: "✓",
  },
} as const;

const QUICK_LINKS = [
  {
    name: "Magadha",
    location: "Kadthal · Near Future City",
    href: "/projects/Magadha",
    tag: "Open Plots",
  },
  {
    name: "Golden City",
    location: "Sadashivpet · Mumbai Highway",
    href: "/projects/Golden-City",
    tag: "Villa Plots",
  },
  {
    name: "Golden Terra",
    location: "Shadnagar · NH-44 Highway",
    href: "/projects/Golden-Terra",
    tag: "HMDA & RERA",
  },
  {
    name: "Green Meadows",
    location: "Balanagar · Near RRR",
    href: "/projects/Green-Meadows",
    tag: "MUDA & RERA",
  },
] as const;

export default async function ThankYouPage({ searchParams }: Props) {
  const { type } = await searchParams;
  const key = (
    type && type in MESSAGES ? type : "default"
  ) as keyof typeof MESSAGES;
  const msg = MESSAGES[key];

  /* JSON-LD — Organization only, no listing markup on a utility page */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Aarna Infra Developers",
    url: siteUrl,
    logo: `${siteUrl}/assets/img/Logo.jpg`,
    telephone: "+91-9959354255",
  };

  return (
    <main
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#F7F6F2] text-black"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* ============ DECORATIVE BACKDROP ============ */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 top-10 h-64 w-64 rounded-full border border-[#800000]/10 sm:h-96 sm:w-96" />
        <div className="absolute -left-20 bottom-10 h-56 w-56 rounded-full bg-[#FFFF00]/20 blur-3xl" />
      </div>

      {/* ============ HERO / CONFIRMATION ============ */}
      <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center px-5 py-16 text-center sm:px-8 sm:py-20">
        {/* Success badge */}
        <div className="relative mb-8">
          <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-[#FFFF00]/40 blur-2xl" />
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#800000] text-5xl text-white shadow-2xl shadow-[#800000]/30 sm:h-28 sm:w-28">
            <span aria-hidden>{msg.icon}</span>
          </div>
          <span className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#F7F6F2] bg-[#FFFF00] text-lg font-black text-[#800000]">
            ✓
          </span>
        </div>

        {/* Eyebrow */}
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
          {msg.eyebrow}
        </p>

        {/* Heading */}
        <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl">
          {msg.heading.split("!")[0]}
          <span className="text-[#800000]">!</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-xl text-base leading-8 text-black/80 sm:text-lg">
          {msg.subtext}
        </p>

        {/* Primary CTAs */}
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="tel:+919959354255"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#800000] px-8 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
          >
            ☎ Call 9959354255
          </a>
          <a
            href="https://wa.me/919959354255"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-8 py-3 font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Divider with reference */}
        <div className="mt-10 flex w-full max-w-md items-center gap-4">
          <div className="h-px flex-1 bg-black/10" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
            What Happens Next
          </span>
          <div className="h-px flex-1 bg-black/10" />
        </div>

        {/* Steps */}
        <ol className="mt-6 grid w-full max-w-2xl gap-3 text-left sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "We review your request",
              text: "Our team reviews your details within minutes.",
            },
            {
              step: "02",
              title: "We call you back",
              text: "A property expert will call you to discuss requirements.",
            },
            {
              step: "03",
              title: "You visit the project",
              text: "We arrange a personalised site visit at your convenience.",
            },
          ].map((s) => (
            <li
              key={s.step}
              className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#800000]/30 hover:shadow-md"
            >
              <p className="text-xs font-black tracking-widest text-[#800000]/60">
                STEP {s.step}
              </p>
              <p className="mt-2 text-sm font-bold text-[#800000]">{s.title}</p>
              <p className="mt-1 text-xs leading-5 text-black/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ============ EXPLORE PROJECTS ============ */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Explore
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl">
              While You Wait — Browse Our Premium Projects
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-black/70 sm:text-base">
              Take a look at our open plots and villa projects across Hyderabad
              and its fast-growing suburbs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_LINKS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group rounded-2xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#800000]/30 hover:shadow-xl"
              >
                <span className="inline-block rounded-full bg-[#FFFF00] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#800000]">
                  {p.tag}
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-[#800000]">
                  {p.name}
                </h3>
                <p className="mt-2 text-xs leading-5 text-black/60">
                  {p.location}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#800000] transition group-hover:gap-2">
                  View project →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/15 bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
            >
              View All Projects
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#800000] px-6 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FOOTER MESSAGE ============ */}
      <footer className="border-t border-black/10 bg-white/60 px-5 py-8 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
          Aarna Infra Developers
        </p>
        <p className="mt-2 text-sm text-black/70">
          We stand for excellence. For urgent assistance call{" "}
          <a
            href="tel:+919959354255"
            className="font-bold text-[#800000] underline underline-offset-4"
          >
            +91 99593 54255
          </a>
        </p>
        <p className="mt-4 text-xs text-black/40">
          © {new Date().getFullYear()} Aarna Infra Developers · All rights
          reserved
        </p>
      </footer>

      {/* ============ FLOATING CONTACT ============ */}
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
        <a
          href="#top"
          aria-label="Back to top"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFF00] text-lg font-black text-[#800000] shadow-lg transition hover:scale-110"
        >
          ↑
        </a>
      </div>
    </main>
  );
}