"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Price from "@/components/Price";

export default function Home() {
  return (
    <div>
      <div className="bg-base">
        <Hero />
        <About />
        <Price />
      </div>
    </div>
  );
}
