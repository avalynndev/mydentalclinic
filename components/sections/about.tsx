"use client";

import { MagneticButton } from "@/components/magnetic-button";
import { useReveal } from "@/hooks/use-reveal";

export function AboutSection() {
  const { ref, isVisible } = useReveal(0.3);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="flex min-h-screen items-center px-4 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                Your smile,
                <br />
                our passion
              </h2>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                At MyDentist Multispeciality Dental Clinic, we combine advanced
                dental technology with compassionate care to deliver exceptional
                results.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Our team of experienced specialists is dedicated to making every
                visit comfortable and ensuring your smile stays healthy and
                bright.
              </p>
            </div>

            <div
              className={`mt-6 overflow-hidden rounded-2xl bg-foreground/10 transition-all duration-700 md:mt-8 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex aspect-video items-center justify-center">
                <p className="font-mono text-sm text-foreground/40">
                  [Clinic Exterior Photo]
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 md:space-y-12">
            {[
              {
                value: "500+",
                label: "Happy Patients",
                sublabel: "And counting",
                direction: "right",
              },
              {
                value: "15+",
                label: "Years",
                sublabel: "Of excellence",
                direction: "left",
              },
              {
                value: "6",
                label: "Specialists",
                sublabel: "Expert team",
                direction: "right",
              },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left"
                    ? "-translate-x-16 opacity-0"
                    : "translate-x-16 opacity-0";
                }
                return "translate-x-0 opacity-100";
              };

              return (
                <div
                  key={i}
                  className={`flex items-baseline gap-4 border-l border-foreground/30 pl-4 transition-all duration-700 md:gap-8 md:pl-8 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "85%",
                  }}
                >
                  <div className="text-3xl font-light text-foreground md:text-6xl lg:text-7xl">
                    {stat.value}
                  </div>
                  <div>
                    <div className="font-sans text-base font-light text-foreground md:text-xl">
                      {stat.label}
                    </div>
                    <div className="font-mono text-xs text-foreground/60">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "750ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={scrollToContact}>
            Book Appointment
          </MagneticButton>
          <MagneticButton
            size="lg"
            variant="secondary"
            onClick={scrollToServices}
          >
            Our Services
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
