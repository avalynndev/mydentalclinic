import { MagneticButton } from "@/components/magnetic-button";

const images = [
  {
    src: "https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5d9fa61e2f88038d57_1.jpg",
    alt: "Inside of dentist office in San Francisco",
  },
  {
    src: "https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e80490749e9d59736_2.webp",
    alt: "Inside of Dentist office in Mountain View",
  },
  {
    src: "https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5efdc36f55f398e9d8_3.jpg",
    alt: "Inside of Dentist office in Mountain View - third image",
  },
  {
    src: "https://cdn.prod.website-files.com/6230bfc886c8142108c44052/63910d5e89bf4f9d3e5d7a37_4.webp",
    alt: "Inside of Dentist office in Mountain View - second image",
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
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-auto rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
