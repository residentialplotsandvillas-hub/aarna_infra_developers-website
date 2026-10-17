"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const maps = [
  { name: "Bibinagar", file: "BIBINAGAR.jpg" },
  { name: "Bommalaramaram", file: "BOMMALARAMARAM.jpg" },
  { name: "Buvanagiri", file: "BUVANAGIRI.jpg" },
  { name: "Chevella", file: "CHEVELLA.jpg" },
  { name: "Choutuppal", file: "CHOUTUPPAL.jpg" },
  { name: "Faruqnagar", file: "FARUQNAGAR.jpg" },
  { name: "Ghatkesar", file: "GHATKESAR.jpg" },
  { name: "Hatnura", file: "HATNURA.jpg" },
  { name: "Hayathnagar", file: "HAYATHNAGAR.jpg" },
  { name: "Ibrahimpatnam", file: "IBRAHIMPATNAM MANCHAL.jpg" },
  { name: "Jinnawaram FPLU", file: "JINNAWARAM_FPLU.jpg" },
  { name: "Kandukur", file: "KANDUKUR.jpg" },
  { name: "Kisara", file: "KISARA.jpg" },
  { name: "Kothuru", file: "KOTHURU.jpg" },
  { name: "Maheshwaram", file: "MAHESHWARAM.jpg" },
  { name: "Moinabad", file: "MOINABAD_RAJENDRANAGAR.jpg" },
  { name: "Mulug", file: "MULUG.jpg" },
  { name: "Medchal Qutubullapur", file: "medchal_qutubullapur.jpg" },
  { name: "Narsapur", file: "NARSAPUR.jpg" },
  { name: "Patancheruvu", file: "PATANCHERUVU.jpg" },
  { name: "Pochampalli", file: "POCHAMPALLI.jpg" },
  { name: "Sangareddy", file: "SANGAREDDY.jpg" },
  { name: "Shahbad", file: "SHAHBAD.jpg" },
  { name: "Shahmirpet", file: "SHAHMIRPET.jpg" },
  { name: "Shamshabad", file: "SHAMSHABAD.jpg" },
  { name: "Shankarpalli", file: "SHANKARPALLI_RAMCHANDRAPURAM.jpg" },
  { name: "Shivampet", file: "SHIVAMPET.jpg" },
  { name: "Tupran", file: "TUPRAN.jpg" },
  { name: "Wargal", file: "WARGAL.jpg" },
  { name: "Yacharam", file: "YACHARAM.jpg" },
];

const highlights = [
  { value: "30+", label: "Mandals & Areas Covered" },
  { value: "2031", label: "Master Plan Horizon" },
  { value: "HMDA", label: "Official Master Plan Maps" },
  { value: "Free", label: "Reference Maps Access" },
];

