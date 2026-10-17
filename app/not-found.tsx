
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Not Found | Aarna Infra Developers",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-16 text-[#333333]">
      <section className="mx-auto w-full max-w-3xl text-center">
        {/* Company branding */}
        <Link href="/" aria-label="Aarna Infra Developers home">
          <img
            src="/assets/img/Logo.jpg"
            alt="Aarna Infra Developers"
            width={180}
            height={60}
            className="mx-auto mb-8 h-auto max-w-[180px] object-contain"
          />
        </Link>

        {/* 404 message */}
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#800000]">
          Aarna Infra Developers
        </p>

        <h1 className="mt-4 text-8xl font-extrabold leading-none text-[#800000] sm:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
          Oops! Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-[#800000] px-7 py-3 font-semibold text-white transition hover:bg-black"
          >
            Go Back to Home
          </Link>

          <Link
            href="/projects.html"
            className="rounded-lg border border-[#800000] px-7 py-3 font-semibold text-[#800000] transition hover:bg-[#800000] hover:text-white"
          >
            Explore Projects
          </Link>

          <Link
            href="/contact.html"
            className="rounded-lg border border-gray-300 px-7 py-3 font-semibold text-gray-700 transition hover:border-[#800000] hover:text-[#800000]"
          >
            Contact Us
          </Link>
        </div>

        {/* Contact details */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <p className="font-semibold text-gray-900">
            Need assistance?
          </p>

          <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <a
              href="tel:+919959354255"
              className="hover:text-[#800000]"
            >
              9959354255
            </a>

            <a
              href="tel:+917337317289"
              className="hover:text-[#800000]"
            >
              7337317289
            </a>

            <a
              href="mailto:info@aarnainfradevelopers.com"
              className="break-all hover:text-[#800000]"
            >
              info@aarnainfradevelopers.com
            </a>
          </div>

          <a
            href="https://wa.me/919959354255"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
