
import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    title: "Open Plots",
    location: "Hyderabad & surrounding locations",
    description:
      "Explore residential plot options for your future home or property investment.",
    image: "/img/open-plots.webp",
    href: "/openplots",
    tag: "RESIDENTIAL LAND",
    icon: "⌂",
  },
  {
    title: "Farm Lands",
    location: "Explore available locations",
    description:
      "Discover farm land options for buyers looking for space and a greener lifestyle.",
    image: "/img/farm-lands.webp",
    href: "/farmlands",
    tag: "LAND & NATURE",
    icon: "♧",
  },
  {
    title: "Villas & Houses",
    location: "Explore residential properties",
    description:
      "Find residential property options that match your lifestyle and requirements.",
    image: "/img/villas.jpg",
    href: "/villas-houses",
    tag: "YOUR NEXT HOME",
    icon: "⌂",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="relative overflow-hidden bg-[#D9FBE0] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#800000]/15 bg-white/70 px-4 py-2 text-xs font-extrabold tracking-[0.16em] text-[#800000] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#800000]" />
            EXPLORE OUR PROPERTY OPTIONS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#183323] sm:text-4xl md:text-5xl">
            Find the Right Property
            <span className="mt-1 block text-[#800000]">
              For Your Future
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#355442] sm:text-base sm:leading-8">
            Explore property categories with Aarna Infra Developers and find
            options that fit your home-building plans and investment goals.
          </p>
        </div>

        {/* Responsive property cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {properties.map((property) => (
            <article
              key={property.title}
              className="group overflow-hidden rounded-3xl border border-[#183323]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#183323]/10"
            >
              {/* Image */}
              <Link
                href={property.href}
                aria-label={`Explore ${property.title}`}
                className="relative block h-60 overflow-hidden sm:h-64"
              >
                <Image
                  src={property.image}
                  alt={`${property.title} property options from Aarna Infra Developers`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

                <span className="absolute left-4 top-4 rounded-full bg-[#FFFF00] px-3 py-2 text-[10px] font-extrabold tracking-wider text-[#350000] sm:text-xs">
                  {property.tag}
                </span>

                <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-[#800000] shadow-lg transition duration-300 group-hover:rotate-[-35deg]">
                  ↗
                </span>
              </Link>

              {/* Card content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D9FBE0] text-2xl font-bold text-[#800000]">
                    {property.icon}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-extrabold text-[#183323] sm:text-2xl">
                      {property.title}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-[#55715E] sm:text-sm">
                      {property.location}
                    </p>
                  </div>
                </div>

                <p className="mt-4 min-h-0 text-sm leading-7 text-gray-600 sm:min-h-[84px]">
                  {property.description}
                </p>

                <div className="my-5 h-px bg-[#183323]/10" />

                <Link
                  href={property.href}
                  className="flex min-h-12 items-center justify-between rounded-xl border border-[#800000]/15 px-4 py-3 text-sm font-extrabold text-[#800000] transition hover:border-[#800000] hover:bg-[#800000] hover:text-white"
                >
                  Explore Properties
                  <span aria-hidden="true" className="text-lg">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#183323] p-6 text-center sm:mt-14 sm:p-8 md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-extrabold text-white sm:text-2xl">
              Looking for a specific property?
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/75">
              Contact our team to discuss your requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#FFFF00] px-6 py-3 font-extrabold text-[#350000] transition hover:bg-yellow-300 sm:w-auto"
          >
            Contact Our Team
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
