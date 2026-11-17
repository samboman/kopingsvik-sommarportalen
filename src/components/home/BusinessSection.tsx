import { Link } from "@tanstack/react-router";
import { ExternalLink, MapPin, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { businesses } from "@/lib/data";
import { isFeatured, sortListings } from "@/lib/listings";
import { useNow } from "@/hooks/use-now";
import { OpenBadge } from "./OpenBadge";
import { SectionHeading } from "./SectionHeading";

// Fast referensdatum vid serverrendering så att listan inte hoppar vid hydrering.
const SSR_DATE = new Date("2026-07-01T12:00:00+02:00");

export function BusinessSection() {
  const now = useNow();
  const ref = now ?? SSR_DATE;
  const sorted = sortListings(businesses, ref);
  const featured = sorted.filter((b) => isFeatured(b.commercial, ref));
  const rest = sorted.filter((b) => !featured.includes(b));

  return (
    <section id="foretag" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Bo, äta & göra"
        title="Alla lokala företag. På ett ställe."
        lead="Varje verksamhet i Köpingsvik får finnas med gratis. Utvalda placeringar är alltid tydligt märkta."
        action={
          <Button asChild variant="pill" size="lg" className="px-5">
            <Link to="/for-foretag">Lägg till ditt företag</Link>
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {featured.map((b) => (
          <article
            id={b.slug}
            key={b.slug}
            className="group grid scroll-mt-24 overflow-hidden rounded-3xl border-2 border-sponsor bg-card shadow-soft sm:grid-cols-[1fr_1.1fr]"
          >
            <div className="relative min-h-56 overflow-hidden">
              {b.image && (
                <img
                  src={b.image}
                  alt={b.name}
                  loading="lazy"
                  width={1280}
                  height={912}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <Badge variant="sponsor" className="absolute left-4 top-4 shadow-soft">
                Annons
              </Badge>
            </div>
            <div className="flex flex-col gap-4 p-6">
              <div>
                <span className="eyebrow text-muted-foreground">{b.category}</span>
                <h3 className="mt-1 text-2xl font-semibold">{b.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.description}</p>
              </div>
              {b.offer && (
                <div className="flex items-center gap-2 rounded-xl bg-sun/25 px-3 py-2 text-sm font-medium">
                  <Tag className="size-4 text-coral" /> {b.offer}
                </div>
              )}
              <div className="mt-auto flex flex-wrap items-center gap-3">
                <OpenBadge hours={b.hours} now={now} />
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3" /> {b.distance}
                </span>
              </div>
              <div className="flex gap-2">
                <Button variant="sea" size="sm" className="px-4">
                  {b.category === "Boende" ? "Boka direkt" : "Boka bord"}
                </Button>
                <Button variant="pill" size="sm" className="px-4">
                  Mer info
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
        {rest.map((b) => (
          <div
            id={b.slug}
            key={b.slug}
            className="grid scroll-mt-24 items-center gap-3 px-6 py-4 transition-colors hover:bg-muted/50 sm:grid-cols-[1.2fr_2fr_auto_auto]"
          >
            <h3 className="font-sans text-base font-semibold tracking-normal">{b.name}</h3>
            <p className="text-sm text-muted-foreground">{b.description}</p>
            <OpenBadge hours={b.hours} now={now} />
            <a href="#foretag" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              Webbplats <ExternalLink className="size-3" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
