"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

import { SheetClose } from "../ui/sheet";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();

  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        const LinkComponent = (
          <Link
            href={item.route}
            key={item.label}
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
                alt={item.label}
                width={14}
                height={14}
                className={cn({ invert: !isActive })}
              />
            ) : (
              ""
            )}
            <p className={cn(isActive ? "font-bold" : "font-normal")}>
              {item.label}
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
