"use client";

import { useReveal } from "@/hooks/use-reveal";

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3);

  return (
    <section
      ref={ref}
      className="flex min-h-screen items-center px-6 pt-28 pb-14 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Our Services
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Comprehensive dental care
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {[
            {
              title: "General Dentistry",
              description:
                "Routine check-ups, cleanings, and preventive care for optimal oral health",
              direction: "top",
            },
            {
              title: "Cosmetic Dentistry",
              description:
                "Teeth whitening, veneers, and smile makeovers to enhance your confidence",
              direction: "right",
            },
            {
              title: "Orthodontics",
              description:
                "Braces and aligners for perfectly aligned teeth and improved bite",
              direction: "left",
            },
            {
              title: "Oral Surgery",
              description:
                "Wisdom teeth removal, implants, and advanced surgical procedures",
              direction: "bottom",
            },
            {
              title: "Root Canal Treatment",
              description:
                "Pain-free endodontic care to save and restore infected teeth",
              direction: "top",
            },
            {
              title: "Pediatric Dentistry",
              description:
                "Gentle, specialized care for children's dental health and development",
              direction: "right",
            },
          ].map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; direction: string };
  index: number;
  isVisible: boolean;
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0";
        case "right":
          return "translate-x-16 opacity-0";
        case "top":
          return "-translate-y-16 opacity-0";
        case "bottom":
          return "translate-y-16 opacity-0";
        default:
          return "translate-y-12 opacity-0";
      }
    }
    return "translate-x-0 translate-y-0 opacity-100";
  };

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">
          0{index + 1}
        </span>
      </div>
      <h3 className="mb-2 font-sans text-2xl font-light text-foreground md:text-3xl">
        {service.title}
      </h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">
        {service.description}
      </p>
    </div>
  );
}
