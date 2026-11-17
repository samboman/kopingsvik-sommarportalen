import type { Commercial } from "./listings";
import type { WeekHours } from "./opening-hours";
import camStranden from "@/assets/cam-stranden.jpg";
import camHamnen from "@/assets/cam-hamnen.jpg";
import guideFamily from "@/assets/guide-family.jpg";
import guideRain from "@/assets/guide-rain.jpg";
import guideSunset from "@/assets/guide-sunset.jpg";
import guideBike from "@/assets/guide-bike.jpg";
import stayCottages from "@/assets/stay-cottages.jpg";

// Exempeldata för designen. Företag, tider och evenemang är påhittade.

export type Category = "Mat" | "Kaffe" | "Butik" | "Aktivitet" | "Boende";

export type Business = {
  slug: string;
  name: string;
  category: Category;
  description: string;
  hours: WeekHours;
  verified: string;
  distance: string;
  image?: string;
  commercial: Commercial;
  offer?: string;
};

const summer = (open: string, close: string): WeekHours => [
  { open, close },
  { open, close },
  { open, close },
  { open, close },
  { open, close },
  { open, close },
  { open, close },
];

export const businesses: Business[] = [
  {
    slug: "strandcafeet",
    name: "Strandcaféet",
    category: "Kaffe",
    description: "Kaffe, nybakat och glass med fötterna i sanden.",
    hours: summer("08:00", "19:00"),
    verified: "2 juli",
    distance: "50 m från stranden",
    commercial: { tier: "utokad", sponsorPlacement: "kamera-stranden" },
  },
  {
    slug: "sjobodens-rokeri",
    name: "Sjöbodens Rökeri",
    category: "Mat",
    description: "Nyrökt fisk, räksmörgås och kvällsöppet på bryggan.",
    hours: [
      null,
      { open: "11:00", close: "21:00" },
      { open: "11:00", close: "21:00" },
      { open: "11:00", close: "21:00" },
      { open: "11:00", close: "23:00" },
      { open: "11:00", close: "23:00" },
      { open: "12:00", close: "20:00" },
    ],
    verified: "5 juli",
    distance: "Hamnen",
    image: guideSunset,
    commercial: { tier: "utokad", featuredUntil: "2026-12-31" },
    offer: "Dagens lunch 135 kr vardagar",
  },
  {
    slug: "tallbackens-stugby",
    name: "Tallbackens Stugby",
    category: "Boende",
    description: "Röda stugor bland tallarna, 200 meter från vattnet.",
    hours: summer("08:00", "20:00"),
    verified: "28 juni",
    distance: "200 m från stranden",
    image: stayCottages,
    commercial: { tier: "utokad", featuredUntil: "2026-12-31" },
    offer: "Lågsäsong: 3 nätter för 2",
  },
  {
    slug: "vikens-cykel",
    name: "Vikens Cykeluthyrning",
    category: "Aktivitet",
    description: "Cyklar, elcyklar och barnvagnar per dag eller vecka.",
    hours: summer("09:00", "18:00"),
    verified: "1 juli",
    distance: "Centrum",
    commercial: { tier: "bas" },
  },
  {
    slug: "lantbutiken",
    name: "Lantbutiken",
    category: "Butik",
    description: "Öländska råvaror, bröd och hantverk.",
    hours: [
      { open: "10:00", close: "18:00" },
      { open: "10:00", close: "18:00" },
      { open: "10:00", close: "18:00" },
      { open: "10:00", close: "18:00" },
      { open: "10:00", close: "18:00" },
      { open: "10:00", close: "15:00" },
      null,
    ],
    verified: "30 juni",
    distance: "800 m",
    commercial: { tier: "bas" },
  },
  {
    slug: "hamnkrogen",
    name: "Hamnkrogen",
    category: "Mat",
    description: "Pizza, öl och solnedgång över Kalmarsund.",
    hours: [
      null,
      null,
      { open: "17:00", close: "23:00" },
      { open: "17:00", close: "23:00" },
      { open: "16:00", close: "01:00" },
      { open: "12:00", close: "01:00" },
      { open: "12:00", close: "21:00" },
    ],
    verified: "4 juli",
    distance: "Hamnen",
    commercial: { tier: "bas" },
  },
  {
    slug: "keramikverkstan",
    name: "Keramikverkstan",
    category: "Butik",
    description: "Drejat på plats – titta in i verkstaden.",
    hours: [
      null,
      { open: "11:00", close: "17:00" },
      { open: "11:00", close: "17:00" },
      { open: "11:00", close: "17:00" },
      { open: "11:00", close: "17:00" },
      { open: "11:00", close: "16:00" },
      null,
    ],
    verified: "22 juni",
    distance: "1,2 km",
    commercial: { tier: "bas" },
  },
  {
    slug: "kajak-och-sup",
    name: "Kajak & SUP Köpingsvik",
    category: "Aktivitet",
    description: "Hyr bräda eller kajak direkt på stranden.",
    hours: summer("10:00", "19:00"),
    verified: "3 juli",
    distance: "Stranden",
    commercial: { tier: "bas" },
  },
];

