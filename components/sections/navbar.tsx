"use client";

import { useState } from "react";
import { MagneticButton } from "../magnetic-button";
import { ThemeToggle } from "../theme-toggle";
import Image from "next/image";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "hero-section" },
    { name: "About", id: "about-section" },
    { name: "Services", id: "services-section" },
    { name: "Contact", id: "contact-section" },
  ];

  return (
    <nav className="fixed border-b dark:border-none border-[#b3dbff]/20 rounded-2xl bg-[0ea5e9]/30 m-4 backdrop-blur-md shadow-sm px-6 py-4 dark:bg-[0ea5e9] left-0 right-0 top-0 z-50 flex items-center justify-between transition-opacity duration-700 md:px-6">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2 transition-transform hover:scale-105"
      >
         <Image src="/icon0.svg" alt="logo" width="32" height="32"/>
        <span className="font-sans text-xl font-semibold tracking-tight text-foreground">
          MyDentist
        </span>
      </button>

      <div className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
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

        <button
          className="md:hidden p-2 rounded-lg hover:bg-foreground/10 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6 text-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full right-4 mt-2 flex flex-col gap-3 rounded-xl bg-white/50 backdrop-blur-md shadow-md p-4 text-center dark:bg-background md:hidden">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium hover:text-sky-700 transition"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
