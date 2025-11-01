import { MagneticButton } from "@/components/magnetic-button";
import Image from "next/image";

const images = [
  {
    src: "/clinic1.webp",
    alt: "Modern dental clinic interior",
  },
  {
    src: "/clinic2.webp",
    alt: "Dental clinic treatment room",
  },
  {
    src: "/clinic3.webp",
    alt: "State-of-the-art dental equipment",
  },
  {
    src: "/clinic4.webp",
    alt: "Comfortable dental care environment",
  },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col md:flex-row justify-center items-center px-6 md:px-12 w-full min-w-7xl mx-auto">
      <div className="max-w-xl md:max-w-lg lg:max-w-xl md:mr-26">
        <div className="mb-4 inline-block rounded-full border border-foreground/20 bg-foreground/15 px-4 py-1.5 backdrop-blur-md">
          <p className="font-mono text-xs text-foreground/90">
            Multispeciality Dental Care
          </p>
        </div>

        <h1 className="mb-6 font-sans text-5xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          <span className="text-balance">
            Your smile
            <br />
            deserves the best
          </span>
        </h1>

        <p className="mb-8 max-w-xl text-lg leading-relaxed text-foreground/90 md:text-xl">
          <span className="text-pretty">
            Experience world-class dental care in Hyderabad with our team of
            expert specialists dedicated to your oral health and beautiful
            smile.
          </span>
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <MagneticButton
            size="lg"
            variant="primary"
            onClick={() =>
              document
                .getElementById("contact-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Appointment
          </MagneticButton>
          <MagneticButton
            size="lg"
            variant="secondary"
            onClick={() =>
              document
                .getElementById("services-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Our Services
          </MagneticButton>
        </div>
      </div>

      <div className="relative mt-12 md:mt-0 mx-24 md:w-[540px] h-[400px] overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5">
        <div className="absolute w-full flex flex-col animate-vertical-marquee">
          {images.concat(images).map((img, idx) => (
            <div
              key={idx}
              className="h-[320px] flex items-center justify-center p-2"
            >
              <div className="relative h-full w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 540px"
                  priority={idx < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-500">
        <div className="flex items-center gap-2">
          <p className="font-mono text-xs text-foreground/80">
            Scroll to explore
          </p>
          <div className="flex h-6 w-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground/15 backdrop-blur-md">
            <div className="h-2 w-2 animate-pulse rounded-full bg-foreground/80" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroSectionMobile() {
  return (
    <section className="relative flex min-h-screen flex-col lg:flex-row justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 lg:py-0 w-full max-w-7xl mx-auto gap-8 lg:gap-12 xl:gap-16">
      <div className="w-full lg:w-1/2 max-w-2xl lg:max-w-none pt-24">
        <div className="mb-4 inline-block rounded-full border border-foreground/20 bg-foreground/15 px-3 sm:px-4 py-1 sm:py-1.5 backdrop-blur-md">
          <p className="font-mono text-[10px] sm:text-xs text-foreground/90">
            Multispeciality Dental Care
          </p>
        </div>

        <h1 className="mb-4 sm:mb-6 font-sans text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-[1.1] tracking-tight text-foreground">
          <span className="text-balance">
            Your smile
            <br />
            deserves the best
          </span>
        </h1>

        <p className="mb-6 sm:mb-8 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-foreground/90">
          <span className="text-pretty">
            Experience world-class dental care in Hyderabad with our team of
            expert specialists dedicated to your oral health and beautiful
            smile.
          </span>
        </p>

        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
          <MagneticButton
            size="lg"
            variant="primary"
            onClick={() =>
              document
                .getElementById("contact-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Appointment
          </MagneticButton>
          <MagneticButton
            size="lg"
            variant="secondary"
            onClick={() =>
              document
                .getElementById("services-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Our Services
          </MagneticButton>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 max-w-md lg:max-w-none">
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl border border-foreground/10 bg-foreground/5">
          <div className="absolute w-full flex flex-col animate-vertical-marquee">
            {images.concat(images).map((img, idx) => (
              <div
                key={idx}
                className="h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] flex items-center justify-center p-2"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 640px) 95vw, (max-width: 1024px) 85vw, 45vw"
                    priority={idx < 2}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-500">
        <div className="flex items-center gap-2">
          <p className="font-mono text-xs text-foreground/80">
            Scroll to explore
          </p>
          <div className="flex h-6 w-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground/15 backdrop-blur-md">
            <div className="h-2 w-2 animate-pulse rounded-full bg-foreground/80" />
          </div>
        </div>
      </div>
    </section>
  );
}
