
import Link from "next/link";

const guides = [
  {
    number: "01",
    title: "HMDA Plots in Hyderabad",
    description:
      "Learn what to verify when exploring plots advertised as HMDA-approved, including the relevant layout approval details.",
    href: "/hmda-master-plan",
    label: "Explore HMDA Information",
  },
  {
    number: "02",
    title: "Open Plots for Sale",
    description:
      "Explore residential plot options and review location, plot dimensions, price and project documentation before buying.",
    href: "/openplots",
    label: "Explore Open Plots",
  },
  {
    number: "03",
    title: "Farm Lands Near Hyderabad",
    description:
      "Understand land classification, access, title documents and applicable permissions before considering farm land.",
    href: "/farmlands",
    label: "Explore Farm Lands",
  },
];

export default function PropertyBuyingGuide() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Intro */}
          <div>
            <span className="inline-flex rounded-full border border-[#800000]/15 bg-white/70 px-4 py-2 text-xs font-extrabold tracking-widest text-[#800000] sm:text-sm">
              PROPERTY BUYING GUIDE
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#183323] sm:text-4xl md:text-5xl">
              Explore Property
              <span className="mt-2 block text-[#800000]">
                With Confidence
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#355442] sm:text-base sm:leading-8">
              Searching for open plots or land near Hyderabad? Understand
              the property type, documentation and applicable approvals
              before making a purchase decision.
            </p>

            <div className="mt-7 rounded-2xl border border-[#183323]/10 bg-white/70 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFFF00] text-2xl text-[#350000]">
                  ✓
                </span>
                <div>
                  <h3 className="font-extrabold text-[#183323]">
                    Verify before you buy
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#55715E]">
                    Check title, survey details, land use and the relevant
                    approval documents for the specific property with
                    qualified professionals.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#D9FBE0] px-6 py-3 font-bold text-white transition hover:bg-bg-[#D9FBE0]"
            >
              Ask Our Team
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Guide cards */}
          <div className="space-y-4">
            {guides.map((guide) => (
              <article
                key={guide.number}
                className="group rounded-2xl border border-[#183323]/10 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:p-6"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9FBE0] text-sm font-extrabold text-[#800000] sm:h-14 sm:w-14">
                    {guide.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-extrabold text-[#183323] sm:text-xl">
                      {guide.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#55715E]">
                      {guide.description}
                    </p>

                    <Link
                      href={guide.href}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#800000] hover:underline"
                    >
                      {guide.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
