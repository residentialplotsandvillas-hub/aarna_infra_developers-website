
const testimonials = [
  {
    name: "Property Buyer",
    role: "Customer Feedback",
    quote:
      "The team explained the property details and helped me understand the next steps in the buying process.",
    initials: "PB",
  },
  {
    name: "Prospective Buyer",
    role: "Customer Feedback",
    quote:
      "The enquiry process was straightforward, and I could ask questions about the location and available options.",
    initials: "PB",
  },
  {
    name: "Property Enquirer",
    role: "Customer Feedback",
    quote:
      "The team helped me understand which property details and documents I should review before making a decision.",
    initials: "PE",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#D9FBE0] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#800000]/15 bg-white/70 px-4 py-2 text-xs font-extrabold tracking-widest text-[#800000] sm:text-sm">
            CUSTOMER EXPERIENCES
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#183323] sm:text-4xl md:text-5xl">
            Built on Trust,
            <span className="block text-[#800000]">
              Focused on Your Needs
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#355442] sm:text-base sm:leading-8">
            Clear communication and helpful property information matter
            when you are planning your next purchase.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-7">
          {testimonials.map((item, index) => (
            <article
              key={index}
              className="flex h-full flex-col rounded-3xl border border-[#183323]/10 bg-white/85 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-4xl font-extrabold leading-none text-[#800000]/20"
                  aria-hidden="true"
                >
                  “
                </span>

                <span className="rounded-full bg-[#FFFF00] px-3 py-1.5 text-xs font-extrabold text-[#350000]">
                  CUSTOMER VOICE
                </span>
              </div>

              <p className="mt-4 flex-1 text-sm leading-7 text-[#355442] sm:text-base">
                {item.quote}
              </p>

              <div className="my-6 h-px bg-[#183323]/10" />

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#800000] font-extrabold text-white">
                  {item.initials}
                </div>

                <div>
                  <h3 className="font-extrabold text-[#183323]">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#55715E]">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