export type Webcam = {
  id: string;
  name: string;
  view: string;
  image: string;
  updated: string;
  views: string;
  sponsor: { name: string; slug: string };
};

export const webcams: Webcam[] = [
  {
    id: "kamera-stranden",
    name: "Stranden",
    view: "Utsikt norrut längs sandstranden",
    image: camStranden,
    updated: "2 min sedan",
    views: "Visad 18 400 gånger i juli",
    sponsor: { name: "Strandcaféet", slug: "strandcafeet" },
  },
  {
    id: "kamera-hamnen",
    name: "Hamnen",
    view: "Mot Kalmarsund och solnedgången",
    image: camHamnen,
    updated: "1 min sedan",
    views: "Visad 12 900 gånger i juli",
    sponsor: { name: "Sjöbodens Rökeri", slug: "sjobodens-rokeri" },
  },
];

export const conditions = {
  air: "22°",
  weather: "Mest soligt",
  water: "19°",
  wind: "4 m/s SV",
  sunset: "21:48",
  sunrise: "04:22",
};

export type Guide = {
  title: string;
  lead: string;
  image: string;
  tag: string;
  partner?: string;
};

export const guides: Guide[] = [
  {
    title: "En dag med barnen",
    lead: "Grunt vatten, glass vid 11 och fiskebryggan efter lunch.",
    image: guideFamily,
    tag: "Familj",
  },
  {
    title: "Regnig dag i Köpingsvik",
    lead: "Kaféer, keramik och fornborgar som blir bättre i duggregn.",
    image: guideRain,
    tag: "Inomhus",
    partner: "Lantbutiken",
  },
  {
    title: "En romantisk helg",
    lead: "Solnedgång från hamnen, middag på bryggan, frukost i sängen.",
    image: guideSunset,
    tag: "Par",
  },
  {
    title: "Köpingsvik utan bil",
    lead: "Cykla över alvaret till Borgholm och tillbaka längs kusten.",
    image: guideBike,
    tag: "Cykel",
  },
];

export type EventItem = {
  day: string;
  month: string;
  title: string;
  place: string;
  time: string;
  type: string;
  featured?: boolean;
};

export const events: EventItem[] = [
  {
    day: "11",
    month: "jul",
    title: "Allsång på bryggan",
    place: "Hamnen",
    time: "19:00",
    type: "Musik",
    featured: true,
  },
  { day: "13", month: "jul", title: "Loppis vid bystugan", place: "Bystugan", time: "10–14", type: "Marknad" },
  { day: "16", month: "jul", title: "Fornminnesvandring", place: "Gravfältet", time: "11:00", type: "Guidning" },
  { day: "19", month: "jul", title: "Sandslottstävling", place: "Stranden", time: "13:00", type: "Familj" },
  { day: "24", month: "jul", title: "Skaldjurskväll", place: "Sjöbodens Rökeri", time: "18:00", type: "Mat" },
];
