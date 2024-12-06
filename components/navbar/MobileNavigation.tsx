import Image from "next/image";
import React from "react";
import { MdMenu } from "react-icons/md";

import NavLinks from "./NavLinks";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const MobileNavigation = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild className="cursor-pointer">
          <MdMenu fill="white" size={28} />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col gap-8 border-none bg-base"
        >
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <div className="flex items-center gap-4">
            <Image src="/icons/van.png" alt="logo" width={24} height={24} />
            <p className="bg-gradient-to-r from-primary to-green-300 bg-clip-text text-xl font-bold text-transparent">
              Atabey Transfer
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <SheetClose asChild>
              <NavLinks isMobileNav />
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
