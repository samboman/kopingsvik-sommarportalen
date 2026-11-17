import { useMemo, useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businesses, type Category } from "@/lib/data";
import { openStatus } from "@/lib/opening-hours";
import { useNow } from "@/hooks/use-now";
import { OpenBadge } from "./OpenBadge";
import { SectionHeading } from "./SectionHeading";

const FILTERS: ("Alla" | Category)[] = ["Alla", "Mat", "Kaffe", "Butik", "Aktivitet"];

export function OpenNowSection() {
  const now = useNow();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Alla");

  const list = useMemo(() => {
    const items = businesses.filter(
      (b) => b.category !== "Boende" && (filter === "Alla" || b.category === filter),
    );
    if (!now) return items;
    return [...items].sort(
      (a, b) => Number(openStatus(b.hours, now).open) - Number(openStatus(a.hours, now).open),
    );
  }, [filter, now]);

  const openCount = now ? list.filter((b) => openStatus(b.hours, now).open).length : null;

  return (
    <section id="oppet" className="scroll-mt-20 bg-sand/60">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Öppet just nu"
          title={
            <>
              Vad har öppet{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">i Köpingsvik?</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-sun/70" />
              </span>
            </>
          }
          lead="Öppettider som verksamheterna själva verifierar – så du slipper stå framför en stängd dörr."
          action={
            openCount !== null && (
              <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-soft">
                <span className="size-2 animate-live-pulse rounded-full bg-seagrass" />
                {openCount} av {list.length} har öppet nu
              </div>
            )
          }
        />
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <Button
              key={f}
              size="sm"
              variant={filter === f ? "pill-active" : "pill"}
              onClick={() => setFilter(f)}
              className="px-4"
            >
              {f}
            </Button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b) => (
            <article
              key={b.slug}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div>
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold">{b.name}</h3>
                  <span className="eyebrow shrink-0 pt-1.5 text-muted-foreground">{b.category}</span>
                </div>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <OpenBadge hours={b.hours} now={now} />
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3" /> {b.distance}
                </span>
              </div>
              <div className="flex items-center gap-1.5 border-t border-border pt-3 text-[0.7rem] text-muted-foreground">
                <Clock className="size-3" /> Tider verifierade {b.verified}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
