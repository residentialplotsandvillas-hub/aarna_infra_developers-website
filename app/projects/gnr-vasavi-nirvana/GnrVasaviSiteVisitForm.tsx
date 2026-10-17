"use client";

import { useEffect, useState, type FormEvent } from "react";

const WHATSAPP = "https://wa.me/919959354255";

const visitTimes = [
  "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM",
  "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
  "06:00 PM",
];

export default function GnrVasaviSiteVisitForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [minDate, setMinDate] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    setMinDate(`${year}-${month}-${day}`);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = [
      "Hello Aarna Infra Developers, I would like to book a site visit.",
      "",
      "Project: GNR Vasavi Nirvana (Attapur)",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Preferred visit date: ${date}`,
      `Preferred visit time: ${time}`,
      message.trim() ? `Message: ${message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `${WHATSAPP}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-5 text-slate-800 shadow-2xl sm:p-8"
    >
      <div className="mb-6">
        <h3 className="text-xl font-extrabold text-slate-900">
          Request a Site Visit
        </h3>
        <p className="mt-1 text-sm leading-6 text-slate-500">
          Fill in your details. WhatsApp will open with your enquiry ready to
          send.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="gnr-name"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            Full Name *
          </label>
          <input
            id="gnr-name"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
          />
        </div>

        <div>
          <label
            htmlFor="gnr-phone"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            Phone Number *
          </label>
          <input
            id="gnr-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9+ ()-]{8,18}"
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Enter your phone number"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
          />
        </div>

        <div>
          <label
            htmlFor="gnr-date"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            Visit Date *
          </label>
          <input
            id="gnr-date"
            name="date"
            type="date"
            required
            min={minDate || undefined}
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
          />
        </div>

        <div>
          <label
            htmlFor="gnr-time"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            Visit Time *
          </label>
          <select
            id="gnr-time"
            name="time"
            required
            value={time}
            onChange={(event) => setTime(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
          >
            <option value="">Select visit time</option>
            {visitTimes.map((visitTime) => (
              <option key={visitTime} value={visitTime}>
                {visitTime}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="gnr-message"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            Message (Optional)
          </label>
          <textarea
            id="gnr-message"
            name="message"
            rows={3}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Any questions or preferences?"
            className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#183323] px-6 py-4 font-extrabold text-white transition hover:bg-[#245137] focus:outline-none focus:ring-4 focus:ring-emerald-700/20"
      >
        Continue to WhatsApp
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-slate-500">
        Submitting opens WhatsApp. Your booking is not confirmed until the team
        responds.
      </p>
    </form>
  );
}