import React from "react";

const Hero = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white bg-dot-blue-800/[0.5] dark:bg-black dark:bg-dot-cyan-500/[0.5]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Debeme
      </p>
    </div>
  );
};

export default Hero;
