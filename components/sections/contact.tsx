"use client";

import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";
import { MagneticButton } from "@/components/magnetic-button";

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const res = await fetch("/api/resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(res);


      if (!res.ok) throw new Error("Failed to send message");

      setSubmitSuccess(true);
      setFormData({ name: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-section"
      ref={ref}
      className="flex min-h-screen items-center px-4 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-10 lg:gap-12">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                Get in
                <br />
                touch
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">
                / Book your appointment
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <a
                href="tel:+919966648582"
                className={`group block transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <svg
                    className="h-3 w-3 text-foreground/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="font-mono text-xs text-foreground/60">
                    Phone
                  </span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  +91 99666 48582
                </p>
              </a>

              <a
                href="mailto:mydentistmdc@gmail.com"
                className={`group block transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <svg
                    className="h-3 w-3 text-foreground/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-mono text-xs text-foreground/60">
                    Email
                  </span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-xl">
                  mydentistmdc@gmail.com
                </p>
              </a>

              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <svg
                    className="h-3 w-3 text-foreground/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-mono text-xs text-foreground/60">
                    Location
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-foreground md:text-base">
                  Plot No 97, First Floor
                  <br />
                  Upuroopa Layout 2, Pragathinagar
                  <br />
                  Hyderabad - 500090
                </p>
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <svg
                    className="h-3 w-3 text-foreground/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-mono text-xs text-foreground/60">
                    Hours
                  </span>
                </div>
                <p className="text-sm text-foreground md:text-base">
                  Mon - Sat: 10 AM - 1 PM, 5 PM - 9 PM
                  <br />
                  <span className="text-foreground/70">
                    Sun: By Appointment
                  </span>
                </p>
              </div>

              <div
                className={`pt-2 transition-all duration-700 md:pt-4 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <a
                  href="https://maps.app.goo.gl/WjceZoZNwDuYp83r7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b border-transparent font-mono text-xs text-foreground/60 transition-all hover:border-foreground/60 hover:text-foreground/90 md:text-sm"
                >
                  View on Google Maps
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="Your name"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="+91 xxxxx xxxxx"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">
                  Message
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="Tell us about your dental needs..."
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className="w-full disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Book Appointment"}
                </MagneticButton>
                {submitSuccess && (
                  <p className="mt-3 text-center font-mono text-sm text-foreground/80">
                    Request sent! We&apos;ll contact you soon.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
