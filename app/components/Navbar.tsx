
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PHONE = "+919959354255";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },

    ],
  },
  {
    label: "Properties",
    href: "/projects",
    children: [
      { label: "All Projects", href: "/projects" },
      { label: "Apartments", href: "/apartments" },
      { label: "Open Plots in Hyderabad", href: "/openplots" },
      { label: "Farm Lands", href: "/farmlands" },
      { label: "Villas & Houses", href: "/villas-houses" },
    ],
  },
  { label: "Channel Partner", href: "/channel-partner" },
  { label: "Careers", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`h-4 w-4 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMobile(null);
    setOpenDesktop(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenMobile(null);
        setOpenDesktop(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const itemIsActive = (
    item: (typeof navItems)[number]
  ) =>
    isActive(item.href) ||
    Boolean(item.children?.some((child) => isActive(child.href)));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#183323]/10 transition-all duration-300 ${
        scrolled
          ? "bg-[#D9FBE0]/95 py-2 shadow-lg backdrop-blur-xl"
          : "bg-[#D9FBE0] py-3"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Main navigation"
          className="flex min-h-[56px] items-center justify-between gap-3"
        >
          {/* Logo and brand */}
          <Link
            href="/"
            aria-label="Aarna Infra Developers home"
            className="flex shrink-0 items-center gap-2.5 sm:gap-3"
          >
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-[#800000]/10 bg-white shadow-sm sm:h-12 sm:w-12">
              <Image
                src="/img/Logo.jpg"
                alt="Aarna Infra Developers logo"
                fill
                priority
                sizes="48px"
                className="object-contain p-1"
              />
            </span>

            <span className="leading-tight">
              <span className="block text-sm font-black tracking-tight text-[#183323] sm:text-base">
                AARNA INFRA
              </span>
              <span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[0.24em] text-[#800000] sm:text-[10px]">
                DEVELOPERS
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-0.5 xl:flex">
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const open = openDesktop === item.label;
              const active = itemIsActive(item);

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    hasChildren && setOpenDesktop(item.label)
                  }
                  onMouseLeave={() =>
                    hasChildren && setOpenDesktop(null)
                  }
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      aria-current={
                        isActive(item.href) ? "page" : undefined
                      }
                      className={`relative flex min-h-11 items-center gap-1.5 rounded-xl px-2.5 text-[12px] font-bold transition-colors 2xl:px-3 2xl:text-[13px] ${
                        active
                          ? "bg-white text-[#800000] shadow-sm"
                          : "text-[#183323] hover:bg-white/75 hover:text-[#800000]"
                      }`}
                    >
                      {item.label}
                    </Link>

                    {hasChildren && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} menu`}
                        aria-expanded={open}
                        onClick={() =>
                          setOpenDesktop(open ? null : item.label)
                        }
                        onFocus={() => setOpenDesktop(item.label)}
                        className="mr-1 flex h-9 w-7 items-center justify-center rounded-lg text-[#800000] hover:bg-white"
                      >
                        <Chevron open={open} />
                      </button>
                    )}
                  </div>

                  {/* Desktop dropdown */}
                  {hasChildren && open && (
                    <div className="absolute left-0 top-full z-50 w-64 pt-2">
                      <div className="overflow-hidden rounded-2xl border border-[#183323]/10 bg-white p-2 shadow-2xl">
                        <p className="px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#800000]">
                          Explore {item.label}
                        </p>

                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex min-h-11 items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors ${
                              isActive(child.href)
                                ? "bg-[#D9FBE0] font-bold text-[#800000]"
                                : "text-[#183323] hover:bg-[#D9FBE0] hover:text-[#800000]"
                            }`}
                          >
                            {child.label}
                            <span aria-hidden="true">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop call button */}
          <a
            href={`tel:${PHONE}`}
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#FFFF00] px-4 py-3 text-sm font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#600000] 2xl:inline-flex"
          >
            <PhoneIcon />
            Call Now
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setMobileOpen((previous) => !previous);
              setOpenMobile(null);
            }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#800000]/15 bg-white text-[#800000] transition hover:bg-[#FFFF00] xl:hidden"
          >
            <span className="relative h-5 w-6">
              <span
                className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all ${
                  mobileOpen ? "top-2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-6 rounded-full bg-current transition-all ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all ${
                  mobileOpen ? "top-2 -rotate-45" : "top-3.5"
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close mobile navigation"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 top-[72px] z-[-1] bg-[#183323]/40 xl:hidden"
        />
      )}

      {/* Mobile navigation drawer */}
      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full overflow-y-auto border-t border-[#183323]/10 bg-[#D9FBE0] shadow-2xl transition-all duration-300 xl:hidden ${
          mobileOpen
            ? "visible max-h-[calc(100dvh-72px)] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 pb-6 pt-4 sm:px-6">
          <div className="mb-4 rounded-2xl border border-[#800000]/10 bg-white/80 p-4">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#800000]">
              Aarna Infra Developers
            </p>
            <p className="mt-1 text-sm text-[#355442]">
              Explore property options around Hyderabad.
            </p>
          </div>

          <ul className="space-y-1">
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const open = openMobile === item.label;
              const active = itemIsActive(item);

              return (
                <li key={item.label}>
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      aria-current={
                        isActive(item.href) ? "page" : undefined
                      }
                      className={`flex min-h-12 flex-1 items-center rounded-xl px-4 py-3 text-sm font-bold transition ${
                        active
                          ? "bg-white text-[#800000] shadow-sm"
                          : "text-[#183323] hover:bg-white/70"
                      }`}
                    >
                      {active && (
                        <span className="mr-2 h-2 w-2 rounded-full bg-[#800000]" />
                      )}
                      {item.label}
                    </Link>

                    {hasChildren && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={open}
                        onClick={() =>
                          setOpenMobile(open ? null : item.label)
                        }
                        className="flex h-11 w-11 items-center justify-center rounded-xl text-[#800000] hover:bg-white"
                      >
                        <Chevron open={open} />
                      </button>
                    )}
                  </div>

                  {hasChildren && open && (
                    <ul className="ml-4 mt-1 space-y-1 border-l-2 border-[#800000]/20 py-1 pl-3">
                      {item.children?.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`flex min-h-11 items-center justify-between rounded-lg px-3 py-2 text-sm ${
                              isActive(child.href)
                                ? "bg-white font-bold text-[#800000]"
                                : "text-[#355442] hover:bg-white"
                            }`}
                          >
                            {child.label}
                            <span aria-hidden="true">→</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <a
            href={`tel:${PHONE}`}
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#800000] px-4 py-3 font-extrabold text-white transition hover:bg-[#600000]"
          >
            <PhoneIcon />
            Call +91 99593 54255
          </a>

          <Link
            href="/contact"
            className="mt-3 flex min-h-12 items-center justify-center rounded-xl bg-[#FFFF00] px-4 py-3 font-extrabold text-[#350000] transition hover:bg-yellow-300"
          >
            Enquire About Properties
          </Link>
        </div>
      </div>
    </header>
  );
}
