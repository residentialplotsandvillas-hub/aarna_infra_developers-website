
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: "⌂",
    title: "Open Plot Properties",
    description:
      "Explore residential plot options and request information about location, dimensions, pricing and availability.",
    href: "/openplots",
  },
  {
    number: "02",
    icon: "♧",
    title: "Farm Land Properties",
    description:
      "Discover farm land options and learn about land classification, access and relevant documentation.",
    href: "/farmlands",
  },
  {
    number: "03",
    icon: "▦",
    title: "Apartments",
    description:
      "Explore apartment options and enquire about property details, location and availability.",
    href: "/apartments",
  },
  {
    number: "04",
    icon: "⌂",
    title: "Villas & Houses",
    description:
      "Find residential property options that suit your home requirements and preferred location.",
    href: "/villas-houses",
  },
  {
    number: "05",
    icon: "✓",
    title: "HMDA Information",
    description:
      "Learn about layout approval information and the documents to verify for a specific property.",
    href: "/hmda-master-plan",
  },
  {
    number: "06",
    icon: "↗",
    title: "Property Enquiries",
    description:
      "Tell our team your preferred property type and location to request further information.",
    href: "/contact",
  },
];

export default function RealEstateServices() {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#800000]/15 bg-white/70 px-4 py-2 text-xs font-extrabold tracking-widest text-[#800000] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#800000]" />
            OUR REAL ESTATE SERVICES
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#183323] sm:text-4xl md:text-5xl">
            Property Solutions
            <span className="mt-2 block text-[#800000]">
              For Your Next Move
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#355442] sm:text-base sm:leading-8">
            Explore property categories with Aarna Infra Developers.
            Browse available options and contact our team for property
            details, locations and current availability.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-3xl border border-[#183323]/10 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#800000]/25 hover:bg-white hover:shadow-xl sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9FBE0] text-3xl font-bold text-[#800000] transition duration-300 group-hover:bg-[#800000] group-hover:text-white">
                  {service.icon}
                </span>

                <span className="text-sm font-extrabold tracking-widest text-[#800000]/35">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-[#183323] sm:text-2xl">
                {service.title}
              </h3>

              <p className="mt-3 min-h-0 text-sm leading-7 text-[#55715E] sm:min-h-[84px]">
                {service.description}
              </p>

              <div className="mt-5 h-1 w-12 rounded-full bg-[#FFFF00] transition-all duration-300 group-hover:w-20" />

              <Link
                href={service.href}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-between rounded-xl border border-[#800000]/15 px-4 py-3 text-sm font-extrabold text-[#800000] transition hover:border-[#800000] hover:bg-[#D9FBE0] hover:text-white"
              >
                Explore Service
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl bg-[#D9FBE0] p-6 sm:mt-14 sm:p-9 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-extrabold tracking-widest text-black sm:text-sm">
              NEED PROPERTY INFORMATION?
            </p>

            <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
              Let's discuss your requirements.
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#800000]">
              Contact our team to ask about available property options.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-[#FFFF00] px-6 py-3 font-extrabold text-[#350000] transition hover:bg-yellow-300 sm:w-auto"
          >
            Contact Us
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
