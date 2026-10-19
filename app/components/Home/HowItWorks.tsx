
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: "⌕",
    title: "Explore Properties",
    description:
      "Browse open plots, farm lands, apartments and villas. Select a property type and location that suits your requirements.",
  },
  {
    number: "02",
    icon: "✓",
    title: "Review Property Details",
    description:
      "Ask about pricing, availability, location, title documents and applicable approvals before making your decision.",
  },
  {
    number: "03",
    icon: "⌖",
    title: "Plan a Site Visit",
    description:
      "Contact our team to discuss your requirements and arrange a property visit, subject to availability.",
  },
];

export default function HowItWorks() {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#800000]/15 bg-white/70 px-4 py-2 text-xs font-extrabold tracking-widest text-[#800000] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#800000]" />
            SIMPLE & TRANSPARENT
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#183323] sm:text-4xl md:text-5xl">
            Find Your Property
            <span className="mt-2 block text-[#800000]">
              In Three Simple Steps
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#355442] sm:text-base sm:leading-8">
            From exploring property options to planning a site visit, get
            started with Aarna Infra Developers.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="group relative rounded-3xl border border-[#183323]/10 bg-white/85 p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#800000] text-3xl font-bold text-white transition duration-300 group-hover:bg-[#600000]">
                  {step.icon}
                </span>

                <span className="text-4xl font-black tracking-tight text-[#800000]/15 sm:text-5xl">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-extrabold text-[#183323] sm:text-2xl">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#55715E] sm:text-base">
                {step.description}
              </p>

              <div className="mt-6 h-1 w-12 rounded-full bg-[#FFFF00] transition-all duration-300 group-hover:w-20" />

              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-3xl font-bold text-[#800000]/40 lg:block"
                >
                  →
                </span>
              )}
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl bg-[#D9FBE0] p-6 sm:mt-14 sm:p-9 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-extrabold text-white sm:text-2xl">
              Ready to explore your options?
            </h3>
            <p className="mt-2 text-sm leading-7 text-[#800000]">
              Tell us your preferred location and property type.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-[#FFFF00] px-6 py-3 font-extrabold text-[#350000] transition hover:bg-yellow-300 sm:w-auto"
          >
            Start Your Enquiry
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
