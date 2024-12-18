"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { sidebarLinks } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

import { SheetClose } from "../ui/sheet";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  const { lang } = useLanguage();

  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        const label =
          typeof item.label === "object"
            ? item.label[lang] || item.label.tr
            : item.label;

        const LinkComponent = (
          <Link
            href={item.route}
            key={item.route}
            className={cn(
              isActive
                ? "bg-gradient-to-r from-primary to-green-300 text-base"
                : "text-white",
              "flex items-center justify-start gap-4 p-3 rounded-lg",
              cn(
                !isMobileNav
                  ? "hover:bg-gradient-to-r from-primary to-green-300 hover:bg-clip-text hover:text-transparent"
                  : ""
              )
            )}
          >
            {isMobileNav ? (
              <Image
                src={item.imgUrl}
                alt={label}
                width={14}
                height={14}
                className={cn({ invert: !isActive })}
              />
            ) : (
              ""
            )}
            <p className={cn(isActive ? "font-bold" : "font-normal")}>
              {label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={item.route}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.route}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
