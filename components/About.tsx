"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

import { useLanguage } from "@/contexts/LanguageContext";

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

const companyName = "Atabey Transfer";
const About: React.FC = () => {
  const { lang } = useLanguage();

  const translations = {
    tr: {
      title: "Hakkımızda",
      paragraph1: `, havalimanı transferlerinde lüksü, konforu ve güveni bir araya getiren lider bir VIP taşımacılık şirketidir. Misafirlerimize unutulmaz bir seyahat deneyimi sunmak için her detayı titizlikle planlıyor, her adımda mükemmelliği hedefliyoruz. Yolculuğunuzun her anını özel kılmak için son model VIP araçlarımız, deneyimli ve profesyonel şoför kadromuz ile hizmetinizdeyiz. Seyahatlerinizi sadece bir ulaşım değil, aynı zamanda keyifli bir deneyim haline dönüştürmek için çalışıyoruz. Konforlu iç tasarım, özel hizmet seçenekleri ve ihtiyacınıza uygun çözümlerimizle, her yolculukta kendinizi ayrıcalıklı hissetmenizi sağlıyoruz. Misafir memnuniyetini öncelik olarak belirleyen firmamız, zamanında ve güvenli ulaşımı garanti ederken, seyahatinizin en keyifli anlarından biri olmayı vaat ediyor. İster iş seyahati, ister tatil amacıyla seyahat edin, ${companyName} ile yolculuğunuzun her anı eşsiz bir deneyime dönüşür.`,
      subtitle: "Lüks, Güven ve Konforun Adresi!",
      paragraph2:
        "Siz de ayrıcalıklı bir yolculuğun parçası olmak için bizimle iletişime geçin ve seyahatinizi bir adım öteye taşıyın.",
    },
    en: {
      title: "About Us",
      paragraph1: ` is a leading VIP transportation company that brings together luxury, comfort and trust in airport transfers. We meticulously plan every detail to offer our guests an unforgettable travel experience and aim for perfection in every step. We are at your service with our latest model VIP vehicles and experienced and professional chauffeur staff to make every moment of your journey special. We work to turn your travels into not only a transportation but also an enjoyable experience. With our comfortable interior design, special service options and solutions tailored to your needs, we make you feel privileged on every journey. Our company, which prioritizes guest satisfaction, promises to be one of the most enjoyable moments of your journey while guaranteeing on-time and safe transportation. Whether you are traveling for business or vacation, every moment of your journey turns into a unique experience with ${companyName}.`,
      subtitle: "Address of Luxury, Trust and Comfort!",
      paragraph2:
        "Contact us to be a part of a privileged journey and take your trip one step further.",
    },
    ru: {
      title: "O нас",
      paragraph1: ` — ведущая транспортная компания VIP-класса, сочетающая в себе роскошь, комфорт и доверие в трансферах из аэропорта. Чтобы предложить нашим гостям незабываемые впечатления от путешествия, мы тщательно планируем каждую деталь и стремимся к совершенству на каждом этапе. Мы к вашим услугам с нашими новейшими моделями VIP-автомобилей и опытным и профессиональным персоналом водителей, чтобы сделать каждый момент вашего путешествия особенным. Мы работаем для того, чтобы превратить ваше путешествие не просто в транспорт, а в приятное приключение. Мы даем вам возможность чувствовать себя привилегированными в каждом путешествии благодаря нашему удобному дизайну интерьера, специальным вариантам обслуживания и решениям, адаптированным к вашим потребностям. Наша компания, которая уделяет приоритетное внимание удовлетворению гостей, обещает стать одним из самых приятных моментов вашей поездки, гарантируя своевременную и безопасную транспортировку. Путешествуете ли вы по делам или для удовольствия, каждый момент вашего путешествия превращается в уникальный опыт с ${companyName}.`,
      subtitle: "Адрес роскоши, доверия и комфорта!",
      paragraph2:
        "Чтобы стать частью привилегированного путешествия, свяжитесь с нами и продвиньте свое путешествие еще на один шаг дальше.",
    },
    de: {
      title: "Über uns",
      paragraph1: ` ist ein führendes VIP-Transportunternehmen, das Luxus, Komfort und Vertrauen in Flughafentransfers vereint. Um unseren Gästen ein unvergessliches Reiseerlebnis zu bieten, planen wir jedes Detail sorgfältig und streben bei jedem Schritt nach Perfektion. Wir stehen Ihnen mit unseren neuesten VIP-Fahrzeugen und erfahrenem und professionellem Chauffeurpersonal zur Verfügung, um jeden Moment Ihrer Reise zu etwas Besonderem zu machen. Wir arbeiten daran, Ihre Reisen nicht nur zu einem Transport, sondern auch zu einem angenehmen Erlebnis zu machen. Mit unserem komfortablen Innendesign, besonderen Serviceoptionen und auf Ihre Bedürfnisse zugeschnittenen Lösungen sorgen wir dafür, dass Sie sich auf jeder Reise privilegiert fühlen. Unser Unternehmen, das die Zufriedenheit seiner Gäste in den Vordergrund stellt, verspricht Ihnen einen der schönsten Momente Ihrer Reise und garantiert gleichzeitig einen pünktlichen und sicheren Transport. Ob Sie geschäftlich oder privat unterwegs sind, mit ${companyName} wird jeder Moment Ihrer Reise zu einem einzigartigen Erlebnis.`,
      subtitle: "Die Adresse für Luxus, Vertrauen und Komfort!",
      paragraph2:
        "Um Teil einer privilegierten Reise zu sein, kontaktieren Sie uns und gehen Sie noch einen Schritt weiter.",
    },
  };

  const content = translations[lang] || translations.tr;

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="about-background h-full">
      <div className="flex flex-col items-center justify-center py-12">
        <p className="bg-gradient-to-r from-primary to-green-300 bg-clip-text text-center text-4xl font-bold tracking-wider text-transparent">
          {content.title}
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
                        alt="Carousel Image"
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
            <span className="text-xl font-bold text-primary">
              {companyName}
            </span>
            {content.paragraph1}
          </p>
          <p className="bg-gradient-to-r from-primary to-green-300 bg-clip-text text-3xl font-bold tracking-wider text-transparent">
            {content.subtitle}
          </p>
          <p>{content.paragraph2}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
