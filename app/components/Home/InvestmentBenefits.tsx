
import Link from "next/link";

const benefits = [
  {
    number: "01",
    icon: "⌖",
    title: "Location Research",
    description:
      "Compare locations, connectivity, surrounding development and available property information before choosing a plot.",
  },
  {
    number: "02",
    icon: "↗",
    title: "Long-Term Planning",
    description:
      "Consider your investment timeline, budget, intended use and financial goals before making a property decision.",
  },
  {
    number: "03",
    icon: "✓",
    title: "Document Verification",
    description:
      "Review land title, applicable layout permissions, survey details and relevant legal documents with qualified professionals.",
  },
  {
    number: "04",
    icon: "₹",
    title: "Budget Awareness",
    description:
      "Understand the property price, registration costs, taxes and other applicable charges before committing.",
  },
];

export default function InvestmentBenefits() {
  return (
    <section className="overflow-hidden bg-[#D9FBE0] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Section introduction */}
          <div>
            <span className="inline-flex rounded-full border border-[#800000]/15 bg-white/70 px-4 py-2 text-xs font-extrabold tracking-widest text-[#800000] sm:text-sm">
              PROPERTY INVESTMENT GUIDE
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#183323] sm:text-4xl md:text-5xl">
              Make Informed
              <span className="mt-2 block text-[#800000]">
                Property Decisions
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#355442] sm:text-base sm:leading-8">
              Buying land or a home requires careful research. Understand
              your goals, compare available options and verify property
              documents before making a decision.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#800000] px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#600000]"
            >
              Discuss Your Requirements
              <span aria-hidden="true">→</span>
            </Link>

            <p className="mt-4 text-xs leading-6 text-[#55715E]">
              Property values and returns are not guaranteed. Research
              carefully and seek independent professional advice.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="group rounded-3xl border border-[#183323]/10 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#800000]/25 hover:bg-white hover:shadow-xl sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9FBE0] text-3xl font-bold text-[#800000] transition group-hover:bg-[#800000] group-hover:text-white">
                    {benefit.icon}
                  </span>

                  <span className="text-sm font-extrabold tracking-widest text-[#800000]/35">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-extrabold text-[#183323] sm:text-xl">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#55715E]">
                  {benefit.description}
                </p>

                <div className="mt-5 h-1 w-12 rounded-full bg-[#FFFF00] transition-all group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