const faqs = [
  {
    q: "What is the HMDA Master Plan 2031?",
    a: "The HMDA Master Plan 2031 is a land-use plan prepared by the Hyderabad Metropolitan Development Authority for the Hyderabad Metropolitan Region. It shows designated land uses such as residential, commercial, industrial, agricultural, green belt and open spaces for the plan horizon year 2031. The master plan maps are useful for checking land-use classification and planning considerations for specific areas and villages.",
  },
  {
    q: "Where can I download HMDA Master Plan 2031 maps?",
    a: "You can browse the list of areas on this page and open the available master plan map for each area. We have compiled the maps for reference. For official verification, buyers should cross-check details with the HMDA authorities or the official HMDA website before making any property decision.",
  },
  {
    q: "Which areas are covered in the HMDA Master Plan 2031 maps on this page?",
    a: "This page includes maps for Bibinagar, Bommalaramaram, Buvanagiri, Chevella, Choutuppal, Faruqnagar, Ghatkesar, Hatnura, Hayathnagar, Ibrahimpatnam, Jinnawaram FPLU, Kandukur, Kisara, Kothuru, Maheshwaram, Moinabad, Mulug, Medchal Qutubullapur, Narsapur, Patancheruvu, Pochampalli, Sangareddy, Shahbad, Shahmirpet, Shamshabad, Shankarpalli, Shivampet, Tupran, Wargal and Yacharam.",
  },
  {
    q: "How do I check the land-use zone of a plot in the HMDA Master Plan?",
    a: "Identify the mandal or area, open the corresponding master plan map, and locate the survey number or village boundary. The map uses colors and codes to represent land uses. For accurate interpretation of the zoning, approach the HMDA authorities or a qualified planning consultant, since map reading can be technical.",
  },
  {
    q: "Is the HMDA Master Plan map enough to buy a plot?",
    a: "No. The master plan is a planning reference, not a substitute for checking title documents, layout approvals, encumbrance certificates and other property-specific records. Buyers should always verify the layout approval, LP number, title chain and registration details before purchasing a plot.",
  },
  {
    q: "What is the difference between HMDA Master Plan and HMDA layout approval?",
    a: "The master plan shows land-use zoning for the region and indicates how areas are planned for development. Layout approval is a separate process where a specific plotted development is reviewed and sanctioned. Both are relevant but serve different purposes. Buyers should check both for the specific property.",
  },
  {
    q: "Are the HMDA Master Plan 2031 maps on this page official?",
    a: "The maps are shared for general reference. For any legal, construction or investment decision, verify the current land-use status with the HMDA authorities or the official HMDA portal, as plan details can be updated over time.",
  },
  {
    q: "Can the HMDA Master Plan change?",
    a: "Master plans can be revised, and land-use designations may change through official amendment processes. Buyers should confirm the latest status of any specific land parcel before making a decision.",
  },
  {
    q: "Which HMDA Master Plan 2031 areas are popular for plots?",
    a: "Areas such as Shamshabad, Kothur, Maheshwaram, Ibrahimpatnam, Hayathnagar, Yacharam, Shankarpalli and Moinabad are frequently discussed in the context of plot purchases. Buyers should check the specific plot's approvals, zoning and documentation before proceeding.",
  },
  {
    q: "How do I contact Aarna Infra Developers for help with HMDA plots?",
    a: "You can call +91 99593 54255, message us on WhatsApp, or use the contact page on our website. Our team can help coordinate project information and site visits for HMDA-approved plots in and around Hyderabad.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HmdaMasterPlanClient() {
  const [search, setSearch] = useState("");

  const filteredMaps = useMemo(
    () =>
      maps.filter((map) =>
        map.name.toLowerCase().includes(search.trim().toLowerCase())
      ),
    [search]
  );

  return (
    <main className="overflow-hidden bg-[#F7F6F2] text-black">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden pt-16 sm:pt-20 lg:pt-24">
        <div className="absolute -right-24 top-10 -z-10 h-64 w-64 rounded-full border border-[#800000]/10 sm:h-96 sm:w-96" />
        <div className="absolute -left-20 bottom-0 -z-10 h-56 w-56 rounded-full bg-[#FFFF00]/20 blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 lg:pb-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#800000]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#800000] sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#800000]" />
              Aarna Infra Developers
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
              Hyderabad Metropolitan Development Authority
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              HMDA Master Plan
              <span className="mt-2 block text-[#800000]">2031 Maps</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 sm:text-lg">
              Browse HMDA Master Plan 2031 maps for 30+ mandals and areas
              across the Hyderabad Metropolitan Region — including
              Shamshabad, Kothur, Maheshwaram, Ibrahimpatnam, Hayathnagar,
              Ghatkesar, Medchal, Patancheruvu, Sangareddy, Shankarpalli,
              Moinabad, Yacharam and more.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#map-directory"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#800000] px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
              >
                Browse Maps <ArrowIcon />
              </a>

              <a
                href="tel:+919959354255"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 font-semibold text-black transition hover:border-[#800000] hover:text-[#800000]"
              >
                <span aria-hidden="true">☎</span>
                Call 9959354255
              </a>
            </div>

            <nav
              aria-label="Breadcrumb"
              className="mt-10 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/50"
            >
              <Link href="/" className="transition hover:text-[#800000]">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/services" className="transition hover:text-[#800000]">
                Services
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#800000]">HMDA Master Plan</span>
            </nav>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#FFFF00] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
              <img
                src="/assets/img/hmda/SHAMSHABAD.jpg"
                alt="HMDA Master Plan 2031 map for Shamshabad and Hyderabad Metropolitan Region"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
                fetchPriority="high"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/50 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
                  Reference Maps
                </p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">
                  HMDA Master Plan 2031
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-2 -z-10 h-28 w-28 rounded-2xl bg-[#FFFF00] sm:-bottom-7 sm:-right-5 sm:h-40 sm:w-40" />
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-[#800000] via-[#FFFF00] to-[#800000]" />
      </section>

      {/* HIGHLIGHTS */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl shadow-black/5 md:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={item.value}
              className={`px-4 py-6 text-center transition hover:bg-[#FFFF00]/20 sm:px-6 sm:py-8 ${
                index !== 0 ? "border-l border-black/10" : ""
              }`}
            >
              <p className="text-xl font-black tracking-tight text-[#800000] sm:text-2xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs font-medium leading-5 text-black/70 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12 lg:py-28">
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10">
            <img
              src="/assets/img/hmda/SHAMSHABAD.jpg"
              alt="HMDA Master Plan 2031 land use map Hyderabad"
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
            What Is It
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
            Understanding the HMDA Master Plan 2031
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-black/80">
            <p>
              The HMDA Master Plan 2031 is a land-use plan prepared by the
              Hyderabad Metropolitan Development Authority for the Hyderabad
              Metropolitan Region. It defines how land is planned for
              residential, commercial, industrial, agricultural, green belt
              and open space uses across the plan horizon year 2031.
            </p>

            <p>
              Buyers and investors often refer to HMDA Master Plan 2031 maps
              to check the land-use designation of an area or survey number
              before shortlisting a plot. The maps are a planning reference,
              not a substitute for checking title documents, layout approvals
              and other property records.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-7 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFFF00] text-2xl font-black text-[#800000]">
              ✓
            </div>
            <div>
              <h3 className="font-bold text-[#800000]">
                30+ Areas, One Directory
              </h3>
              <p className="mt-1 text-sm leading-6 text-black/70">
                Browse HMDA master plan maps by area and open the reference
                map in a new tab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP DIRECTORY */}
      <section
        id="map-directory"
        className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Map Directory
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              Explore HMDA Master Plan Maps
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Select an area below to open its available HMDA master plan map
              in a new tab. Use the search to quickly find a mandal or area.
            </p>
          </div>

          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="w-full md:max-w-sm">
              <label
                htmlFor="map-search"
                className="mb-2 block text-sm font-bold text-[#800000]"
              >
                Search by area or mandal
              </label>
              <input
                id="map-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="e.g. Shamshabad, Ghatkesar, Kothur..."
                className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black outline-none transition placeholder:text-black/40 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/10"
              />
            </div>

            <p
              className="text-sm font-medium text-black/60"
              aria-live="polite"
            >
              Showing{" "}
              <span className="font-bold text-[#800000]">
                {filteredMaps.length}
              </span>{" "}
              of {maps.length} areas
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMaps.map((map) => {
              const imagePath = `/assets/img/hmda/${encodeURIComponent(
                map.file
              )}`;

              return (
                <article
                  key={map.name}
                  className="group flex min-h-44 flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#800000]/30 hover:shadow-xl sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFFF00] text-xl font-bold text-[#800000] transition group-hover:bg-[#800000] group-hover:text-[#FFFF00]">
                      <span aria-hidden="true">⌖</span>
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold leading-snug text-[#800000] sm:text-xl">
                        {map.name}
                      </h3>
                      <p className="mt-1 text-sm text-black/60">
                        HMDA Master Plan 2031 Map
                      </p>
                    </div>
                  </div>

                  <a
                    href={imagePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${map.name} HMDA Master Plan 2031 Map in a new tab`}
                    className="group/link mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#800000]/30 bg-white px-4 py-2.5 text-sm font-bold text-[#800000] transition hover:border-[#800000] hover:bg-[#800000] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#800000] focus:ring-offset-2"
                  >
                    View Map <span aria-hidden="true">↗</span>
                  </a>
                </article>
              );
            })}
          </div>

          {filteredMaps.length === 0 && (
            <div className="rounded-2xl border border-dashed border-black/20 bg-white px-5 py-12 text-center">
              <h3 className="text-lg font-extrabold text-[#800000]">
                No matching areas found
              </h3>
              <p className="mt-2 text-sm text-black/60">
                Try another area name or mandal.
              </p>
              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-4 rounded-full bg-[#800000] px-5 py-2.5 font-semibold text-white transition hover:bg-black"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl rounded-3xl border border-black/10 bg-white p-6 sm:p-10 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#800000]">
              Aarna Infra Developers
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
              HMDA Master Plan 2031 Hyderabad — Maps, Areas and Land Use
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-black/80">
              <p>
                The HMDA Master Plan 2031 is one of the most referenced
                planning documents for anyone exploring property in the
                Hyderabad Metropolitan Region. It outlines land-use zoning
                for residential, commercial, industrial, agricultural, green
                belt and open space uses, and helps buyers understand how an
                area is planned for development.
              </p>

              <p>
                On this page, you can browse HMDA Master Plan 2031 maps for
                30+ mandals and areas across the Hyderabad Metropolitan
                Region. Use the search box to quickly locate an area and open
                the corresponding map in a new tab for reference.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                What the HMDA Master Plan 2031 Covers
              </h3>

              <p>
                The master plan provides a region-level view of land-use
                designations. It helps you understand whether an area is
                broadly planned for residential development, commercial use,
                industrial use, agriculture or green belt. This context can
                be useful when comparing plot locations, but it does not
                replace project-level approvals, title verification or
                legal due diligence.
              </p>

              <p>
                The HMDA master plan maps on this page cover areas such as
                Shamshabad, Kothur, Maheshwaram, Ibrahimpatnam, Hayathnagar,
                Yacharam, Shankarpalli, Moinabad, Chevella, Ghatkesar,
                Medchal Qutubullapur, Patancheruvu, Sangareddy, Narsapur,
                Tupran, Wargal, Mulug, Bibinagar, Bommalaramaram, Buvanagiri,
                Choutuppal, Faruqnagar, Hatnura, Jinnawaram, Kandukur, Kisara,
                Pochampalli, Shahbad, Shahmirpet and Shivampet.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                HMDA Master Plan 2031 Areas — Quick Reference
              </h3>

              <p>
                Below is a quick reference to some of the areas commonly
                discussed in the context of HMDA master plan maps and plot
                purchases:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Shamshabad:</strong> A key corridor near Rajiv
                  Gandhi International Airport with residential, commercial
                  and industrial land-use considerations.
                </li>
                <li>
                  <strong>Kothur:</strong> Located along the Bengaluru
                  highway near Shadnagar, often referenced for HMDA-approved
                  layouts and gated ventures.
                </li>
                <li>
                  <strong>Maheshwaram:</strong> A growth corridor south of
                  Hyderabad with residential and infrastructure interest.
                </li>
                <li>
                  <strong>Ibrahimpatnam:</strong> Emerging residential and
                  industrial corridor with connectivity to the ORR.
                </li>
                <li>
                  <strong>Hayathnagar:</strong> Established eastern
                  residential area with strong local connectivity.
                </li>
                <li>
                  <strong>Yacharam:</strong> A southern corridor often
                  discussed for long-term land holdings.
                </li>
                <li>
                  <strong>Shankarpalli:</strong> Western corridor with
                  growing residential interest and connectivity.
                </li>
                <li>
                  <strong>Moinabad:</strong> A corridor with a mix of
                  residential, farm and gated-community plots.
                </li>
                <li>
                  <strong>Chevella:</strong> A western area with planning
                  relevance for the expanding metropolitan region.
                </li>
                <li>
                  <strong>Ghatkesar:</strong> Eastern corridor with
                  residential and industrial considerations.
                </li>
                <li>
                  <strong>Medchal Qutubullapur:</strong> Northern growth
                  corridor with residential interest.
                </li>
                <li>
                  <strong>Patancheruvu:</strong> Industrial and residential
                  corridor west of Hyderabad.
                </li>
                <li>
                  <strong>Sangareddy:</strong> A key western district area
                  with expanding residential demand.
                </li>
              </ul>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                How to Use the HMDA Master Plan 2031 Maps
              </h3>

              <p>
                Start by identifying the mandal or area where the property is
                located. Use the search box to find the corresponding map,
                then open it to review the land-use designation. If you are
                checking a specific survey number or village, locate it on
                the map and interpret the zoning. Because master plan maps
                use technical color codes and references, it is helpful to
                confirm the interpretation with the HMDA authorities or a
                qualified planning consultant.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                HMDA Master Plan vs. HMDA Layout Approval
              </h3>

              <p>
                The HMDA Master Plan and HMDA layout approval are related but
                distinct. The master plan sets the broader land-use framework
                for the region. Layout approval is a project-level review
                where a specific plotted development is evaluated and
                sanctioned. Buyers should check both — the master plan for
                area-level context and the layout approval for property-level
                legal clarity.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Why Buyers Reference HMDA Master Plan Maps
              </h3>

              <p>
                Buyers and investors often review HMDA master plan maps to
                understand the planned land use for an area, compare growth
                corridors and assess long-term context. The maps can be a
                useful starting point for research, but they should not
                replace project-level approvals, title verification,
                encumbrance checks or legal review.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Important Considerations Before Buying a Plot
              </h3>

              <p>
                Before buying any plot in the Hyderabad Metropolitan Region,
                verify the layout approval (HMDA or DTCP), LP number, title
                documents, encumbrance certificate, revenue records and
                registration details. Check the specific plot's land-use
                status and confirm all approvals with the relevant
                authorities. Independent legal advice is always recommended.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                HMDA-Approved Plots and Projects
              </h3>

              <p>
                If you are exploring HMDA-approved plots in areas such as
                Shadnagar, Kothur, Kadthal, Kollur, Mokila, Tellapur or
                Shamshabad, our team can share project details and coordinate
                site visits. Explore our{" "}
                <Link
                  href="/openplots"
                  className="font-bold text-[#800000] underline underline-offset-4 hover:text-black"
                >
                  residential open plots
                </Link>{" "}
                and{" "}
                <Link
                  href="/projects"
                  className="font-bold text-[#800000] underline underline-offset-4 hover:text-black"
                >
                  property projects
                </Link>{" "}
                to learn more about the options available.
              </p>

              <h3 className="pt-4 text-xl font-bold text-[#800000] sm:text-2xl">
                Contact Aarna Infra Developers
              </h3>

              <p>
                Need help understanding the HMDA master plan for a specific
                area or exploring approved plots? Contact Aarna Infra
                Developers to request project details or arrange a site
                visit.
              </p>

              <p>
                Call{" "}
                <a
                  href="tel:+919959354255"
                  className="font-bold text-[#800000] underline underline-offset-4"
                >
                  +91 99593 54255
                </a>{" "}
                or visit our{" "}
                <Link
                  href="/contact"
                  className="font-bold text-[#800000] underline underline-offset-4 hover:text-black"
                >
                  contact page
                </Link>{" "}
                to get in touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#800000]">
              Answers
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#800000] sm:text-4xl lg:text-5xl">
              HMDA Master Plan FAQs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Quick answers to common questions about HMDA Master Plan 2031
              maps, land-use and plot purchases.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-black/10 bg-white px-5 py-4 sm:px-6 sm:py-5"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-[#800000] marker:hidden">
                  <span>{f.q}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFFF00] text-lg font-black text-[#800000] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-7 text-black/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-black/10 bg-white px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#800000]/10 sm:h-96 sm:w-96" />
          <div className="absolute -bottom-28 right-24 h-64 w-64 rounded-full bg-[#FFFF00]/20 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#800000]">
                Need Property Guidance?
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#800000] sm:text-4xl lg:text-5xl">
                Speak with Aarna Infra Developers
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-black/70 sm:text-lg">
                Contact our team to discuss HMDA-approved plots, project
                details or arrange a site visit in your preferred location.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="tel:+919959354255"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#800000] px-7 py-3 font-extrabold text-white transition hover:-translate-y-1 hover:bg-black"
              >
                ☎ Call 9959354255
              </a>

              <a
                href="https://wa.me/919959354255"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#800000]/30 bg-white px-7 py-3 font-bold text-[#800000] transition hover:border-[#800000] hover:bg-[#800000] hover:text-white"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING CONTACT SHORTCUTS */}
      <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-7 sm:right-6">
        <a
          href="https://wa.me/919959354255"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Aarna Infra Developers on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-sm font-extrabold text-white shadow-lg transition hover:scale-110"
        >
          WA
        </a>
        <a
          href="tel:+919959354255"
          aria-label="Call Aarna Infra Developers"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#800000] text-xl text-white shadow-lg transition hover:scale-110"
        >
          ☎
        </a>
      </div>
    </main>
  );
}