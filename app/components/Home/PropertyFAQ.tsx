
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How can I find open plots for sale in Hyderabad?",
    answer:
      "Explore the available properties on our Open Plots page. Review the location, price, plot dimensions and project documents, and contact our team for current availability.",
  },
  {
    question: "Where can I explore plots near Shadnagar?",
    answer:
      "Visit our Shadnagar location page to explore available information. Contact our team to confirm current projects, location details and pricing.",
  },
  {
    question: "What should I check before buying an HMDA plot?",
    answer:
      "Verify the applicable layout approval and its details, land title, survey information, land use and other relevant documents with the appropriate authorities and a qualified legal professional.",
  },
  {
    question: "Can I enquire about farm lands near Hyderabad?",
    answer:
      "Yes. Visit our Farm Lands page or Contact page to ask about available properties, locations and documentation.",
  },
  {
    question: "How do I get property prices and availability?",
    answer:
      "Contact Aarna Infra Developers with your preferred location and property type. Our team can provide available information about current listings and pricing.",
  },
];

export default function PropertyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#D9FBE0] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Heading */}
        <div>
          <span className="inline-flex rounded-full border border-[#800000]/15 bg-white/70 px-4 py-2 text-xs font-extrabold tracking-widest text-[#800000] sm:text-sm">
            HAVE QUESTIONS?
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#183323] sm:text-4xl md:text-5xl">
            Property FAQs
            <span className="mt-2 block text-[#800000]">
              Answered Simply
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#355442] sm:text-base sm:leading-8">
            Find answers to common questions about open plots in Hyderabad,
            property locations, approvals and enquiries.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#800000] px-6 py-3 font-bold text-white transition hover:bg-[#600000]"
          >
            Ask a Question
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Expandable FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `property-faq-answer-${index}`;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white/80 transition ${
                  isOpen
                    ? "border-[#800000]/30 shadow-md"
                    : "border-[#183323]/10 hover:bg-white"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex min-h-[76px] w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-sm font-extrabold leading-6 text-[#183323] sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl font-medium transition ${
                        isOpen
                          ? "rotate-45 bg-[#800000] text-white"
                          : "bg-[#D9FBE0] text-[#800000]"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={answerId}
                    className="border-t border-[#183323]/10 px-5 pb-5 pt-4 sm:px-6"
                  >
                    <p className="text-sm leading-7 text-[#55715E]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
