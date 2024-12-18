interface Company {
  name: string;
  location: string;
  phone: string;
}

export const company: Company = {
  name: "Atabey Transfer",
  location: "Kültür Mah. 3837 Sok. Abdi Çavuş 1 Sitesi No:22 Kepez/Antalya",
  phone: "+90 542 331 64 54",
};

interface Location {
  value: string;
  field: string;
}

export const locations: Location[] = [
  { value: "adrasan", field: "Adrasan" },
  { value: "alanya", field: "Alanya" },
  { value: "antalyaAirport", field: "Antalya Airport" },
  { value: "antalyaMerkez", field: "Antalya Merkez" },
  { value: "avsallar", field: "Avsallar" },
  { value: "belek", field: "Belek" },
  { value: "beldibi", field: "Beldibi" },
  { value: "bodrum", field: "Bodrum" },
  { value: "bogazkent", field: "Boğazkent" },
  { value: "burdur", field: "Burdur" },
  { value: "camyuva", field: "Çamyuva" },
  { value: "cenger", field: "Çenger" },
  { value: "colakli", field: "Çolaklı" },
  { value: "cirali", field: "Çıralı" },
  { value: "dalaman", field: "Dalaman" },
  { value: "demre", field: "Demre" },
  { value: "denizli", field: "Denizli" },
  { value: "denizkaya", field: "Denizyaka" },
  { value: "evrenseki", field: "Evrenseki" },
  { value: "fethiye", field: "Fethiye" },
  { value: "finike", field: "Finike" },
  { value: "gazipasa", field: "Gazipaşa" },
  { value: "goynuk", field: "Göynük" },
  { value: "gundogdu", field: "Gündoğdu" },
  { value: "isparta", field: "Isparta" },
  { value: "istanbul", field: "İstanbul" },
  { value: "incekum", field: "İncekum" },
  { value: "kaleici", field: "Kaleiçi" },
  { value: "kapadokya", field: "Kapadokya" },
  { value: "kas", field: "Kaş" },
  { value: "kemer", field: "Kemer" },
  { value: "kizilagac", field: "Kızılağaç" },
  { value: "kizilot", field: "Kızılot" },
  { value: "kiris", field: "Kiriş" },
  { value: "konakli", field: "Konaklı" },
  { value: "konyaalti", field: "Konyaaltı" },
  { value: "konya", field: "Konya" },
  { value: "kumkoy", field: "Kumköy" },
  { value: "kumluca", field: "Kumluca" },
  { value: "kundu", field: "Kundu" },
  { value: "lara", field: "Lara" },
  { value: "mahmutlar", field: "Mahmutlar" },
  { value: "manavgat", field: "Manavgat" },
  { value: "okurcalar", field: "Okurcalar" },
  { value: "olimpos", field: "Olimpos" },
  { value: "pamukkale", field: "Pamukkale" },
  { value: "side", field: "Side" },
  { value: "sorgun", field: "Sorgun" },
  { value: "tekirova", field: "Tekirova" },
  { value: "titreyengol", field: "Titreyengöl" },
  { value: "turkler", field: "Türkler" },
];
