
import Image from "next/image";
import Link from "next/link";

const locations = [
  { name: "Shadnagar", href: "/open-plots-in-shadnagar" },
  { name: "Kothur", href: "/open-plots-in-kothur" },
  { name: "Kadthal", href: "/open-plots-in-kadthal" },
  { name: "Sadashivpet", href: "/open-plots-in-sadashivpet" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#D9FBE0] text-[#183323]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[45px] border-[#800000]/5" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/40 blur-3xl" />

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-12">
        {/* Left content */}
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#800000]/15 bg-white/70 px-4 py-2 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#800000]" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#800000] sm:text-sm">
              Aarna Infra Developers
            </span>
          </div>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.13] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Your
            <span className="mt-2 block text-[#800000]">
              Dream Open Plot
            </span>
            <span className="mt-2 block text-[#183323]">
              Near Hyderabad
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#355442] sm:text-lg sm:leading-8">
            Explore open plots, farm lands, villas and property opportunities
            around Hyderabad with Aarna Infra Developers. Find a property that
            suits your future plans and investment goals.
          </p>

          {/* Main buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/openplots"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#800000] px-7 py-4 font-bold text-white shadow-lg shadow-[#800000]/15 transition hover:-translate-y-1 hover:bg-[#600000]"
            >
              Explore Open Plots
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-[#800000]/20 bg-white/70 px-7 py-4 font-bold text-[#800000] transition hover:border-[#800000] hover:bg-white"
            >
              Enquire Now
            </Link>
          </div>

          {/* Location links */}
          <div className="mt-9">
            <p className="mb-3 text-sm font-semibold text-[#355442]">
              Explore locations
            </p>

            <div className="flex flex-wrap gap-2">
              {locations.map((location) => (
                <Link
                  key={location.name}
                  href={location.href}
                  className="rounded-full border border-[#355442]/15 bg-white/65 px-4 py-2 text-sm font-semibold text-[#183323] transition hover:border-[#800000] hover:bg-[#800000] hover:text-white"
                >
                  {location.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right image and enquiry card */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -right-3 -top-3 h-28 w-28 rounded-tr-[40px] bg-[#FFFF00] sm:-right-5 sm:-top-5" />

          <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white p-2 shadow-2xl shadow-[#183323]/10">
            <div className="relative h-[300px] overflow-hidden rounded-[22px] sm:h-[390px]">
              <Image
                src="/img/open-plots.jpg"
                alt="Residential plots and real estate development near Hyderabad"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#183323]/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-7 sm:left-7">
                <span className="inline-flex rounded-full bg-[#FFFF00] px-3 py-1 text-xs font-bold text-[#350000]">
                  FIND YOUR SPACE
                </span>
                <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  A Better Place to Build Your Future
                </h2>
                <p className="mt-2 text-sm text-white/85">
                  Explore available property options with our team.
                </p>
              </div>
            </div>
          </div>

          {/* Quick enquiry card */}
          <div className="relative mx-3 -mt-7 rounded-2xl border border-white bg-white p-4 shadow-xl sm:mx-6 sm:p-5">
            <p className="mb-3 text-sm font-bold text-[#183323]">
              What are you looking for?
            </p>

            <div className="grid grid-cols-3 gap-2">
              <Link
                href="/openplots"
                className="rounded-xl bg-[#D9FBE0] px-2 py-4 text-center transition hover:bg-[#baf0c8]"
              >
                <span className="block text-xl" aria-hidden="true">🌳</span>
                <span className="mt-2 block text-xs font-bold text-[#183323] sm:text-sm">
                  Open Plots
                </span>
              </Link>

              <Link
                href="/farmlands"
                className="rounded-xl bg-[#D9FBE0] px-2 py-4 text-center transition hover:bg-[#baf0c8]"
              >
                <span className="block text-xl" aria-hidden="true">🌿</span>
                <span className="mt-2 block text-xs font-bold text-[#183323] sm:text-sm">
                  Farm Lands
                </span>
              </Link>

              <Link
                href="/villas-houses"
                className="rounded-xl bg-[#D9FBE0] px-2 py-4 text-center transition hover:bg-[#baf0c8]"
              >
                <span className="block text-xl" aria-hidden="true">🏡</span>
                <span className="mt-2 block text-xs font-bold text-[#183323] sm:text-sm">
                  Villas
                </span>
              </Link>
            </div>

            <Link
              href="/contact"
              className="mt-3 flex min-h-12 items-center justify-center rounded-xl bg-[#FFFF00] px-4 py-3 text-center font-extrabold text-[#350000] transition hover:bg-yellow-300"
            >
              Talk to Our Property Team →
            </Link>
          </div>

          <div className="absolute -bottom-5 -right-2 -z-10 h-24 w-24 rounded-full border-[18px] border-[#800000]/10" />
        </div>
      </div>

      {/* Brand accent */}
      <div className="h-1.5 bg-[#800000]" />
    </section>
  );
}
