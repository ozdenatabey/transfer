import Image from "next/image";
import React from "react";

import { company } from "@/data/data";

import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="w-full border-t border-secondary bg-base text-white">
      <div className="flex h-full flex-col items-center justify-evenly p-4">
        <div className="flex h-full flex-col items-start justify-center gap-2 p-4">
          <div className="flex items-center justify-start gap-3">
            <Image alt="map" src="/icons/pin.svg" width={20} height={20} />
            <a href="https://maps.app.goo.gl/bSq2DTet7Gppgd8v8" target="_blank">
              {company.location}
            </a>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Image alt="phone" src="/icons/phone.svg" width={20} height={20} />
            <a href="tel:+905423316454">{company.phone}</a>
          </div>
        </div>

        <Separator />

        <div className="p-4">
          <p className="font-bold tracking-wider">{company.name} - 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
