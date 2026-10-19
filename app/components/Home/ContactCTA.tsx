
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] bg-[#D9FBE0] px-6 py-10 shadow-xl sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-[#800000]/5 sm:h-80 sm:w-80" />

          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-[#800000]/5 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            {/* Main Content */}
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#800000]/20 bg-white px-4 py-2 text-xs font-extrabold tracking-widest text-[#800000] sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-[#800000]" />
                LET'S DISCUSS YOUR PROPERTY NEEDS
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#350000] sm:text-4xl md:text-5xl">
                Ready to Find Your
                <span className="block text-[#800000]">
                  Dream Property?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
                Looking for open plots, farm lands, villas or residential
                properties around Hyderabad? Contact Aarna Infra Developers
                to discuss your preferred location and requirements.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-extrabold text-[#800000] shadow-lg shadow-[#800000]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#600000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#800000] focus-visible:ring-offset-2"
                >
                  Send an Enquiry
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl border border-[#800000]/25 bg-white px-7 py-4 font-bold text-[#800000] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#600000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#800000] focus-visible:ring-offset-2"
                >
                  Explore Projects
                </Link>
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="w-full rounded-2xl border border-white bg-white/80 p-5 shadow-lg backdrop-blur-md sm:p-6 lg:w-72">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#800000] text-2xl text-white">
                ✉
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-[#350000]">
                Let's Connect
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Share your property requirements with our team.
              </p>

              <div className="my-5 h-px bg-[#800000]/10" />

              <Link
                href="/contact"
                className="flex min-h-12 items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-extrabold text-[#800000] shadow-sm ring-1 ring-[#800000]/20 transition-all duration-300 hover:bg-white hover:text-[#600000] hover:ring-[#800000]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#800000]"
              >
                Contact Aarna Infra
              </Link>

              <p className="mt-4 text-center text-xs text-gray-500">
                Aarna Infra Developers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
