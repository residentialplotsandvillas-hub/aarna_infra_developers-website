
import Link from "next/link";

const benefits = [
  {
    number: "01",
    icon: "⌖",
    title: "Location-Focused Options",
    description:
      "Explore property opportunities around Hyderabad and nearby developing locations.",
  },
  {
    number: "02",
    icon: "◈",
    title: "Property Guidance",
    description:
      "Get assistance understanding available properties and choosing options that fit your needs.",
  },
  {
    number: "03",
    icon: "✓",
    title: "Documentation Support",
    description:
      "Ask our team about project documents, approvals and verification steps before making a decision.",
  },
  {
    number: "04",
    icon: "↗",
    title: "Personalized Assistance",
    description:
      "Discuss your preferred location, budget and property requirements with our team.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#D9FBE0] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#800000]/15 bg-white/70 px-4 py-2 text-xs font-extrabold tracking-[0.15em] text-[#800000] sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#800000]" />
              WHY AARNA INFRA
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#183323] sm:text-4xl md:text-5xl">
              Your Property Journey,
              <span className="mt-2 block text-[#800000]">
                Made Easier
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#355442] sm:text-base sm:leading-8">
              Choosing a property is an important decision. Aarna Infra
              Developers helps you explore property options, understand
              available information and take informed next steps.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#800000] px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#600000]"
            >
              About Aarna Infra
              <span aria-hidden="true">→</span>
            </Link>

            {/* Trust reminder */}
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#183323]/10 bg-white/60 p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFFF00] text-xl text-[#350000]">
                ✓
              </span>
              <div>
                <h3 className="font-bold text-[#183323]">
                  Make an informed decision
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#55715E]">
                  Review property documents and applicable approvals before
                  purchasing.
                </p>
              </div>
            </div>
          </div>

          {/* Right benefits grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="group relative overflow-hidden rounded-3xl border border-[#183323]/10 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#800000]/25 hover:bg-white hover:shadow-xl sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9FBE0] text-3xl font-bold text-[#800000] transition group-hover:bg-[#800000] group-hover:text-white">
                    {benefit.icon}
                  </span>

                  <span className="text-sm font-extrabold tracking-widest text-[#800000]/35">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-extrabold leading-snug text-[#183323] sm:text-xl">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#55715E]">
                  {benefit.description}
                </p>

                <div className="mt-5 h-1 w-12 rounded-full bg-[#FFFF00] transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>

        {/* Bottom call to action */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-[#183323] p-6 sm:p-9 lg:mt-20 lg:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-extrabold tracking-[0.18em] text-[#FFFF00] sm:text-sm">
                LET'S FIND YOUR PROPERTY
              </p>
              <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                Have a location in mind?
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/75 sm:text-base">
                Tell us what you are looking for and speak with our team.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-[#FFFF00] px-6 py-3 font-extrabold text-[#350000] transition hover:bg-yellow-300 sm:w-auto"
            >
              Talk to Our Team
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
