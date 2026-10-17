
import Link from "next/link";
import Container from "./Container";

const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "About Aarna Infra", href: "/about" },
  { label: "Real Estate Services", href: "/services" },
  { label: "All Projects", href: "/projects" },
  { label: "Open Plots in Hyderabad", href: "/openplots" },
  { label: "Farm Lands", href: "/farmlands" },
  { label: "Apartments", href: "/apartments" },
  { label: "Villas & Houses", href: "/villas-houses" },
  { label: "Contact Us", href: "/contact" },
];

const featuredProjects = [
  { label: "Golden Farm", href: "/projects/Golden-Farm" },
  { label: "Green Meadows", href: "/projects/Green-Meadows" },
  { label: "Golden City", href: "/projects/Golden-City" },
  { label: "Magadha", href: "/projects/Magadha" },
  { label: "Golden Terra", href: "/projects/Golden-Terra" },
  {
    label: "Myscape Songs of The Sun",
    href: "/projects/Myscape-Songs-Of-The-Sun",
  },
];

const locations = [
  { label: "Shadnagar", href: "/open-plots-in-shadnagar" },
  { label: "Kothur", href: "/open-plots-in-kothur" },
  { label: "Kadthal", href: "/open-plots-in-kadthal" },
  { label: "Sadashivpet", href: "/open-plots-in-sadashivpet" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/aarnainfradevelopers",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aarnainfradevelopers/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@aarnainfradevelopers",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aarnainfra-developers-29ab30200",
  },
];

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-base font-extrabold text-white sm:text-lg">
        {title}
      </h2>

      <div className="mb-5 mt-3 h-1 w-12 rounded-full bg-[#FFFF00]" />

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-start gap-2 text-sm leading-6 text-white/70 transition hover:text-[#FFFF00]"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 text-[#FFFF00] transition-transform group-hover:translate-x-1"
              >
                →
              </span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#183323] text-white">
      {/* Decorative brand accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#FFFF00]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[#800000]/30 blur-3xl"
      />

      <Container className="relative py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Company information */}
          <div>
            <Link
              href="/"
              aria-label="Aarna Infra Developers homepage"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl font-black text-[#800000]">
                A
              </span>

              <span>
                <span className="block text-lg font-black text-white">
                  Aarna Infra
                </span>
                <span className="mt-0.5 block text-xs font-bold uppercase tracking-[0.2em] text-[#FFFF00]">
                  Developers
                </span>
              </span>
            </Link>

            <div className="mt-5 h-1 w-14 rounded-full bg-[#FFFF00]" />

            <p className="mt-5 text-sm leading-7 text-white/70">
              Aarna Infra Developers helps property buyers explore open
              plots, farm lands, apartments, villas and residential
              property options around Hyderabad.
            </p>

            <h3 className="mt-6 text-sm font-extrabold text-white">
              Contact Our Team
            </h3>

            <ul className="mt-3 space-y-3 text-sm text-white/75">
              <li>
                <span className="text-white/50">Mobile: </span>
                <a
                  href="tel:+919959354255"
                  className="transition hover:text-[#FFFF00]"
                >
                  +91 99593 54255
                </a>
              </li>

              <li>
                <span className="text-white/50">Phone: </span>
                <a
                  href="tel:+917337317289"
                  className="transition hover:text-[#FFFF00]"
                >
                  +91 73373 17289
                </a>
              </li>

              <li className="break-words">
                <span className="text-white/50">Email: </span>
                <a
                  href="mailto:info@aarnainfradevelopers.com"
                  className="transition hover:text-[#FFFF00]"
                >
                  info@aarnainfradevelopers.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-white/50">
                Follow Aarna Infra
              </h3>

              <ul className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center justify-center rounded-lg border border-white/15 px-3 text-xs font-semibold text-white/80 transition hover:border-[#FFFF00] hover:bg-[#FFFF00] hover:text-[#183323]"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Useful links */}
          <FooterLinks title="Quick Links" links={usefulLinks} />

          {/* Project links */}
          <FooterLinks
            title="Featured Projects"
            links={featuredProjects}
          />

          {/* Location links and enquiry */}
          <div>
            <FooterLinks
              title="Explore Locations"
              links={locations}
            />

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-base font-extrabold text-white">
                Looking for a Property?
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/65">
                Tell us your preferred location and property type.
              </p>

              <Link
                href="/contact"
                className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FFFF00] px-4 py-3 text-sm font-extrabold text-[#183323] transition hover:bg-yellow-300"
              >
                Send an Enquiry
                <span aria-hidden="true">→</span>
              </Link>

              <a
                href="https://wa.me/919959354255"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-4 py-3 text-sm font-bold text-white transition hover:border-[#FFFF00] hover:text-[#FFFF00]"
              >
                WhatsApp Us ↗
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Copyright and legal links */}
      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-white/55">
            © {new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="font-bold text-white transition hover:text-[#FFFF00]"
            >
              Aarna Infra Developers
            </Link>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
            <Link
              href="/privacy-policy"
              className="text-white/60 transition hover:text-[#FFFF00]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="text-white/60 transition hover:text-[#FFFF00]"
            >
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
