import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function EventsSection() {
  return (
    <section id="evenemang" className="scroll-mt-20 bg-sea-gradient text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div>
          <SectionHeading
            tone="inverse"
            eyebrow="På gång i byn"
            title="Allsång, loppis och skaldjurskvällar."
            lead="Föreningar, krogar och arrangörer lägger själva in sina evenemang – grundlistningen är gratis."
          />
          <Button asChild variant="sun" size="lg">
            <Link to="/for-foretag" hash="evenemang">
              <Plus /> Tipsa om ett evenemang
            </Link>
          </Button>
        </div>
        <ul className="space-y-3">
          {events.map((e) => (
            <li
              key={e.title}
              className={`group flex items-center gap-5 rounded-2xl p-4 transition ${
                e.featured
                  ? "bg-card text-card-foreground shadow-lift"
                  : "bg-primary-foreground/10 hover:bg-primary-foreground/15"
              }`}
            >
              <div
                className={`grid w-16 shrink-0 place-items-center rounded-xl py-2 text-center ${e.featured ? "bg-sunset text-sun-foreground" : "bg-primary-foreground/15"}`}
              >
                <span className="font-display text-2xl font-semibold leading-none">{e.day}</span>
                <span className="eyebrow mt-1 text-[0.6rem]">{e.month}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="eyebrow text-[0.65rem] opacity-70">{e.type}</span>
                  {e.featured && <Badge variant="sponsor">Annons · Utvalt</Badge>}
                </div>
                <h3 className="truncate text-lg font-semibold">{e.title}</h3>
                <p className="flex items-center gap-1 text-sm opacity-75">
                  <MapPin className="size-3" /> {e.place} · {e.time}
                </p>
              </div>
              <ArrowRight className="size-5 shrink-0 opacity-50 transition group-hover:translate-x-1 group-hover:opacity-100" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
