import React from "react";

import { SparklesCore } from "./ui/sparkles";

const Header = () => {
  return (
    <div className="mt-16 flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="relative z-20 text-center text-3xl font-bold text-white md:text-5xl lg:text-7xl">
        Atabey Transfer
      </h1>
      <div className="relative h-28 w-3/4 md:h-40">
        {/* Gradients */}
        <div className="absolute inset-x-10 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm md:inset-x-20 lg:inset-x-28" />
        <div className="absolute inset-x-10 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent md:inset-x-20 lg:inset-x-28" />
        <div className="absolute inset-x-1/3 top-0 h-[5px] w-1/3 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-1/3 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1500}
          className="size-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 size-full bg-base [mask-image:radial-gradient(100px_80px_at_top,transparent_60%,black)] md:[mask-image:radial-gradient(200px_100px_at_top,transparent_50%,black)] lg:[mask-image:radial-gradient(350px_120px_at_top,transparent_50%,black)]"></div>
      </div>
    </div>
  );
};

export default Header;
