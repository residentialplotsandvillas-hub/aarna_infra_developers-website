
import Link from "next/link";

const locations = [
  {
    number: "01",
    name: "Shadnagar",
    keyword: "Open Plots in Shadnagar",
    description:
      "Explore residential plot options in Shadnagar and learn about available properties, locations and project details.",
    href: "/open-plots-in-shadnagar",
    icon: "⌖",
  },
  {
    number: "02",
    name: "Kothur",
    keyword: "Plots for Sale in Kothur",
    description:
      "Discover available plot options in Kothur and compare property details to find a suitable location.",
    href: "/open-plots-in-kothur",
    icon: "◈",
  },
  {
    number: "03",
    name: "Kadthal",
    keyword: "Open Plots in Kadthal",
    description:
      "Explore land opportunities in Kadthal and contact our team for current availability and project information.",
    href: "/open-plots-in-kadthal",
    icon: "⌂",
  },
  {
    number: "04",
    name: "Sadashivpet",
    keyword: "Plots for Sale in Sadashivpet",
    description:
      "Learn about plot options in Sadashivpet and request details about locations, pricing and documentation.",
    href: "/open-plots-in-sadashivpet",
    icon: "↗",
  },
];

export default function PropertyLocations() {
  return (
    <section
      aria-labelledby="property-locations-heading"
      className="overflow-hidden bg-[#D9FBE0] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* SEO-focused section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#800000]/15 bg-white/70 px-4 py-2 text-xs font-extrabold tracking-widest text-[#800000] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#800000]" />
            EXPLORE PROPERTY LOCATIONS
          </span>

          <h2
            id="property-locations-heading"
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#183323] sm:text-4xl md:text-5xl"
          >
            Open Plots for Sale
            <span className="mt-2 block text-[#800000]">
              Around Hyderabad
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#355442] sm:text-base sm:leading-8">
            Looking for open plots near Hyderabad? Explore our location
            guides to learn about residential land options, project
            information and the details to check before buying a property.
          </p>
        </div>

        {/* Location cards: mobile 1 column, tablet 2, desktop 4 */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {locations.map((location) => (
            <article
              key={location.number}
              className="group flex flex-col rounded-3xl border border-[#183323]/10 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#800000]/25 hover:bg-white hover:shadow-xl sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9FBE0] text-2xl font-bold text-[#800000] transition group-hover:bg-[#800000] group-hover:text-white">
                  {location.icon}
                </span>

                <span className="text-sm font-extrabold tracking-widest text-[#800000]/35">
                  {location.number}
                </span>
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-wider text-[#55715E]">
                Property Location
              </p>

              <h3 className="mt-2 text-xl font-extrabold leading-snug text-[#183323]">
                {location.keyword}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-[#55715E]">
                {location.description}
              </p>

              <Link
                href={location.href}
                className="mt-6 inline-flex min-h-12 items-center justify-between gap-2 rounded-xl border border-[#800000]/15 px-4 py-3 text-sm font-extrabold text-[#800000] transition hover:border-[#800000] hover:bg-[#800000] hover:text-white"
              >
                Explore {location.name}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        {/* SEO content block */}
        <div className="mt-10 rounded-3xl border border-[#183323]/10 bg-white/65 p-6 sm:mt-14 sm:p-8 lg:p-10">
          <h3 className="text-xl font-extrabold text-[#183323] sm:text-2xl">
            Find Residential Plots Near Hyderabad
          </h3>

          <p className="mt-4 text-sm leading-7 text-[#355442] sm:text-base sm:leading-8">
            Aarna Infra Developers helps property buyers explore available
            real estate options around Hyderabad. If you are researching
            open plots in Shadnagar, plots for sale in Kothur, open plots in
            Kadthal or residential land in Sadashivpet, review the relevant
            location information and ask for current project availability.
            Before purchasing, check the title documents, applicable
            layout permissions, land-use details, access roads and other
            relevant approvals for the specific property.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/openplots"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#800000] px-6 py-3 font-bold text-white transition hover:bg-[#600000]"
            >
              View Open Plots
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#800000]/20 bg-white px-6 py-3 font-bold text-[#800000] transition hover:bg-[#D9FBE0]"
            >
              Request Property Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
