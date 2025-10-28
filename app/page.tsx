"use client";

import { Shader, ChromaFlow, Swirl } from "shaders/react";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { GrainOverlay } from "@/components/grain-overlay";
import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { FeaturesSection } from "@/components/sections/features";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const shaderContainerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme(); 

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas");
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true);
          return true;
        }
      }
      return false;
    };

    if (checkShaderReady()) return;

    const intervalId = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(intervalId);
      }
    }, 100);

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => {
      clearInterval(intervalId);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const shaderColors = {
    dark: {
      swirl: { colorA: "#b3dbff", colorB: "#0ea5e9" },
      chroma: {
        baseColor: "#0ea5e9",
        upColor: "#0ea5e9",
        downColor: "#e0f2fe",
        leftColor: "#0ea5e9",
        rightColor: "#e0f2fe",
      },
    },
    light: {
      swirl: { colorA: "#ffffff", colorB: "#ffffff" },
      chroma: {
        baseColor: "#0ea5e9",
        upColor: "#0ea5e9",
        downColor: "#e0f2fe",
        leftColor: "#0ea5e9",
        rightColor: "#e0f2fe",
      },
    },
  };

  const currentColors =
    theme === "light" ? shaderColors.light : shaderColors.dark;

  return (
    <main className="relative min-h-screen w-full bg-background">
      <CustomCursor />
      <GrainOverlay />

      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict" }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA={currentColors.swirl.colorA}
            colorB={currentColors.swirl.colorB}
            speed={0.7}
            detail={0.8}
            blend={50}
            coarseX={40}
            coarseY={40}
            mediumX={40}
            mediumY={40}
            fineX={40}
            fineY={40}
          />
          <ChromaFlow
            baseColor={currentColors.chroma.baseColor}
            upColor={currentColors.chroma.upColor}
            downColor={currentColors.chroma.downColor}
            leftColor={currentColors.chroma.leftColor}
            rightColor={currentColors.chroma.rightColor}
            intensity={0.85}
            radius={1.8}
            momentum={25}
            maskType="alpha"
            opacity={0.97}
          />
        </Shader>

        <div
          className={`absolute inset-0 bg-black/20 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      <Navbar />

      <div className="relative z-10">
        <div id="hero-section">
          <HeroSection />
        </div>
        <div id="about-section">
          <AboutSection />
        </div>
        <FeaturesSection />
        <div id="services-section">
          <ServicesSection />
        </div>
        <div id="contact-section">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
