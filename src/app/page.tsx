"use client";

import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "@/lib/theme-context";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'} flex items-center justify-center transition-colors duration-300`}>
      <ThemeToggle />
      <div className="text-center">
        <div className="mb-8">
          <Image
            src={isDark ? "/images/Logo_White_Trans.png" : "/images/Logo_Black.png"}
            alt="Raindex Logo"
            width={120}
            height={120}
            className="mx-auto"
            priority
          />
        </div>
        <div className="flex items-start justify-center mb-8">
          <h1 className={`text-8xl md:text-9xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-black'} transition-colors duration-300`}>
            <span className={isDark ? "text-white-no-glow" : "text-black-no-glow"}>
              R
            </span>
            <span className="gradient-text">
              a
            </span>
            <span className="gradient-text">
              i
            </span>
            <span className={isDark ? "text-white-no-glow" : "text-black-no-glow"}>
              ndex
            </span>
          </h1>
          <span className={`text-xl md:text-2xl font-normal ${isDark ? "text-white-no-glow" : "text-black-no-glow"}`}>
            ™
          </span>
        </div>
        <p className={`text-xl md:text-2xl font-light tracking-wide mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Coming Soon
        </p>
        <div className={`w-24 h-px mx-auto transition-colors duration-300 ${isDark ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
      </div>
    </div>
  );
}
