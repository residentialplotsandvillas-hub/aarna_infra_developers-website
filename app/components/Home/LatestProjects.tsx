
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Residential Open Plots",
    category: "OPEN PLOTS",
    location: "Hyderabad Region",
    description:
      "Explore residential plot options and request details about availability, pricing and documentation.",
    image: "/img/Residential-Open-Plots.png",
  },
  {
    name: "Farm Land Opportunities",
    category: "FARM LANDS",
    location: "Nearby Locations",
    description:
      "Discover available farm land options and ask our team about location and property details.",
    image: "/img/Farm-Land-plots.webp",
  },
  {
    name: "Villas & Houses",
    category: "RESIDENTIAL",
    location: "Hyderabad Region",
    description:
      "Explore residential property options to find a home that suits your requirements.",
    image: "/img/villas-houses-lands.webp",
  },
];

export default function LatestProjects() {
  return (
    <section className="bg-[#D9FBE0] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[#800000]/15 bg-white/70 px-4 py-2 text-xs font-extrabold tracking-widest text-[#800000] sm:text-sm">
              EXPLORE PROPERTIES
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#183323] sm:text-4xl md:text-5xl">
              Discover Property
              <span className="block text-[#800000]">Opportunities</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#355442] sm:text-base">
              Explore property categories and contact our team for current
              projects, locations and availability.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-xl border border-[#800000]/20 bg-white px-5 py-3 font-bold text-[#800000] transition hover:bg-[#800000] hover:text-white sm:self-auto"
          >
            View All Projects <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-3xl border border-[#183323]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Link
                href="/projects"
                aria-label={`View ${project.name}`}
                className="relative block h-60 overflow-hidden sm:h-64"
              >
                <Image
                  src={project.image}
                  alt={`${project.name} by Aarna Infra Developers`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                <span className="absolute left-4 top-4 rounded-full bg-[#FFFF00] px-3 py-2 text-xs font-extrabold text-[#350000]">
                  {project.category}
                </span>

                <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-[#800000]">
                  ↗
                </span>
              </Link>

              <div className="p-5 sm:p-6">
                <p className="text-sm font-semibold text-[#800000]">
                  <span aria-hidden="true">⌖ </span>
                  {project.location}
                </p>

                <h3 className="mt-3 text-xl font-extrabold text-[#183323] sm:text-2xl">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#55715E]">
                  {project.description}
                </p>

                <div className="my-5 h-px bg-[#183323]/10" />

                <Link
                  href="/contact"
                  className="flex min-h-12 items-center justify-between rounded-xl bg-[#D9FBE0] px-4 py-3 font-extrabold text-[#800000] transition hover:bg-[#800000] hover:text-white"
                >
                  Request Details
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
