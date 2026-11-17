import { Badge } from "@/components/ui/badge";
import { guides } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function GuidesSection() {
  return (
    <section id="planera" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Planera din dag"
        title="Färdiga dagar, skrivna av folk som bor här."
        lead="Välj en känsla – vi har redan tänkt ut var ni ska äta, bada och se solen gå ner."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map((g, i) => (
          <a
            key={g.title}
            href="#planera"
            className={`group relative block overflow-hidden rounded-3xl shadow-soft ${i % 2 === 1 ? "lg:translate-y-10" : ""}`}
          >
            <div className="aspect-[4/5]">
              <img
                src={g.image}
                alt={g.title}
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-hero-overlay" />
            <div className="absolute left-4 right-4 top-4 flex flex-wrap gap-2">
              <Badge variant="glass">{g.tag}</Badge>
              {g.partner && <Badge variant="sponsor">Sponsrad guide</Badge>}
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 text-on-image">
              <h3 className="text-2xl font-semibold leading-tight">{g.title}</h3>
              <p className="mt-2 text-sm text-on-image/85">{g.lead}</p>
              {g.partner && (
                <p className="mt-3 text-xs text-on-image/75">I samarbete med {g.partner}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
