"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const images = [
  "/about/img1.jpg",
  "/about/img2.jpg",
  "/about/img3.jpg",
  "/about/img4.jpg",
  "/about/img5.jpg",
];

const About = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="about-background h-screen">
      <div className="flex flex-col items-center justify-center py-12">
        <p className="bg-gradient-to-r from-primary to-green-300 bg-clip-text text-center text-4xl font-bold tracking-wider text-transparent">
          About Us
        </p>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-2xl"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((img: string) => (
              <CarouselItem key={img}>
                <div className="p-1">
                  <Card className="rounded-xl">
                    <CardContent className="flex aspect-square items-center justify-center p-2">
                      <Image
                        alt="img"
                        src={img}
                        width={800}
                        height={800}
                        className="size-full rounded-md object-cover object-center"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white" />
          <CarouselNext className="text-white" />
        </Carousel>
      </div>
    </div>
  );
};

export default About;
