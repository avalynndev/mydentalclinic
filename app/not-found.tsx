"use client";

import { Shader, ChromaFlow, Swirl } from "shaders/react";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { GrainOverlay } from "@/components/grain-overlay";
import { CustomCursor } from "@/components/custom-cursor";
import { Navbar } from "@/components/sections/navbar";

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
      swirl: { colorA: "#0a0a0a", colorB: "#1a1a1a" },
      chroma: {
        baseColor: "#0284c7",
        upColor: "#0369a1",
        downColor: "#0ea5e9",
        leftColor: "#075985",
        rightColor: "#38bdf8",
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
    <main className="relative min-h-screen w-full bg-[#cccccc] dark:bg-[#161616]">
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

        <div className={`absolute inset-0 bg-black/20`} />
      </div>

      <Navbar />

      <div className="relative z-10">
        <div className="min-h-screen text-center flex flex-col items-center justify-center font-sans">
          <div>
            <h1 className="inline-block mr-5 pr-[23px] text-2xl font-medium align-top leading-[49px] border-r border-black/30 dark:border-white/30">
              404
            </h1>
            <div className="inline-block">
              <h2 className="text-sm font-normal leading-[49px] m-0">
                This page could not be found.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
