"use client";

import { useReveal } from "@/hooks/use-reveal";

export function Footer() {
  const { ref, isVisible } = useReveal(0.3);

  return (
    <footer ref={ref} className="px-4 py-12 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl space-y-6 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h3 className="text-lg font-sans text-foreground/80 md:text-xl">
            My Dentist Multispeciality Dental Clinic
          </h3>
          <p className="text-sm text-foreground/60 md:text-base">
            Plot No 97, First Floor, Upuroopa Layout 2, Pragathinagar, Hyderabad
            - 500090
          </p>
          <p className="text-sm text-foreground/60 md:text-base">
            Phone: +91 99666 48582 | Email: mydentistmdc@gmail.com
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <p className="text-xs text-foreground/50 md:text-sm">
            © {new Date().getFullYear()} My Dentist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
