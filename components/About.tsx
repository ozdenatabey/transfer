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
    <div className="about-background h-full">
      <div className="flex flex-col items-center justify-center py-12">
        <p className="bg-gradient-to-r from-primary to-green-300 bg-clip-text text-center text-4xl font-bold tracking-wider text-transparent">
          Hakkımızda
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
        <div className="my-10 flex w-11/12 flex-col gap-2 text-lg text-white backdrop-blur-sm md:w-5/6 lg:w-3/5">
          <p>
            <strong className="text-primary">Atabey Transfer</strong>,
            havalimanı transferlerinde lüksü, konforu ve güveni bir araya
            getiren lider bir VIP taşımacılık şirketidir. Misafirlerimize
            unutulmaz bir seyahat deneyimi sunmak için her detayı titizlikle
            planlıyor, her adımda mükemmelliği hedefliyoruz. Yolculuğunuzun her
            anını özel kılmak için son model VIP araçlarımız, deneyimli ve
            profesyonel şoför kadromuz ile hizmetinizdeyiz. Seyahatlerinizi
            sadece bir ulaşım değil, aynı zamanda keyifli bir deneyim haline
            dönüştürmek için çalışıyoruz. Konforlu iç tasarım, özel hizmet
            seçenekleri ve ihtiyacınıza uygun çözümlerimizle, her yolculukta
            kendinizi ayrıcalıklı hissetmenizi sağlıyoruz. Misafir memnuniyetini
            öncelik olarak belirleyen firmamız, zamanında ve güvenli ulaşımı
            garanti ederken, seyahatinizin en keyifli anlarından biri olmayı
            vaat ediyor. İster iş seyahati, ister tatil amacıyla seyahat edin,{" "}
            <strong className="text-primary">Atabey Transfer</strong> ile
            yolculuğunuzun her anı eşsiz bir deneyime dönüşür.
          </p>
          <p className="bg-gradient-to-r from-primary to-green-300 bg-clip-text text-2xl font-bold tracking-wider text-transparent">
            Lüks, Güven ve Konforun Adresi!
          </p>
          <p>
            Siz de ayrıcalıklı bir yolculuğun parçası olmak için bizimle
            iletişime geçin ve seyahatinizi bir adım öteye taşıyın.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
