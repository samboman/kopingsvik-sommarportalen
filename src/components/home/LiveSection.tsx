import { Link } from "@tanstack/react-router";
import { Eye, Maximize2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { webcams } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function LiveSection() {
  return (
    <section id="live" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Köpingsvik Live"
        title={
          <>
            Titta ut över stranden – <em className="italic text-primary">innan du åker.</em>
          </>
        }
        lead="Två kameror, uppdaterade varannan minut. Perfekt för att se om det är badväder, hur mycket folk det är eller bara för att längta."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {webcams.map((cam) => (
          <article
            key={cam.id}
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={cam.image}
                alt={`Webbkamera: ${cam.view}`}
                width={1280}
                height={720}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 flex gap-2">
                <Badge variant="live">
                  <span className="size-1.5 animate-live-pulse rounded-full bg-coral-foreground" /> Live
                </Badge>
                <Badge variant="glass">{cam.updated}</Badge>
              </div>
              <button
                className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-on-image/15 text-on-image backdrop-blur-md transition hover:bg-on-image/30"
                aria-label={`Visa ${cam.name} i helskärm`}
              >
                <Maximize2 className="size-4" />
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 p-6">
              <div>
                <h3 className="text-2xl font-semibold">{cam.name}</h3>
                <p className="text-sm text-muted-foreground">{cam.view}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Eye className="size-3.5" /> {cam.views}
              </div>
            </div>
            <a
              href={`#${cam.sponsor.slug}`}
              className="flex items-center justify-between gap-3 border-t border-dashed border-border bg-muted/50 px-6 py-3 text-sm transition-colors hover:bg-sponsor/40"
            >
              <span className="flex items-center gap-2">
                <Badge variant="sponsor">Annons</Badge>
                Kameran sponsras av <strong className="font-semibold">{cam.sponsor.name}</strong>
              </span>
              <span className="text-primary">Besök →</span>
            </a>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Vill ditt företag sponsra en kamera?{" "}
        <Link to="/for-foretag" hash="kamerasponsring" className="font-semibold text-primary hover:underline">
          Läs mer om kamerasponsring
        </Link>
      </p>
    </section>
  );
}
