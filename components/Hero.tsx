"use client";

// TODO: Complete Form Validations
// TODO: Add HandleClick Function to Search Button

import React from "react";
import { FaCalendarCheck, FaUsers, FaVanShuttle } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

import { useLanguage } from "@/contexts/LanguageContext";
import { locations } from "@/data/data";

import { CalendarForm } from "./CalendarSelect";
import Header from "./Header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import ShimmerButton from "./ui/shimmerButton";
import { Spotlight } from "./ui/spotlight";

const Hero: React.FC = () => {
  const { lang } = useLanguage();

  const translations = {
    tr: {
      title: "Rezervasyon",
      from: "Nereden",
      to: "Nereye",
      date: "Tarih",
      person: "Kişi Sayısı",
      search: "Ara",
      select: "Seçiniz",
    },
    en: {
      title: "Reservation",
      from: "From",
      to: "To",
      date: "Date",
      person: "Person Count",
      search: "Search",
      select: "Select",
    },
    ru: {
      title: "Бронирование",
      from: "Откуда",
      to: "Куда",
      date: "Дата",
      person: "Количество человек",
      search: "Поиск",
      select: "Выбирать",
    },
    de: {
      title: "Reservierung",
      from: "Wovon",
      to: "Wohin",
      date: "Datum",
      person: "Personenanzahl",
      search: "Suchen",
      select: "Wählen",
    },
  };

  const content = translations[lang] || translations.tr;

  const personCount: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-start bg-base bg-grid-white/[0.2]">
      <div className="absolute h-screen w-full bg-gradient-to-t from-transparent to-base to-55%"></div>
      <Header />

      <Spotlight
        className="-left-10 -top-20 md:-left-20 md:-top-40"
        fill="magenta"
      />
      <Spotlight
        className="-left-10 -top-40 md:-top-60 md:left-0"
        fill="cyan"
      />

      <div
        id="reservation"
        className="z-10 flex w-11/12 flex-col gap-3 rounded-2xl border border-secondary p-10 shadow-xl shadow-black/20 backdrop-blur-[3px] md:w-4/5 lg:w-3/5"
      >
        <p className="bg-gradient-to-r from-primary to-green-300 bg-clip-text text-center text-4xl font-bold tracking-wider text-transparent">
          {content.title}
        </p>
        <div className="grid gap-3 text-lg text-white md:grid-cols-2 md:gap-6">
          <label className="flex-1">
            <div className="flex items-center gap-2">
              <MdLocationPin />
              <p>{content.from}</p>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={content.select} />
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
            <div className="flex items-center gap-2">
              <FaVanShuttle />
              <p>{content.to}</p>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={content.select} />
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
            <div className="flex items-center gap-2">
              <FaCalendarCheck />
              <p>{content.date}</p>
            </div>
            <CalendarForm />
          </label>
          <label className="flex-1">
            <div className="flex items-center gap-2">
              <FaUsers />
              <p>{content.person}</p>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={content.select} />
              </SelectTrigger>
              <SelectContent>
                {personCount.map((person) => (
                  <SelectItem key={person} value={person}>
                    {person}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>
        </div>
        <div className="mt-4 flex justify-center">
          <ShimmerButton field={content.search} className="w-full md:w-60" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
