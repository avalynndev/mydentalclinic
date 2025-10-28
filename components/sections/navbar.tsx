import { MagneticButton } from "../magnetic-button";
import { ThemeToggle } from "../theme-toggle";

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed border-b dark:border-none border-[#b3dbff]/20 rounded-2xl bg-[0ea5e9]/30 m-4 backdrop-blur-md shadow-sm px-6 py-4 dark:bg-[0ea5e9] left-0 right-0 top-0 z-50 flex items-center justify-between transition-opacity duration-700 md:px-6">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2 transition-transform hover:scale-105"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/15 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-foreground/25">
          <svg
            className="h-6 w-6 text-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
            />
          </svg>
        </div>
        <span className="font-sans text-xl font-semibold tracking-tight text-foreground">
          MyDentist
        </span>
      </button>

      <div className="hidden items-center gap-8 md:flex">
        {[
          { name: "Home", id: "hero-section" },
          { name: "Services", id: "services-section" },
          { name: "About", id: "about-section" },
          { name: "Contact", id: "contact-section" },
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.id)}
            className="group relative font-sans text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <MagneticButton
          variant="secondary"
          onClick={() => scrollToSection("contact-section")}
        >
          Book Now
        </MagneticButton>

        <ThemeToggle />
      </div>
    </nav>
  );
}
