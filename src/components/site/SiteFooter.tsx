import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <Logo tone="light" />
          <p className="max-w-xs text-sm text-deep-foreground/70">
            Den lokala guiden till guldkanten av Öland. Upplev platsen, året runt.
          </p>
        </div>
        <FooterCol
          title="Upptäck"
          links={[
            ["/#live", "Webbkameror"],
            ["/#planera", "Planera din dag"],
            ["/#evenemang", "Evenemang"],
          ]}
        />
        <FooterCol
          title="Lokalt"
          links={[
            ["/#oppet", "Öppet just nu"],
            ["/#foretag", "Bo & äta"],
          ]}
        />
        <div className="space-y-3">
          <h4 className="eyebrow text-sun">För företag</h4>
          <p className="text-sm text-deep-foreground/70">Grundprofilen är alltid gratis.</p>
          <Link to="/for-foretag" className="inline-block text-sm font-semibold text-sun hover:underline">
            Synas på Köpingsvik.se →
          </Link>
        </div>
      </div>
      <div className="border-t border-deep-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-6 text-xs text-deep-foreground/50 sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} Köpingsvik.se</span>
          <span>Annonser och sponsrat innehåll är alltid tydligt märkt.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="space-y-3">
      <h4 className="eyebrow text-sun">{title}</h4>
      <ul className="space-y-2 text-sm text-deep-foreground/80">
        {links.map(([href, label]) => (
          <li key={href}>
            <a href={href} className="hover:text-sun">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
