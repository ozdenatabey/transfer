import Image from "next/image";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Language = () => {
  const langs = [
    {
      value: "tr",
      icon: "/flags/tr.svg",
      name: "Türkçe",
    },
    {
      value: "en",
      icon: "/flags/en.svg",
      name: "English",
    },
    {
      value: "ru",
      icon: "/flags/ru.svg",
      name: "Русский",
    },
    {
      value: "de",
      icon: "/flags/de.svg",
      name: "Deutsch",
    },
  ];
  return (
    <Select defaultValue="tr">
      <SelectTrigger className="w-[110px] border-none bg-transparent p-0 md:w-[120px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end" className="w-36 md:w-40">
        <SelectGroup>
          {langs.map((lang) => (
            <SelectItem key={lang.value} value={lang.value}>
              <div className="flex items-center justify-start gap-2">
                <Image src={lang.icon} alt="tr" width={30} height={30} />
                <p className="text-xs">{lang.name}</p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Language;
