import React from "react";

import { locations } from "@/data/data";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Hero = () => {
  return (
    <div className="bg-default relative flex h-screen w-full items-center justify-center bg-dot-base dark:bg-dot-primary">
      <div className="bg-default pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent,black)] "></div>
      <div className="border-default shadow-default z-10 flex flex-col gap-3 rounded-2xl border bg-white/0 p-10 backdrop-blur-[3px]">
        <p className="text-4xl font-bold tracking-wider text-primary md:text-6xl lg:text-8xl">
          Atabey Transfer
        </p>
        <div className="flex flex-col justify-between gap-3 text-lg md:flex-row md:gap-6">
          <label className="flex-1">
            <p className="pb-1">From</p>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.field}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>
          <label className="flex-1">
            <p className="pb-1">To</p>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.field}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Hero;
