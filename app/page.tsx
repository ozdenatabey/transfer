"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <div className="bg-base">
        <Hero />
        <About />
      </div>
    </div>
  );
}
