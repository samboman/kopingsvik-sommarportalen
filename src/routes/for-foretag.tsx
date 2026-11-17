import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Camera, Check, Megaphone, MousePointerClick, Sparkles, Store, Ticket, CalendarDays, CircleOff, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import camStranden from "@/assets/cam-stranden.jpg";
import { TIER_FEATURES, type ProfileFeature } from "@/lib/listings";

export const Route = createFileRoute("/for-foretag")({
  head: () => ({
    meta: [
      { title: "För företag – synas på Köpingsvik.se" },
      {
        name: "description",
        content:
          "Alla lokala företag i Köpingsvik får en gratis profil. Utökad profil, kamerasponsring och utvalda placeringar för den som vill synas mer.",
      },
      { property: "og:title", content: "För företag – synas på Köpingsvik.se" },
      {
        property: "og:description",
        content: "Gratis basprofil för alla lokala företag. Betala bara för extra exponering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ForBusinesses,
});

const FEATURE_LABELS: Record<ProfileFeature, string> = {
  namn: "Företagsnamn och kategori",
  kategori: "Syns i rätt kategori och filter",
  beskrivning: "Kort beskrivning",
  kontakt: "Telefon, e-post och adress",
  oppettider: "Öppettider i ”Öppet just nu”",
  karta: "Plats på kartan",
  webbplats: "Länk till din webbplats",
  bildgalleri: "Bildgalleri och större bilder",
  bokningsknapp: "Bokningsknapp direkt till ditt system",
  erbjudanden: "Tidsbegränsade erbjudanden",
  evenemang: "Extra exponering för dina evenemang",
  statistik: "Statistik: visningar och klick",
  flersprak: "Profil på engelska och tyska",
};

const extras = TIER_FEATURES.utokad.filter((f) => !TIER_FEATURES.bas.includes(f));

const STREAMS = [
  {
    icon: Store,
    title: "Företagsprofiler",
    how: "Gratis basprofil, betald utökad profil",
    priority: "Mycket hög",
    level: 4,
  },
  {
    icon: Camera,
    title: "Webbkamerasponsring",
    how: "Ett företag sponsrar respektive kamera",
    priority: "Mycket hög",
    level: 4,
  },
  {
    icon: Sparkles,
    title: "Utvalda placeringar",
    how: "Tydligt annonsmärkta kort högst upp",
    priority: "Hög",
    level: 3,
  },
  {
    icon: CalendarDays,
    title: "Evenemang",
    how: "Gratis grundlistning, betald extra exponering",
    priority: "Medel",
    level: 2,
  },
  {
    icon: Ticket,
    title: "Bokningshänvisningar",
    how: "Provision eller fast ersättning per bokning",
    priority: "Medel",
    level: 2,
  },
  {
    icon: Megaphone,
    title: "Lokala kampanjer",
    how: "Sponsrade säsongsguider, t.ex. ”Regnig dag”",
    priority: "Medel",
    level: 2,
  },
  {
    icon: CircleOff,
    title: "Displayannonser",
    how: "Traditionella annonsnätverk – vi avstår i början",
    priority: "Låg",
    level: 1,
  },
];

function ForBusinesses() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Intro */}
        <section className="relative overflow-hidden">
          <div className="absolute -right-32 -top-32 size-[28rem] rounded-full bg-sunset opacity-80 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 lg:px-8 lg:pt-28">
            <div className="eyebrow mb-4 text-coral">För lokala företag</div>
            <h1 className="max-w-4xl text-5xl font-medium leading-[1] text-balance-wrap sm:text-7xl">
              Alla lokala företag syns. <em className="italic text-primary">Gratis.</em>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Köpingsvik.se ska vara heltäckande. Därför är grundläggande företagsinformation alltid kostnadsfri.
              Du betalar bara om du vill ha extra exponering och fler funktioner – aldrig för att få finnas med.
            </p>
            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              {[
                ["Gratis att finnas med", "Basprofil för alla verksamheter"],
                ["Tydligt märkt", "All betald exponering heter Annons"],
                ["Mätbart", "Se visningar och klick till dig"],
              ].map(([t, s]) => (
                <div key={t} className="rounded-2xl border border-border bg-card/80 p-4 backdrop-blur">
                  <Check className="mb-2 size-5 text-seagrass" />
                  <div className="font-semibold">{t}</div>
                  <div className="text-sm text-muted-foreground">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Profilnivåer */}
        <section className="bg-sand/60">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <div className="eyebrow mb-3 text-coral">Företagsprofiler</div>
              <h2 className="text-4xl font-medium sm:text-5xl">Två nivåer. Samma självklara grund.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="flex flex-col rounded-3xl border border-border bg-card p-8">
                <Badge variant="sand" className="w-fit">Basprofil</Badge>
                <div className="mt-6 font-display text-5xl font-semibold">0 kr</div>
                <p className="mt-2 text-muted-foreground">För alla verksamheter i Köpingsvik. Alltid.</p>
                <ul className="mt-8 space-y-3">
                  {TIER_FEATURES.bas.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="mt-0.5 size-5 shrink-0 text-seagrass" /> {FEATURE_LABELS[f]}
                    </li>
                  ))}
                  {extras.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-muted-foreground/60">
                      <Minus className="mt-0.5 size-5 shrink-0" /> {FEATURE_LABELS[f]}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="pill" size="xl" className="mt-10">
                  <a href="mailto:info@kopingsvik.se?subject=Gratis%20basprofil">Skapa gratis profil</a>
                </Button>
              </div>
              <div className="relative flex flex-col overflow-hidden rounded-3xl bg-deep p-8 text-deep-foreground shadow-lift">
                <div className="absolute -right-20 -top-20 size-60 rounded-full bg-sunset opacity-30 blur-2xl" />
                <Badge variant="sponsor" className="relative w-fit">Utökad profil</Badge>
                <div className="relative mt-6 font-display text-5xl font-semibold">Per säsong</div>
                <p className="relative mt-2 text-deep-foreground/70">
                  För dig som vill sticka ut, ta emot bokningar och se vad det ger.
                </p>
                <ul className="relative mt-8 space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-sun" /> Allt i basprofilen
                  </li>
                  {extras.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="mt-0.5 size-5 shrink-0 text-sun" /> {FEATURE_LABELS[f]}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="sun" size="xl" className="relative mt-auto translate-y-0 pt-0">
                  <a href="mailto:info@kopingsvik.se?subject=Ut%C3%B6kad%20profil" className="mt-10">
                    Prata med oss
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Kamerasponsring */}
        <section id="kamerasponsring" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="eyebrow mb-3 text-coral">Webbkamerasponsring</div>
              <h2 className="text-4xl font-medium sm:text-5xl">Ditt namn där alla tittar först.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Webbkamerorna är sidans mest besökta funktion. Som sponsor syns ditt företag under kamerabilden – och du
                får se exakt vad det ger.
              </p>
              <blockquote className="mt-8 border-l-4 border-sun pl-5 font-display text-2xl italic leading-snug">
                ”Din exponering har visats 18 400 gånger och gett 640 besök till din webbplats.”
              </blockquote>
              <p className="mt-3 text-sm text-muted-foreground">Exempel på månadsrapport till sponsor</p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
              <div className="relative aspect-video">
                <img src={camStranden} alt="Exempel på sponsrad webbkamera" loading="lazy" width={1280} height={720} className="h-full w-full object-cover" />
                <Badge variant="live" className="absolute left-4 top-4">
                  <span className="size-1.5 animate-live-pulse rounded-full bg-coral-foreground" /> Live
                </Badge>
              </div>
              <div className="flex items-center gap-2 border-b border-dashed border-border bg-muted/50 px-6 py-3 text-sm">
                <Badge variant="sponsor">Annons</Badge> Kameran sponsras av <strong>Ditt företag</strong>
              </div>
              <div className="grid grid-cols-3 divide-x divide-border">
                {[
                  { icon: BarChart3, v: "18 400", l: "Visningar" },
                  { icon: MousePointerClick, v: "640", l: "Klick till dig" },
                  { icon: Sparkles, v: "3,5 %", l: "Klickfrekvens" },
                ].map((s) => (
                  <div key={s.l} className="p-5 text-center">
                    <s.icon className="mx-auto mb-2 size-4 text-primary" />
                    <div className="font-display text-2xl font-semibold">{s.v}</div>
                    <div className="text-xs text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Affärsmodell */}
        <section id="evenemang" className="scroll-mt-20 bg-sea-gradient text-primary-foreground">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <div className="eyebrow mb-3 text-sun">Så finansieras Köpingsvik.se</div>
              <h2 className="text-4xl font-medium sm:text-5xl">Lokala samarbeten före annonsnätverk.</h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Intäkterna kommer från företag och arrangörer på orten – inte från anonyma bannerannonser.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {STREAMS.map((s) => (
                <div
                  key={s.title}
                  className={`rounded-2xl p-6 ${s.level === 1 ? "border border-dashed border-primary-foreground/30" : "bg-primary-foreground/10"}`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary-foreground/15">
                      <s.icon className="size-5" />
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold">{s.priority}</span>
                      <span className="flex gap-0.5">
                        {[1, 2, 3, 4].map((n) => (
                          <span
                            key={n}
                            className={`h-3 w-1.5 rounded-full ${n <= s.level ? "bg-sun" : "bg-primary-foreground/20"}`}
                          />
                        ))}
                      </span>
                    </div>
                  </div>
                  <h3 className={`text-xl font-semibold ${s.level === 1 ? "opacity-70" : ""}`}>{s.title}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/75">{s.how}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-5 py-24 text-center lg:px-8">
          <h2 className="text-4xl font-medium sm:text-5xl">Driver du verksamhet i Köpingsvik?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Börja med en gratis profil. Du kan alltid lägga till mer exponering senare.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="sun" size="xl">
              <a href="mailto:info@kopingsvik.se?subject=Gratis%20basprofil">Skapa gratis profil</a>
            </Button>
            <Button asChild variant="pill" size="xl">
              <a href="mailto:info@kopingsvik.se?subject=Kamerasponsring">Fråga om sponsring</a>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
