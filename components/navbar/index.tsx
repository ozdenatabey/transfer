"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useLanguage } from "@/contexts/LanguageContext";

import DesktopNavigation from "./DesktopNavigation";
import Language from "./Language";
import MobileNavigation from "./MobileNavigation";

const NavBar: React.FC = () => {
  const { setLang } = useLanguage();

  return (
    <nav className="fixed z-50 flex w-screen items-center justify-between overflow-x-hidden bg-base/50 p-4 shadow-lg shadow-base/80 backdrop-blur-md md:px-12">
      <div className="flex items-center justify-start space-x-4">
        <MobileNavigation />
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image
              src="/icons/van.png"
              alt="logo"
              width={24}
              height={24}
              priority
            />
            <p className="bg-gradient-to-r from-primary to-green-300 bg-clip-text text-xl font-bold text-transparent">
              Atabey Transfer
            </p>
          </div>
        </Link>
      </div>
      <DesktopNavigation />
      <Language onLanguageChange={(newLang) => setLang(newLang)} />
    </nav>
  );
};

export default NavBar;

// TODO: Fix Desktop View Links
